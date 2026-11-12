# Lottie, dotLottie and Rive

Motion delivered as a file instead of as page code. Read this when the user asks for a Lottie, a `.lottie`, a Rive file, an animated icon set, or motion that must ship unchanged to iOS and Android.

## 1. Choose the format

| Need | Use |
| --- | --- |
| Motion on one website, by the agent | CSS / SVG / WAAPI in the page (`motion/runtimes.md`). No player to load. |
| A self-contained animated file for `<img>`, docs or email-safe-ish use | standalone `.svg` with its own `<style>` and a reduced-motion query inside (`motion/brand.md` § 6) |
| The same animation on web, iOS and Android, or one a designer will keep editing in After Effects, Lottie Creator or Glaxnimate | **Lottie**, delivered as `.lottie` (dotLottie) |
| One file with light and dark versions, or idle / hover / success states | **dotLottie 2** with themes and a state machine |
| An interactive, stateful illustration or mascot that reacts to input and data | **Rive**. The agent cannot author the `.riv` (§ 6) |

Below about three animations on a site, inline SVG and CSS cost nothing at runtime, while every Lottie player is a real download. Pick Lottie for portability and designer ownership, not by default.

## 2. What an agent can make

Geometric motion: marks built from circles, rectangles, polygons and simple paths; loaders; success and error states; icon morphs; stroke-drawn reveals. Character animation and illustration with many hand-drawn paths belong to a designer's tool; the agent can then embed and wire the result.

## 3. The format in one screen

```
{ "v": "5.7.0", "fr": 60, "ip": 0, "op": 90, "w": 200, "h": 200, "nm": "name",
  "layers": [ … ], "assets": [ … ], "markers": [ { "cm": "idle", "tm": 0, "dr": 30 } ] }
```

- `fr` frames per second; `ip`/`op` first and last frame; all times are frames. Duration = `(op − ip) / fr`. Use 60 fps for UI, 30 for small ambient loops.
- **Layers draw top to bottom: the first layer in the array is on top.** `ty` 4 shape, 3 null (an invisible parent for rigging), 0 precomp, 1 solid, 2 image, 5 text. Each layer has `ind` (unique), `ip`, `op`, `st` and a transform `ks`; `parent` points at another layer's `ind`.
- **Transform `ks`:** `a` anchor, `p` position, `s` scale in percent (`[100, 100]`), `r` rotation in degrees, `o` opacity 0 to 100.
- **Shapes** live in groups: `{ "ty": "gr", "it": [ geometry…, modifiers…, styles…, transform ] }`, in that order, ending with a `tr`. Geometry: `el` ellipse (`p`, `s`), `rc` rectangle (`p`, `s`, `r`), `sr` star or polygon, `sh` path. Styles: `fl` fill, `st` stroke (`w`, `lc`, `lj`). Modifier `tm` (trim path, `s`/`e` in percent) is how a stroke draws itself.
- **Colours are 0 to 1 floats:** `[0.11, 0.31, 0.85, 1]`, never 0 to 255.
- **A static value** is `{ "a": 0, "k": value }`; **an animated one** is `{ "a": 1, "k": [ keyframes ] }`.
- **A keyframe** is `{ "t": frame, "s": [values], "o": { "x": [..], "y": [..] }, "i": { "x": [..], "y": [..] } }`. `o` is this keyframe's outgoing handle, `i` the incoming handle of the next one: together they are a CSS curve, `cubic-bezier(o.x, o.y, i.x, i.y)`. The house `--ease-out` is `"o": {"x":[0.23],"y":[1]}, "i": {"x":[0.32],"y":[1]}`. `"h": 1` holds (a step). The last keyframe needs only `t` and `s`.
- **A path** is `{ "c": true, "v": [[x,y]…], "i": [[dx,dy]…], "o": [[dx,dy]…] }`: vertices, then in and out tangents **relative to their vertex**. Morphing a path needs the same vertex count in every keyframe.
- **Slots:** `"sid": "accent"` on a property lets a theme or the player replace it (`setColorSlot`), which is how one file serves several brands or a dark mode.
- **No expressions** (`"x": "…"` strings): many players ignore them.

## 4. Build one

1. **Beat sheet first** (`motion/choreography.md` § 1) in seconds; convert to frames (`t × fr`).
2. **Geometry from SVG.** Normalise the mark's viewBox to the canvas; convert each path to absolute cubic béziers; each segment's control points become relative tangents (`o` of vertex n = first control point − vertex n; `i` of vertex n+1 = second control point − vertex n+1).
3. **Easing from the tokens** as handles (above). A spring becomes keyframes sampled from `node scripts/spring.mjs <bounce> <duration> --frames 60`, every 2 to 3 frames, with linear handles between them.
4. **Write it as a small script** that builds the JSON from data (shapes, beats, tokens) rather than typing the JSON by hand; the numbers stay consistent and the file can be regenerated when the timing changes.
5. **Check and look:** `node scripts/lottie.mjs check mark.json` (structure plus what the schema cannot catch: frame order, value counts, vertex counts, parents, colours), then `node scripts/lottie.mjs sheet mark.json` renders a contact sheet of frames in headless Chrome. Open it.
6. **Package** as `.lottie` (`node scripts/lottie.mjs pack mark.json --out mark.lottie`), which is a zip with a manifest; Lottie JSON compresses 70 to 90%.

