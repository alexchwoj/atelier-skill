# HUD

Everything on screen during play. Read `game/principles.md` § 3 (tiers) and § 4 (readability) first.

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

- Fade the HUD out during exploration and cinematics, back in on input or threat (200 to 300ms fades).
- A "HUD presets" setting: full, minimal, off, plus per-element toggles. Photo mode hides everything.
- Context swaps: the hotbar changes when mounted, driving or building; the transition is short and the new layout appears in the same place every time.

## 4. Layout by genre (starting points)

| Genre | Typical HUD |
| --- | --- |
| FPS / shooter | health bottom-left, ammo bottom-right, crosshair, hit markers, damage direction, minimap or compass, kill feed top-right |
| Third-person action | health and stamina top-left, lock-on target frame, boss bar top or bottom centre, item and ability quick slots bottom |
| ARPG / MMO | health and resource bottom-centre around a hotbar, party frames left, minimap top-right, quest tracker right, chat bottom-left |
| Strategy / RTS / 4X | resources top bar, minimap bottom-left, selection panel and command card bottom, alerts and turn info right |
| Platformer | minimal: lives, collectibles and timer top-left, often fading away |
| Racing | speed and gear bottom-right, position and lap top-left, minimap track, delta time top-centre |
| Fighting | two health bars top with round timer centre, super meters bottom, combo counter by the attacker |
| Roguelike / survivors | health and XP bar top or bottom, run timer, ability icons with levels, minimal everything else |
| Horror | as little as possible; diegetic and meta signals; HUD appears only on demand |
| Mobile | thumb zones: movement bottom-left, actions bottom-right, info top; nothing important under the thumbs |

See `game/genres.md` for more.
