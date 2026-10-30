# audit

A technical quality check (accessibility, performance, theming, responsive behaviour, implementation integrity) with a score and a prioritised list. Report only; fix nothing unless asked.

## Scan

Run `node scripts/lint.mjs <target>` and `node scripts/shot.mjs <target> --full`, read the code, and check each area.

**1. Accessibility**
- Contrast of every text, icon and focus pair in every state, including over images.
- Keyboard: every action reachable, visible `:focus-visible`, logical order, no traps, `Esc` closes overlays, skip link.
- Semantics: one `h1`, ordered headings, landmarks, real buttons and links, labels on every field, `alt` text, `aria-live` for async status, `lang`.
- Motion: reduced-motion paths, no content hidden without JavaScript, pause controls on loops.
- Targets: 44px on touch, spacing between adjacent targets.

**2. Performance**
- LCP element (usually the hero image or heading): not lazy, `fetchpriority="high"`, right-sized, preloaded font if it is text.
- Layout shift: `width`/`height` or `aspect-ratio` on media, fonts with metric fallbacks, no late-injected banners above content.
- Weight: total JS, unused CSS, image formats (AVIF/WebP), video size, third-party scripts.
- Runtime: long tasks, scroll handlers not passive, animations on layout properties.

**3. Theming**
- Colours and fonts through tokens, no stray literals; dark mode derived and checked; browser surfaces themed (`::selection`, `caret-color`, `scrollbar-color`, `accent-color`).

**4. Responsive**
- No horizontal scroll from 320 to 1920; the first screen at 1280x800 and 390x844; containers capped at wide sizes; tables and code blocks handled on phones; touch input, not just narrow screens.

**5. Implementation integrity**
- Does the shipped page match what it claims (working forms, real links, real states)? Fake success messages, dead buttons, placeholder text left in, invented figures, console errors.

## Report

```
Audit score: NN/100 (Accessibility NN/25 · Performance NN/25 · Theming NN/15 · Responsive NN/20 · Integrity NN/15)
```

- **Executive summary:** three lines.
- **Findings by severity** (P0 to P3, as in `commands/critique.md`): the element (`file:line`), the problem, the standard it breaks (WCAG criterion, Core Web Vital), the fix.
- **Patterns:** issues that repeat across the codebase and want a systemic fix (a token, a shared component).
- **What is solid:** two or three things done right.
- **Next commands:** which of `harden`, `adapt`, `optimize`, `polish` to run, in order.
