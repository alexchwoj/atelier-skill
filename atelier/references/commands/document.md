# document

Write a `DESIGN.md` at the project root that captures the system as built, so later pages and other agents inherit it. Use it after a Studio or Design route build, when the user asks to "lock the system", or to document an existing project's look.

## Rules

- **Describe what exists, from the code** (`tokens.css`, the Tailwind theme, components), never from intentions. If something is inconsistent, document the dominant pattern and list the drift separately.
- **Never overwrite** an existing `DESIGN.md` without asking; offer to update its token block and changelog instead.
- Same format as the library files in `library/designs/`, so the two read alike: YAML frontmatter with the tokens, then prose sections.

## Template

```markdown
---
version: 1
name: <Product> design system
description: <two sentences: the world, the feel, the one signature>
mode: { marketing: Sell, app: Work, docs: Read }
colors:
  paper: "#f6f3ee"
  paper-2: "#eeeae3"
  ink: "#1f1c18"
  muted: "#6e675e"
  rule: "#dcd6cc"
  accent: "#c4532d"
  accent-ink: "#fffaf5"
  focus: "#d0451c"
  success: "#2f7d4f"
  error: "#b6322d"
typography:
  display: { fontFamily: "Gloock, Georgia, serif", weight: 400, tracking: -0.02em, lineHeight: 1.05 }
  body: { fontFamily: "Hanken Grotesk, system-ui, sans-serif", size: 16px, lineHeight: 1.6 }
  scale: [14, 16, 21, 25, 52, 84]
spacing: [4, 8, 12, 16, 24, 40, 64, 96, 144]
radius: { control: 999px, card: 14px, image: 12px }
shadow: { raised: "0 1px 2px oklch(20% 0.01 60 / 0.06)" }
motion: { micro: 120ms, short: 220ms, long: 420ms, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
---

## Overview
The world this system comes from, the idea, and what it refuses.

## Colors
Each role, its job and its footprint (dosage). Contrast pairs that matter.

## Typography
Faces and why; the scale and which element uses each step; rules (case, tracking, measure).

## Layout
Container, grid, gutters, section rhythm, the hero shape, composition habits.

## Components
Buttons (all states), inputs, cards or the lack of them, navigation, footer, any signature component. One short code example each.

## Imagery
Sources, treatment, credits, icon library.

## Motion
The signature moment and the grammar for everything else; reduced-motion behaviour.

## Voice
Three words it is, three it is not; example headline, button, error and empty state.

## Do and don't
Five of each, specific to this system.

## Logo
Files, clear space, minimum size, colour versions.

## Changelog
- <date>: created from the build of <page>.
```

## Check

Every token in the frontmatter exists in the code with the same value; every rule in the prose can be pointed to on the page.
