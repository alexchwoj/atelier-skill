# Login 001 — 2-Column Dark Sign-in · Fivefold Prompt

```yaml
asset_id: login-001-static-2col-01
category: login-page
aesthetic: editorial-dark · two-column · video-right
industry: generic / saas / studio
tone: warm · personal · "welcome back"
preview_video: https://cdn.5sdesign.art/projects/login-001.mp4
license: standard
version: 1.0
last_updated: 2026-05-23
notes: Static HTML + CSS + vanilla JS. NO framework, NO build tool.
 Two-column layout: dark form panel (5fr) + looping video panel (7fr) on wide screens.
 Handwritten eyebrow + Instrument Serif italic accent on "again".
```

---

## LAYER 1 — OPENING DECLARATION

Build a **single-page sign-in screen** for **Fivefold** — a generic, brand-warm "welcome back" login. Tagline visual: a handwritten *Welcome back !* eyebrow over an editorial display heading with a gradient-orange italic accent.

Use the following **pinned** tech stack (do not substitute):

- **HTML5 + CSS3** — single `index.html`, single `style.css`. **No framework.**
- **Zero build tool** — no Vite, no webpack, no PostCSS. Open `index.html` in a browser and it works.
- **Inline vanilla JavaScript** — at the bottom of `index.html`, for 3 small interactions only.
- **No JS framework** (no React, no Vue, no Alpine).
- **Three Google Fonts** loaded via one stylesheet request.

The aesthetic is **editorial dark warmth** — `#0F0F11` global background, near-black `#131316` form panel, a single warm orange `#F37029` accent used for the CTA, link, checkbox, and gradient on a single italic word. The right column plays a looping silent video as the brand's visual anchor — no text overlay, no captions.

**Do not use:** SaaS gradients (purple/blue), neon, framer-motion, React, dark mode toggle (this IS dark), card with rounded outer container floating on a colored background (the page is full-bleed), emoji, drop shadows beyond `0 8px 24px rgba(0,0,0,0.4)` on the CTA.

---

## LAYER 2 — FONTS

Load all 3 fonts in **one stylesheet request** in `<head>` of `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Caveat:wght@500;600;700&family=Instrument+Serif:ital@1&display=swap"
  rel="stylesheet"
/>
```

Roles:

| Font | Weight | Role |
|---|---|---|
| **DM Sans** | 400 / 500 / 600 / 700 / 800 + italic 400 | Body, heading, button, link, input |
| **Caveat** | 500 / 600 / 700 | Handwritten eyebrow `Welcome back !` |
| **Instrument Serif** | italic 400 only | Accent word `again` (gradient orange) |

Body default:

```css
body {
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
  background: var(--bg-dark);
  color: var(--text);
  margin: 0;
  min-height: 100dvh;
}
```

---

## LAYER 3 — DESIGN TOKENS

```css
:root {
  --bg-dark:       #0F0F11;
  --panel-dark:    #131316;
  --input-bg:      #1B1B1F;
  --input-border:  #2A2A2F;
  --text:          #FFFFFF;
  --text-muted:    #9A9AA1;
  --text-soft:     #C9C9CE;
  --accent:        #F37029;   /* warm orange */
  --accent-hover:  #FF7E36;
  --accent-soft:   #FF9A58;   /* gradient stop for "again" */
  --radius-card:   28px;       /* kept for potential card use; layout is full-bleed */
  --radius-input:  10px;
  --radius-btn:    10px;
}
```

---

## LAYER 4 — ANIMATION

No animation library. Three vanilla JS interactions only (see Layer 7):

1. **Auto-year** — `[data-year]` element receives `new Date().getFullYear()` on load.
2. **Password toggle** — `.eye-btn[data-toggle-password]` swaps `<input type="password">` ↔ `<input type="text">`, swaps icon, updates `aria-label`.
3. **Submit feedback** — intercept form submit, button label becomes `Signing in…` for 1.4s, then resets. No backend wiring.

CSS transitions only on:
- Input focus border: `border-color 0.2s ease` (idle `--input-border` → focus `--accent`).
- CTA hover: `background-color 0.2s ease` + `transform 0.15s ease` (`translateY(-1px)`).
- Eye icon swap: `opacity 0.15s ease`.

No keyframes. No reveal animations. The page is meant to feel composed and still.

---

## LAYER 5 — BACKGROUND ASSETS

**Video panel (right column):**

```html
<video
  class="panel__video"
  autoplay
  muted
  loop
  playsinline
  preload="auto"
  src="https://cdn.5sdesign.art/projects/Login-001/login-001.mp4"
></video>
```

`object-fit: cover; position: absolute; inset: 0;` so the video fills the entire right panel regardless of aspect ratio.

Fallback while loading: panel background is `#000` (pure black), so the page never flashes white.

