# Colour: finding the palette

How to pick the best palette for a project from scratch, then generate and verify it with `scripts/palette.mjs`. The rules for using colour on the page are in `foundations/craft.md` § 2.

## 1. Decide before choosing

Write four answers first:

1. **Scene:** light or dark, from where and under what light the product is used (never from the category).
2. **Dosage:** Accent, Field, Ensemble or Flood (`foundations/craft.md` § 2). Sell and Show surfaces can take the bolder ones; Work and Read surfaces usually stay at Accent.
3. **Temperature and energy:** warm or cool, calm or loud, in one phrase drawn from the concept's world ("chalk-dust white and route-tape orange", "harbour fog and signal yellow").
4. **Commitments:** any brand colour the user already has. Keep it, and build the rest around it (`--from "#hex"`).

## 2. Choose the hue from the world, not the category

- Take the anchor hue from the concept's source material: the colour of the tape, the cloth, the stone, the sign, the packaging, the light at that hour. Name the object you took it from.
- Category hues are the rut: blue for software and banks, green for health and money, purple for AI, orange for food delivery, black-and-gold for luxury. Use one only when the brief demands it, and then make the rest of the palette unexpected.
- A rough map of hue angles in OKLCH: 25 red · 45 terracotta and coral · 70 amber and ochre · 95 yellow and mustard · 130 lime and olive · 150 green · 175 teal · 200 cyan and petrol · 240 blue · 265 indigo · 300 violet · 330 magenta · 355 rose.
- **Chroma** sets the voice: 0.06 to 0.10 muted and grown-up, 0.12 to 0.18 confident, 0.19 to 0.26 loud. Very light or very dark colours cannot hold high chroma; the script reduces it to stay in gamut.

## 3. Generate

```bash
node scripts/palette.mjs --hue 45 --dosage accent                    # light page, one signal colour
node scripts/palette.mjs --from "#cc785c" --mode both                # from a brand colour, light + dark
node scripts/palette.mjs --hue 160 --dosage field --chroma 0.12      # one colour owns big regions
node scripts/palette.mjs --hue 20 --dosage ensemble --second 200 --third 95
node scripts/palette.mjs --hue 95 --dosage flood                     # the surface is the colour
node scripts/palette.mjs --hue 45 --neutral-hue 80 --neutral-chroma 0.006   # neutrals tinted off-accent
node scripts/palette.mjs --hue 45 --out tokens.css --html palette.html
node scripts/palette.mjs --check "#ffffff" "#cc785c"                 # one pair
```

It writes `--color-paper`, `-paper-2`, `-paper-3`, `-rule`, `-muted`, `-ink-2`, `-ink`, `-accent`, `-accent-hover`, `-accent-ink`, `-focus`, `-field` and `-field-ink` (Field and Ensemble), `-accent-2` and `-accent-3` (Ensemble), and `-success`, `-warning`, `-error`, `-info`, all in OKLCH with hex comments. It walks lightness until every pair passes contrast (text 4.5:1, UI 3:1) and prints the table.

## 4. Look at it

Open `palette.html` (or render it with `scripts/shot.mjs`) and judge:

- Does the paper feel like the world (fog, chalk, paper stock, night) or like a default grey?
- Does the accent pull the eye to the action and nowhere else?
- On a Field page, is the field colour pleasant across half a screen, not only as a swatch?
- Side by side with the category leaders, would anyone confuse them?

Adjust one variable at a time (hue by 5 to 15 degrees, chroma by 0.02, neutral hue or chroma) and regenerate.

## 5. Ensembles

For three or four colours with roles (Ensemble dosage), the relationships matter more than the hues:

- **Split complement:** anchor plus the two hues 150 and 210 degrees away (the script's default). Lively, balanced.
- **Analogous with a kicker:** two neighbours 30 to 40 degrees apart plus one complement used sparingly.
- **Tonal with one signal:** three lightness steps of one hue for surfaces plus one contrasting accent.
- Give every colour a job and a footprint ("teal: the booking widget and the map pins; mustard: price and offers; ink-blue: type"). A colour without a job is decoration; remove it.

## 6. Dark mode

Derived, never inverted: `--mode both` writes a dark set with its own lightness steps and re-checked contrast. Elevation in dark mode is lighter surfaces, not shadows. Saturated accents usually need more lightness and slightly less chroma on dark. Look at both modes before shipping.

## 7. Data and status

- Status colours never rely on hue alone: pair them with an icon, a word or a shape.
- For charts, use lightness and chroma steps of the palette (sequential), a diverging pair around a neutral midpoint, or Ensemble hues for categories, at most six, with labels on the marks.
