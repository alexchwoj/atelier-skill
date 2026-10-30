# Shader: Voronoi

> A single ANIMATED WEBGL SHADER: Voronoi, cell borders from first minus second distance. A feature point is hashed per cell and moved on a circle; the nine neighbouring cells are scanned for the two smallest distances, and the border is drawn from their difference. It is a full-bleed fragment shader with no page around it, about 4KB, no textures, no images and no animation library, and it reacts to the pointer. Drop it behind a hero, a section or a whole page as a living background. Under prefers-reduced-motion it renders one static frame, and it falls back cleanly where WebGL is absent.


---

```json
{
  "summary": "A full-viewport animated WebGL fragment shader called Voronoi: cell borders from first minus second distance. A feature point is hashed per cell and moved on a circle; the nine neighbouring cells are scanned for the two smallest distances, and the border is drawn from their difference. The page contains nothing but the canvas. A shared GLSL preamble provides a hashed value noise, a six-octave fbm and a two-level domain-warp helper; this effect draws on them and adds its own body. Pointer movement raises a smoothed intensity uniform so the effect strengthens under the cursor and relaxes when it leaves.",
  "style": {
    "description": "Generative light on a committed ground. Every colour is computed per pixel from a clock and a coordinate; nothing is sampled from an image.",
    "prompt": "Ground #050F11 with accents [\"#6BF5EA\", \"#0A2B2E\"]. There is no typography and no page chrome: the shader is the entire surface. Keep the palette to two or three values so the effect reads as one material rather than a rainbow."
  },
  "layout_and_structure": {
    "description": "A single full-viewport canvas, fixed to the viewport, with a hidden fallback panel behind it.",
    "prompts": [
      {
        "part": "Canvas",
        "prompt": "One canvas fixed at inset 0 filling the viewport, with html and body at 100 percent height, margin 0 and overflow hidden. Behind it a hidden panel that is only shown when no WebGL context can be created."
      },
      {
        "part": "The shader",
        "prompt": "Cell borders from first minus second distance. A feature point is hashed per cell and moved on a circle; the nine neighbouring cells are scanned for the two smallest distances, and the border is drawn from their difference."
      }
    ]
  },
  "special_ui_components": [
    "Full-bleed fragment shader with no surrounding page",
    "Smoothed pointer-intensity uniform",
    "No-WebGL fallback panel",
    "Reduced-motion single-frame path"
  ],
  "implementation_notes": "The difference between the nearest and second nearest distance is what draws a border. Thresholding the nearest distance alone gives circles, not cells. Build one WebGL program, draw two triangles, and pass resolution, time and an intensity uniform. Cap the drawing buffer below device pixel ratio (this one uses 0.85 to 0.95 of a 1.5x cap) because two-level warping costs about 18 noise samples per pixel. Under prefers-reduced-motion draw exactly one frame and never start the loop. Verification note: readPixels on a live WebGL canvas returns zeros because it reads the back buffer after present, so judge from a rendered screenshot rather than sampled pixels."
}
```
