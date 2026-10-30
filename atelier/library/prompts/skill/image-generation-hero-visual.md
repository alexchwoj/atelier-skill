# Image Generation / Hero Visual

> Generate a landing-page hero visual that HTML text sits on top of - abstract field, object study, or environment, with no text baked into the pixels. Enforces a text safe zone and a contrast budget for overlay legibility. Informed by ConardLi's gpt-image-2 skill (MIT).


---

# Hero Visual

Generate the hero *image*, never the hero *section*. The headline, subhead, and CTA are real HTML that sits on top of this image. Any text baked into the pixels is a defect: it cannot be edited, translated, selected, or read by a screen reader, and it will not survive a copy change.

## When to use

- The user asks for a hero image, key visual, above-the-fold background, or section imagery for a landing page.
- A generated page has a hero block that is currently a flat color or a placeholder and needs a real visual.
- The user asks for a background for a CTA band, feature section, pricing header, or footer.

Do not use for: a mascot or app icon (use `Image Generation / IP as Logo`), a UI screenshot or device mockup, an infographic, or a diagram.

## Ask before generating, in this order

Ask only for what you cannot infer from the project's existing design drafts, brand guide, or copy. Never run more than one round of questions.

1. What the section says — the actual headline, so the visual can support it rather than fight it. Use it to size and place the quiet zone, and for nothing else. Never put the headline, subhead, CTA label, or brand name into the image prompt — not as a quotation, not as an example, not as an explanation of what the zone is reserved for. Naming the copy in the prompt is the single most reliable way to get it rendered into the pixels, and it defeats every negative constraint you write afterwards.
2. Where the text sits — left column, centered, or bottom overlay. This decides the safe zone.
3. Brand colors, if the project does not already define them.
4. Aspect ratio, if the section is not a standard full-bleed hero.

## Pick one of three routes

Commit to a single route per candidate. Mixing routes is what produces generic stock-art slop.

**Abstract field** — gradient meshes, soft light, glass, grain, flowing geometry. The safest default: it never competes with the copy, reads well at any crop, and survives dark mode. Use when the product is abstract (infra, AI, fintech, dev tools) or when the copy must dominate.

**Object study** — one hero object rendered cleanly on a simple ground: the product, a symbolic artifact, or a stylized 3D form. Use when there is one concrete thing to show. Exactly one object, no scene, no props.

**Environment** — a real or stylized space that the product lives in: a workspace, a storefront, a landscape. Use for lifestyle, travel, commerce, and hospitality. The highest-risk route: it dates fastest and most easily reads as stock photography.

## Composition and the safe zone

- Default to `21:9` for a full-bleed hero band, `16:9` for a standard hero, `4:3` or `1:1` for a side-by-side hero where the visual occupies one column.
- Reserve the text region as deliberately empty, low-detail, low-contrast space. For a left-aligned hero, keep the left `40–45%` quiet and push the visual weight right. For a centered hero, keep the middle third quiet and let interest live at the edges.
- State the safe zone in the prompt as pure geometry and tone: "keep the left 45% quiet, flat, and low-detail". Do not tell the image model what will go there, and do not use the word "text" outside the constraints line. "A reserved text zone for the headline …" is how a headline ends up rendered in the image.
- Keep the focal element off-center and away from the exact middle unless the layout is centered.
- Do not compose to the edges of the frame. The image will be cropped differently at mobile, tablet, and desktop; anything meaningful within `8%` of any edge will be lost.
- Never build a frame, border, rounded card, browser chrome, or device bezel into the image. The layout provides those.

## Contrast budget

The overlay text has to pass contrast against whatever pixel it lands on. Decide the text color first, then constrain the image to serve it.

- For light text: hold the safe zone in the darker half of the range and forbid bright highlights, blown-out areas, and white glow inside it.
- For dark text: hold the safe zone light and even, and forbid dark objects, deep shadows, and heavy vignettes inside it.
- Keep the safe zone tonally *flat*, not merely dark or light. A busy region at the right average brightness still destroys legibility.
- If the design calls for a scrim, say so as a layout decision and keep it in CSS. Do not bake a gradient overlay into the image.

## Color

- Pull from the project's existing palette. A hero visual that introduces a fourth brand color is a defect, not a variation.
- Use the brand color as the dominant field or the accent, not both.
- Keep the whole image inside one temperature family unless the brand is explicitly high-contrast.
- Generate for the project's default theme first. If the page supports dark mode, expect to generate a second variant rather than hoping one image works in both.

## Prompt skeleton

```text
Create one <aspect ratio> hero visual for a <product category> landing page. This is a background image only; all text is added separately in HTML.
Route: <abstract field | object study | environment>.
Subject: <one sentence — the single thing in frame, or the character of the abstract field>.
Composition: keep the <left 45% | middle third | lower third> visually quiet, flat, and low-detail, with no focal element in it. Place visual weight in the <opposite region>. Keep all meaningful content away from the outer 8% of the frame.
Tone: hold that quiet region consistently <dark and even | light and even> across its full width, with no bright spots or tonal jumps inside it.
Color: build from <brand color> as the <dominant field | single accent>, with <supporting neutral>. Stay in one temperature family.
Finish: <material and light description — e.g. soft diffuse light, fine grain, matte surfaces>.
Constraints: Add no text, letters, numbers, watermarks, or logos. Add no frames, borders, rounded corners, cards, browser chrome, or device bezels. Add no user-interface elements, buttons, or cursors. Keep the quiet region free of high-contrast detail, bright highlights, and hard edges. Include no people's faces unless explicitly requested. Do not compose as a collage, grid, or multi-panel image.
```

## Generate and evaluate

Propose two or three routes in one line each, state the credit cost, and generate only after the user picks. Generate one image per call through Northlight's built-in image generation.

Before sending, re-read the assembled prompt once and strip it of the product's own words: the headline, subhead, CTA label, and brand name must not appear anywhere, in any form. If the word "text" appears outside the constraints line, rewrite that sentence in terms of geometry and tone. This check costs nothing and prevents the most common failure below.

Reject a candidate when:

- Any text, letterform, digit, or logo appears in the image. This is the most common failure and it almost always traces back to the copy being named in the prompt; fix the prompt, not the image.
- The quiet region contains high-contrast detail, a bright highlight, or a hard edge that will cut through overlay text.
- The focal element sits dead center under a left-aligned or centered headline.
- Meaningful content touches the outer `8%` and will be lost at a narrower crop.
- A frame, border, card, or device bezel is baked in.
- It reads as stock photography: generic smiling people, handshake, lightbulb, rocket, glowing brain, floating holographic UI.
- It introduces a color outside the project's palette.
- The composition is symmetric and centered when the layout is not.

Always place the winning candidate into the actual hero block and view the rendered page before calling it done. A hero visual can only be judged with the real headline sitting on it.

---

Structure informed by [gpt-image-2](https://github.com/ConardLi/garden-skills) from ConardLi's garden-skills, MIT licensed.

Rewritten for Northlight: HTML-first hero sections where all copy stays in the DOM, a quiet-region rule that keeps the product's own words out of the image prompt, a contrast budget for overlay legibility, three explicit visual routes, and generation through the built-in image generation.
