# HUD

Everything on screen during play. Read `game/principles.md` § 3 (tiers) and § 4 (readability) first.

## 0. Complete, then quiet, then distinct

A good HUD does three things in this order. Most generated HUDs get one of them and fail the other two: either everything is big and glowing, or (the overcorrection) the HUD is so sparse and plain that a player misses half of what the genre needs.

**1. Complete.** Before any styling, list every readout a player of this genre expects to glance at, from the genre row in § 4 and from how the best games of the genre do it (write the list down: for rallycross, position, gaps ahead and behind, lap x/y, lap time, delta to best, best lap, joker state, a track map with the joker branch, gear, speed, revs, damage). Restraint never removes an expected readout; it decides its size, its place and when it shows. A readout can be momentary (shown on change, on a key, near a corner) instead of persistent, but it exists.

**2. Quiet.** Size and placement keep the picture readable:
- **Budget:** persistent elements together cover about **15 to 20%** of the frame. The centre third and the path ahead (the road, the racing line, the crosshair lane) stay clear except for momentary calls.
- **Size at 1080p:** labels 16 to 20px, secondary values 22 to 30px, the one or two primary figures (speed and gear, ammo, health) 56 to 96px in arcade and racing HUDs. **Hardcore and milsim games run smaller and drier** (labels 13 to 16px in tracked caps, values 18 to 24px, nothing above about 40px): match the game, not this default. Hierarchy comes from contrast, so the primary figures still carry the most weight.
- **Surfaces:** loose readouts (speed, a timer) can sit on the frame with a soft shadow (`0 1px 2px rgba(0,0,0,.6), 0 0 12px rgba(0,0,0,.35)`). **Dense information** (a standings list, a map, an inventory strip) sits on a dark translucent plate (black at 45 to 65%, square or barely rounded, no glow, no coloured border) so it reads over sky and grass. Never a glowing box.

**3. Distinct.** A HUD has an identity like a brand does. Give it one, consistently:
- one **number treatment** (an italic or condensed tabular face, set large for the primary figures),
- one **accent colour with one meaning** (usually "you": your position, your row, your marker, your gear),
- one **shape language** (slanted cut corners, hairline brackets, segmented bars, a rev arc) used on every element,
- signal colours with fixed meanings (gain or loss, danger), always paired with a sign or shape.

Plain white text in default weights with no accent and no shape language is not restraint; it reads as unfinished.

**Self-check before handing back:** read your readout list against the screen. For every item ask "where is it, and when does it show?". Then look at the screen at 50% size: are the primary figures still the first thing you read, and would someone recognise this HUD's style from one crop?

**Tone sets the volume:**

| Tone | Looks like | Examples of the register |
| --- | --- | --- |
| Simulation, realism (rally, sim racing, milsim) | broadcast-precise and complete: condensed or italic tabular numerals with real weight, dark translucent plates for dense data, one accent for the player, no glow; the restraint is in size and placement, not in how much it shows | timing screens, motorsport TV graphics, instrument clusters |
| Arcade, stylised | bolder shapes, one brand colour, some motion on events, still at the edges | sports broadcasts, arcade cabinets |
| Diegetic, horror, immersive | in the world or absent; meta signals only when needed | the car's own dashboard, a wristwatch, the weapon's counter |

Pick the register from the game, not from what looks impressive in a screenshot. A sim rally game with an arcade HUD reads as a fan mod.

**Number faces for HUDs** (tabular figures, clear 1/7 and 0/8 at small sizes): Barlow and Barlow Semi Condensed, Saira and Saira Condensed, Rajdhani, Chakra Petch (stylised), Titillium Web, IBM Plex Sans Condensed, Exo 2 (arcade), Oxanium (sci-fi). Set `font-variant-numeric: tabular-nums` on every changing value so digits do not jitter.

