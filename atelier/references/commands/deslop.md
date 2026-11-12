# deslop

Take what reads as machine-made out of an existing page and leave everything else: the concept, the real content, the logo, the palette and the type the page chose. Run it when the user says the page "looks AI-made", "looks generated", "has AI slop", "take out what looks like AI", or names the tells themselves.

It is not a redesign and not `polish`: the goal is that a designer looking at the page would no longer guess a model made it. If the concept itself is the problem, say so and recommend a redesign instead.

## 1. Measure before touching

```bash
node scripts/lint.mjs <page>                    # every WARN line is a candidate tell
node scripts/shot.mjs <page> --full --out .atelier/before
```

Copy the page first if there is no version control, so before and after can be compared. Skip the library search for peers when none exist (a brand sheet, a one-off tool page).

## 2. Walk the tells, in this order

Go through `foundations/anti-slop.md` section by section and list every hit with its location. The ones that give generated pages away fastest:

1. **Fake technical metadata:** coordinates, `Nº`, `§`, `01 / 05` section numbers, serials, `v1.0`, `Est. 2011`, readouts that measure nothing. Delete; keep a number only when the reader needs it.
2. **Invented facts:** stats, ratings, testimonials, client logos, founding years, addresses and prices the user never gave; forms that print a success with no backend. Replace with a marked placeholder or remove.
3. **Generated copy:** "not X, but Y", triads of fragments ("Light. Dark. Loud."), "it's X on purpose", rebuttal lines, buzzwords, em dashes, one highlighted word that carries no meaning. Rewrite in the product's own nouns, keeping length and meaning.
4. **Repeated skeleton:** every section opening the same way (small label, big head, paragraph), three equal cards, the same seam everywhere. Vary how sections open and are separated (`foundations/layout.md` § 4); turn equal cards into rows or a list when the content is a list.
5. **Decoration without a job:** scanlines and grain over everything, glows, orbs, mono tracked caps on every label, corner tags, scroll cues. Keep one texture where the concept needs it; labels in the body face unless mono is the whole look.
6. **The Baseline** (`SKILL.md`): one `h1`, meta description, `overflow-x: clip`, focus, reduced motion, 16px body, no 11px text outside artwork, tap targets.

`lint.mjs` does not catch everything; read for these yourself: an italic or coloured word in every heading, eyebrows as a pattern, marquees and tickers, radial glows, content hidden until a script runs (`.reveal { opacity: 0 }` with no fallback), a form that claims success, mixed type families used as costume.

Rewrite the form of the copy, never its facts. Never invent contact details (an email, a phone, a handle) to make a form or a link work: leave a marked placeholder and list it.

## 3. Protect what must not change

What the user named (the logo, the concept, the content) stays byte-identical. Diff the protected parts before and after (`diff` on the `<svg>` or the section), and say in the handoff that you checked.

## 4. Check and hand back

Run `lint.mjs` and `shot.mjs` again and look at both renders side by side. Hand back: the list of tells found (with counts), what changed for each, lint and render results before and after, what was kept on purpose and why (artwork text inside a logo or a printed mock is artwork, not a UI label), and every fact the client must confirm.
