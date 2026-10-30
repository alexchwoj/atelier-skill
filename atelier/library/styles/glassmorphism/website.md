# Glassmorphism website

This page is about applying the glassmorphism recipe to a website. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Glassmorphism pillar page](https://superdesign.dev/styles/glassmorphism#recipe); here we focus on what changes when the build type is a website, then hand you a prompt tuned for it.

## Generate a glassmorphism website

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a premium dark aurora-glass SaaS marketing website. Near-black page (#0b0f14) lit by soft aqua-to-magenta aurora blobs. Sticky frosted-glass pill nav floating over a centered hero with duotone gradient headline text, a floating frosted dashboard mockup, and a logo strip. Then a 6-card feature grid, a bento showcase, a 3-tier pricing block with a featured Pro plan, a big glass CTA, and a 5-column glass footer. Keep the glass on the nav, the cards and the CTA bands; let section headings and body copy sit on the solid dark canvas so reading stays crisp. One aqua-to-magenta accent gradient recurs across the headline, primary buttons and the featured plan.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build a glassmorphism marketing website with these tokens:
- Canvas: near-black #0b0f14 with soft aqua #2dd4bf and magenta #e879f9 aurora
  blobs and a faint masked grid; one accent gradient (aqua->magenta) recurs site-wide
- Glass surfaces: nav pill, feature cards, bento tiles, CTA band, footer use
  rgba(255,255,255,0.06) fill, backdrop-filter blur(18px) saturate(150%), 1px
  white hairline border, soft shadow
- Reading surfaces: section headings and body copy sit on the SOLID dark canvas,
  not on glass, so paragraphs never blur-halo
- Sticky frosted pill nav; hero with duotone gradient headline + floating frosted
  product mockup; 6-card feature grid; bento showcase; 3-tier pricing (featured Pro)
- Body text >= 4.5:1 against the darkest blob behind it
- Pair backdrop-filter with -webkit-backdrop-filter and an opaque @supports fallback

/* via superdesign.dev/styles/glassmorphism/website */
```

## Glassmorphism website examples

[![Prismline - Aurora Glass SaaS Site, a real glassmorphism website example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/7cd49523-49f1-4ea8-ab97-c0a116cdb063.png) Prismline - Aurora Glass SaaS SiteSuperdesign libraryA full dark glass marketing site: aurora blobs, frosted pill nav, bento showcase, and a featured pricing tier all on one accent gradient.](https://superdesign.dev/library/prismline-aurora-glass-ship-a-saas-site-that-looks-designed-not-generated?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-website&utm_content=example-card)[![Prism - Frosted-Glass Pastel Agency Studio, a real glassmorphism website example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/b5ff2db5-a7d3-4273-90c3-ab58008e75b1.png) Prism - Frosted-Glass Pastel Agency StudioSuperdesign libraryThe light-mode counterpart: a soft pastel mesh canvas proving glass websites do not have to be dark to read clean.](https://superdesign.dev/library/prism-frosted-glass-pastel-agency-studio?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-website&utm_content=example-card)

## Frequently asked questions

Can you build a whole website in glassmorphism?
Yes, but not by making every surface glass. The strongest glassmorphism websites apply frosted panels to the nav, feature cards and CTA bands while keeping headings and body copy on a solid canvas. Glass needs a busy backdrop to read as glass, so a site-wide aurora or mesh gradient does the heavy lifting; full-page translucency over flat color just looks washed out.

What makes the best glassmorphism websites work?
Three things: a controlled colorful backdrop (so worst-case text contrast never surprises you), glass reserved for chrome and cards rather than reading surfaces, and one recurring accent gradient that ties the hero, buttons and featured pricing together. Apple, Framer and Reflect all follow this pattern, glass on navigation and hero cards, solid surfaces under the words.

Is there a glassmorphism website template I can start from?
You can generate one in a single prompt rather than hunting for a static template. Copy the seeded prompt on this page into Northlight and you get a full glass marketing site (nav, hero, feature grid, bento, pricing, footer) on an infinite canvas, ready to edit, so the starting point already follows the contrast and layering rules instead of a generic theme.

## Keep exploring

[Glassmorphism: the full recipe →Frosted glass panels: translucent fill, backdrop blur, a thin light border, layered over a colorful backdrop.](https://superdesign.dev/styles/glassmorphism)[Glassmorphism dashboard →The same style applied to a dashboard.](https://superdesign.dev/styles/glassmorphism/dashboard)[Glassmorphism card →The same style applied to a card.](https://superdesign.dev/styles/glassmorphism/card)[Glassmorphism mobile app →The same style applied to a mobile app.](https://superdesign.dev/styles/glassmorphism/app)[Glassmorphism login →The same style applied to a login.](https://superdesign.dev/styles/glassmorphism/login)[Glassmorphism pricing →The same style applied to a pricing.](https://superdesign.dev/styles/glassmorphism/pricing)[Best AI landing page generator →The wider field of landing page generators, and where styled code fits in.](https://superdesign.dev/blog/best-ai-landing-page-generator)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
