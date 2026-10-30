# Building game UI

## 1. Web games (HTML/CSS over a canvas)

The fastest path to a polished game UI on the web is the DOM layered over the game canvas: real text, CSS, accessibility and focus come for free.

```html
<div class="game">
  <canvas id="world"></canvas>
  <div class="ui" aria-live="polite">
    <section class="hud" aria-label="Status">…</section>
    <dialog class="menu" id="pause">…</dialog>
  </div>
</div>
```

```css
.game { position: relative; width: 100vw; height: 100dvh; overflow: clip; }
.game canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
.ui { position: absolute; inset: 0; pointer-events: none; container-type: size; }
.ui :is(button, a, input, [tabindex], dialog) { pointer-events: auto; }
/* Scale from a 1920x1080 design resolution, keeping the 5% title-safe margin. */
.hud { position: absolute; inset: 5cqh 5cqw; font-size: calc(22px * min(100cqw / 1920px, 100cqh / 1080px) * var(--ui-scale, 1)); }
```

- **Design resolution:** lay out at 1920×1080 and scale with container units or a single `transform: scale()` on the UI root; keep text crisp by scaling font sizes, not bitmaps.
- **Update on change, not per frame.** The game loop writes HUD values only when they change, straight to the element (`el.textContent = v`, `el.style.transform = …`); in React, keep HUD values in a store read by small components, never `setState` at 60fps for the whole tree.
- **Animate transform and opacity only** (`motion/performance.md`); bars use `transform: scaleX()` with `transform-origin: left`, never `width`.
- **Gamepad:** the Gamepad API polled in the game loop; map it to focus navigation (a spatial navigation helper or explicit `data-nav-*` neighbours) and show the right glyphs on `gamepadconnected` and on the last input.
- **Pixel art:** `image-rendering: pixelated` and integer scaling for pixel fonts and sprites.
- **Libraries:** Phaser and PixiJS draw HUD inside the canvas when it must move with the camera (damage numbers, world markers); keep menus and text-heavy screens in the DOM. Three.js: `CSS2DRenderer` for labels that follow 3D objects.
- **Check:** `scripts/shot.mjs` on the UI over a captured game frame (a screenshot as the canvas background), at 1920×1080, 1280×720 and a phone.

## 2. Unity

- **UI Toolkit** (UXML + USS, retained mode, CSS-like) for menus, settings and tools: scales well, supports focus navigation and runtime binding. **uGUI** (Canvas) for world-space UI and when the project already uses it.
- uGUI performance: split canvases by update frequency (static frame, dynamic HUD values, popups) because any change rebuilds its whole canvas; disable Raycast Target on non-interactive graphics; avoid Layout Groups on frequently changing elements; pool list items; TextMeshPro for text with SDF fonts.
- Canvas Scaler: Scale With Screen Size, reference 1920×1080, match 0.5 (or 1 for portrait mobile); anchors for safe areas (`Screen.safeArea`).
- Input System package for device switching (`InputUser.onChange`), rebinding UI (`PerformInteractiveRebinding`) and glyph swapping; EventSystem with explicit Navigation on Selectables.

## 3. Unreal Engine

- **UMG** widgets for everything; **CommonUI** for multi-platform input routing, action bars with automatic glyphs, activatable widget stacks (menu layers with Back handling) and focus restoration.
- Performance: Invalidation Boxes around static parts, Retainer Boxes for expensive widgets updated at a lower rate, avoid bindings that tick every frame (update by events), use the Widget Reflector to inspect.
- DPI Scaling rule in project settings from a 1080p reference; Safe Zone widget for TV and mobile.
- Enhanced Input for rebinding; CommonInput for the current input type and platform glyphs.

## 4. Godot

- **Control** nodes with Containers (VBox, HBox, Grid, Margin) for layout; **Themes** for the UI kit (one Theme resource with type variations for each component state).
- Focus: `focus_neighbor_*` and `focus_next/previous` for explicit navigation; `grab_focus()` on the default item when a screen opens; `ui_accept`/`ui_cancel` actions mapped for every device.
- Stretch mode `canvas_items` with a 1920×1080 base for crisp UI; `DisplayServer.get_display_safe_area()` for mobile.
- Update labels via signals when values change, not in `_process`.

## 5. Any engine

- **One UI kit**, built once: tokens (colours, type sizes, spacing, timings, sounds) and components with all states; screens only assemble it.
- **Data-driven:** item, ability and quest UI read from data tables, so content scales without new layouts.
- **Localisation:** room for 30 to 40% longer text (German, Russian), CJK fonts and line breaking, right-to-left mirroring where shipped; never bake text into images.
- **Performance budget:** the UI should cost well under 1 to 2ms per frame on the target device; profile it like gameplay.
- **Test on the real screen:** a TV at couch distance, a handheld, a phone in the hand; and with every input device.
