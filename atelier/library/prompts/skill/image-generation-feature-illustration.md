# Image Generation / Feature Illustration

> Generate a matched set of 3-6 feature-section illustrations that read as one family - one route (isometric scene, flat conceptual, or object vignette), a verbatim shared style block, and reference-anchored batch generation, with feature titles kept in HTML rather than in the pixels. Prompt-craft rules adapted from wuyoscar's GPT-Image2-Skill (MIT).


---

# Feature Illustration

Generate a *family*, never a collection. A feature section holds three to six illustrations that are seen together, in one glance, on one screen - and the eye detects a stylistic outlier faster than it reads a single image's quality. The unit you deliver is the set; an individually beautiful image that breaks the family is a defect.

The feature titles and body copy are real HTML next to each image. Any text baked into the pixels is the same defect it is everywhere else: it cannot be edited, translated, or read by a screen reader, and it dies on the first copy change.

## When to use

- A landing page has a feature grid, benefits row, or "how it works" section that needs an illustration per item.
- Alternating feature rows (image left, copy right, then flipped) need visuals that hold together down the page.
- A generated page shipped with placeholder boxes or emoji where feature art should be.

Do not use for: the hero (use `Image Generation / Hero Visual`), a mascot or app icon (use `Image Generation / IP as Logo`), a 24px UI icon system (that is vector work in the design system, not image generation), or a real product screenshot, diagram, or chart.

## Ask before generating, in this order

Ask only for what the project's existing drafts, brand guide, and copy do not already answer. One round of questions, never two.

1. The feature list - each feature's name and one line of what it does. You need this to design the metaphors; it never goes into an image prompt.
2. Where the illustrations sit - cards in a grid, or alternating rows. This decides the aspect ratio: `1:1` for cards, `4:3` or `3:2` for rows.
3. Brand colors, if the project does not define them.
4. Light or dark surface, if the page supports both - generate for the default theme first.

## Pick one of three routes

Commit to a single route for the entire set. Mixing routes across a set is the most common way a feature section falls apart.

**Isometric scene** - a small three-quarter-view diorama per feature: a compact platform holding a few concrete objects that act out the concept. The most information-dense route; use for technical products where each feature is a process or system. Highest risk of detail-density drift across the set.

**Flat conceptual** - a 2D geometric metaphor built from brand-colored shapes: overlapping planes, simple forms, bold negative space. The safest route: easiest to keep consistent, cheapest to retry, and it survives both themes. Use when the brand is graphic and confident or the features are abstract.

**Object vignette** - one softly rendered object per feature on a simple ground: a padlock, an envelope, a stopwatch, treated like small product shots in a shared studio. Use for consumer products that want warmth and dimension. Exactly one object per image, no scene.

## One metaphor per feature

Map each feature to exactly one concrete subject before writing any prompt, and propose the mapping to the user in one line each: `<feature> - <subject> - <why it fits>`.

- The subject must be nameable in a few concrete nouns. If you need a sentence to explain the metaphor, it will not survive rendering at card size.
- Banned metaphors: lightbulb, rocket, handshake, glowing brain, gears meshing, trophy, and a generic dashboard floating in space. These read as clip art regardless of execution.
- Do not reuse a subject across two features, and do not let two subjects be near-synonyms (a shield and a padlock in one set reads as one idea twice).
- The subject clause names things, not qualities: `a stack of three translucent trays with one document sliding out` beats `an elegant organized workflow`. Concrete nouns are the detail budget; adjectives are not.

## The shared style block

This is where the set is won. Write one style block and reuse it *verbatim* in every prompt of the set; only the subject clause changes. Paraphrasing the style "equivalently" between prompts is how palette and perspective drift in.

The style block owns every decision the images share:

- Canvas and layout first, subject later - state the aspect ratio and composition before any subject detail, or the model spends its detail budget on the object and improvises the layout.
- The route, named plainly.
- Palette: two brand colors plus one neutral, stated as the *only* colors. A fourth color appearing in image three is the classic drift.
- Perspective: for isometric, pin the angle in words and keep it identical; for vignettes, pin one camera height and lens feel.
- Lighting and material: one register - soft diffuse studio, matte surfaces, no hard speculars - described once, identically.
- Ground and background: a single solid background color (or transparency) and one ground treatment (the same soft contact shadow, or none), so the surrounding card can theme them.

Generate the entire set in one session, back to back. When the user accepts the first image, pass it as a reference image for every remaining generation with the instruction that the style, palette, lighting, and rendering must match it exactly and only the subject changes. This is the single most effective consistency tool available and it costs nothing.

## Model and cost

| Model | Credits | Use for |
|---|---|---|
| Nano Banana 2 | 10 | The default for sets - up to 10 reference images, so the accepted first image can anchor all the rest. |
| Seedream 5 Lite | 6 | Richly lit isometric scenes; the free-tier option for cheap first passes. |
| Nano Banana Pro | 20 | A set whose route demands fine detail at 2K. Rarely needed at card size. |
| GPT Image 2 | 10 | Avoid for sets - no reference images, so consistency rests on the prompt alone. |

One generation call per image. Never ask the model for a grid, contact sheet, or multi-panel image containing the whole set - panel-to-panel coherence inside one image is worse than reference-anchored separate generations, and you cannot crop it cleanly.

A set is a batch, so propose it as one: state the route, the metaphor mapping, and the total cost - a set of four on Nano Banana 2 is 40 credits, plus one or two retries you should expect - and generate only after the user agrees. If the user wants to see the style before committing, generate the single strongest metaphor first, get approval, then run the rest against it as reference.

## Prompt skeleton

```text
[SHARED STYLE BLOCK - identical, word for word, in every prompt of the set]
Create one <1:1 | 4:3> feature illustration in a set that must match exactly.
Route: <isometric scene on a compact floating platform | flat conceptual composition of geometric planes | single object study on a simple ground>.
Palette: only <brand color 1>, <brand color 2>, and <neutral>. No other colors.
Perspective: <identical isometric three-quarter view, 30-degree | flat frontal, no perspective | eye-level close shot, soft 50mm feel> - the same in every image of this set.
Light and material: soft diffuse studio light, matte surfaces, gentle shadows, no harsh speculars, no gloss.
Background: one solid <color> field edge to edge, with <one soft contact shadow under the subject | no shadow>.

[SUBJECT - the only line that changes]
Subject: <3–6 concrete nouns acting out this feature's concept, in one sentence>.

Constraints: Add no text, letters, numbers, logos, or UI elements. No frames, borders, cards, or device bezels. One subject only - no collage, grid, or multi-panel composition. Match the established style exactly; change nothing but the subject.
```

From the second image on, attach the accepted first image as a reference and add: `Match the reference image's style, palette, lighting, and rendering exactly; only the subject differs.`

## Reject a candidate when

Per image:

- Any text, letterform, or digit appears.
- The subject is a banned cliché, or has grown props and scenery beyond its metaphor.
- A frame, card, or bezel is baked in, or the background is not the single stated color.
- The route slipped - a "flat" image grew soft 3D shading, an isometric scene flattened out.

Per set - judge these with all images side by side, because none of them is visible in isolation:

- Any color appears in one image and not the others.
- The isometric angle, camera height, or lighting direction differs between images.
- One image is visibly more detailed, more rendered, or more saturated than its siblings. This is the hardest call: the outlier is often the *best* image, and it is still the one to regenerate. The set outranks the image.
- Ground treatment is inconsistent - a shadow under one subject and not another.

Always place the full set into the real feature section, at real rendered size, with the real titles beside them, and judge it there. Three images that match at full size can still diverge at 240px cards, and that is the size at which users see them.

---

Prompt-craft rules adapted from [GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) by @wuyoscar, MIT licensed.

Rewritten for Northlight: rebuilt around the cross-set consistency problem - a verbatim shared style block, reference-anchored batch generation through the built-in image models, per-set rejection criteria, and metaphor discipline with the feature copy kept in HTML rather than in the pixels.
