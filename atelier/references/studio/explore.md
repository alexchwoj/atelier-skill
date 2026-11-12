# Explore: sketch, compare, vary, tweak, push

Designers choose by looking, not by reading descriptions. This file turns the Studio route from "write three directions, build one" into a visual loop: render the options, put them side by side, let the user steer with live controls, and push the chosen one further before handing it back. Every working file lives in `.atelier/` at the project root (or next to the page in an empty folder); none of it ships.

## 1. Sketch the directions

Each direction from `studio/concept.md` § 4 becomes a rendered first screen, not a paragraph.

- **One file per direction:** `.atelier/directions/a.html`, `b.html`, `c.html`. Single-file HTML, the Tailwind CDN or plain CSS, real Google Fonts links.
- **First screen only, at final fidelity:** the nav, the hero, and the top edge of the next section (so the transition is visible). Not a wireframe, not lorem: the real headline written in that direction's voice, the real palette, the real faces at their real sizes, a library photo or the product built as the image, and the signature moment working, or at least its key frame.
- **Built on the library:** each sketch starts from its own base prompts and parts (several per sketch is fine) (`SKILL.md` § The inspiration pass). Three sketches from three different sources give a real choice; three sketches from one source give three colourways.
- **Different on at least three axes:** world, palette and dosage, type voice, composition, scale, light or dark, imagery. If two sketches could swap headlines without anyone noticing, one of them is not a direction yet.
- **Budget:** a sketch is an hour of a designer's time, not a day: about 150 to 300 lines each. Speed comes from the library parts, not from lowering the fidelity.

Then compare them:

```bash
node <skill-dir>/scripts/board.mjs .atelier/directions/a.html .atelier/directions/b.html .atelier/directions/c.html \
  --labels "Topo guide, Route tape, Heat sheet" --out .atelier/directions/index.html
node <skill-dir>/scripts/shot.mjs .atelier/directions/index.html --sizes wide --out .atelier/shots/directions
node <skill-dir>/scripts/board.mjs .atelier/directions/*.html --size phone --out .atelier/directions/phone.html
```

Open the screenshots and look before presenting. Fix a sketch that is broken or weak before the user sees it; a bad sketch makes a good idea lose.

**Present** the board's path and, for each letter: the idea in one line, what it does better than the others, and its honest risk. Recommend one. The user may pick one, merge ("A with C's type"), or ask for another round; a merge is a normal outcome, not a failure. **Unattended,** still sketch: choose by looking at the board, and list the board path and the two others as alternates in the handoff.

## 2. Tweaks: live controls for the open decisions

Once the page is built, wire the few decisions still worth debating to a live panel, so the user can steer by hand instead of describing changes in words.

1. The page must use tokens for those decisions (`--accent-h`, `--font-display`, `--radius`, `--space-unit`, `data-theme`, `data-density`, `data-motion`). If a value is hard-coded, lift it first.
2. Copy `<skill-dir>/assets/tweaks.js` into `.atelier/` (or next to the page) and add, just before `</head>`:
   ```html
   <!-- atelier:tweaks (review only; remove before shipping) -->
   <script type="application/json" id="atelier-tweaks">
   {
     "--accent-h":     { "label": "Accent hue", "type": "range", "min": 0, "max": 360 },
     "--font-display": { "label": "Display face", "type": "select",
                         "options": { "Fraunces": "\"Fraunces\", serif", "Gloock": "\"Gloock\", serif", "Bricolage": "\"Bricolage Grotesque\", sans-serif" } },
     "--display-size": { "label": "Display size", "type": "range", "min": 4, "max": 14, "step": 0.5, "unit": "vw" },
     "--radius":       { "label": "Radius", "type": "range", "min": 0, "max": 28, "unit": "px" },
     "data-theme":     { "label": "Theme", "type": "select", "options": ["light", "dark"] },
     "data-density":   { "label": "Compact", "type": "toggle", "on": "compact", "off": "comfortable" }
   }
   </script>
   <script src=".atelier/tweaks.js" defer></script>
   ```
