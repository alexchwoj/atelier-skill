# Video Generation / Redesign Reveal

> Turn a redesign into a before-and-after clip using end-frame conditioning - the old design is the first frame, the new design is the last, and the model only directs the transition between them. Enforces plate matching, a four-transition menu with a text-smear rule, and endpoint-exact evaluation. Adapted from rediumvex's ai-video-generator-claude and maciejdzierzek's kling-ai-prompt-generator (both MIT).


---

# Redesign Reveal

Show the old design becoming the new one: v1 morphing into v2, the cluttered page resolving into the clean one, the sketch becoming the shipped product. This is the one clip where the video model cannot drift, because you nail both ends - the BEFORE screenshot is the first frame, the AFTER screenshot is the last frame, and end-frame conditioning forces the model to land exactly on the new design. Everything in between is transition, and transition is the only thing you direct.

Both frames come straight from the project: draft screenshots, canvas exports, or uploaded images. The model contributes the journey, never the destination.

## When to use

- A redesign is shipping and the launch post needs the before/after moment.
- A case study or portfolio piece needs the transformation as a clip instead of a slider.
- The user asks for a "before and after video", "morph between these two designs", or "reveal the new version".

Do not use for: motion across a single design (use `Video Generation / UI Fly-Through`), an ambient background (use `Video Generation / Hero Loop`), or the brand mark placed in the world (use `Video Generation / Billboard Placement`). This clip is about contrast between two states; with one state there is nothing to reveal.

## The two frames must match

First/last-frame conditioning is the whole game, and it is won before any video credits are spent. The model interpolates between the two frames; the more they disagree about geometry, the more it invents to bridge them.

- **Same aspect ratio, same crop, same scale.** A full-page before against a hero-only after forces the model to zoom and hallucinate at once. Recrop the plates until they describe the same viewport.
- **Same layout skeleton where honesty allows.** A redesign that keeps the header where it was will morph cleanly; a redesign that moves everything will produce a busier in-between. That is fine - but know it going in, and pick a faster transition.
- **Same device framing.** Both raw screenshots or both inside the same mockup. Never one of each.
- **Pick the destination ratio first** - `9:16` for social, `16:9` for a launch post - and build BOTH plates at that ratio. Do not generate at one ratio and crop later; the composition match is the point.

If the plates disagree, fix the plates. A mismatch that costs nothing to fix in the still costs a full generation to discover in the clip.

## Pick the transition

One transition per clip. Stacked reveals dilute each other.

| Transition | Reads as | Timing | Risk |
|---|---|---|---|
| **Slow morph** | Evolution, craft, continuity | Continuous change across the full clip | Highest - mid-morph frames show invented UI and smeared text; needs the strictest plate match |
| **Held reveal** | Drama, payoff | Hold the before for 50–60% of the clip, then commit the change in the back half | The turn must be decisive; a hesitant transformation reads as a glitch |
| **Wipe** | Progress, confidence | A clean edge sweeps across in 0.3–0.8s, new design behind it; left-to-right reads as forward motion | Lowest - the two designs never blend, so text never half-transforms |
| **Build-up** | Assembly, launch | Before elements dim and dissolve, after elements settle into place | Elements can wander mid-flight; keep the move short |

The wipe is the safe default for text-heavy pages, because it never shows a half-transformed interface. The slow morph is the most impressive when it works - reserve it for plates that genuinely share a skeleton.

## The frames are the source of truth

The same doctrine as the billboard plate: the motion prompt describes the **transition**, never the designs. Do not name the product, quote the headline, describe the layout, or list what changed. The model reads a described interface as an instruction to draw one, and a drawn interface is a wrong interface. Both endpoints already exist as pixels; the prompt's only job is pace, transformation character, and what stays anchored.

Text behaves predictably: it is real in both endpoint frames because it is the user's own design, and it smears in between. A fast transition makes the smear read as motion; a slow morph makes it read as a defect. The slower the transition, the more the clip depends on the wipe-like property of never holding half-transformed type on screen.

## Model and cost

Only two models accept an end frame:

| Model | Character | Credits (per 5s) |
|---|---|---|
| Seedance Pro | Smooth, controlled interpolation. The default. | 480p 25 / 720p 50 / 1080p 120 |
| MiniMax H3 | Premium finish, native audio, 4–15s clips. | 768p 60 / 2k 100 |

Credits scale linearly with duration from the 5s base. Seedance Fast does **not** take an end frame, so there is no cheap trial with the same mechanics - the honest ladder is **Seedance Pro at 480p (25 credits)** to prove the transition, then 720p/1080p or H3 for the finish. A reveal wants **4–6 seconds**: long enough to register the before, short enough that the transformation stays a moment. State the trial cost and the finish cost when proposing the clip, and get agreement on the ladder before generating.

## Prompt skeleton

The motion prompt is capped at **500 characters**. Count before sending; cut the pacing adjectives first, never the anchoring or exclusion clauses.

```text
Continuous transformation from the first frame to the last frame. <Steady morph across the full clip | Hold the opening design for the first half, then commit the transformation in the back half | A clean lit edge sweeps left to right, revealing the final design behind it | Elements of the opening design dissolve as the final design assembles into place>. Framing, scale, and camera stay locked: no push, no pan, no zoom, no rotation. Constant pace, no flicker. End exactly on the final frame and hold it. No added text, letters, logos, watermarks, or subtitles.
```

## Judge it at speed, check it at the ends

Two different standards for two different parts of the clip:

- **The endpoints are judged frame-exact.** Scrub to the first and last frames at full size. The first must be the before plate and the last must be the after plate, pixel-faithful - no recolored buttons, no shifted spacing, no redrawn type. A model that lands *near* the after design has failed; landing *on* it is the entire reason to use end-frame conditioning.
- **The middle is judged at full speed.** A morph that looks strange paused but clean in motion passes. Do not frame-step the transition hunting for invented UI; if it is invisible at playback speed, it does not exist for the viewer.

## Delivering it

- Mute it, autoplay it, and mark it `playsinline`; use the **before plate as the `poster`** so the clip visibly starts from the old design.
- End on a hold of the after state - the last second is the shareable frame. If the clip cuts away too fast, a trim would fix it, but Northlight cannot process video files: offer the trim for the user to run themselves, do not promise it.

## Reject a clip when

- The first or last frame is not pixel-faithful to its plate: redrawn text, shifted layout, recolored brand elements. The endpoints are non-negotiable.
- Invented interface elements from the mid-transition linger into the final second instead of resolving.
- Text smears while the transition is slow enough to read it - switch to a wipe or shorten the morph.
- The framing jumps: the after appears at a different scale or crop than the before, because the plates never matched.
- The camera moves. This clip has no camera; motion belongs entirely to the transformation.
- The transformation happens twice, or stutters back toward the before state after committing.
- The clip reads as a cross-fade between two unrelated images rather than one design becoming another - the plate match was too loose for the chosen transition.

Always watch it once at full size and once at the destination size. A smear that is invisible in a feed preview can be obvious on a case-study page, and the reverse.

---

Transition structure adapted from [ai-video-generator-claude](https://github.com/rediumvex/ai-video-generator-claude) by @rediumvex, MIT licensed. First/last-frame matching discipline informed by [kling-ai-prompt-generator](https://github.com/maciejdzierzek/kling-ai-prompt-generator) by @maciejdzierzek, MIT licensed.

Written for Northlight: built around Seedance Pro / MiniMax H3 end-frame conditioning with both frames taken from the user's own project, a four-transition menu with a text-smear rule for interface-heavy plates, the 500-character motion prompt, endpoint-exact versus judged-at-speed evaluation, and the model/credit ladder.
