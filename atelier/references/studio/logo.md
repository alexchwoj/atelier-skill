# Logo

How to design a logo for a product that has none: concept, construction, files. If the user has a logo, use theirs and never redraw it.

## 1. Pick the kind

| Kind | When | Example of the idea |
| --- | --- | --- |
| **Wordmark** | Most new products. The name is the brand; short to medium names (up to ~10 letters). | the name set in a chosen face with one considered detail |
| **Lettermark** | Long names, or names people shorten | two or three initials as one shape |
| **Mark + wordmark** | Products that need an app icon, favicon or avatar | a simple symbol beside the name |
| **Emblem** | Clubs, venues, craft, food and drink, heritage | the name inside a badge, seal or ticket shape |

Default to a **wordmark plus a monogram** (the first letter, or a simple mark) for small sizes.

## 2. Find the idea

1. Write ten one-line concepts in words before drawing anything, from the concept's world (`studio/concept.md`): the route tape, the grade circle, the chalk handprint, the punch-card hole. Also from the name: a letter that can become an object, a counter (the hole in a letter) that can hold a shape, two letters that can share a stroke.
2. Throw out the clichés: lightbulbs for ideas, globes for global, a leaf for green, a shield for security, a speech bubble for chat, a generic swoosh, gradient blobs, initials in a circle by default.
3. Keep the two that are simplest and most specific. A good mark survives being described in one sentence and drawn from memory.

## 3. The wordmark

1. Choose the face from the concept's type voice (`studio/type.md`; `node scripts/fonts.mjs` helps). Often the display face of the site, sometimes a face used only for the wordmark (the outlier's one role).
2. Set the name in lowercase, Title Case and CAPS; choose by shape, not habit.
3. Export it as outlines so it renders the same everywhere:

   ```bash
   node scripts/wordmark.mjs --text "Kiln & Co" --font "Gloock" --tracking -10 --out brand/wordmark.svg
   node scripts/wordmark.mjs --text "NORTE" --font "Anton" --tracking 40 --out brand/wordmark.svg
   node scripts/wordmark.mjs --text "orbit" --font "Satoshi" --file ./Satoshi-Bold.otf --out brand/wordmark.svg   # a local face
   ```

   Needs `opentype.js` (`npm i --no-save opentype.js`) and network for Google Fonts. Without them, set the wordmark as live text in the display face and say the outlined export is pending.
4. Add **one** considered detail, by editing the SVG path or adding a shape: a ligature between two letters, a cut or notch from the world (a chalk line through the crossbar), a custom dot on an i, a letter replaced by the mark. One. Two details read as a costume.
5. Tracking: display faces at logo size usually want slightly tighter tracking (-10 to -30) in lowercase and looser (+40 to +100) in caps. Check pairs by eye; fix any collision or gap.

## 4. The mark

Draw it by hand in SVG on a grid. Construction rules:

- **ViewBox 0 0 64 64** (or 24 for icon-like marks), shapes on whole or half units.
- **Geometric primitives first:** circles, rectangles, rounded rectangles, arcs, simple paths. Fewer nodes is better. No raster, no filters, no gradients in the master mark.
- **One stroke weight** or one solid fill language; never mix outline and solid parts without a reason.
- **Optical corrections:** round shapes overshoot flat ones by about 2 to 3% of height to look the same size; horizontal strokes slightly thinner than vertical ones; points extend a little past the line they should reach.
- **Counters and gaps** at least 1/10 of the mark's width so they survive at 16px.
- Use `fill="currentColor"` so it takes the text colour; a colour version comes later.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Kiln & Co">
  <title>Kiln &amp; Co</title>
  <path fill="currentColor" d="M8 56V20a24 24 0 0 1 48 0v36H44V22a12 12 0 0 0-24 0v34Z"/>
  <circle cx="32" cy="44" r="6" fill="currentColor"/>
</svg>
```

## 5. Test before shipping

Render a test sheet (`scripts/shot.mjs` on a small HTML page) and look at:

- The mark at **16, 32, 64 and 180px**: still recognisable at 16? If not, simplify; small sizes may need their own simplified drawing.
- **One colour** (ink on paper) and **reversed** (paper on ink), on the brand colour, and over a photograph.
- The lockup (mark beside the wordmark) with the mark's height near the wordmark's cap height or x-height, and clear space of at least the mark's counter on every side.
- The squint test and the "describe it in one sentence" test.

## 6. Files

```
brand/
  logo.svg          lockup: mark + wordmark, currentColor
  wordmark.svg      outlined name
  mark.svg          the symbol or monogram, 64x64 viewBox
  favicon.svg       the mark on a 32x32 viewBox, simplified if needed; can include a colour fill
  apple-touch-icon.png  (optional) 180x180 if a rasteriser is available, or note it as pending
  og.html           (optional) a 1200x630 page for the social image, screenshot it with shot.mjs
```

In the page: the nav wordmark is an inline `<svg>` or `<img src="brand/logo.svg">` inside a link to home with `aria-label`; `<link rel="icon" href="brand/favicon.svg" type="image/svg+xml">`; a `<meta name="theme-color">` from the palette.

## 7. Colour

The master logo is one colour. A brand colour version uses the palette's accent or ink, never a gradient by default. Check the mark's contrast against every background it sits on (3:1 at least).
