# Video Generation / Billboard Placement

> Put the brand mark into the physical world and move a camera through it - Times Square screen, subway poster, rain-slicked storefront. Two-stage plate-then-animate, and the prompt describes the street, never the product. Adapted from Krea's krea-marketing and @zhanghaonan777's Seedance2-skill (MIT).


---

# Billboard Placement

Put the product into the physical world and move a camera through it: the brand mark on a Times Square screen, a subway platform poster, a rain-slicked bus shelter, a storefront window at dusk. The output is a launch asset that makes a product feel like it already exists at scale.

This is the shot generative video is actually good at. A model asked to hold a UI screenshot pixel-perfect will fight you — it wants to redraw, and every label it redraws comes back wrong. A model asked to render wet asphalt, neon spill, traffic, and a crane move is doing what it does natively, and the product only has to read as **present**, not as legible. Spend video credits here, not on camera moves over an interface. Deterministic moves across real UI belong in a code-driven tool, not a diffusion model.

## When to use

- A launch, funding, or milestone post needs a hero asset with scale and swagger.
- A social or ad placement needs to be arresting in the first half second.
- The brand needs to look established: a mark in the world reads as a company, a mark on a white background reads as a project.

Do not use for: an ambient hero background (use `Video Generation / Hero Loop`), anything a viewer must read in detail, or a walkthrough that shows how the product works. This shot makes people feel something about the brand; it does not explain the product.

## What goes on the surface

The single decision that determines whether this works.

- **A wordmark, logo, or one bold key visual.** Big, high-contrast, few elements.
- **Not a UI screenshot.** At billboard scale inside a moving wide shot, interface detail becomes noise, and every small label re-renders into garbage. If the brief insists on showing the product UI, crop to one oversized element — a single card, a single chart — and accept that it will read as a shape.
- **Short copy or none.** One line at most. Every additional word is another chance for the model to invent letterforms.

## Two stages, always

Run this shot **image-to-video**: there is a still in between, and it is where the composition is won.

**Stage 1 — build the plate.** Generate the still with image generation: the environment, with the product mark placed on the surface. Get the placement, scale, perspective, and lighting right here, where iteration is cheap and you can regenerate freely. Do not proceed to video until the still would stand on its own as a poster.

**Stage 2 — animate the camera.** Feed that still to video generation and describe motion only.

Never try to do both in one step. A video prompt that also has to invent the placement will get neither right.

## The plate is the source of truth

When the still already carries the brand mark, the prompt for stage 2 describes the **street**, never the product.

Do not spell the wordmark, name the brand, or describe the logo's colors, shapes, or type in the motion prompt. The model reads those words as an instruction to redraw the mark, and a redrawn mark is a deformed mark. Refer to it only by position: "the illuminated screen on the building face", "the poster behind the glass".

This is the same failure as text baked into a hero image, and it costs more here because a mangled logo is worse than mangled body copy.

## Scene vocabulary

Pick one and commit. Mixed environments read as stock.

| Scene | Reads as | Works with |
|---|---|---|
| Times Square screen wall, night | Arrived, consumer scale | Bold marks, saturated brand color |
| Rain-slicked street, neon reflections | Cinematic, premium | Dark palettes, single accent color |
| Subway platform poster | Urban, everyday, credible | Editorial marks, calm palettes |
| Bus shelter at dusk, city bokeh | Considered, design-forward | Light palettes, generous whitespace |
| Storefront window, warm interior light | Local, tactile, human | Retail and consumer brands |
| Building wrap, low angle, hard sun | Monumental, confident | Simple monolithic marks |

## Camera

Unlike an ambient loop or an interface shot, **the camera should be the point here**. This is where the credits earn their keep.

- **Crane up the building face** to reveal the board — the most reliable dramatic move.
- **Slow push through foreground traffic**, the board resolving as obstructions clear.
- **Handheld walk-by**, the board passing through frame with parallax against the street.
- **Rack focus** from a foreground element to the board.

One move per clip, and let it complete inside five seconds. Keep the board in frame for the whole move: it can enter, but it must not leave.

## Motion budget

The motion prompt is capped at **500 characters** and describes motion only. Order:

1. **Camera** — the move, its direction, its speed.
2. **Environment life** — traffic, pedestrians, rain, reflections, neon flicker. This is what sells the shot as real.
3. **Board behavior** — almost always "stays exactly as it is". Only animate the board content if the plate was built for it.

Concrete beats evaluative: "slow crane up the wet building face, taxis streaking below, neon reflecting in puddles" carries more than "dynamic cinematic city shot".

## Model and resolution

| Model | Character | Credits (480p / 720p / 1080p) |
|---|---|---|
| Hailuo | Dynamic, stylized effects. The default here — this shot wants energy. | 30 / 30 / 50 |
| Seedance Fast | Natural, smooth motion. The cheap trial pass. | 15 / 20 / 45 |
| Seedance Pro | The smoothest finish for restrained, premium, slow moves. | 25 / 50 / 120 |

**Always run a cheap trial pass first: Seedance Fast at 480p, 15 credits.** Only after you have seen that the move lands, the board stays in frame, and the mark holds should you spend on the finish. Jumping straight to Hailuo at 1080p costs 50 credits to discover that a crane was too fast. State both the trial cost and the finish cost when you propose the shot, and get agreement on the ladder rather than on one number.

## Prompt skeleton

```text
Slow cinematic <crane up | push through | handheld walk past | rack focus toward> the <illuminated screen | poster | window> on the <building face | platform wall | shelter>, at a constant unhurried speed. <Traffic streaks | pedestrians pass | rain falls>, with <neon | streetlight> reflecting in <wet asphalt | glass>. The <screen | poster> stays exactly as it is: its artwork does not change, redraw, morph, or animate, and it stays fully in frame for the whole shot. No added text, letters, numbers, logos, watermarks, or subtitles anywhere in the scene. No faces in focus.
```

Count the characters before sending. If it exceeds 500, cut the environment clause first — never the clause that pins the board content.

## Reject a clip when

- The mark on the board deforms, re-renders, shimmers between forms, or turns into pseudo-letterforms. Compare the last frame to the first at full size.
- The board leaves frame, or the move ends with it cropped.
- New signage, text, or logos appear elsewhere in the scene — models love to fill empty billboards.
- The board content animates or changes when the plate was static.
- A face lands in focus and pulls attention off the product.
- The architecture warps: straight building edges bending as the camera moves.
- It reads as a generic city stock shot with a logo pasted on, rather than as a placement.

Watch it at full size. A deforming wordmark is invisible in a thumbnail and obvious on a launch post.

---

Product-reference discipline — the attached reference is the source of truth, and the prompt describes only scene, light, and camera — adapted from [krea-marketing](https://github.com/krea-ai/skills) by Krea, MIT licensed. Camera and motion-prompt structure informed by [Seedance2-skill](https://github.com/zhanghaonan777/Seedance2-skill) by @zhanghaonan777, MIT licensed.

Written for Northlight: built around image-to-video generation as an explicit two-stage plate-then-animate workflow, the 500-character motion prompt, a scene table scoped to out-of-home placement, and the model/credit ladder.

