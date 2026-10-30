# Glassmorphism card

This page is about applying the glassmorphism recipe to a card. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Glassmorphism pillar page](https://superdesign.dev/styles/glassmorphism#recipe); here we focus on what changes when the build type is a card, then hand you a prompt tuned for it.

## Generate a glassmorphism card

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a glassmorphism card component. A single frosted panel over a dark obsidian backdrop (#0a0a0a) with a subtle architectural grid and one organic glowing gradient. The card uses a 16px to 20px backdrop blur, a low-opacity white fill (rgba(255,255,255,0.06)), a 1px rgba(255,255,255,0.1) border, a soft shadow, and a faint grain overlay so it does not read flat. Inter typography, white headings, muted gray body, one neon lime accent (#ccff00) for a single primary action or live indicator. Keep body copy short so it stays crisp on the translucent surface.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build a glassmorphism card component with these tokens:
- Backdrop: obsidian #0a0a0a with a faint architectural grid + one organic
  glowing radial gradient (so the blur has something to work with)
- Card: rgba(255,255,255,0.06) fill, backdrop-filter blur(16px) saturate(150%),
  1px rgba(255,255,255,0.1) border, 16px radius, shadow 0 8px 32px rgba(0,0,0,0.4),
  plus a subtle grain overlay
- Type: Inter; white #ffffff headings, zinc-400 body; keep body copy short
- Accent: neon lime #ccff00 on exactly one element (a button or a live dot)
- Glass needs a busy backdrop: never place this card on a flat single color
- Pair backdrop-filter with -webkit-backdrop-filter and an opaque @supports fallback

/* via superdesign.dev/styles/glassmorphism/card */
```

## Glassmorphism card examples

[![Glassmorphism Style (obsidian + lime), a real glassmorphism card example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/285ed12a-0b4a-435d-b212-b2dc30cee0cb/8ba9a623-981c-49ae-8ce7-679d477ef084/1767756243811.png) Glassmorphism Style (obsidian + lime)Northlight libraryOur flagship glass card system: the neon lime accent only works because the obsidian fill is opaque enough to anchor it.](https://superdesign.dev/library/glassmorphism-style?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-card&utm_content=example-card)[![Kru Profile - Unified Glassmorphism, a real glassmorphism card example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/997adf3c-8dfa-4f9b-9729-a56dac70307d/1769136790419.png) Kru Profile - Unified GlassmorphismSuperdesign libraryStacked glass stat cards in a mobile profile: the 65% fill keeps the numbers crisp while the chips stay translucent.](https://superdesign.dev/library/kru-profile-unified-glassmorphism?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism-card&utm_content=example-card)

[Browse all card templates →Every card prompt in the library](https://superdesign.dev/library/category/card?utm_source=styles&utm_medium=internal_link&utm_campaign=card&utm_content=style_hub)

## Frequently asked questions

Why does my glassmorphism card look washed out or gray?
Almost always because the background behind it is a flat single color. backdrop-filter blurs whatever is behind the element, so with nothing colorful to melt, the card just looks like a faint gray rectangle. Put a gradient, a grid, or a glowing blob behind it and the glass appears instantly.

How do I write the CSS for a glassmorphism card?
Four properties: a low-opacity rgba background (around 6 to 12% white), backdrop-filter blur(16px) saturate(150%), a 1px translucent border, and a soft box-shadow. Add the -webkit- prefix for older Safari and an @supports fallback that raises the fill to about 85% opacity. The full annotated recipe lives on the glassmorphism pillar page.

## Keep exploring

[Glassmorphism: the full recipe →Frosted glass panels: translucent fill, backdrop blur, a thin light border, layered over a colorful backdrop.](https://superdesign.dev/styles/glassmorphism)[Glassmorphism website →The same style applied to a website.](https://superdesign.dev/styles/glassmorphism/website)[Glassmorphism dashboard →The same style applied to a dashboard.](https://superdesign.dev/styles/glassmorphism/dashboard)[Glassmorphism mobile app →The same style applied to a mobile app.](https://superdesign.dev/styles/glassmorphism/app)[Glassmorphism login →The same style applied to a login.](https://superdesign.dev/styles/glassmorphism/login)[Glassmorphism pricing →The same style applied to a pricing.](https://superdesign.dev/styles/glassmorphism/pricing)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
