# Glassmorphism

## Why is glassmorphism everywhere again?

Two things changed since [Michal Malewicz coined the term in 2020](https://hype4.academy/articles/design/glassmorphism-in-user-interfaces). First, Apple made material realism the headline again: [Liquid Glass](https://www.apple.com/os/ios/), announced at WWDC in June 2025 and shipped across iOS 26 and macOS Tahoe, is glassmorphism evolved with refraction and motion, and it put "liquid glass vs glassmorphism" into real search demand. Second, the browser story quietly resolved: Safari 18 finally shipped backdrop-filter unprefixed in September 2024, so most older articles describe support constraints that no longer exist.
The style itself never left product chrome. Apple's global nav, Framer's header, and half the dark-mode SaaS landing pages of the last two years all run on the same four CSS properties below.

## How do you make glassmorphism in CSS?

This card is the recipe, live
rgba(255,255,255,0.12) fill, blur(12px) saturate(160%), 1px light border, 16px radius, one soft shadow.

```
/* via superdesign.dev/styles/glassmorphism */
.glass {
  /* the fill: white at 10-15% alpha reads as frost, not fog */
  background: rgba(255, 255, 255, 0.12);
  /* the glass: blur melts the backdrop, saturate keeps colors from going gray */
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Safari before 18 */
  /* the edge: a 1px light border sells the pane and survives forced-colors mode */
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  /* the lift: large soft shadow separates glass from backdrop */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

/* dark glass variant */
.glass-dark {
  background: rgba(17, 25, 40, 0.55);
  border-color: rgba(255, 255, 255, 0.12);
}

/* fallback: no backdrop-filter, go nearly opaque so text stays readable */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: rgba(255, 255, 255, 0.85); }
  .glass-dark { background: rgba(17, 25, 40, 0.92); }
}
```

### Three gotchas the tutorials skip

- Glass needs a busy backdrop. Over a flat single color, blur has nothing to do and the panel just looks washed out. Put a gradient or image behind it.
- backdrop-filter turns the element into a containing block: position: fixed descendants get trapped inside it. This is the classic "my modal broke" bug.
- Blur cost scales with blurred area. Never animate the blur radius, and avoid full-page glass surfaces that repaint on scroll.

### Why these exact values

- The 12px default blur sits in the verified production sweet spot: Apple's nav uses 20px, Framer 10px, Reflect runs 4 to 22px, Resend 25px.
- The 1px light border is an accessibility feature, not decoration: Windows forced-colors mode strips transparency and leaves that border as the only visible edge.
- The saturate(160%) half of the filter is what keeps colors behind the pane from going gray; blur alone reads muddy.

Browser support: Baseline widely available. Chrome and Edge 76+ (2019), Firefox 103+ (2022), Safari 9+ with the -webkit- prefix and unprefixed since Safari 18 (September 2024). Keep the prefix line; it costs nothing and covers older iOS. Ship the @supports fallback anyway so unsupported engines get a readable opaque panel.

## Want to tune it live? The glassmorphism generator

Drag the sliders, watch the card, copy the exact CSS or Tailwind it produces. The contrast badge checks your card text against the worst-case backdrop color, which is the check that decides whether your glass is shippable.
Controls

Blur12pxFill opacity12%Saturation160%Border opacity25%Corner radius16pxShadow strength25%Backdrop

Frosted glass card
Body text over the live backdrop

FAIL 1.4:1

The badge is the card text against the worst-case backdrop color under your current fill, checked at the WCAG 4.5:1 body-text bar. If it fails, raise fill opacity or blur, or keep body text off the glass.

```
/* via superdesign.dev/styles/glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Safari before 18 */
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

/* fallback: no backdrop-filter, go nearly opaque so text stays readable */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {
    background: rgba(255, 255, 255, 0.82);
  }
}
```

[Want the whole page, not just the card? Generate a full glassmorphism UI →](https://superdesign.dev/ai-dashboard-builder?utm_source=styles&utm_medium=styles_cta&utm_campaign=glassmorphism&utm_content=widget_generate_cta)

## What are the best glassmorphism examples?

Every site below was verified live by reading its production CSS, not by eyeballing screenshots. One more worth studying: [Clerk](https://clerk.com/) runs about 25 backdrop-filter rules, mostly 1 to 10px micro-blurs, proof that glass scales down to component level without eating readability.

[Apple (global nav)Live siteApple puts glass on chrome, not content: the nav scrim is nearly opaque with a saturate(180%) blur(20px) boost, so links pass contrast over any product image that scrolls beneath.](https://www.apple.com/)[ReflectLive siteThe canonical dark-glass landing page: 30+ backdrop-filter rules over an aurora gradient the team fully controls, so worst-case text contrast never surprises them.](https://reflect.app/)[Framer (nav)Live siteA brightness(150%) lift inside the filter keeps white nav text legible while colorful portfolio work slides underneath.](https://www.framer.com/)[Resend (hero cards)Live siteA heavy 25px blur turns a busy gradient into a soft color wash, so the panel reads as material rather than noise.](https://resend.com/)[![Glassmorphism Style, a real glassmorphism example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/285ed12a-0b4a-435d-b212-b2dc30cee0cb/8ba9a623-981c-49ae-8ce7-679d477ef084/1767756243811.png) Glassmorphism StyleSuperdesign libraryOur flagship glass item (126.9k views, 1,463 copies): neon accents only work here because the obsidian fill is opaque enough to anchor them.](https://superdesign.dev/library/glassmorphism-style?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism&utm_content=example-card)[![Futuristic SaaS Landing Page, a real glassmorphism example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/efa2aaa5-0358-40b7-b524-ba300874c206/thumbnails/67685751-a2ef-41d0-b06f-04641e4f7eb4.png) Futuristic SaaS Landing PageSuperdesign libraryOne frosted card over one photo: the entire style in a single move, and the cleanest starting prompt to copy.](https://superdesign.dev/library/futuristic-sass-landing-page?utm_source=styles&utm_medium=styles_link&utm_campaign=glassmorphism&utm_content=example-card)

## Is glassmorphism still trending in 2026?

Yes, and we can show it rather than guess: this is what people actually ask design agents for. Across 208,000+ real generations, glassmorphism prompts have been climbing all spring.
Glassmorphism prompt share, 2026
Glassmorphism rose from 7.5% to 9.9% of generations between January and May 2026, used in 7,866 projects (15,725 prompt mentions).
*June is month to date. Share of all Northlight generations whose prompt mentions the style. 7,866 distinct projects, 15,725 prompt mentions total.
Methodology
How we count: numbers come from the prompts of 208,000+ real design generations, January to June 2026. A generation counts as mentioning a style when its prompt contains the style term or a close synonym as a whole word (for example glassmorphic or frosted glass for glassmorphism; the dark mode group counts explicit dark mode and dark theme requests, not every mention of the word dark). One generation counts once even if the term repeats. Distinct projects is the conservative figure: one project can produce many generations. June is month to date, so we show it but do not compare it against closed months. Counts are live and drift slightly day to day.

## When should you not use glassmorphism?

### Text over backdrops you do not control

WCAG 1.4.3 requires 4.5:1 at the worst moment, not on average. A 12% white fill over a user photo can swing from 8:1 contrast to under 2:1 as content scrolls behind it. If users scroll arbitrary content under your glass, you cannot certify contrast. Fix: put body text on a more opaque inner layer, or raise blur and fill opacity until the worst-case backdrop still passes.

### Data-dense screens

Tables, code, and long-form reading on translucent panels produce blur halos around small glyphs. Apple keeps glass on navigation chrome and overlays, never on the reading surface; copy that boundary. Even NN/g's review of Apple's Liquid Glass in iOS 26, ["Liquid Glass Is Cracked"](https://www.nngroup.com/articles/liquid-glass/), found usability regressions where glass meets dense content. If you are building a [dashboard](https://superdesign.dev/ai-dashboard-builder?utm_source=styles&utm_medium=styles_cta&utm_campaign=glassmorphism&utm_content=whennot_dashboard), keep the glass on the sidebar and headers, not the data grid.

### Flat, single-color backgrounds

There is nothing to blur. The panel reads as a gray smudge and you paid the GPU tax for nothing. Try it in the generator above: pick the flat gray backdrop and watch the style die.

### Low-end devices and big surfaces

backdrop-filter re-renders on scroll; a full-height glass sidebar janks on older Android. Never animate blur radius.

### Users who opted out

Honor @media (prefers-reduced-transparency: reduce) with a solid fill, and remember Windows forced-colors mode strips transparency entirely, leaving the 1px border as the only edge. That border is an accessibility feature, not decoration.

Want to see a full page in the style before you commit to coding it? [Prompt-to-design](https://superdesign.dev/prompt-to-design?utm_source=styles&utm_medium=styles_cta&utm_campaign=glassmorphism&utm_content=whennot_prompt_to_design) renders the whole layout from a sentence, glass and all.

## Generate a glassmorphism UI

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a SaaS analytics dashboard in glassmorphism style: frosted glass panels with rgba(255,255,255,0.12) fill, 12px backdrop blur with 160% saturation, 1px rgba(255,255,255,0.25) borders, 16px corner radius, and soft 0 8px 32px shadows, floating over a deep indigo-to-violet mesh gradient. High-contrast white text on the panels, one neon mint accent for primary actions, generous spacing, sidebar plus 4 stat cards plus a line chart.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Use a glassmorphism design system with these tokens:
- Surface: rgba(255,255,255,0.12) fill, backdrop-filter blur(12px) saturate(160%),
  1px rgba(255,255,255,0.25) border, 16px radius, shadow 0 8px 32px rgba(0,0,0,0.25)
- Dark surface variant: rgba(17,25,40,0.55) fill, rgba(255,255,255,0.12) border
- Backdrop: mesh gradient, indigo #4f46e5 to violet #8b5cf6 to deep navy #0f172a;
  never place glass on flat single-color backgrounds
- Text: white #ffffff on dark glass, slate-900 on light glass; body text only on
  surfaces with >= 55% fill opacity so worst-case contrast stays above 4.5:1
- Accent: neon mint #34d399, used only for primary actions and live indicators
- Always pair backdrop-filter with -webkit-backdrop-filter and an @supports
  fallback that raises fill opacity to 85%
- Glass goes on chrome (navs, cards, modals, overlays), never on tables or long-form text

/* via superdesign.dev/styles/glassmorphism */
```

## Frequently asked questions

How do you make glassmorphism in CSS?
Four properties: a semi-transparent rgba background, backdrop-filter: blur(), a 1px translucent border, and a soft box-shadow. The full annotated recipe with fallbacks is above; the generator on this page writes it for you.

What is the difference between glassmorphism and Apple's Liquid Glass?
Glassmorphism is the broad frosted-pane style (static blur, transparency, border). Liquid Glass is Apple's 2025 design language from WWDC25 (iOS 26, macOS Tahoe) that adds refraction, specular highlights, and motion response, so the glass behaves like a physical material instead of a frosted sheet. On the web you can approximate it, but plain glassmorphism is what CSS gives you natively.

What is the difference between glassmorphism and neumorphism?
Neumorphism extrudes soft shapes from the same-colored background using paired light and dark shadows; glassmorphism layers translucent panes over a contrasting colorful backdrop. Neumorphism struggles with contrast by design; glassmorphism only fails when you put text over uncontrolled backdrops.

Is glassmorphism accessible?
It can be, if you treat contrast as worst-case: body text belongs on higher-opacity surfaces (4.5:1 minimum against the lightest and darkest thing that can scroll behind), keep the 1px border for edge definition, and honor prefers-reduced-transparency with a solid fill.

Does backdrop-filter work in all browsers?
Yes, it is Baseline: Chrome and Edge 76+, Firefox 103+, Safari 9+ with the -webkit- prefix (unprefixed since Safari 18). Ship the @supports fallback anyway so unsupported engines get a readable opaque panel.

How do I do glassmorphism in Tailwind?
bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/25 rounded-2xl shadow-lg, with bg-white/80 supports-[backdrop-filter]:bg-white/10 as the fallback pair. Copy the full block above, or generate a whole component with our [AI UI generator](https://superdesign.dev/ai-ui-generator?utm_source=styles&utm_medium=styles_cta&utm_campaign=glassmorphism&utm_content=faq_tailwind).

## Glassmorphism by build type

How the glassmorphism recipe plays out on specific screens, each with a tuned prompt and real generated examples.
[Glassmorphism website →How to build a full glassmorphism website that does not fall apart at scale: glass on the chrome and cards, solid reading surfaces, one recurring accent, plus a copy-paste prompt and real examples.](https://superdesign.dev/styles/glassmorphism/website)[Glassmorphism dashboard →How to apply glassmorphism to a data dashboard without killing legibility: glass on the chrome, opaque surfaces under dense tables and charts, plus a copy-paste prompt and real generated examples.](https://superdesign.dev/styles/glassmorphism/dashboard)[Glassmorphism card →How to build a single glassmorphism card that does not look washed out: a busy backdrop, short copy, one accent, and a copy-paste prompt with a real generated example.](https://superdesign.dev/styles/glassmorphism/card)[Glassmorphism mobile app →How to apply glassmorphism to a mobile app UI, the iOS way: two transparency tiers, a busy backdrop, 44px tap targets, plus a copy-paste prompt and real generated examples.](https://superdesign.dev/styles/glassmorphism/app)[Glassmorphism login →How to apply glassmorphism to a sign-in screen: a frosted auth card over an aurora backdrop, an explicit focus ring for accessibility, and a copy-paste prompt with real generated examples.](https://superdesign.dev/styles/glassmorphism/login)[Glassmorphism pricing →How to apply glassmorphism to a SaaS pricing page: frosted plan cards on an aurora gradient, a featured tier that lifts without breaking the grid, and a copy-paste prompt with real examples.](https://superdesign.dev/styles/glassmorphism/pricing)

## Related styles

[Dark mode UI →Dark glass needs the same surface-tier thinking: elevation by lightening, worst-case contrast checks.](https://superdesign.dev/styles/dark-mode)[Skeuomorphism →The ancestor instinct: make pixels behave like a material. Glass is just the 2020s material of choice.](https://superdesign.dev/styles/skeuomorphism)[Minimalist web design →The restraint discipline that keeps glass on chrome and off the reading surface.](https://superdesign.dev/styles/minimalist-web-design)[Neumorphism →The soft-extrusion sibling that trades backdrops for shadow pairs, and lost the contrast fight glass won.](https://superdesign.dev/styles/neumorphism)[Claymorphism →The other soft 3D survivor: inflated pastel clay instead of frosted panes.](https://superdesign.dev/styles/claymorphism)Liquid glass
Apple's 2025 evolution: refraction, specular highlights, motion response. Dedicated page coming soon.

Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles), or steal a ready-made starting point from the [prompt library](https://superdesign.dev/library?utm_source=styles&utm_medium=styles_cta&utm_campaign=glassmorphism&utm_content=related_library).
