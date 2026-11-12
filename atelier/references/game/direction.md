# Direction: making game UI feel like its game

Read this before `hud.md` and `menus.md`. Studios fix the UI's rules before anyone paints a pixel, and the most common way a mock looks fan-made is skipping that step: the style is picked first and the information is fitted into it. Work the other way round.

## 1. The direction card (write it before drawing)

- **Three UI pillars**, one of them accessibility (for example: "glanceable at 200 km/h", "nothing the soldier could not see", "accessible to 200% text").
- **One sentence of aesthetic** taken from the game's art direction, never from a UI trend ("a rally team's timing screen bolted to a muddy dashboard").
- **The stance toward the fiction**, one of three:
  - **The UI is an object in the world** (Dead Space: health on the suit's spine, ammo on the weapon, the route as a line on the floor).
  - **A layer the fiction justifies** (The Division: the ISAC augmented-reality layer sways with the player; Cyberpunk: a cyberware overlay).
  - **A layer dressed in the world's culture** (Forza Horizon: festival graphics; DiRT and EA WRC: motorsport timing; Tarkov: utilitarian military kit).
- **Motifs from the world:** materials, technology level and culture (stencil paint, timing screens, engraved metal, cheap LCDs) and where they will show.

Competitive games lean non-diegetic and geometric: precise numbers in fixed places. Narrative single-player games can lean diegetic and contextual. Fully diegetic is not automatically more immersive.

## 2. Tokens, in this order

Declare them as CSS variables on `:root` and use nothing outside them: colour meanings (one semantic ramp: danger, heal, objective, rarity, ally, enemy), typography (one display face for headings and one sturdy sans or condensed face for data, at most), shape language (corners, slants, brackets), icon rules, states (default, focus, active, disabled, critical), motion and spacing.

## 3. Greybox first, then the art pass

Lay the screen out first as grey boxes with real labels, real values and the final hierarchy. Then apply the art. If the art pass made any readout harder to read, fix the art, not the readout. Studios name the art pass as the riskiest step for exactly this reason, and it is the step a generator enjoys most.

## 4. Layers of information

- **Persistent:** 3 to 5 elements in fixed places, read without reading text (a bar, a number, an icon together). The most consulted value in each group is the largest glyph.
- **Contextual:** appears on a change of state and fades (low health, a reload, a nearby objective, a joker split ahead).
- **On demand:** map, inventory, scoreboard, extract list, mag check.

What is visible 95% of the time but matters 5% of the time belongs in the contextual layer. Urgent, lethal information (a countdown, a boss mechanic) goes top centre, not in a corner. Damage and critical health are meta-perception: a `radial-gradient` vignette or a red edge, not text.

## 5. "In the style of X"

Reproduce three things and invent the rest:

1. **What X hides, and why.** This is most of a game's UI identity: Tarkov has no ammo counter (you check the magazine), Elden Ring has no quest markers, Dead Space has no safe overlay. A mock that shows what the game refuses to show stops looking like that game.
2. **Its semantic colour ramp:** the few saturated colours and what each means (Forza's pink brand and green gear, Apex's rarity and shield ladder, Cyberpunk's red and blue ammo).
3. **Its type category** (condensed military sans, broadcast timing figures, engraved serif). Use the real face only where it is confirmed and open: **Bender** for Tarkov (OFL, self-host it; Saira Semi Condensed is the closest on Google Fonts), **Rajdhani** for Cyberpunk 2077 (Google Fonts). **Borda** for The Division is commercial: use a geometric technical sans in its place. For Valorant, Destiny, Apex and Elden Ring the face is not confirmed: match the category, never claim a name.

**Documented languages** (from the teams' own material; use these over memory):

- **DiRT Rally 2.0** (UI artist Talía Gual's style guide, 2019): DIN Pro Condensed Bold Italic for headings and figures, DIN Pro Condensed Bold, Roboto Condensed for text (open stand-ins: Barlow Condensed italic 700, Roboto Condensed); headings in uppercase italic, subtitles in red italic tracked caps. Accent **red #FF003C** on charcoal **#2D2D34**, white, a dark red-to-black gradient. In stage: **no plates**, the HUD floats on the image. Stage timer top-left in white bold condensed italic (`01:18.080`); stage progress as a thin vertical white line on the left edge with a chequered finish at the top, even ticks, and the car as a red diamond with a white outline (driven part thicker); pace-note calls top-centre as rounded squares with a dark translucent maroon fill and a thick outline in the severity colour (orange for 2, lime for 4…), a hand-drawn corner arrow inside, the severity number as a white felt-tip digit over the bottom-left corner, modifiers as small badges (magenta "Dc" for don't cut), a white arrow linking chained calls; a dark translucent round dial bottom-right (about 22% of the screen height) with an outer rev arc 0 to 8 (x1000) in white with a red redline and red needle tick, an inner turbo arc, a huge italic gear number on a slanted plate in the centre, speed beside it with leading zeros greyed (`067`) and KM/H under it, dim warning icons and an odometer below. Codemasters' severity scale runs 6 (almost straight) to 1 (hairpin), spoken number first ("5 left").
- **Escape from Tarkov inventory (Tab), from in-game captures:** the 3D scene stays behind, heavily blurred and darkened; panels are dark translucent, square-cornered, with a big dark character silhouette (blood-spattered) behind the equipment column. Top bar: tabs OVERALL, GEAR, HEALTH, SKILLS, MAP, TASKS, each with a small icon, the active tab a light grey slanted tab; a large "BACK" top-right or bottom-right; a thin bottom bar (HANDBOOK, MESSENGER, WATCHLIST). Every section and slot is titled by a **dark tab with a slanted right end** in white uppercase (EARPIECE, HEADWEAR, FACE COVER, ARMBAND, BODY ARMOR, EYEWEAR, ON SLING, HOLSTER, ON BACK, SCABBARD; TACTICAL RIG, POCKETS, BACKPACK, POUCH, SPECIAL SLOTS). Empty slots: diagonal hatching with a faint ghost line-icon of what fits. Filled slots: a realistic shaded render of the item, its short name top-right, durability `71.7/75` bottom-right, an orange outline shield top-left on armoured gear, a thin tan border. Weapon slots are wide: render across, a bound key in a small white box top-left (`2`), name and calibre top-right (`M1A`, `762x51` in grey), ammo bottom-right with a large figure and small max (`20/20`, `?/4` when unchecked), fire-mode badge bottom-left. Rig, backpack and pouch show the container render in a square on the left and their grids to the right; grid cells are dark with hairlines; item cells take a muted category tint (violet for containers and valuables, dark red for meds, olive for gear), resources in red (`400/400`), a bound key in a white box. An opened container is a small floating window with a search field and a red close X. Under the equipment column, a stats row of big figures with small units: weight `48 KG/40`, health in green with a cross `428/435`, hydration in blue with a drop `85/100`, energy in yellow with a bolt `99/100`. A QUICK USE strip along the bottom: V, 1, 2, 3 for weapons, 4 to 0 for items, each a cell with the item render and its name under it. In the hideout a STASH grid fills the right with currencies on top (`₽ 3 374 076  € 2 075  $ 428`) and a vertical column of category filter icons.
- **Escape from Tarkov:** Bender (the studio's site loads Bender Regular, Bold, Black; OFL), small tracked uppercase labels, flat dark plates, near-monochrome warm white, green for open exits, red only for wounds; no ammo counter (a mag check estimate), no crosshair, no minimap; panels on a key.

**Racing conventions players read without thinking:** delta green when gaining and red when losing (iRacing origin), with the sign kept; sector colours purple (session best), green (personal best), yellow (slower); shift lights in the F1 order green, then red, then blue (15 LEDs in three blocks on real wheels); a standings tower as a vertical strip on the left (position, short name, gap); in rallycross the joker state is a small state machine (to take, taken, invalid, owed twice after a false start), shown per car in the tower and for the player; races of 4 laps in heats, 5 in semis, 6 in finals. The commonest complaint about racing HUDs is coverage: widgets over the apex, the mirrors or the road ahead, and HUDs that take a third of the screen.

Positions and colours from memory are often wrong (even well-known articles misdescribe famous HUDs). When fidelity matters, check them against Game UI Database (gameuidatabase.com) or Interface In Game (interfaceingame.com) before calling a mock faithful.

## 6. Presenting a mock

- Compose over a **real or realistic game frame**, never a neutral or blurred background, and check it over the brightest and darkest parts of that frame.
- **Plausible data:** the weapon's real magazine size, believable health deltas, names of real length in the game's vocabulary, quantities that agree across screens.
- **At least two states** when the build allows (calm and combat, full and critical, focused and unfocused): a small state switcher on the mock is enough. A second aspect ratio (16:10 or 21:9) if it is cheap.
- **One icon family** (same stroke, fill and grid) and one component set.

## 7. What makes game UI look amateur, and the fix

| Mistake | Professional fix |
| --- | --- |
| Drawn as a standalone poster or a start screen | show a moment of play: the HUD over gameplay, a dense screen, a flow |
| Everything visible at once | 3 to 5 persistent elements; the rest contextual or on demand |
| Glow, scanlines, hex grids, brackets and grain that encode nothing | every effect must finish the sentence "this shows that…"; otherwise remove it |
| Thin or decorative fonts straight over the scene | a sturdy face with tabular figures, an outline, shadow or plate; display faces only for titles |
| Text sized for a desktop web page | the platform minimums in `principles.md` § 5 |
| Mixed icon styles | one family drawn on one grid |
| Colour as the only signal | colour plus shape, icon, label or pattern |
| No states: no focus, no disabled, no critical | design the states; a focus made of outline, fill and scale |
| A trend look (Dribbble sci-fi) instead of the game's world | the direction card above |
| Decorative serials, coordinates, version numbers, invented telemetry | functional text only (`foundations/anti-slop.md`) |
| Final render only | for a real project, show the greybox and the alternatives that led to it |

## 8. Motion tokens (starting values, no studio standard exists)

100ms for press and hover; 200ms entrances on `cubic-bezier(0, 0, .2, 1)`; 150ms exits on `cubic-bezier(.4, 0, 1, 1)`; a 250ms confirmation pulse; toasts 3 to 5s with 3 or 4 visible at most; damage numbers 0.8 to 1.2s; a red hit flash at about 30% for 150ms. Priority scale: ambient elements do not move; information slides or fades in; warnings pulse with colour and an icon; critical states hold an effect (a vignette, a heartbeat) until resolved. Loud motion stays rare so it keeps its meaning. `prefers-reduced-motion` always applies.

## 9. Where professionals look

Game UI Database (55,000+ screenshots from 1,300+ games, filterable by screen and HUD element), Interface In Game, GDC Vault UI talks (David Candland on Destiny, Christian Savoie on The Division, Dino Ignacio on Dead Space), Celia Hodent's *The Gamer's Brain*, the Xbox Accessibility Guidelines and gameaccessibilityguidelines.com.