**Open faces close to common game styles** (when a game uses a licensed face, match its style with one of these): squarish condensed military sans → Saira Semi Condensed, Chakra Petch; DIN-like engineering sans → Barlow, D-DIN-like Bai Jamjuree; geometric arcade italic → Exo 2, Titillium Web Black italic; rounded friendly → Nunito, Baloo 2; fantasy serif → Cinzel (titles only), Cormorant; sci-fi → Oxanium, Orbitron (titles only); terminal → JetBrains Mono, IBM Plex Mono.

## 0a. UI languages by family

When the user names a game, match its own language (`routes/game.md`). These families are the starting point when you know the genre but not the game, and the vocabulary to describe the one you do know. They describe a look, never assets to copy.

| Family | Case and type | Size and density | Surfaces and colour | How it appears |
| --- | --- | --- | --- | --- |
| Milsim, extraction, tactical realism | small tracked uppercase, condensed sans or mono figures | tiny and dry; labels 12 to 16px, nothing large | thin hairlines, flat dark plates at low opacity, near-monochrome with one muted accent; red only for wounds | almost nothing persistent; panels on a key or on change |
| Competitive tactical shooter | uppercase condensed, very legible figures | compact, rigid grid, everything in fixed slots | flat solid plates, team colours as the only accents | always on, never moves |
| Sim racing and rally | italic or condensed tabular figures with weight | primary figures large, the rest compact | dark translucent plates for timing tables, one accent for the player | always on; calls pop in for corners and events |
| Arcade racing, sports | heavy italic display, big numbers | loud but at the edges | brand colour fills, slants and speed lines | animated on every event |
| Souls-like, dark fantasy | small serif or plain sans in sentence case | minimal; thin bars top-left, item slots in a corner | thin dark frames, desaturated, one warm or red accent | always on but quiet; boss bar at the bottom or top centre |
| Battle royale, hero shooter | bold rounded or geometric sans | many small widgets, ring and squad state | glassy or flat bright plates, rarity colours | dense, always on |
| MOBA, ARPG, MMO | readable sans, numbers on bars | dense bottom-centre hub around the hotbar | ornate frames or flat panels per the art style, resource colours (red, blue) | always on |
| Survival, crafting | friendly sans, icons first | hotbar and a few needs meters | soft plates, warm neutrals | always on, fades when idle |
| Horror, narrative | almost none, in-world | minimal or diegetic | none | only on demand |

## 0b. Designing over a real game frame

When the user gives a capture, it is the ground truth: design for it, not for an imagined background.

