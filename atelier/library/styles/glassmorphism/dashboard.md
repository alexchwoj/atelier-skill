# Glassmorphism dashboard

This page is about applying the glassmorphism recipe to a dashboard. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Glassmorphism pillar page](https://superdesign.dev/styles/glassmorphism#recipe); here we focus on what changes when the build type is a dashboard, then hand you a prompt tuned for it.

## Generate a glassmorphism dashboard

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a premium HR and finance dashboard in glassmorphism style. Use a deep indigo canvas (#0f172a) with soft glowing blue (#667eea) and purple (#764ba2) gradient blobs behind frosted glass panels: 16px backdrop blur, rgba(255,255,255,0.1) fill, 1px white-at-25% borders, 16px radius. Keep the glass on the sidebar, the top bar and the stat cards. Render the data table and the SVG line charts on a near-opaque inner surface so numbers stay crisp. White text, one cyan-to-blue accent for primary actions, staggered slide-up entrance, a bento-grid of 4 stat cards plus a chart plus a recent-activity table.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build a glassmorphism dashboard with these tokens:
- Canvas: deep indigo #0f172a with two soft radial gradient blobs (#667eea, #764ba2)
- Glass chrome (sidebar, top bar, stat cards): rgba(255,255,255,0.1) fill,
  backdrop-filter blur(16px) saturate(150%), 1px rgba(255,255,255,0.25) border,
  16px radius, shadow 0 8px 32px rgba(0,0,0,0.35)
- Data surfaces (tables, dense charts): NOT glass. Use a near-opaque panel
  rgba(17,25,40,0.9) so small numbers stay above 4.5:1 contrast
- Text: white #ffffff for labels, slate-200 for secondary; accent cyan->blue
  gradient only on primary buttons and live indicators
- Layout: 12-column bento, fixed glass sidebar, 4 KPI stat cards, one wide line
  chart, one transactions table
- Always pair backdrop-filter with -webkit-backdrop-filter and an @supports
  fallback raising fill opacity to 85%

/* via superdesign.dev/styles/glassmorphism/dashboard */
```

## Glassmorphism dashboard examples

[![Glassmorphism HR Dashboard, a real glassmorphism dashboard example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/6e202a64-c96a-4dd0-884c-1c713d9919b1/1770026163516.png) Glassmorphism HR DashboardSuperdesign libraryGlass stat cards over a glowing indigo backdrop, but the table sits on a solid panel so salary figures stay readable.](https://superdesign.dev/library/glassmorphism-hr-dashboard?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-dashboard&utm_content=example-card)[![Premium Glassmorphism Dashboard (edge-to-edge line charts), a real glassmorphism dashboard example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/91b08ed5-522a-4500-8181-25ddf56c6240/1775426442321.png) Premium Glassmorphism Dashboard (edge-to-edge line charts)Northlight libraryA 28px-blur mesh background with smooth SVG charts: the charts get their own high-fill card so the curves read clean.](https://superdesign.dev/library/premium-glassmorphism-dashboard-with-smooth-edge-to-edge-line-charts?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-dashboard&utm_content=example-card)

[Browse all dashboard templates →Every dashboard prompt in the library](https://superdesign.dev/library/category/dashboard?utm_source=styles&utm_medium=internal_link&utm_campaign=dashboard&utm_content=style_hub)

## Frequently asked questions

Can you use glassmorphism on a data table?
Not directly. A translucent panel behind small table text produces blur halos and the contrast swings as content scrolls behind it. Keep the table on a near-opaque surface (around 90% fill) and reserve the glass for the cards, sidebar and top bar that frame it.

How do I keep dashboard numbers legible on glass?
Treat contrast as worst-case. KPI numbers on a frosted card are fine because the card has its own elevated fill, but body data needs at least 4.5:1 against the lightest and darkest thing behind it. Raise the fill opacity on any surface that carries small text, and never put a chart's axis labels directly over a moving gradient.

What blur value works best for a glassmorphism dashboard?
12px to 16px on the chrome. That is enough to separate cards from the gradient backdrop without turning the whole screen into soup. Go heavier (20px or more) only on full-bleed hero areas, and never animate the blur radius on scroll because it repaints the whole blurred region.

## Keep exploring

[Glassmorphism: the full recipe →Frosted glass panels: translucent fill, backdrop blur, a thin light border, layered over a colorful backdrop.](https://superdesign.dev/styles/glassmorphism)[Glassmorphism website →The same style applied to a website.](https://superdesign.dev/styles/glassmorphism/website)[Glassmorphism card →The same style applied to a card.](https://superdesign.dev/styles/glassmorphism/card)[Glassmorphism mobile app →The same style applied to a mobile app.](https://superdesign.dev/styles/glassmorphism/app)[Glassmorphism login →The same style applied to a login.](https://superdesign.dev/styles/glassmorphism/login)[Glassmorphism pricing →The same style applied to a pricing.](https://superdesign.dev/styles/glassmorphism/pricing)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
