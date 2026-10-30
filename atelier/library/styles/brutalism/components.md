# Brutalism ui components

This page is about applying the brutalism recipe to a ui components. The full CSS recipe (the exact tokens, fallbacks and gotchas) lives on the [Brutalism pillar page](https://superdesign.dev/styles/brutalism#recipe); here we focus on what changes when the build type is a ui components, then hand you a prompt tuned for it.

## Generate a brutalism ui components

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a neo-brutalist UI component system as a single showcase page: buttons, modals, and a slider. Thick 3px black borders, square corners, and a hard offset shadow that compresses to zero on press so every control feels physically pushable. Acid-yellow as the only accent, JetBrains Mono plus Archivo type, and a graph-paper grid backdrop. Include primary, secondary, destructive and disabled button states, an icon button and a loading state, a confirmation modal with a thick-bordered overlay, and a chunky arrow-stepped carousel. Show focus states as a bold offset outline, not a soft ring. Keep contrast high: black ink on paper, black text on the acid fills.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Build neo-brutalist UI components with these tokens:
- Surface: flat paper #f4f1ea with a graph-paper grid; black ink #0a0a0a; ONE
  accent (acid-yellow #e8ff00); black text ON the acid (never white-on-acid)
- Every control: 3px solid #000 border, square corners, hard offset shadow
  (box-shadow: 4px 4px 0 #000); on :active translate by the offset and drop the
  shadow to 0 so it physically "presses"
- Buttons: primary (acid fill), secondary (paper fill), destructive, disabled,
  icon, loading; focus = a bold 3px offset outline, NOT a soft ring
- Modal: thick-bordered dialog on a flat scrim, hard offset shadow, blocky title bar
- Slider/carousel: chunky arrow steppers, visible track, mono index labels
- Type: Archivo (display) + JetBrains Mono (labels); zero gradients, zero blur

/* via superdesign.dev/styles/brutalism/components */
```

## Brutalism ui components examples

[![HARDSTOP - Brutalist Button System, a real brutalism ui components example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/1442c7fc-01e9-4e31-8c8c-e228476ba65f.png) HARDSTOP - Brutalist Button SystemSuperdesign libraryA full button system with every state; the press animation that collapses the offset shadow is the whole brutalist trick in one move.](https://superdesign.dev/library/hardstop-buttons-with-a-spine-a-brutalist-button-system?utm_source=styles&utm_medium=styles_link&utm_campaign=brutalism-components&utm_content=example-card)[![OVERLAY - Brutalist Modal Design, a real brutalism ui components example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/e436c263-9ed7-4a32-a6a2-4413f4159621.png) OVERLAY - Brutalist Modal DesignSuperdesign libraryA confirmation dialog built loud: 4 to 5px borders, a flat scrim and a hard shadow, proving modals work in brutalism without blur.](https://superdesign.dev/library/overlay-modal-design-built-loud-brutalist-acid?utm_source=styles&utm_medium=styles_link&utm_campaign=brutalism-components&utm_content=example-card)[![Brutalist Slider / Carousel, a real brutalism ui components example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/7d97ebb3-363d-49d3-a029-fa9a23815e3f/thumbnails/4a7a8485-8263-4a8a-8f79-faf31f8f8831.png) Brutalist Slider / CarouselSuperdesign libraryChunky arrow steppers and a visible track with mono index labels: navigation you can see, not a subtle dot row.](https://superdesign.dev/library/carousel-design-brutalist-slider?utm_source=styles&utm_medium=styles_link&utm_campaign=brutalism-components&utm_content=example-card)

## Frequently asked questions

How do you make a brutalist button?
Give it a 3px solid black border, square corners, a flat or acid fill with black text, and a hard offset shadow (box-shadow: 4px 4px 0 #000). On press, translate the button by the shadow offset and drop the shadow to zero so it visibly sinks. That physical press is the defining brutalist button interaction, and it needs no blur or gradient.

Do brutalist UI components hurt accessibility?
Not inherently, and some choices help. High-contrast black-on-paper text and thick borders are easy to read, and a bold offset focus outline is more visible than a faint ring. The one rule to watch is accent text: black text on acid yellow passes, white text on acid does not. Keep label text on the high-contrast pairing and brutalist components clear WCAG comfortably.

What is the difference between neo-brutalism and brutalism in UI?
In web design the terms are used almost interchangeably, but neo-brutalism is the polished 2020s revival: the raw borders, flat fills and hard shadows are kept deliberately, paired with bright accents and tidy grids, rather than the truly stripped-back, unstyled look of early-web brutalism. Most component libraries people search for today are neo-brutalist.

## Keep exploring

[Brutalism: the full recipe →The website with its structure exposed: mono fonts, default-blue links, hard black borders, zero decoration.](https://superdesign.dev/styles/brutalism)[Brutalism website →The same style applied to a website.](https://superdesign.dev/styles/brutalism/website)[Brutalism ecommerce →The same style applied to a ecommerce.](https://superdesign.dev/styles/brutalism/ecommerce)[Brutalism pricing page →The same style applied to a pricing page.](https://superdesign.dev/styles/brutalism/pricing)[Brutalism login page →The same style applied to a login page.](https://superdesign.dev/styles/brutalism/login)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles).