3. Expose **four to seven** controls, chosen for this page: the decisions where you were torn, and the ones a client would argue about. Every option in a select is a good answer (the runner-up faces from the type search, not random fonts), and every font option is loaded by the page.
4. Ranges are bounded to the good zone: a hue slider for an accent whose lightness and chroma are fixed in OKLCH; a display size from "confident" to "poster", never down to body size.
   When motion is open to debate, two controls cover it: `"--motion-scale": { "label": "Motion pace", "type": "range", "min": 0.7, "max": 1.4, "step": 0.05 }` (the page's durations are `calc(<token> * var(--motion-scale, 1))`, `motion/principles.md` § 3) and `"data-motion": { "label": "Reduced motion", "type": "toggle", "on": "reduce", "off": "full" }` (the page's `:root[data-motion="reduce"]` rules, `motion/accessibility.md` § 5b), so the client sees the calm version too.
5. The panel's **Copy** button gives the chosen values as CSS. When the user sends them, bake them into the tokens and remove the panel and its script.

Never ship the panel: the handoff says where it is and that it is review-only; on the final pass, delete the `atelier:tweaks` block.

## 3. Vary: three takes on one piece

When the user wants options for one part ("show me other heroes", "the pricing feels flat", `vary pricing`), or when you are unsure of a section yourself:

- Make **three** variations, each moving a **different axis**: composition (how the parts are arranged), scale (what is big and what is small), and form (the content as a list, a table, a diagram, a single statement, an interactive piece). Three recolours are one variation.
- Each starts from a different library part (`parts.mjs <type> --mood <m> --limit 10`), rebuilt in the page's tokens.
- Render each as a full page with only that piece swapped (`.atelier/variations/pricing-a.html`…), so it is judged in context, then `board.mjs` and look.
- Present like the directions: the board, one line each, a recommendation. Merge the pick into the page.

## 4. Push: one round further than safe

After the first full render, before the critique, assume the page plays safe somewhere. Answer each with what you see in the screenshots:

1. **The headline:** could a competitor put their name on it? Rewrite it until it could only be this product.
2. **Scale:** is there one moment of extreme contrast (something enormous beside something tiny), or is everything medium?
3. **The signature:** is it built and working at full strength, or reduced to a fade-in? Is it visible on the first screen?
4. **The template check:** which section would look at home on any landing page? Give it the concept's form (`routes/studio.md` § 3b) or a different library part.
5. **The screenshot test:** is there one detail someone would capture and send to a friend? If not, make one: an artefact from the product's world built in HTML or SVG, an interaction that demonstrates the mechanism, a piece of typography used as an image.

Pick the two answers with the most to gain and apply them completely. Then critique (`commands/critique.md`). The push never breaks the Baseline or the concept; it raises the conviction inside them. `push` alone, on any existing page, runs this section.

## 5. Moves that make a page feel authored

Reach for these when the push asks for more. Each is in the library many times; find the best instance with `parts.mjs` before building it.

- **Type as image:** one word or number set so large it becomes the composition; a cropped letterform; a headline that interlocks with the photo.
- **Real artefacts, built:** the ticket, the label, the receipt, the topo line, the setlist, the spec sheet, made in HTML and SVG with the product's own data, instead of a picture of a phone.
- **The product doing its job:** a working miniature of the core interaction in the hero (a search that filters, a slider that books, a terminal that runs), with sample data marked as sample.
- **Crop and bleed:** images off the edge, type running behind or across a photo, a section that breaks the container once.
- **Material:** paper grain, ink spread, glass, metal, screen phosphor, made in CSS and SVG filters, matched to the world, applied to the whole page, not one card.
- **Rhythm breaks:** one dense section among airy ones, one full-bleed colour band, one pinned sequence, one change of reading direction.
- **Captions that carry a fact:** what the photo shows and who made it, the unit beside a real number, the name of the thing on screen. Never decorative metadata (coordinates, index numbers, serials, timestamps, counters): it is the most recognisable generated tell (`anti-slop.md` § Copy and chrome).
- **Motion with meaning:** the signature tells the product's story (the tape drawing up the wall, the ticket printing), everything else is quiet.
