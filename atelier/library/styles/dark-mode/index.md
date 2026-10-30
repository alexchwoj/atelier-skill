# Dark Mode UI

## How do you build a dark mode color system in CSS?

Card on surface-1 (#1e1e1e)
Primary text #e6e6e6 at 15.0:1, secondary #a3a3a3 at 7.4:1. Elevation comes from the lighter surface, not the shadow.
Desaturated accentsurface-2 chip

The token sheet rendered live: #121212 page, #1e1e1e card, off-white text, low-alpha white border, one desaturated accent.

```
/* via superdesign.dev/styles/dark-mode */

:root {
  /* Declare both schemes so the browser styles form controls,
     scrollbars and the canvas correctly */
  color-scheme: light dark;
}

[data-theme="dark"] {
  color-scheme: dark;

  /* SURFACES: never pure black. Elevation = lighter, not shadowed.
     Each tier steps up roughly 4-6% in lightness. */
  --surface-0: #121212;  /* page background (Material Design's dark baseline) */
  --surface-1: #1e1e1e;  /* cards, raised panels */
  --surface-2: #2a2a2a;  /* dropdowns, sticky headers */
  --surface-3: #333333;  /* tooltips, popovers, highest elevation */

  /* TEXT: off-white, never #ffffff (pure white on dark causes halation) */
  --text-primary: #e6e6e6;    /* 15.0:1 on #121212, passes AAA */
  --text-secondary: #a3a3a3;  /* 7.4:1 on #121212, passes AA and AAA */
  --text-disabled: #6b6b6b;   /* 3.5:1, below the 4.5:1 AA body-text bar
                                 on purpose; never use for real content */

  /* ACCENTS: desaturated versions of your light-mode brand colors.
     Take your 500-weight color and use its 300-400 weight instead. */
  --accent: #8ab4f8;          /* desaturated blue, 8.9:1 on #121212 */
  --accent-pressed: #aecbfa;
  --danger: #f28b82;          /* desaturated red, 7.8:1 on #121212 */

  /* BORDERS: low-alpha white reads cleaner than solid gray on dark */
  --border: rgba(255, 255, 255, 0.12);

  /* SHADOWS barely register on dark backgrounds; always pair a shadow
     with a lighter surface tier */
  --shadow-raised: 0 1px 3px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* Respect the OS preference when the user has not chosen a theme */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
    --surface-0: #121212;
    --surface-1: #1e1e1e;
    --surface-2: #2a2a2a;
    --surface-3: #333333;
    --text-primary: #e6e6e6;
    --text-secondary: #a3a3a3;
    --text-disabled: #6b6b6b;
    --accent: #8ab4f8;
    --accent-pressed: #aecbfa;
    --danger: #f28b82;
    --border: rgba(255, 255, 255, 0.12);
    --shadow-raised: 0 1px 3px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4);
  }
}

body {
  background: var(--surface-0);
  color: var(--text-primary);
}

.card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-raised);
}
```

### The numbers next to the tokens are computed, not vibes

- Every contrast ratio in the snippet was computed with the WCAG 2.x relative-luminance formula against the stated background: #e6e6e6 on #121212 is 15.0:1, #a3a3a3 is 7.4:1, the #8ab4f8 accent is 8.9:1, #f28b82 danger is 7.8:1.
- --text-disabled (#6b6b6b, 3.5:1) sits below the 4.5:1 AA bar on purpose: it exists for genuinely disabled states and must never carry real content.
- Accent rule of thumb: take your light-mode 500-weight brand color and ship its 300 to 400 weight on dark. Fully saturated hues visually vibrate against dark surfaces.
- Test secondary text against --surface-3 (your lightest tier), not the page background: opacity-based muted text silently fails on elevated surfaces.

Browser support: CSS custom properties and prefers-color-scheme work in every modern browser (the media query landed in Chrome 76, Firefox 67, Safari 12.1, all 2019). color-scheme is supported since Safari 13 and Chrome 81. The newer light-dark() function (Baseline 2024: Chrome 123, Safari 17.5, Firefox 120) can replace the duplicated media-query block, but the pattern above is the safe default. Fallback behavior: browsers that ignore the media query simply get your light theme, nothing breaks.

## Who is shipping great dark mode UI right now?

All five famous sites were verified dark by default by reading their theme-color metas and page CSS, not from memory (notably, Cursor and Vercel respect system preference and are NOT dark by default, so they are not on this list). Dark dashboards are the most-requested dark UI in our corpus; if that is what you are building, start with [the AI dashboard builder](https://superdesign.dev/ai-dashboard-builder?utm_source=styles&utm_medium=styles_cta&utm_campaign=dark-mode&utm_content=examples_dashboard).

[LinearLive siteNear-black #08090a canvas with elevation done entirely through faint surface lightening and 1px white-alpha borders, so the product feels native to a developer's late-night terminal setup.](https://linear.app/)[SupabaseLive siteThe base is Material's classic #1E1E1E dark gray, and the brand green stays desaturated enough to pass contrast instead of glowing.](https://supabase.com/)[RailwayLive siteThe dark is hue-tinted purple (#13111C): proof that dark does not mean gray, the brand lives in the background color itself.](https://railway.app/)[NetflixLive siteContent-forward dark mode: the dark chrome disappears so poster art and thumbnails carry all the color. Also the legitimate use of a true-black base.](https://www.netflix.com/)[SynapseSuperdesign libraryDeep black base with violet and cyan neon accents used sparingly: how far you can push accent energy when the surface stays quiet.](https://superdesign.dev/library/synapse?utm_source=styles&utm_medium=styles_link&utm_campaign=dark-mode&utm_content=example-card)[![Disruptor Beta Launch, a real dark mode ui example](https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/e01ba607-08eb-4cdb-9d84-f48f12f32523.jpeg) Disruptor Beta LaunchSuperdesign libraryA #121212 base punctuated by a single volt #CCFF00 accent: one loud color against a calm dark system.](https://superdesign.dev/library/disruptor-beta-launch?utm_source=styles&utm_medium=styles_link&utm_campaign=dark-mode&utm_content=example-card)

## How much do people actually want dark mode?

More every month: across 208,000+ real generations, explicit dark mode and dark theme requests climbed through the spring and now sit among the most-requested styles on the platform.
Dark Mode UI prompt share, 2026
Explicit dark mode and dark theme requests rose from 9.1% to 11.7% of generations January to May 2026, used in 10,578 projects (21,586 prompt mentions).
*June is month to date. Share of all Northlight generations whose prompt mentions the style. 10,578 distinct projects, 21,586 prompt mentions total.
Methodology
How we count: numbers come from the prompts of 208,000+ real design generations, January to June 2026. A generation counts as mentioning a style when its prompt contains the style term or a close synonym as a whole word (for example glassmorphic or frosted glass for glassmorphism; the dark mode group counts explicit dark mode and dark theme requests, not every mention of the word dark). One generation counts once even if the term repeats. Distinct projects is the conservative figure: one project can produce many generations. June is month to date, so we show it but do not compare it against closed months. Counts are live and drift slightly day to day.

## When should you not use dark mode?

### Long-form reading

Light text on dark backgrounds produces halation, a glow that blurs letterforms, and it hits people with astigmatism hardest (a common condition). This is why reading-first products like Kindle and most news sites default to light. If your product is paragraphs, dark mode should be an option, never the default.

### Bright environments

Dark screens turn into mirrors in sunlight, and a light-adapted pupil struggles with dark UIs. Field tools, point-of-sale, anything used outdoors: default light.

### White-background product imagery

E-commerce catalogs shot on white become floating white boxes on #121212. If you cannot re-shoot or knockout your imagery, dark mode will fight your content.

### Your brand color fails on dark

Saturated brand blues and reds that pass on white often fall under 4.5:1 on #121212 (and fully saturated colors visually vibrate on dark). If marketing will not allow a desaturated variant, you cannot ship an accessible dark theme.

### The contrast traps, with numbers

Pure #fff on pure #000 is 21:1, which sounds great and reads terribly (halation, eye strain in low light). Opacity-based secondary text silently drops below 4.5:1 when it sits on elevated surfaces: test against --surface-3, your lightest tier, not the page background. Shadows alone do not communicate elevation on dark, so modals without surface lightening visually merge with the page. And never ship filter: invert(1) as dark mode, it inverts your images too.

Undecided on the default? [Mock both themes](https://superdesign.dev/ai-mockup-generator?utm_source=styles&utm_medium=styles_cta&utm_campaign=dark-mode&utm_content=whennot_mockup) before committing; it is a one-prompt experiment instead of a sprint.

## Generate a dark mode ui UI

This prompt is tuned to the exact tokens in the recipe above. Copy it, paste it into the prompt box, and you get a full UI in this style on an infinite canvas. Free to start.
Design a dark mode analytics dashboard for a SaaS product. Dark gray #121212 base (never pure black) with elevation tiers: #1e1e1e cards, #2a2a2a dropdowns. Off-white #e6e6e6 primary text, #a3a3a3 secondary. One desaturated accent color, 1px rgba(255,255,255,0.12) borders instead of heavy shadows, WCAG AA contrast everywhere.


Paste this tuned style prompt into your coding agent. It carries the same tokens as the recipe, so what the agent builds matches what this page teaches.
style prompt

```
Apply a dark mode design system to this UI.

Tokens:
- Surfaces (elevation = lighter, never shadows alone):
  --surface-0 #121212 page, --surface-1 #1e1e1e cards,
  --surface-2 #2a2a2a overlays, --surface-3 #333333 tooltips
- Text: #e6e6e6 primary, #a3a3a3 secondary, #6b6b6b disabled only.
  Never pure #ffffff text.
- Accent: desaturate the brand color to its 300-400 weight
  (e.g. #8ab4f8 style blue); danger #f28b82.
- Borders: rgba(255,255,255,0.12) 1px instead of gray dividers.
- Shadows: pair every shadow with a lighter surface tier.

Rules:
- color-scheme: dark on the root so native controls match.
- Respect prefers-color-scheme; persist manual toggle in localStorage
  via [data-theme] on <html>.
- Every text/background pair must pass WCAG AA 4.5:1, checked against
  the LIGHTEST surface it appears on, not just the page background.
- No saturated hues at full strength on dark surfaces; no #000 base;
  no filter: invert() anywhere.

/* via superdesign.dev/styles/dark-mode */
```

## Frequently asked questions

What background color should dark mode use?
A dark gray between #121212 and #1E1E1E, the range Material Design standardized and that sites like Supabase (#1E1E1E) and Linear (#08090a) ship today. Reserve true #000 for OLED battery-saver themes and media viewers.

Is pure black bad for dark mode?
Usually, yes. White text on #000 hits 21:1 contrast, which triggers halation, a glow around letters that blurs them and tires eyes in low light. Dark gray keeps contrast high (15:1 with #e6e6e6) without the bloom. The exception: OLED-first media UIs like Netflix, where black makes content pop and saves power.

How do I make dark mode accessible (WCAG)?
Keep body text at 4.5:1 or better and UI components at 3:1 (WCAG 1.4.3 and 1.4.11), test text against your lightest elevated surface rather than the page background, avoid opacity-based muted text, and remember WCAG applies to whichever theme is showing: shipping a dark option does not exempt your light theme or vice versa.

Should dark mode be the default?
Match your audience and content. Developer tools and dashboards increasingly default dark (Linear, Railway, Supabase do). Reading-heavy and e-commerce products should default light and respect prefers-color-scheme so the OS decides.

How does dark mode work in Tailwind CSS?
Style light first, then layer dark: variants. Out of the box the dark: variant follows the OS via prefers-color-scheme; set darkMode: 'selector' (v3) or re-declare the variant with @custom-variant (v4) to drive it from a class or data attribute for a manual toggle. The full config is in the recipe above.

What is the difference between dark mode and a dark UI aesthetic?
Dark mode is a switchable theme of the same product (two token sets, one structure). A dark aesthetic is a single permanent art direction, like the neon-on-black landing pages in our library. This page covers the system; the aesthetic is a creative choice on top of it.

## Related styles

[Glassmorphism →Dark glass needs these same surface tiers underneath the blur.](https://superdesign.dev/styles/glassmorphism)[Brutalism →Terminal UI, the always-dark cousin: mono fonts on near-black, no theme toggle in sight.](https://superdesign.dev/styles/brutalism)[Minimalist web design →Resend-style quiet dark is minimalism on the inverted palette.](https://superdesign.dev/styles/minimalist-web-design)[Bento grid →The #161617 dark bento cell variant runs on this exact token logic.](https://superdesign.dev/styles/bento-grid)[Neumorphism →Its paired-shadow trick breaks on dark backgrounds unless both shadows are retuned: the contrast case.](https://superdesign.dev/styles/neumorphism)
Browse every style in the [design styles encyclopedia](https://superdesign.dev/styles), or steal a ready-made starting point from the [prompt library](https://superdesign.dev/library?utm_source=styles&utm_medium=styles_cta&utm_campaign=dark-mode&utm_content=related_library).
