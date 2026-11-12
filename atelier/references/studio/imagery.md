# Imagery

What a page shows, and where it comes from. A page looks made when it shows the real thing (the place, the food, the object, the hands at work, the product running) and generated when it shows a gradient box, a drawing of a loaf, or a heading with nothing under it.

## 1. What fills a page, in order

1. **The user's own images and recordings.** They win every slot. Ask for them once.
2. **Screenshots of the real product,** whenever it can be reached (a URL, a dev server, a project that runs with one command). Put it in a state that tells the story, capture it (`scripts/shot.mjs` on the route, or the harness's browser), check nothing private is visible (names, emails, tokens, file paths).
3. **The product built** at full fidelity inside the page, only when there is nothing to capture yet. Sample data reads as sample (`example.com`, round amounts, "Example Kitchen").
4. **Real photographs and footage** as stand-ins: `node scripts/media.mjs "<what the frame shows>" --sheet <file.png>`. It searches the 755 curated library photos, Openverse and Wikimedia Commons with no setup, and Pexels, Pixabay and Unsplash (photos and video) when their free keys are set; every result carries its licence and credit.
5. **Generated images,** only when the harness has an image tool and the user is fine with it. Write the prompt from the concept's world (subject, light, lens, palette), never "a beautiful hero image".
6. **Type at full scale,** when the page is about words.

## 2. Which subjects want what

- **A place, a material, food or drink, an object, a craft, the outdoors, an event, people at work:** photographs lead. The hero photo is the largest thing on the first screen. Two to four more carry the page, one large, each on its subject, with sections of pure material between them (a menu as rows, hours as a table, a statement).
- **Software:** the product leads; the hero visual is its interface. One or two photographs may set the scene if each passes the deletion test: take it away and the page loses a fact. A city at night, a laptop on a desk or an office building fails it.
- **Words** (docs, a manifesto, a letter, a type specimen): type carries it; one full-bleed photograph at most.

A photograph never stands in for a fact: numbers, names and claims stay in type, and a stock face never stands in for a customer, a teammate or a testimonial.

## 3. Finding real media

```bash
node scripts/media.mjs "hands kneading dough on a floured bench" --orient landscape --sheet .atelier/media/hero.png
node scripts/media.mjs "slow drift over a misty harbour at dawn" --type video --sheet .atelier/media/hero-video.png
node scripts/media.mjs "harbour at dawn" --source library --tone light --temp cool
```

- **Describe the frame, not the category:** the subject's physical object, the shot (aerial, macro, wide, close on hands), the light and the motion ("climbing chalk bag on a mat, hard side light", not "fitness"). Re-ask in other words (the place, the material, the action) before settling for a near miss.
- **Choose on the contact sheet.** `--sheet` lays every candidate out numbered; open it and pick by looking. Titles lie, and one decisive picture beats five mediocre ones.
- **Sources and keys:** `library` (offline, curated), `openverse` and `commons` (no key) are always on. `PEXELS_API_KEY`, `PIXABAY_API_KEY` and `UNSPLASH_ACCESS_KEY` (free from each site's developer page) add the stock libraries with the best photographs and almost all of the free video. Without them, video comes from Commons only (often 480p): prefer a still with a slow CSS zoom over a soft video.
- **Recognisable stand-ins:** a famous building, a known person or another brand's product must never read as the client's own work. Prefer anonymous subjects; when a recognisable one is the best fit, caption it visibly as a stand-in with its credit.
- **Openverse** images are often 1024px wide: fine for cards and halves, too small for a full-bleed hero.
- **Credit every asset used:** one "Photographs:" (and "Footage:") line in the footer with each printed credit. CC BY and CC BY-SA require it; Pexels, Pixabay and Unsplash ask for it.
- **Size and crop in CSS:** keep the `srcset`, set `sizes` to the layout, crop with `aspect-ratio` and `object-fit: cover`, steer with `object-position`.
- **Hero photo:** remove `loading="lazy"`, add `fetchpriority="high"`; use the 1920 width for full-bleed.
- **Video:** use the printed file and poster; hotlinked stock video is fine for a draft, but for production download it, compress to under 2 MB for the hero, and serve it yourself.
- Never write a media URL from memory, and never hotlink paid stock.

## 4. Slots

A picture the user will replace sits in a slot: `data-slot="hero"`, a `data-alt` describing what belongs there, and a real size (`aspect-ratio`). A slot always shows something (the user's image, a library photo or the product built); a slot showing nothing but a tinted box is an empty picture. No visible "your image here" labels: the handoff lists the slots.

## 5. Treatment

- Pick one treatment for all photos on a page, from the concept: full colour, a duotone in two palette colours, a warm or cool grade, black and white with one colour element. Apply it in CSS (`filter`, a blend layer) so the user's own photos get it too.
- Text over photos sits on the calmest part of the image with a scrim (a gradient from the ink colour at 50 to 70% to transparent) and passes contrast on the result.
- Round corners only if the page's radius language says so; image radius `min(1vw, var(--radius-card))`.
- Photos take a quarter to a third of the page below the hero; never two photo-led sections in a row.

## 6. Icons, illustration, 3D, video

- **Icons:** one library (lucide by default; Phosphor or Tabler when the world wants a different stroke), one stroke weight, sized to the text they sit beside. Never emoji, never icons in coloured circles by reflex.
- **Illustration:** only when the concept is illustration (a children's brand, an editorial voice), drawn in one consistent style, ideally by the user or a commissioned artist. Never inline-SVG drawings of objects, people or scenes as filler.
- **Diagrams and charts** of real data or real systems are first-class material: draw them in SVG from the palette, labelled.
- **3D and WebGL:** when the product is an object or the concept is spatial; bounded, lazy-loaded, with a static poster fallback.
- **Video:** `autoplay muted loop playsinline` with a `poster`, under 2 MB for the hero (or streamed), paused off-screen and under reduced motion, with a pause control if it runs past 5 seconds.

## 7. Texture

Texture is a treatment with a budget, not ambience. Only when the concept's world is print or material (risograph, letterpress, film, ticket stock, a CRT):

- **One texture family per page:** grain, halftone, misregistration, scanlines or a deckled edge. Never two.
- **Opacity budget:** at most 0.08 page-wide, 0.15 inside one panel, 0.05 or nothing under running text. Never animated. `pointer-events: none; aria-hidden="true"` on overlays.
- Pure CSS or an inline SVG filter; no image requests. Measure contrast on the textured result.

```css
.grain { position: relative; isolation: isolate; }
.grain::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 1; opacity: 0.07; background-size: 180px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

The colour matrix turns the noise into crisp specks that read at low opacity; on a dark ground change the first three rows' last value to 1 so the specks are light.
