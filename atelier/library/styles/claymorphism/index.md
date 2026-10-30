# Claymorphism

## Where did claymorphism come from?

The term was coined by Michal Malewicz in 2021 (his [original article](https://hype4.academy/articles/design/claymorphism-in-user-interfaces) named the trend, and [Smashing Magazine's 2022 piece](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/) credits him with the coinage). The CSS caught up in stages: Malewicz's own [first recipe](https://hype4.academy/articles/coding/how-to-create-claymorphism-using-css) used an outer shadow plus a single inset, and the now-standard two-inset stack below was popularized by Adrian Bece's [clay.css](https://github.com/CodeAdrian/clay.css) library and his [LogRocket walkthrough](https://blog.logrocket.com/implementing-claymorphism-css/). The motivation is the interesting part: clay exists largely because [neumorphism](https://superdesign.dev/styles/neumorphism) failed contrast accessibility, and inflating elements ON TOP of the page (instead of extruding them FROM it) lets you keep real contrast between element and background.

## How do you make claymorphism in CSS?

Soft clay card
Light inset on top, dark inset underneath, tinted shadow below.

The recipe rendered live: three shadows in one declaration and the element reads as inflated, not extruded.

```
/* via superdesign.dev/styles/claymorphism */
.clay-card {
  /* Pastel base. Clay reads best on light, low-saturation fills */
  background-color: #f3e8ff;

  /* Large radius sells the "molded" look. Rule of thumb: ~25% of element height */
  border-radius: 32px;

  /* The clay illusion is three shadows in one declaration, order matters:
     1) outer drop shadow: floats the element off the page
     2) inset dark, offset UP from the bottom: the underside curve
     3) inset light, offset DOWN from the top: the highlight where light hits */
  box-shadow:
    0 35px 68px rgba(112, 100, 176, 0.30),
    inset 0 -8px 16px rgba(95, 70, 140, 0.22),
    inset 0 8px 16px rgba(255, 255, 255, 0.65);

  /* Generous padding keeps the inflated proportions */
  padding: 2rem;
}

/* Buttons: tighten the shadows, keep the geometry */
.clay-button {
  background-color: #c4b5fd;
  border-radius: 24px;
  border: none;
  padding: 0.875rem 2rem;
  box-shadow:
    0 12px 24px rgba(112, 100, 176, 0.35),
    inset 0 -4px 8px rgba(95, 70, 140, 0.25),
    inset 0 4px 8px rgba(255, 255, 255, 0.7);
  transition: transform 120ms ease, box-shadow 120ms ease;
}

/* Press feedback: squash, do not animate the shadows themselves */
.clay-button:active {
  transform: translateY(2px) scale(0.98);
}

/* Never let the soft look eat the focus ring */
.clay-button:focus-visible {
  outline: 3px solid #6d28d9;
  outline-offset: 3px;
}
```

### The details that decide whether it reads as clay or as dirt

- Shadow color should be a darker, desaturated version of the background hue, not pure black. Pure black insets look like dirt on pastel.
- The dark inset uses a NEGATIVE y-offset (the shade creeps up from the bottom edge); the light inset uses a POSITIVE y-offset. Get these backwards and the lighting inverts: the element looks dented instead of inflated.
- Tint the outer shadow toward the element hue (the rgba(112,100,176,...) above) for the signature colored-glow lift.
- Press feedback squashes with transform: translateY(2px) scale(0.98). Animate transform, never box-shadow: large-blur shadows are cheap to paint once and expensive to animate.

Browser support: Everything here is multi-value box-shadow plus border-radius, supported in every browser since IE9. No fallbacks, no prefixes, no backdrop-filter gotchas (that is glassmorphism's problem). The only caveat: large-blur shadows repainted during animation are expensive, so animate transform and opacity only, exactly as the :active pattern above does.

## What are the best claymorphism examples?

Three from our own library, three from the wild. The wild ones carry clay principles rather than this exact CSS: the inflated 3D depth, the chunky pressable buttons, the pastel discipline.

[![Clay UI, a real claymorphism example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/429d9c59-0daf-4aa4-b9fc-b91070307029/b345cb82-feca-4e68-9123-34019e1b4af8/1767232500095.png) Clay UISuperdesign libraryA high-fidelity clay design system: every component shares one light source, so the whole screen reads as molded from a single slab.](https://superdesign.dev/library/clay-ui?utm_source=styles&utm_medium=styles_link&utm_campaign=claymorphism&utm_content=example-card)[![Playful, a real claymorphism example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/d0a0ec4b-b5af-4cc0-939c-2d6d0db92074/fd90b71b-2363-4d10-99cd-28f01c51d250/1766701827799.png) PlayfulSuperdesign libraryClay's chunky geometry without the full shadow stack: a good clay-adjacent calibration point for how far the look stretches.](https://superdesign.dev/library/playful?utm_source=styles&utm_medium=styles_link&utm_campaign=claymorphism&utm_content=example-card)[![Softly: Digital Wellness App, a real claymorphism example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/efa2aaa5-0358-40b7-b524-ba300874c206/thumbnails/f8bde81c-e9f4-40df-8791-4f4ad81e977d.png) Softly: Digital Wellness AppSuperdesign libraryPastel palette discipline: the color half of the recipe, demonstrated on a Gen-Z wellness UI with floating soft shapes.](https://superdesign.dev/library/softly-digital-wellness-app?utm_source=styles&utm_medium=styles_link&utm_campaign=claymorphism&utm_content=example-card)[DuolingoLive siteThe most-cited mainstream carrier of clay principles: the 3D extrusion on its chunky buttons is functional, the depth literally tells you what is tappable.](https://www.duolingo.com/)[JoonLive siteClaymorphism matched to audience: a kids' habit app where soft inflated shapes read as safe and friendly to both kids and parents.](https://www.joonapp.io/)[Fall GuysLive siteClay as brand: the squishy physicality of the inflated bean characters carries into every rounded, saturated UI element.](https://www.fallguys.com/)

## Is claymorphism still popular in 2026?

It settled from the 2022 hype into a small but growing niche: across 208,000+ real generations, clay requests more than doubled this spring, from a tiny base, mostly for kids' products, edtech, and illustration-heavy landing pages.
Claymorphism prompt share, 2026
Claymorphism more than doubled from 0.03% to 0.08% of generations January to May 2026, still tiny: 70 projects (108 prompt mentions).
*June is month to date. Share of all Northlight generations whose prompt mentions the style. 70 distinct projects, 108 prompt mentions total.
Methodology
How we count: numbers come from the prompts of 208,000+ real design generations, January to June 2026. A generation counts as mentioning a style when its prompt contains the style term or a close synonym as a whole word (for example glassmorphic or frosted glass for glassmorphism; the dark mode group counts explicit dark mode and dark theme requests, not every mention of the word dark). One generation counts once even if the term repeats. Distinct projects is the conservative figure: one project can produce many generations. June is month to date, so we show it but do not compare it against closed months. Counts are live and drift slightly day to day.

## When should you not use claymorphism?

### Pastel-on-pastel text fails WCAG

White text on pastel lavender (#c4b5fd) computes to 1.85:1 against the WCAG relative luminance formula, nowhere near the 4.5:1 minimum (WCAG 1.4.3). Clay palettes force dark text: #3b2d5e on the #f3e8ff card fill is 10.33:1 (passes AAA), and even on the darker #c4b5fd button fill it is 6.6:1 (passes AA). If your brand type is white, the palette fights you.

### The soft shadows can swallow focus indicators

Inset highlights look vaguely like focus states, and designers routinely delete the outline because it ruins the soft look. Keep an explicit, high-contrast :focus-visible outline (WCAG 2.4.7); the recipe includes one for exactly this reason, and the #6d28d9 outline on #c4b5fd computes to 3.85:1, above the 3:1 non-text minimum.

### Affordance collapse

Clay's depth cue means pressable. If cards, banners, and buttons all get the same inflated treatment, users can no longer tell what is interactive. Reserve the full three-shadow stack for interactive elements; containers get the outer shadow only.

### Data density hates it

The arithmetic, shown: on a 300x200px card, clay's 2rem (32px) padding leaves a 236x136px content box, 53% of the card's area. The same card at a dense dashboard's 16px padding keeps a 268x168px box, 75% of the area. That is roughly 29% less usable content area per card, before the 32px radius starts clipping corner content. For dashboards and tables, that is rows you cannot show; [our AI dashboard builder](https://superdesign.dev/ai-dashboard-builder?utm_source=styles&utm_medium=styles_cta&utm_campaign=claymorphism&utm_content=whennot_dashboard) defaults to denser styles for a reason.

### Dark mode needs re-derivation, not inversion

The light inset highlight that sells the volume looks like gray smudge on dark backgrounds. Re-derive both insets from the dark surface color; naive token inversion produces dirty clay.

### Tone mismatch is real

Clay says toy, kids, casual, friendly. On fintech, legal, medical, or enterprise B2B it reads as unserious. Plain elevation or a quieter depth treatment is the better call there.

### Performance edge case

Dozens of large-blur shadows are fine statically but expensive to animate. Animate transform and opacity only.

Building a full clay landing page rather than one component? [Generate the whole page](https://superdesign.dev/ai-web-design-generator?utm_source=styles&utm_medium=styles_cta&utm_campaign=claymorphism&utm_content=whennot_webdesign) or [a quick clay-style mockup](https://superdesign.dev/ai-mockup-generator?utm_source=styles&utm_medium=styles_cta&utm_campaign=claymorphism&utm_content=whennot_mockup) and pressure-test the tone before committing.

## Generate a claymorphism UI

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a landing page for a kids' learning app in claymorphism style: pastel lavender and peach palette, cards with 32px rounded corners that look like soft inflated clay, double inset shadows (light top, dark bottom) plus a tinted outer drop shadow, chunky pressable 3D buttons, and friendly inflated blob illustrations.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Apply a claymorphism design system to this UI.

Style tokens:
- Surfaces: pastel fills (#f3e8ff lavender, #ffe8d9 peach, #d9f2e6 mint), never pure white
- Radius: 32px on cards, 24px on buttons, 20px on inputs (roughly 25% of element height)
- The clay shadow stack on every interactive element:
  box-shadow: 0 35px 68px rgba(112,100,176,0.30),
              inset 0 -8px 16px rgba(95,70,140,0.22),
              inset 0 8px 16px rgba(255,255,255,0.65);
  (tint the outer shadow toward each element's hue; never use pure black)
- Buttons get a tighter stack (12/24px outer, 4/8px insets) and press feedback via
  transform: translateY(2px) scale(0.98), never by animating box-shadow
- Text: deep desaturated purple (#3b2d5e) on pastel, minimum 4.5:1 contrast
- Keep a visible 3px solid :focus-visible outline, the soft shadows must not replace it
- Generous padding (2rem cards), single top-left light source across ALL elements
- Containers that are not clickable get the outer shadow only, no insets

Friendly, toy-like, tactile. No sharp corners anywhere, no gradients on surfaces, no glassmorphism blur.

/* via superdesign.dev/styles/claymorphism */
```

## Frequently asked questions

What is the difference between claymorphism and neumorphism?
Neumorphism extrudes elements FROM the background (same color, outer light and dark shadows, low contrast); claymorphism floats elements ON TOP of it (distinct pastel fills, two inset shadows plus a drop shadow). Clay exists largely because [neumorphism](https://superdesign.dev/styles/neumorphism) failed contrast accessibility.

How do you make claymorphism in CSS?
One box-shadow declaration with three values: an outer drop shadow, a dark inset offset up from the bottom, a light inset offset down from the top, plus a border-radius of 20 to 40px. The full annotated recipe is above.

Does claymorphism work with Tailwind CSS?
Yes, with arbitrary values (shadow-[...] and rounded-[32px]), no plugin required; the community [tailwindcss-claymorphism](https://github.com/dulltackle/tailwindcss-claymorphism) plugin adds clay-* utilities if you prefer named classes. Or generate a whole component with [the AI UI generator](https://superdesign.dev/ai-ui-generator?utm_source=styles&utm_medium=styles_cta&utm_campaign=claymorphism&utm_content=faq_tailwind).

Is claymorphism still popular in 2026?
It settled from the 2022 hype into a stable, slightly growing niche: in our 208,000-generation prompt corpus its share more than doubled January to May 2026, from 0.03% to 0.08%, mostly for kids' products, edtech, and illustration-heavy landing pages.

What colors are used in claymorphism?
Pastels with dark desaturated text; shadow colors derived from the surface hue, never pure black. The recipe's working set: lavender #f3e8ff and #c4b5fd surfaces, #3b2d5e ink, shadows tinted toward #7064b0.

Is claymorphism accessible?
More accessible than neumorphism, because real contrast between element and background is possible. The two traps are pastel-on-pastel text and swallowed focus rings; the "when not to use it" section above has the computed numbers.

## Related styles

[Neumorphism →The predecessor it fixed: same softness, but extruded from the page and famously low-contrast.](https://superdesign.dev/styles/neumorphism)[Glassmorphism →The other morphism that survived 2021: translucency and blur instead of inflation.](https://superdesign.dev/styles/glassmorphism)[Skeuomorphism →The grandparent: real materials and textures, where clay keeps only one material.](https://superdesign.dev/styles/skeuomorphism)[Brutalism →The tonal opposite: hard edges and zero softness, useful as the contrast case.](https://superdesign.dev/styles/brutalism)[Minimalist web design →The restraint discipline clay borrows its palette budget from.](https://superdesign.dev/styles/minimalist-web-design)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles), or steal a ready-made starting point from the [prompt library](https://superdesign.dev/library?utm_source=styles&utm_medium=styles_cta&utm_campaign=claymorphism&utm_content=related_library).
