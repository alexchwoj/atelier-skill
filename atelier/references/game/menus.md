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
