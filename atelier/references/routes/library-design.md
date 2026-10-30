# Design route: designing from a brand system

The files in `library/designs/` describe how real brands build their sites: palette with roles, type scale, spacing, radii, elevation, component recipes, do's and don'ts, responsive behaviour. They are **inspiration**: a way to borrow a proven sensibility, never a costume.

## Pick

- The user named a brand ("like Linear", "Apple-style"): open that file.
- The user named a feeling: `find.mjs "<feeling> <industry>" --type design`, read the summaries, open the best one or two (blending two is often the strongest result). Industry neighbours are a fine start (fintech prompt → Stripe, Mercury, Wise), but a cross-industry pick often gives a fresher page (a bakery in the restraint of Apple, a dev tool in the warmth of Mastercard).
- Each file is long. Read its frontmatter tokens and the sections you need (Overview, Colors, Typography, Layout, Do's and Don'ts); skim the rest.

## What to take

| Take | How |
| --- | --- |
| **Palette logic** | The roles and their proportions: how many neutrals, how warm, how much accent and where it appears, how dark surfaces are used. Re-mix the values for the user's brand (shift the accent hue, keep the lightness and chroma relationships). |
| **Type voice** | The *class* of pairing (high-contrast serif display + humanist sans; one grotesk throughout; mono accents) and the scale (sizes, weights, tracking, line-heights). Brand fonts are usually proprietary: pick a free face of the same build from `studio/type.md` (the file's "font substitutes" note often names one). |
| **Spacing and rhythm** | Base unit, section gaps, container width, grid. |
| **Shape and depth** | Radius scale, border vs shadow, elevation levels. |
| **Component tone** | Button shape and weight, card treatment, nav style, how imagery is framed. |
| **Do's and don'ts** | Keep them; they are what makes the system coherent. |

## Pair it with prompts

A design file is a system: it says what colours, faces and radii a brand uses, not what a strong first screen in that system looks like. The compositions, effects and details come from the prompts.

1. Search prompts in the design's look, not its industry: `find.mjs "<the design's mood, palette and surface words>" --type prompt --limit 10` (for a Linear-like file: "dark minimal hairline grid gradient glow").
2. Open the four to six closest whole. Take the hero composition, section structures and the signature effect from them; take the tokens from the design.
3. Pull the remaining pieces with `parts.mjs` (`nav`, `hero`, `footer`, `motion`, `background`) in the same mood and rebuild them in the design's tokens.

The result is the design's discipline wearing a library composition, written down on the References line (`SKILL.md` § The inspiration pass).

## What never to take

- The brand's logo, name, wordmark, trademarked typeface files, product screenshots or copy, unless the user *is* that brand.
- An exact replica of a real page. The result should make someone say "this feels like Stripe-level care", never "this is a Stripe clone".

## Move one axis

A page built straight from one file reads as a knock-off. Change at least one strong axis on purpose and say which:

- the accent hue (Linear's discipline in a warm orange),
- the paper (Apple's layout logic on a tinted dark ground),
- the display face (Vercel's grid with a serif display),
- or blend two files: one for colour and surface, the other for type and layout.

## Output

Write the borrowed system as tokens before any component:

```css
:root {
  /* inspired by: designs/Fintech-Crypto/stripe-DESIGN.md, accent moved to teal */
  --color-paper: oklch(98.5% 0.006 230);
  --color-ink: oklch(22% 0.02 250);
  --color-accent: oklch(62% 0.15 195);
  --font-display: "Gloock", Georgia, serif;
  --font-body: "Hanken Grotesk", system-ui, sans-serif;
  /* … spacing, radius, shadow, motion */
}
```

Then build from the prompts and parts you paired with it, filling any gap with `foundations/craft.md` and `foundations/layout.md`. If the user wants a portable system for later pages, write the tokens and rules to a `DESIGN.md` at the project root in the same format as the library files (frontmatter tokens, then prose sections).