A minimal valid file (a dot that drops, lands and settles; 1.5s at 60 fps):

```json
{ "v": "5.7.0", "fr": 60, "ip": 0, "op": 90, "w": 200, "h": 200, "nm": "dot-drop",
  "layers": [{ "ty": 4, "nm": "dot", "ind": 1, "ip": 0, "op": 90, "st": 0,
    "ks": {
      "a": { "a": 0, "k": [0, 0] },
      "p": { "a": 1, "k": [
        { "t": 0,  "s": [100, 40],  "o": { "x": [0.55], "y": [0] }, "i": { "x": [0.9], "y": [1] } },
        { "t": 30, "s": [100, 150], "o": { "x": [0.1],  "y": [0] }, "i": { "x": [0.3], "y": [1] } },
        { "t": 60, "s": [100, 100], "o": { "x": [0.3],  "y": [0] }, "i": { "x": [0.7], "y": [1] } },
        { "t": 90, "s": [100, 100] } ] },
      "s": { "a": 1, "k": [
        { "t": 0,  "s": [100, 100], "o": { "x": [0.5], "y": [0] }, "i": { "x": [0.5], "y": [1] } },
        { "t": 30, "s": [125, 75],  "o": { "x": [0.2], "y": [0] }, "i": { "x": [0.4], "y": [1] } },
        { "t": 42, "s": [92, 108],  "o": { "x": [0.4], "y": [0] }, "i": { "x": [0.4], "y": [1] } },
        { "t": 60, "s": [100, 100] } ] },
      "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 } },
    "shapes": [{ "ty": "gr", "nm": "circle", "it": [
      { "ty": "el", "p": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [48, 48] } },
      { "ty": "fl", "c": { "a": 0, "k": [0.11, 0.31, 0.85] }, "o": { "a": 0, "k": 100 }, "r": 1 },
      { "ty": "tr", "a": { "a": 0, "k": [0, 0] }, "p": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 } } ] }] }] }
```

A stroke that draws: inside the group, before the `st`, add `{ "ty": "tm", "s": { "a": 0, "k": 0 }, "e": { "a": 1, "k": [ { "t": 0, "s": [0], "o": …, "i": … }, { "t": 40, "s": [100] } ] }, "o": { "a": 0, "k": 0 }, "m": 1 }`.

## 5. Play it

```html
<canvas id="mark" width="240" height="240" role="img" aria-label="Northline logo"></canvas>
<script type="module">
  import { DotLottie } from 'https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.82.0/+esm';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const player = new DotLottie({
    canvas: document.getElementById('mark'), src: '/brand/mark.lottie',
    autoplay: !reduce, loop: false,
    renderConfig: { autoResize: true, freezeOnOffscreen: true },
  });
  player.addEventListener('load', () => { if (reduce) player.setFrame(player.totalFrames - 1); });
</script>
```

- **dotlottie-web** (canvas, WASM) plays `.lottie` and `.json`, themes and state machines; `DotLottieWorker` renders off the main thread. It fetches its WASM from a CDN by default; under a strict CSP self-host it (`DotLottie.setWasmUrl`).
- **lottie-web** (SVG renderer, JSON only): `lottie.loadAnimation({ container, renderer: 'svg', loop: false, autoplay: false, path })`; the light build has no expressions and is smaller. `goToAndStop(frame, true)` shows a given frame.
- React: `@lottiefiles/dotlottie-react` (`<DotLottieReact src autoplay={!reduce} />`).
- **Accessibility:** a meaningful animation gets `role="img"` and an `aria-label`; a decorative one `aria-hidden="true"`. Under reduced motion, never autoplay: show the meaningful frame (usually the last). Loops past 5 seconds get a pause control. Nothing flashes more than three times a second.
- **Performance:** small canvases, few players at once, no mattes or blur effects inside, `freezeOnOffscreen`, 30 fps for ambient loops.
- **dotLottie themes and states:** a theme is a list of rules aimed at slot ids (`{ "rules": [{ "id": "accent", "type": "Color", "value": [0.9, 0.2, 0.1] }] }`); a state machine is a JSON graph of states (each playing a marker segment) with transitions guarded by inputs (`"conditionType": "Equal"`) and pointer interactions. Both live in the `.lottie` zip (`t/`, `s/`), referenced from `manifest.json`.

## 6. Rive

Choose Rive for interactive, stateful vector motion: a mascot that follows the cursor, an illustration that reacts to a form, a control whose states blend, UI driven by live data.

**The agent cannot author a `.riv`.** It is a binary exported from the Rive editor, with no text format or authoring SDK. Ask the user for the file and for its state machine, input and view-model names; then write the integration:

```js
import { Rive, Layout, Fit, Alignment } from '@rive-app/webgl2';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const r = new Rive({
  src: '/brand/mascot.riv', canvas: document.getElementById('mascot'),
  autoplay: !reduce, stateMachines: 'Main', autoBind: true,
  layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  onLoad: () => r.resizeDrawingSurfaceToCanvas(),
});
// inputs: r.stateMachineInputs('Main').find((i) => i.name === 'hover').value = true;
// data:   r.viewModelInstance.string('title').value = 'Hello';
// teardown: r.cleanup();
```

Check the installed version's types for the exact option names. Browsers cap live WebGL contexts (about 16), so many Rive canvases on a page share one renderer or use the `canvas` package.
