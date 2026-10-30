# Glassmorphism pricing

This page is about applying the glassmorphism recipe to a pricing. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Glassmorphism pillar page](https://superdesign.dev/styles/glassmorphism#recipe); here we focus on what changes when the build type is a pricing, then hand you a prompt tuned for it.

## Generate a glassmorphism pricing

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a dark glassmorphism SaaS pricing page on a violet-pink-cyan aurora gradient. Sticky blurred nav, a centered hero with a gradient headline and a monthly/annual billing toggle, then three frosted plan cards (Starter, Pro, Team) where the Pro tier is featured with a glowing border and a brighter fill. Each card lists a price, a feature list with check icons, and a CTA. Reflow from 3 columns to 2 to 1. Finish with an FAQ accordion and a slim footer. Add subtle film grain so the glass does not look flat. Keep feature text on the more opaque inner area of each card.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build a glassmorphism pricing page with these tokens:
- Canvas: near-black violet base with a violet #8b5cf6 -> pink #ec4899 -> cyan
  #22d3ee aurora gradient, plus subtle film grain
- Plan cards: frosted glass rgba(255,255,255,0.07) fill, backdrop-filter
  blur(18px) saturate(150%), 1px white hairline border + inner highlight, 20px radius
- Featured (Pro) tier: brighter fill (rgba 0.12) and a glowing gradient border so
  it lifts without changing the layout grid
- Feature lists: place on the higher-fill inner region of the card; check icons
  in the cyan accent; price uses the gradient text-clip
- Billing toggle swaps price + suffix live (monthly/annual, "Save 20%")
- Reflow 3 -> 2 -> 1 column; FAQ accordion below
- Pair backdrop-filter with -webkit-backdrop-filter and an opaque @supports fallback

/* via superdesign.dev/styles/glassmorphism/pricing */
```

## Glassmorphism pricing examples

[![Aurora Glass SaaS Pricing, a real glassmorphism pricing example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/11bd470e-e8dd-4d32-9ddf-44a04b4fc942.png) Aurora Glass SaaS PricingSuperdesign libraryThree glass tiers on an aurora backdrop; the Pro card lifts with a brighter fill and a gradient glow while the grid stays aligned.](https://superdesign.dev/library/aurora-glass-saas-pricing?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-pricing&utm_content=example-card)

[Browse all pricing templates →Every pricing prompt in the library](https://superdesign.dev/library/category/pricing?utm_source=styles&utm_medium=internal_link&utm_campaign=pricing&utm_content=style_hub)

## Frequently asked questions

How do you highlight the featured plan on a glass pricing page?
Raise the featured card's fill opacity (say from 7% to 12%) and add a glowing gradient border, rather than changing its size or shape. That keeps the three-column comparison grid aligned while the eye still lands on the recommended tier. A small 'Most popular' badge in the accent color seals it.

Where does text break on a glassmorphism pricing card?
In the feature list. Long rows of small check-and-label text over a moving gradient lose contrast fast. Put the list on the card's more opaque inner region and reserve the translucent, gradient-clipped treatment for the plan name, the price and the headline.

## Keep exploring

[Glassmorphism: the full recipe →Frosted glass panels: translucent fill, backdrop blur, a thin light border, layered over a colorful backdrop.](https://superdesign.dev/styles/glassmorphism)[Glassmorphism website →The same style applied to a website.](https://superdesign.dev/styles/glassmorphism/website)[Glassmorphism dashboard →The same style applied to a dashboard.](https://superdesign.dev/styles/glassmorphism/dashboard)[Glassmorphism card →The same style applied to a card.](https://superdesign.dev/styles/glassmorphism/card)[Glassmorphism mobile app →The same style applied to a mobile app.](https://superdesign.dev/styles/glassmorphism/app)[Glassmorphism login →The same style applied to a login.](https://superdesign.dev/styles/glassmorphism/login)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
