# Menus and screens

Front-end and in-game menus. Every menu works fully with a controller, with mouse and keyboard, and with touch where the platform has it (`game/input.md`).

## 1. Architecture

- **Three levels deep at most** for any option. FOV, subtitles and remapping must never be five screens away.
- **The most common action takes the fewest inputs** and is the default focus: "Continue" on the main menu, "Resume" on pause, "Equip" on a new weapon.
- **Back always works** and always goes exactly one level up (B / Circle / Esc / right-click / a visible back button). Closing the top level returns to play.
- **Remember focus:** returning to a menu restores the last focused item and tab; reopening the inventory reopens the last tab.
- **Fast:** menu transitions under 200ms; open and close at 150 to 250ms; never block input during a transition (the next input applies to the new screen).
- **Tabs** switch with shoulder buttons (LB/RB, L1/R1, Q/E) and show those glyphs at their ends; the tab row wraps around.

## 2. Screens

**Title and main menu**
- The game's key art or a live scene behind a short list; "Continue" first when a save exists (with the save's location and playtime), then New Game, Load, Settings, Extras, Quit.
- The first screen after boot loads fast and accepts input immediately ("Press any button" only on consoles that need a user bind).

**Pause**
- One press opens, one press closes, Resume focused. Clearly paused: the game dims and blurs, audio ducks or stops, time stops in single player.
- Only essentials: Resume, Map, Inventory or Character, Settings, Save, Quit to menu. No ads, no promotions.
- Online games that cannot pause say so ("The game keeps running") and keep the HUD's tier 1 visible behind the menu.

**Settings**
- Groups: **Video** (display mode, resolution, VSync, frame cap, quality presets with per-option overrides, brightness with a calibration image, FOV, motion blur, film grain), **Audio** (master, music, effects, dialogue, voice chat, subtitles, mono, dynamic range), **Controls** (full remapping per device, sensitivity per device and per axis, invert X/Y, hold or toggle per action, vibration strength, dead zones), **Gameplay** (difficulty and assists, HUD options, camera shake, auto-pickup), **Accessibility** (`game/accessibility.md`), **Language**.
- Every option shows its current value inline, previews live (a brightness image, a subtitle sample, the HUD scale over a frame), and explains itself in one line at the bottom of the screen. "Apply" only where a change is expensive (resolution), with a 15-second revert.
- Restore defaults per group, with confirmation.

**Inventory**
- Grid for visual items (gear, materials), list for many similar items (consumables, documents). Sorting (type, rarity, newest, value), filters by category, search on PC.
- Item states: new/unseen (a dot that clears on focus), equipped (a mark), locked/favourite, too heavy or unusable (dimmed with the reason).
- The detail panel follows focus: name with rarity colour and shape cue, icon, key stats, **comparison with the equipped item** (green up / red down arrows plus signed numbers), description, actions with their glyphs.
- Drag and drop with the mouse; with a controller, "move" mode picks the item up and places it with the confirm button. Weight and capacity always visible.
- The detail panel and equipped-item comparison above suit RPGs and looter shooters. A **spatial inventory** (Tarkov, Resident Evil 4, Diablo) works differently, below.

**Menus, focus and prompts (Xbox Accessibility Guidelines 112 and 113)**
- Every menu shares one frame: title and tabs on top between LB and RB glyphs, content in the middle, a prompt bar at the bottom ("Ⓐ Select  Ⓑ Back" on the left, context actions on the right, same place and order on every screen). B always goes back one level, and every submenu has a way back to the top.
- **Focus combines at least three cues:** a 2 to 3px high-contrast outline, a fill change, and a scale of 1.04 to 1.08 or a weight change. A glow alone is not enough. Focus never lands offscreen or on a hidden element; a dialog traps focus on its first control.
- Linear lists wrap from last to first; grids do not. At the edge of a grid, focus moves to the neighbouring panel in the direction the layout suggests.
- Destructive actions use hold-to-confirm (1.5 to 3s, a fill on the glyph, retracting fast when released) with a setting to turn it into a single press. Button glyphs follow the active device (Xbox, PlayStation, keyboard); a mock can offer a switcher.
- Radial menus: 6 to 8 segments, the selected item's name and ammo in the centre, the world dimmed behind to show the pause.
- Accessibility options (text size, subtitles, colour vision, plate opacity) reachable from the first screen. Large inventories (more than 30 to 40 items) get categories, sorting and search.

**Tooltips, comparison and rarity (looter games)**
- Tooltip order: name in its rarity colour, type and level, the stat block, affixes, flavour text in italic, actions. The body is near-white; rarity colour stays on the name and a border or band. It flips to stay on screen.
- Comparison sits beside it: `+12 ▲` in green and `−4 ▼` in red, sign and arrow always kept.
- One rarity scale per game, always shown in two channels (colour plus border, icon or label). WoW: #9d9d9d poor, #ffffff common, #1eff00 uncommon, #0070dd rare, #a335ee epic, #ff8000 legendary. Diablo: blue magic, yellow rare, green set, orange legendary (Diablo III moved from gold to orange because gold and yellow were too close).

