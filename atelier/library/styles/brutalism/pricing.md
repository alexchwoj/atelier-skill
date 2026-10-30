# Brutalism pricing page

This page is about applying the brutalism recipe to a pricing page. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Brutalism pillar page](https://superdesign.dev/styles/brutalism#recipe); here we focus on what changes when the build type is a pricing page, then hand you a prompt tuned for it.

## Generate a brutalism pricing page

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a neo-brutalist SaaS pricing page on a warm cream canvas (#f4ecd8) with a faint grid texture. Every element gets a thick 2px black outline and a hard, non-blurred offset drop shadow so it reads like a physical sticker. A 3-tier pricing card row (Starter, Pro, Studio) with the middle Pro tier highlighted in mustard yellow, lifted with a bigger shadow offset, and badged Most popular. A pill billing toggle (Monthly/Annual, Save 20%) swaps the price live. Below, an accordion FAQ and a dark inverted footer. Heavy Archivo Black display headings, Space Grotesk body, DM Mono for prices. Tight playful accent palette: mustard, grape purple, mint, coral. Square corners, no soft shadows, no gradients.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build a neo-brutalist pricing page (web UI) with these tokens:
- Canvas: warm cream #f4ecd8 with a faint grid; black ink #000
- Every surface: 2px solid #000 border + HARD offset shadow
  (box-shadow: 6px 6px 0 #000, zero blur); square corners
- 3 tiers in a row; featured (Pro) filled mustard #f5c518, lifted with a bigger
  offset shadow, badged "Most popular" (same card shape, so the grid stays aligned)
- Accent palette (tight, playful): mustard, grape purple, mint, coral
- Type: Archivo Black (display), Space Grotesk (body), DM Mono (prices)
- Billing toggle is a chunky pill that swaps price + suffix live
- Contrast is easy here: black on cream and on bright fills; keep it that way
- Dark inverted footer to close; no gradients, no blur

/* via superdesign.dev/styles/brutalism/pricing */
```

## Brutalism pricing page examples

[![Warm Neo-Brutalist SaaS Pricing, a real brutalism pricing page example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/aa9ba68e-0bf9-4d73-a9fa-e47ad6e71e3d.png) Warm Neo-Brutalist SaaS PricingSuperdesign libraryA warm cream canvas softens the brutalism; the mustard Pro tier lifts via a bigger hard offset shadow, not a glow.](https://superdesign.dev/library/warm-neo-brutalist-saas-pricing?utm_source=styles&utm_medium=styles_link&utm_campaign=brutalism-pricing&utm_content=example-card)

[Browse all pricing templates →Every pricing page prompt in the library](https://superdesign.dev/library/category/pricing?utm_source=styles&utm_medium=internal_link&utm_campaign=pricing&utm_content=style_hub)

## Frequently asked questions

Does brutalist styling hurt or help a pricing page?
It usually helps the core job. A pricing page exists for fast, unambiguous comparison, and brutalism's high-contrast ink-on-paper, thick borders and chunky type make prices and feature rows extremely legible. The risk is tone, not usability: it reads bold and playful, which fits design-led and developer brands and clashes with buttoned-up enterprise ones.

How do you make the brutalist hard shadow in CSS?
Use a box-shadow with an offset but zero blur and zero spread, in solid black: box-shadow: 6px 6px 0 #000. That flat displaced block gives elements their sticker-like, physical feel. Increase the offset on the featured tier so it appears to lift further off the page, and keep corners square so the shadow reads as a hard block.

## Keep exploring

[Brutalism: the full recipe →The website with its structure exposed: mono fonts, default-blue links, hard black borders, zero decoration.](https://superdesign.dev/styles/brutalism)[Brutalism website →The same style applied to a website.](https://superdesign.dev/styles/brutalism/website)[Brutalism ui components →The same style applied to a ui components.](https://superdesign.dev/styles/brutalism/components)[Brutalism ecommerce →The same style applied to a ecommerce.](https://superdesign.dev/styles/brutalism/ecommerce)[Brutalism login page →The same style applied to a login page.](https://superdesign.dev/styles/brutalism/login)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