**Logo (white-only wordmark):**

```html
<img
  class="brand__logo"
  src="logo/logo-white.svg"
  alt="Fivefold"
  height="32"
  width="auto"
/>
```

Note the path is relative — buyer ships the SVG inside a `logo/` folder beside `index.html`. **Buyer supplies their own logo SVG** matching the white-on-transparent wordmark format (any aspect ratio works; height locked at 32px on desktop, 28px on mobile).

---

## LAYER 6 — SHARED COMPONENTS / CSS PATTERNS

### Layout (CSS Grid)

```css
.shell {
  display: grid;
  min-height: 100dvh;
  background: var(--bg-dark);
}

/* Wide: 5fr (form, narrower) : 7fr (video, wider) */
@media (min-width: 1200px) {
  .shell { grid-template-columns: 5fr 7fr; }
}

/* Medium: 1fr : 1fr */
@media (min-width: 860px) and (max-width: 1199px) {
  .shell { grid-template-columns: 1fr 1fr; }
}

/* Mobile: stacked — video on top (~38vh), form below */
@media (max-width: 859px) {
  .shell { grid-template-rows: 38vh auto; grid-template-columns: 1fr; }
  .panel--media { order: -1; }
  .panel--dark  { order:  1; }
  .btn-primary  { width: 100%; }
}
```

### Field component

```html
<label class="field">
  <span class="field__label">Email</span>
  <input class="input" type="email" required placeholder="you@studio.com" />
</label>

<label class="field field--password">
  <span class="field__label">Password</span>
  <input class="input" type="password" required placeholder="••••••••" />
  <button type="button" class="eye-btn" data-toggle-password aria-label="Show password">
    <!-- Eye + Eye-off SVGs inside, swap via .is-visible -->
  </button>
</label>
```

```css
.input {
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-input);
  padding: 14px 16px;
  color: var(--text);
  font: inherit;
  transition: border-color 0.2s ease;
}
.input::placeholder { color: var(--text-muted); }
.input:focus { outline: none; border-color: var(--accent); }
```

### Accent word "again" — gradient italic

