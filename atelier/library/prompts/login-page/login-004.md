# Fivefold — Book a Call (Login 004) · Fivefold Prompt

## LAYER 0 — META

```yaml
asset_id: auth-booking-split-01
category: login-page / booking
aesthetic: warm-cream editorial · split video panel + greige form
industry: ai-studio / saas / consulting
tone: warm · trustworthy · unhurried
preview_video: https://cdn.5sdesign.art/projects/login-004.mp4
license: free
version: 1.0
last_updated: 2026-07-13
notes: Single-screen booking page — cinematic rounded video panel on the
 left (five stars, serif white headline), warm cream form on the right
 with greige rounded fields, two pill radio groups with hand-built
 indicator dots, one coal CTA whose label lifts and arrow slides on
 hover. No animation library, no icon library; two inline SVGs total.
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-screen "Book a call" page** for **Fivefold** — a split layout with a cinematic video panel on the left and a booking form on the right.

Use the following **pinned** tech stack (do not substitute):

- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS 4** (via `@tailwindcss/vite` plugin, tokens defined with `@theme` in `index.css`)
- No animation library, no icon library — all icons are inline SVG defined in this prompt.

The aesthetic is **warm-cream editorial: a soft cream canvas, greige rounded form fields, pill-shaped radio options, one dark coal CTA, and a full-height rounded video panel carrying a white serif headline**. `#f7f2e9` is the global background. Default text color is `#2b2b2b`. **Do not use purple, indigo, blue, or neon colors anywhere.**

Everything lives in one component: `src/App.tsx`. Page `<title>`: `Book a call`. Files: `index.html`, `src/main.tsx` (StrictMode + createRoot), `src/index.css`, `src/App.tsx`. Dev server port **6050**.

---

## LAYER 2 — FONTS

Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

- **Heading font:** `Instrument Serif` (400 only — used exclusively for the video-panel headline)
- **Body font:** `Inter` (400/500/600 — everything else)

---

## LAYER 3 — COLOR SYSTEM

Define in `index.css` with Tailwind v4 `@theme`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Instrument Serif", ui-serif, Georgia, serif;

  --color-cream: #f7f2e9;  /* page background */
  --color-field: #e9e4d9;  /* inputs, textarea, radio pills */
  --color-ink:   #2b2b2b;  /* primary text */
  --color-muted: #6f6c66;  /* placeholders, footer note */
  --color-coal:  #262019;  /* CTA button */
}

html,
body {
  background: var(--color-cream);
}
```

Additional literal values used in classes (do not round):
- Pill hover background: `#e2ddd1`
- Unselected radio dot: `#cfcabf`
- Focus ring on fields: `ring-ink/15`

---

## LAYER 4 — CUSTOM CSS UTILITIES

None. The `@theme` block above is the entire stylesheet — every other style is a Tailwind utility in JSX.

---

## LAYER 5 — BACKGROUND ASSET

The left panel plays a looping video. Download it and serve locally — do not hotlink:

- `https://cdn.5sdesign.art/projects/login-004/hero.mp4` → save to `public/hero.mp4`

```html
<video src="/hero.mp4" autoPlay muted loop playsInline
  className="absolute inset-0 h-full w-full object-cover" />
```

- No overlay. Stacking: video first, then the two absolute text blocks on top.
- The panel's `bg-black` covers buffering.

---

## LAYER 6 — SHARED COMPONENTS

React state: two `useState` strings — `service` (default `"AI Assessment"`) and `challenge` (default `"Too many manual tasks"`). Form `onSubmit` only calls `e.preventDefault()`.

### `Star` — rating glyph (13×13, white fill)

```html
<svg width="13" height="13" viewBox="0 0 24 24" fill="white" aria-hidden="true">
  <path d="M12 1.6l3.1 6.9 7.5.8-5.6 5.1 1.5 7.4L12 18l-6.5 3.8 1.5-7.4L1.4 9.3l7.5-.8L12 1.6z" />
</svg>
```

### `RadioPill` — used by both question groups

- `<label>`: `flex cursor-pointer items-center gap-2.5 rounded-full bg-field px-4.5 py-2.5 transition-colors hover:bg-[#e2ddd1]`
- Native `<input type="radio">` visually hidden with `sr-only`; label click toggles state.
- Indicator dot, 14px: `grid size-3.5 shrink-0 place-items-center rounded-full transition-all`
  - Checked: add `border-[1.5px] border-ink bg-white`, and render an inner `<span className="size-1.5 rounded-full bg-ink" />`
  - Unchecked: add `bg-[#cfcabf]`, no inner dot.
- Label text: `text-[13.5px] font-medium text-ink`

---

## LAYER 7 — SECTIONS

Root:

```
<div className="min-h-screen bg-cream font-sans">
  <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col gap-8 p-5 lg:flex-row lg:gap-14 lg:p-8">
    [LEFT — video panel]
    [RIGHT — form]
  </div>
</div>
```

### SECTION 1 — LEFT · VIDEO PANEL

**Container**
- `relative min-h-[520px] w-full overflow-hidden rounded-[24px] bg-black lg:min-h-0 lg:w-[44%]`

**Background**
- The looping video from Layer 5.

**Element 1 · Rating block**
- Position: `absolute inset-x-0 top-[9%] flex flex-col items-center gap-2.5`
- Row of 5 `Star` glyphs: `flex items-center gap-1.5`
- Below the stars: `<p className="text-[13px] font-medium text-white/90">` — text: **"Helped over 100+ businesses"**