**Equipment (paper doll) for RPGs:** 10 to 14 slots in two columns around the character, weapons on one side and armour on the other, a stats panel with one summary number; alternatives for a slot open in a list beside it, never a new screen; empty slots show the silhouette of what fits.

**Hotbars:** a separate strip of 9 to 10 slots with the key number visible and the active slot highlighted.

**Spatial (grid) inventory**
- Every item has a footprint in cells (1x1 to 5x2 and more) and is drawn at that size; one cell size for the whole screen (56 to 72px at 1080p), set in one variable, items placed by column, row, width and height.
- **Containers nest:** a rig, backpack or case is itself a grid shown inside its slot; rigs are several small sub-grids (1x2 magazine pouches, 1x1 pockets), not one block. Secure or special containers sit apart.
- **Item tile anatomy, fixed corners:** short name top-right, count / uses / durability / ammo bottom-right, flags bottom-left (found in raid, insured, examined), a muted category tint on the cell background (meds, ammo, food, valuables, keys, info), icon centred and drawn in one consistent silhouette style.
- **States:** unexamined (a "?" on a hatched tile), empty slot (a faint ghost icon of what fits), too heavy (weight bar with overweight and critical ticks), invalid drop (red ghost) vs valid (green ghost) while dragging, rotation on a key.
- **Equipment slots** are framed boxes with their name above (earpiece, headwear, face cover, armor, eyewear, armband, primary, secondary, holster, scabbard), empty ones labelled in the frame.
- **Context menu** at the item (Use, Inspect, Bind to a key, Discard) and quick-move between containers on a modifier key; a key-hint bar along the bottom.
- **Fill it believably:** a mid-raid backpack is part-full with the game's own loot, not empty and not packed solid.

**Health screen (realistic games)**
- A body silhouette split into the game's parts (head, thorax, stomach, arms, legs), each filled by state (healthy, damaged, critical, destroyed) and labelled with value / max and a bar; parts add up to the total.
- Status effects sit on the limb they affect (an icon) and are repeated as a written list with the limb and the consequence, so colour is never the only signal; hydration, energy and carry weight below.

**Full-screen menus in realistic games** are opaque, dense and grid-ruled: near-black panels, a thin header bar per panel, hairlines, square corners, small tracked uppercase labels. There is no game frame behind them, so `frame.mjs` and the frame checks do not apply.

**Icons for mocks:** draw one family in SVG: the same viewing angle and stroke or fill style, two or three greys plus one material accent, readable at the cell size, never mixed with emoji or icon-font glyphs.

**Shop and crafting**
- Two panes: offer and player inventory; currency always visible top-right; price in the item's row; unaffordable items show why and how much is missing. Buy and sell confirm only for expensive or irreversible purchases; buying multiple uses a quantity stepper.
- Crafting shows the recipe's materials with have/need counts, highlights what is missing, and can track a recipe on the HUD.

**Skill tree and progression**
- The whole tree pannable and zoomable, the current focus centred; nodes show state by shape and colour (locked, available, purchased, maxed). Prerequisite lines light up when available.
- The detail panel shows the effect now and at the next rank; respec available and its cost clear. Points available always visible.

**Map**
- Opens centred on the player; zoom levels from local to world; legend toggle; custom waypoints; fast travel points and filters by type. Unexplored areas under fog. With a controller: free cursor with snapping to icons.

**Quest log and codex**
- Active, available, completed tabs; the tracked quest marked; objectives as a checklist with the current step highlighted; "track" and "show on map" actions.

**Dialogue**
- Speaker name and portrait, text in a readable box (40 to 60 characters per line, at least the subtitle size), advance with confirm; skip and auto-advance options; a history log.
- Choices: 2 to 4 options, short paraphrases, the full line on focus; timed choices show a clear timer and can be made untimed in accessibility settings; consequences and checks (skill rolls) labelled.

**Character and loadout**
- The character model centre, stats on one side, equipment slots around or beside it; changes preview stat deltas before confirming.

**Loading**
- A progress indicator that never stalls at 99% without a reason; a tip, lore or the controls; key art. Long loads allow a mini-interaction (rotate the model) but never block the "continue" when ready (setting: auto-continue).

**Results, victory and game over**
- What happened, why, and what to do next: the cause of failure ("Killed by the Warden's slam"), what was earned, progress toward the next goal; Retry focused and instant.
- Victory has a beat (a sting, a reveal of rewards in rising order), then lets the player move on quickly; rewards can be skipped through.

**Lobby and matchmaking**
- Party members, readiness, mode and region; the search timer and estimated time; cancel always available; a sound when a match is found, even when the window is unfocused.

**Store and monetisation**
- Prices in real currency where virtual currency is used; no fake urgency, no confusing bundles; clear what is cosmetic and what affects play. The pause menu never sells.

## 3. Feel

Menu navigation ticks (a short, quiet sound per focus move), confirm and back sounds distinct, focus animation 80 to 120ms, panels sliding in 150 to 250ms with the motion tokens (`motion/principles.md`). Holding a direction repeats after 300 to 400ms, then every 80 to 120ms, accelerating in long lists.
