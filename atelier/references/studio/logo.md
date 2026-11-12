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
   node scripts/wordmark.mjs --text "molino" --font "Young Serif" --glyphs --out brand/wordmark-letters.svg   # one path per letter
   node scripts/wordmark.mjs --text "NORTE" --font "Anton" --tracking 40 --out brand/wordmark.svg
   node scripts/wordmark.mjs --text "orbit" --font "Satoshi" --file ./Satoshi-Bold.otf --out brand/wordmark.svg   # a local face
   ```

   Needs `opentype.js` (`npm i --no-save opentype.js`) and network for Google Fonts. Without them, set the wordmark as live text in the display face and say the outlined export is pending.
4. Add **one** considered detail, by editing the SVG path or adding a shape: a ligature between two letters, a cut or notch from the world (a chalk line through the crossbar), a custom dot on an i, a letter replaced by the mark. One, or none: if every detail you try costs legibility (an "l" that now reads as "i"), ship the clean set name. Two details read as a costume. To work on one letter, export with `--glyphs`: each letter becomes its own `<path data-char>` and its box is printed, so you can delete the o and draw the mark in its box, or colour one letter.
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
- **Brand colour** (the primary view for most consumer brands), **one colour** (ink on paper), **reversed** (paper on ink), and over a photograph.
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

**Animated logo** (when asked, or as a Studio run's signature): the move comes from the mark's own construction (drawn, built, cut, transformed, type-led), timed in acts with a hold at the end, and the finished static mark is its last frame. Keep each part of the mark a separate path so it can move. Deliver `logo-animated.svg` (CSS inside, reduced motion respected) and, if the brand ships to apps, `logo.lottie`. Method: `motion/brand.md`; Lottie: `motion/lottie.md`.

## 7. Colour

The master logo works in one colour (that is the test it must pass), but the **brand is shown in colour**. A logo sheet in ink on cream with one timid accent reads as a safe default, not an identity. Choose the brand's colour as boldly as its world allows:

- **Consumer, food, leisure, kids, sport, music, festivals:** two or three confident colours with roles (Ensemble or Flood dosage in `studio/color.md`), the mark itself in colour (a two-colour mark is fine when each colour means something: the sun and the sea, the flame and the coal), and at least one full-bleed colour ground on the sheet.
- **Professional services, finance, health, software:** one owned brand colour that is not navy, grey or the category's cliché, plus ink; the mark in the brand colour on the primary lockup, ink as the alternate.
- **Luxury and craft:** restraint is right here; give the single colour a material (a tile glaze, a dye, an ink) and use it with conviction rather than as a 5% accent.

Show the logo on paper, on ink and on the brand colour ground; the colour ground is often the strongest view and belongs early on the sheet. Never a gradient by default. Check the mark's contrast against every background it sits on (3:1 at least).