1. **Save it next to the page** and use it as the stage background at its native size (`object-fit: cover` on a 16:9 stage). Never recolour or blur the capture itself under a HUD. Full-screen menus and inventories that sit over the paused game (Tarkov's Tab screen, a pause menu) are the exception: there the game itself blurs and darkens the scene, so do the same.
2. **Read the frame first:** run `node scripts/frame.mjs capture.jpg`: it prints each zone's lightness and busyness, the text treatment it needs (bare, heavier shadow, or a plate) and the frame's dominant colours. Then look at it yourself: where the player's car or character sits, where the eye goes (the road ahead, the horizon), the brightest region (usually the sky) and the darkest (road, foliage). Write it down in one line before placing anything.
3. **Take the palette from the frame:** sample the neutrals and one accent that already exists in the image (a kerb, a livery, a sky tone). The HUD should look like it belongs to that game's grade.
4. **Place against the frame:** persistent state in the calm corners, nothing over the car, the player character, teammates or enemies, nothing crossing the horizon line ahead of the car, and test every element over the brightest part of the frame it might sit on.
5. **A capture with the game's own HUD baked in** (common with store screenshots): treat those elements as part of the frame. Design around them and keep clear of them, never draw a second copy on top; say in the handoff which ones were already there.
6. **Check it at 1920 x 1080** (`shot.mjs --sizes wide`) and look at it at real size, then at 50% (how it reads from a sofa).

## 0c. The 16:9 stage

A HUD mock is a fixed 16:9 frame scaled to the window. Size everything in container units so it scales as one picture; never position with `vw` or rescale with a script.

```html
<main class="stage"><img class="frame" src="capture.jpg" alt=""> …HUD… </main>
```
```css
html, body { margin: 0; height: 100%; background: #000; overflow: clip; }
body { display: grid; place-items: center; }
.stage { position: relative; width: min(100vw, 177.78svh); aspect-ratio: 16 / 9; container-type: size; overflow: hidden; }
.frame { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
/* 1cqh = 1% of the stage height: at 1080p, 1cqh = 10.8px. Declare tokens built on container units on .stage or inside it, never on :root: :root sits outside the container, so they would be invalid there. */
.hud { position: absolute; inset: 5cqh 5cqw; }              /* title-safe area: 54px and 96px at 1080p */
.label { font-size: 1.7cqh; } .value { font-size: 2.4cqh; } .primary { font-size: 5.5cqh; }
```

## 1. Zones

```
┌───────────────────────────────────────────────┐
│ objectives, quest      timer · score     party │  top: glanceable info, out of the line of fire
│                                                │
│ ←                                            → │  edges: damage direction, off-screen markers
│              crosshair · prompts               │  centre: aim, interaction prompts, critical alerts only
│                                                │
│ minimap?                                       │
│ health · shields       hotbar / abilities  ammo │  bottom corners: persistent player state
└───────────────────────────────────────────────┘
```

- **Corners** for persistent state. Genre conventions are expectations: FPS health bottom-left and ammo bottom-right; MMO and ARPG health and resource orbs or bars bottom-centre around the hotbar; minimap top-right or bottom-left. Do not reinvent placement without a reason.
- **Centre** for the crosshair, interaction prompts and the most critical alerts (low health, incoming attack). Nothing persistent in the centre third.
- **Top centre** for objective, score, timer and boss health.
- **Edges** for spatial information: damage direction, off-screen objective and teammate markers, compass.
- All of it inside the title-safe area (`game/principles.md` § 6).

## 2. Components

**Health and resource bars**
- Fill moves instantly on damage; a **damage chip** (a lighter "ghost" segment showing what was just lost) drains after 300 to 600ms, so the player reads how big the hit was. Heals fill with a brief glow.
- Segment marks every fixed amount (e.g. every 25 or 100 HP) to make values readable without numbers; show the number on demand or as an option.
- Low state (below 25 to 30%): a slow pulse of the bar or the screen edge (1Hz or slower, respect reduced motion), plus a sound; never only colour.
- Shields, armour and temporary health stack visibly on the same bar or directly above, each with its own colour and pattern.

**Ammo, charges, cooldowns**
- Current ammo large, reserve small; reload prompt at low ammo; empty is a different colour and a sound.
- Cooldowns: radial or vertical wipe over the icon plus the remaining seconds below 10s; a flash and sound when ready. Unavailable abilities dim and show why (no resource, out of range, silenced).

**Crosshair and hit feedback**
- Crosshair simple, centred, customisable (shape, colour, size, opacity). Spread shows weapon accuracy.
- Hit marker within one frame: a short X flash (80 to 120ms), different for headshot, kill and shield break, each with its own sound.

**Damage direction**
- An arc on the edge of a circle around the centre pointing at the source, 600 to 1000ms, intensity by damage; distinct for off-screen threats.

**Minimap and compass**
- Rotates with the player or stays north-up (setting). Player arrow always centred and highest contrast. Few icon types, clustered when dense. Fog for unexplored areas.
- Compass strip at the top for open worlds: cardinal points, objective and waypoint markers with distance.

**Objective and waypoint markers (spatial)**
- Constant screen size whatever the distance, distance label in metres, clamped to the screen edge with an arrow when off-screen, fading when very close or when the target is in plain view.

**Interaction prompts**
- Next to the object (spatial) or bottom-centre: the current device's glyph plus a verb ("[E] Open", "(A) Talk"). Hold actions show a fill ring around the glyph. Shown only while interaction is possible.

**Notifications and feed**
- One queue with priorities: critical (objective failed, level up) interrupts; normal (item picked, quest updated) stacks in one corner, one at a time or up to three, 2 to 4s each; trivial batches ("+3 materials"). Never more than one modal message at once.
- Kill feeds and chat: top-right or left, fading after 5 to 8s, capped at 5 to 6 lines.

**Damage numbers and floating text**
- Pop from the hit point, rise and fade in 600 to 900ms, scale by significance (crits larger, with a different colour and a shape cue), merge rapid hits; a setting to turn them off.

**Boss and target frames**
- Boss bar top-centre, wide, with the name and phase marks; target frame for the selected enemy with health, level and status effects.

**Status effects**
- Icons with a duration wipe and stack count, buffs and debuffs separated (shape: rounded vs angular, or border colour plus position); a tooltip or inspect mode explains them.

## 3. Adaptive and contextual

- **HUD presets** players expect in settings: Full, Contextual, Minimal, Off, plus per-element toggles, HUD scale and opacity. Contextual mode keeps one persistent anchor (Elden Ring keeps the compass). Sim racers cycle HUD pages on a key down to a blank one.

- Fade the HUD out during exploration and cinematics, back in on input or threat (200 to 300ms fades).
- A "HUD presets" setting: full, minimal, off, plus per-element toggles. Photo mode hides everything.
- Context swaps: the hotbar changes when mounted, driving or building; the transition is short and the new layout appears in the same place every time.

## 4. Layout by genre (starting points)

| Genre | Typical HUD |
| --- | --- |
| FPS / shooter (the Counter-Strike skeleton most shooters keep) | radar or minimap top-left; round timer, score and players alive top-centre; kill feed top-right; vitals bottom-left or bottom-centre; weapon and ammo bottom-right; centre clear but for the crosshair. Dead players are dimmed or struck through. Score, time and alive count readable in under a second. Do not move these |
| Battle royale | minimap top-right with the zone timer, players left and eliminations under it; health and shield bottom-left in two tones (green or white health, blue shield); weapon, ammo and grenade bottom-right; squad bars on the left |
| Third-person action | health and stamina top-left, lock-on target frame, boss bar top or bottom centre, item and ability quick slots bottom |
| ARPG / MMO | health and resource bottom-centre around a hotbar, party frames left, minimap top-right, quest tracker right, chat bottom-left |
| Strategy / RTS / 4X | resources top bar, minimap bottom-left, selection panel and command card bottom, alerts and turn info right |
| Platformer | minimal: lives, collectibles and timer top-left, often fading away |
| Racing (circuit) | speed and gear bottom-right, position and lap top-left, minimap track, delta time top-centre |
| Rally stage (one car, against the clock) | stage time and split delta top-centre or top-right; a thin stage-progress line with split marks; **pace notes** as the main centre-top element (corner icon with severity 1 to 6 and modifiers: "Left 4 tightens", "Crest", "Don't cut"), appearing just before the corner; rev lights and gear plus speed bottom-right; damage as a small car silhouette only when damaged. No position, no minimap |
| Extraction shooter (hardcore, realistic) | almost nothing persistent: health per body part, small and only on a key or on damage, with status effects (bleeding, fracture, pain); an interaction menu at the object (the object's name, then its actions, the selected one marked); a magazine check as an estimate ("About half"), not a count; raid timer and exits with their state (open, may be open, needs a condition) on a key; one action prompt at a time; no crosshair, minimap or hit markers |
| Rallycross (wheel to wheel, short laps) | position large in the accent; a standings plate with each car's gap to you and its joker state (filled tag taken, outline to take), the cars directly ahead and behind set larger; lap x/y with current, best and delta; the player's joker state; a momentary call on the approach to the joker split ("Joker split, keep left"); a track map with the joker branch dashed; rev lights, speed and gear bottom-right; damage only after contact |
| Fighting | two health bars top with round timer centre, super meters bottom, combo counter by the attacker |
| Roguelike / survivors | health and XP bar top or bottom, run timer, ability icons with levels, minimal everything else |
| Horror | as little as possible; diegetic and meta signals; HUD appears only on demand |
| Mobile | thumb zones: movement bottom-left, actions bottom-right, info top; nothing important under the thumbs |

See `game/genres.md` for more.