```css
.title__accent {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  background: linear-gradient(90deg, var(--accent) 0%, var(--accent-soft) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

### Custom checkbox

Native `<input type="checkbox">` is `position: absolute; opacity: 0` (still focusable). Style the visible `.checkbox__box` div:

```css
.checkbox__box {
  width: 18px; height: 18px;
  border: 1.5px solid var(--input-border);
  border-radius: 4px;
  background: var(--input-bg);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.checkbox input:checked + .checkbox__box {
  background: var(--accent);
  border-color: var(--accent);
}
.checkbox input:checked + .checkbox__box svg { opacity: 1; }
.checkbox__box svg { opacity: 0; width: 12px; height: 12px; color: white; }
```

---

## LAYER 7 — DOM STRUCTURE (verbatim)

`index.html` skeleton (head omitted — see Layer 2 for fonts):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sign in — Fivefold</title>
    <link rel="stylesheet" href="style.css" />
    <!-- Google Fonts link from Layer 2 -->
  </head>

  <body>
    <main class="shell">
      <!-- LEFT: dark form panel -->
      <section class="panel panel--dark">
        <header class="brand">
          <img class="brand__logo" src="logo/logo-white.svg" alt="Fivefold" />
        </header>

        <div class="form-wrap">
          <p class="eyebrow">Welcome back !</p>
          <h1 class="title">
            Sign in to your account, <span class="title__accent">again</span>
          </h1>
          <p class="subtitle">
            Pick up where you left off — your projects, files, and preferences are right where you saved them.
          </p>

          <form class="form" data-form>
            <label class="field">
              <span class="field__label">Email</span>
              <input class="input" type="email" required placeholder="you@studio.com" autocomplete="email" />
            </label>

            <label class="field field--password">
              <span class="field__label">Password</span>
              <input class="input" type="password" required placeholder="••••••••" autocomplete="current-password" />
              <button type="button" class="eye-btn" data-toggle-password aria-label="Show password">
                <!-- Inline SVG eye + eye-off, see Layer 8 for paths -->
              </button>
            </label>

            <div class="row-between">
              <label class="checkbox">
                <input type="checkbox" />
                <span class="checkbox__box">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M4 10l4 4 8-8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="checkbox__label">Remember me</span>
              </label>
              <a class="link" href="#">Forgot Password ?</a>
            </div>

            <button class="btn-primary" type="submit" data-submit>
              <span class="btn-primary__label">Sign in</span>
              <svg class="btn-primary__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </form>

          <p class="signup">
            Don't have an account ? <a class="link" href="#">Sign Up</a>
          </p>
        </div>

        <footer class="copyright">
          Copyright © <span data-year></span> Fivefold
        </footer>
      </section>

      <!-- RIGHT: looping silent video -->
      <section class="panel panel--media">
        <video
          class="panel__video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          src="https://cdn.5sdesign.art/projects/Login-001/login-001.mp4"
        ></video>
      </section>
    </main>

    <script>
      // 1. Auto-year
      const y = document.querySelector('[data-year]');
      if (y) y.textContent = new Date().getFullYear();

      // 2. Password toggle
      document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const input = btn.parentElement.querySelector('input');
          const visible = input.type === 'text';
          input.type = visible ? 'password' : 'text';
          btn.classList.toggle('is-visible', !visible);
          btn.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
        });
      });

      // 3. Submit feedback (no backend)
      const form = document.querySelector('[data-form]');
      const submitBtn = document.querySelector('[data-submit]');
      const labelEl = submitBtn?.querySelector('.btn-primary__label');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!labelEl) return;
        const original = labelEl.textContent;
        labelEl.textContent = 'Signing in…';
        submitBtn.disabled = true;
        setTimeout(() => {
          labelEl.textContent = original;
          submitBtn.disabled = false;
        }, 1400);
      });
    </script>
  </body>
</html>
```

---

## LAYER 8 — STYLE.CSS (full file, verbatim)

```css
:root {
  --bg-dark: #0F0F11;
  --panel-dark: #131316;
  --input-bg: #1B1B1F;
  --input-border: #2A2A2F;
  --text: #FFFFFF;
  --text-muted: #9A9AA1;
  --text-soft: #C9C9CE;
  --accent: #F37029;
  --accent-hover: #FF7E36;
  --accent-soft: #FF9A58;
  --radius-input: 10px;
  --radius-btn: 10px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
  background: var(--bg-dark);
  color: var(--text);
  min-height: 100dvh;
  -webkit-font-smoothing: antialiased;
}

.shell { display: grid; min-height: 100dvh; }

/* Wide */
@media (min-width: 1200px) { .shell { grid-template-columns: 5fr 7fr; } }
/* Medium */
@media (min-width: 860px) and (max-width: 1199px) { .shell { grid-template-columns: 1fr 1fr; } }
/* Mobile */
@media (max-width: 859px) {
  .shell { grid-template-columns: 1fr; grid-template-rows: 38vh auto; }
  .panel--media { order: -1; }
}
@media (max-width: 420px) {
  .shell { grid-template-rows: 30vh auto; }
  .eyebrow { font-size: 22px; }
}

/* Left dark panel */
.panel--dark {
  background: var(--panel-dark);
  padding: clamp(28px, 4vw, 64px) clamp(24px, 5vw, 88px) clamp(24px, 3vw, 48px);
  display: flex; flex-direction: column;
  position: relative;
}
.brand { margin-bottom: clamp(40px, 5vw, 80px); }
.brand__logo { height: 32px; width: auto; display: block; }
@media (max-width: 859px) { .brand__logo { height: 28px; } }

.form-wrap { max-width: 460px; width: 100%; }

.eyebrow {
  font-family: 'Caveat', cursive;
  font-weight: 600;
  font-size: 28px;
  color: var(--accent);
  margin: 0 0 12px;
}
.title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 800;
  font-size: clamp(30px, 3.2vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  color: var(--text);
}
.title__accent {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(90deg, var(--accent) 0%, var(--accent-soft) 100%);
  -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
}
.subtitle {
  color: var(--text-muted);
  font-size: 15px; line-height: 1.55;
  margin: 0 0 32px; max-width: 38ch;
}

.form { display: flex; flex-direction: column; gap: 18px; }
.field { display: flex; flex-direction: column; gap: 6px; position: relative; }
.field__label {
  font-size: 13px; font-weight: 500;
  color: var(--text-soft);
  letter-spacing: 0.01em;
}
.input {
  width: 100%; background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-input);
  padding: 14px 16px;
  color: var(--text);
  font: inherit;
  transition: border-color 0.2s ease;
}
.input::placeholder { color: var(--text-muted); }
.input:focus { outline: none; border-color: var(--accent); }
.field--password .input { padding-right: 46px; }

.eye-btn {
  position: absolute; right: 8px; bottom: 8px;
  width: 36px; height: 36px;
  background: transparent; border: none;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--text-muted); cursor: pointer;
  border-radius: 8px;
  transition: color 0.15s ease, background-color 0.15s ease;
}
.eye-btn:hover { color: var(--text-soft); background: rgba(255,255,255,0.04); }
.eye-btn .eye-off { display: none; }
.eye-btn.is-visible .eye { display: none; }
.eye-btn.is-visible .eye-off { display: inline; }

.row-between {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 13px;
  margin-top: 4px;
}
.checkbox {
  display: inline-flex; align-items: center; gap: 10px;
  color: var(--text-soft); cursor: pointer;
  user-select: none;
}
.checkbox input {
  position: absolute; opacity: 0;
  width: 18px; height: 18px;
  margin: 0; cursor: pointer;
}
.checkbox__box {
  width: 18px; height: 18px;
  border: 1.5px solid var(--input-border);
  border-radius: 4px;
  background: var(--input-bg);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.checkbox input:checked + .checkbox__box {
  background: var(--accent);
  border-color: var(--accent);
}
.checkbox__box svg { opacity: 0; width: 12px; height: 12px; }
.checkbox input:checked + .checkbox__box svg { opacity: 1; color: white; }

.link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;
}
.link:hover { color: var(--accent-hover); }

.btn-primary {
  margin-top: 24px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius-btn);
  padding: 14px 22px;
  font: inherit; font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }
.btn-primary:active { transform: translateY(0); }
.btn-primary:disabled { opacity: 0.7; cursor: progress; }
.btn-primary__icon { width: 18px; height: 18px; }
@media (max-width: 859px) { .btn-primary { width: 100%; } }

.signup {
  margin-top: 24px;
  font-size: 14px;
  color: var(--text-soft);
}

.copyright {
  margin-top: auto;
  padding-top: 32px;
  font-size: 12px;
  color: var(--text-muted);
}

/* Right media panel */
.panel--media {
  position: relative;
  background: #000;
  overflow: hidden;
}
.panel__video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}
```

---

## LAYER 9 — CONTENT STRINGS (verbatim)

| Location | String |
|---|---|
| Eyebrow | `Welcome back !` |
| Title (line) | `Sign in to your account, ` + accent `again` |
| Subtitle | `Pick up where you left off — your projects, files, and preferences are right where you saved them.` |
| Email label | `Email` |
| Email placeholder | `you@studio.com` |
| Password label | `Password` |
| Password placeholder | `••••••••` (8 bullet chars) |
| Checkbox label | `Remember me` |
| Forgot link | `Forgot Password ?` |
| Submit (idle) | `Sign in` |
| Submit (loading) | `Signing in…` |
| Sign-up line | `Don't have an account ? Sign Up` |
| Copyright | `Copyright © {YEAR} Fivefold` |

Note the spaces before `!` and `?` are intentional (typographic preference matching the editorial tone).

---

## LAYER 10 — FILE TREE

```
project-root/
├── index.html              (markup + inline <script>)
├── style.css               (full stylesheet — Layer 8)
├── logo/
│   └── Fivefold logo white.svg   (buyer supplies — any white wordmark works)
└── (optional) README.md
```

No `package.json`. No `node_modules`. No build step.

To preview locally: open `index.html` in a browser, or run any static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

The CDN video URL is absolute (`https://cdn.5sdesign.art/...`) so the page works offline as long as you replace the video tag's `src` with a local path.

---

## LAYER 11 — DELIVERY CHECKLIST

- [ ] `index.html` + `style.css` created at project root.
- [ ] `logo/` folder contains a white-on-transparent SVG wordmark.
- [ ] Google Fonts link loads DM Sans + Caveat + Instrument Serif in one request.
- [ ] `<video>` `src` references `https://cdn.5sdesign.art/projects/Login-001/login-001.mp4`.
- [ ] Video has all 4 attributes: `autoplay muted loop playsinline` (silent loop autoplay required to work cross-browser).
- [ ] Grid layout switches: 5fr/7fr at ≥1200px, 1fr/1fr at 860–1199px, stacked at <860px (video on top).
- [ ] Form uses CSS Grid + Flexbox; no absolute positioning except for `.eye-btn` and `.panel__video`.
- [ ] Eyebrow uses Caveat 600 weight, color `#F37029`.
- [ ] Title h1 uses DM Sans 800 + `clamp(30px, 3.2vw, 48px)` size.
- [ ] Word `again` uses Instrument Serif italic 400 with the orange gradient (linear 0% → 100%).
- [ ] Password input has `.eye-btn` overlapping right side, JS toggles `type` and `.is-visible` class.
- [ ] Checkbox: native input hidden via `position: absolute; opacity: 0`, `.checkbox__box` styled, SVG check appears only when `:checked`.
- [ ] CTA `.btn-primary` orange with white text + arrow SVG, `box-shadow: 0 8px 24px rgba(0,0,0,0.4)`, hover `translateY(-1px)`.
- [ ] Submit handler prevents default, swaps label to `Signing in…` for 1400ms.
- [ ] `[data-year]` text content set on load to current year.
- [ ] No external icon library — eye, eye-off, check, and arrow SVGs all inline.
- [ ] No framework, no build tool, no `package.json`.
- [ ] No purple/blue gradients, no neon, no card-on-orange-background — the page is full-bleed two-column.