**Element 2 · Headline block**
- Position: `absolute inset-0 flex flex-col items-center justify-center px-10 text-center`
- Headline: `<h1 className="font-serif text-[38px] leading-[1.05] text-white lg:text-[46px]">` — text with a hard line break:

```
Turn confusion into
clarity, today.
```

- Subline: `<p className="mt-6 max-w-[340px] text-[14px] leading-relaxed text-white/85">` — text: **"Book a free 30-minute assessment and we'll show you exactly where AI can save you time and money."**

### SECTION 2 — RIGHT · BOOKING FORM

**Container**
- Wrapper: `flex w-full items-center lg:w-[56%]`
- Form: `mx-auto w-full max-w-[600px] py-4`

**Element 1 · Name input**
- `<input type="text" required placeholder="Name*" />`
- Classes: `w-full rounded-[14px] bg-field px-5 py-4 text-[14px] text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-ink/15`

**Element 2 · Email input**
- `<input type="email" required placeholder="Email*" />`
- Same classes as Name plus `mt-4`.

**Element 3 · Services question**
- Label: `<p className="mt-9 text-[15px] font-medium text-ink">` — text: **"What services are you interested in?"**
- Options wrapper: `mt-4 flex flex-wrap gap-x-3 gap-y-3`
- Radio pills (radio group name `service`), options in this exact order:
  1. **AI Assessment** (default selected)
  2. **Workflow Automation**
  3. **Custom AI Tools**
  4. **Training & Support**
  5. **Implementing AI**
  6. **All of the above**

**Element 4 · Challenge question**
- Label: `<p className="mt-9 text-[15px] font-medium text-ink">` — text: **"What's your biggest automation challenge?"**
- Options wrapper: `mt-4 flex flex-wrap gap-x-3 gap-y-3`
- Radio pills (radio group name `challenge`), options in this exact order:
  1. **Too many manual tasks** (default selected)
  2. **Unclear where to start**
  3. **Previous solutions didn't work**
  4. **Need to scale operations**

**Element 5 · Message textarea**
- `<textarea placeholder="Tell us about your business.." />` (two dots, verbatim)
- Classes: `mt-10 h-[150px] w-full resize-none rounded-[14px] bg-field px-5 py-4 text-[14px] text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-ink/15`

**Element 6 · CTA button**
- `<button type="submit">`
- Classes: `group relative mt-9 h-[54px] w-full overflow-hidden rounded-[14px] bg-coal text-[15px] font-medium text-white transition-colors hover:bg-black`
- Inner span: `relative inline-flex items-center gap-2.5 transition-transform duration-300 group-hover:-translate-y-[2px]`
- Text: **"Book a call"** followed by this exact arrow SVG (15×15, stroke currentColor, width 2, round caps/joins), which gets `transition-transform duration-300 group-hover:translate-x-1`:

```html
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M5 12h14" />
  <path d="M12 5l7 7-7 7" />
</svg>
```

**Element 7 · Footer note**
- `<p className="mt-5 text-center text-[12.5px] text-muted">`
- Text: **"By submitting, you agree to our "** + link `<a href="#" className="underline underline-offset-2">` with text **"terms of service."**

**Copy** (all strings, in order of appearance, verbatim)

```
Helped over 100+ businesses
Turn confusion into
clarity, today.
Book a free 30-minute assessment and we'll show you exactly where AI can save you time and money.
Name*
Email*
What services are you interested in?
AI Assessment
Workflow Automation
Custom AI Tools
Training & Support
Implementing AI
All of the above
What's your biggest automation challenge?
Too many manual tasks
Unclear where to start
Previous solutions didn't work
Need to scale operations
Tell us about your business..
Book a call
By submitting, you agree to our terms of service.
```

---

## LAYER 8 — ANIMATION STANDARDS

No animation library and no entrance choreography. The page's motion budget is three CSS transitions:

- Radio pills: `transition-colors` on hover, `transition-all` on the indicator dot.
- Fields: `focus:ring-2 ring-ink/15` (instant, ring only).
- CTA hover: background deepens to black, the inner label lifts `-2px`, and the arrow slides `+4px` — both at `duration-300`.

---

## LAYER 9 — RESPONSIVE STANDARDS

- **Mobile-first.** Below `lg` the layout stacks: video panel on top (`min-h-[520px]`), form below, page padding `p-5`, gap `gap-8`.
- **Desktop (`lg:`):** side-by-side row — video `44%` width and full column height, form `56%` vertically centered, page padding `p-8`, gap `gap-14`.
- Headline scales `text-[38px]` → `lg:text-[46px]`. No other breakpoint overrides.

---

## LAYER 10 — ICON SET

**No icon library.** Two inline SVGs total: the 13×13 white star (Layer 6) and the 15×15 CTA arrow (Layer 7). Reject any request to install lucide-react or similar.

---

## LAYER 11 — REPRODUCE-EXACTLY CLAUSE

Reproduce exactly. Do not:
- Substitute fonts ("similar to Instrument Serif" is not Instrument Serif).
- Round color values ("close to #f7f2e9" is not #f7f2e9).
- Shorten or rephrase copy — every string in Layer 7 is verbatim, including "Tell us about your business.." with two dots.
- Replace the inline SVGs with an icon library.
- Add sections, navbars, footers, or animations not specified here.
- Swap the video for a stock URL — download the CDN file above to `public/hero.mp4` and serve it locally.

If a constraint conflicts with framework limitations, clamp to the nearest valid value and note the substitution as a comment — do not silently change.

---

*Fivefold · auth-booking-split-01 · Fivefold prompt library · 2026-07-13*
