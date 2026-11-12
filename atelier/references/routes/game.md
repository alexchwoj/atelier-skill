# Game route

For interfaces inside games: HUDs, title and main menus, pause, settings, inventories, shops, skill trees, maps, quest logs, dialogue, loading, results and game-over screens, lobbies, and whole UI kits. Also for a game's own marketing site (that is a Sell page; use the Studio or Prompt route with the game's art direction).

Game UI is not web UI. The player's attention is on the world, speed beats discoverability, and feedback is the UI's main job. Everything in `references/game/` follows from that.

## 0. Intake

Collect, and ask once for what is missing:

1. **Genre and camera** (FPS, third-person action, RPG, strategy, roguelike, platformer, racing, fighting, card game, puzzle, horror, survival, sim, idle, VR) and the **core loop** in one sentence.
2. **Platforms and input:** PC with mouse and keyboard, console with gamepad on a TV, handheld, phone with touch, VR. Most games need two or more at once.
3. **Engine or target:** web (HTML/CSS over a canvas, Phaser, PixiJS, Three.js, React), Unity, Unreal, Godot, or a design mockup only.
4. **Art direction:** the game's world, era, materials and tone (from concept art, a reference game or a sentence). The UI is made from the same world.
5. **Screens in scope** and the information each must carry.

## 1. Load

- `game/direction.md` always, first: the direction card, greybox before art, the layers of information, "in the style of X", how to present a mock and the amateur tells.
- `game/principles.md` always: information tiers, diegetic and non-diegetic UI, readability over a moving world, the game's art direction as the UI's material.
- `game/hud.md` for anything on screen during play.
- `game/menus.md` for front-end and in-game menus.
- `game/input.md` for focus navigation, button prompts, touch, radial menus, remapping.
- `game/feedback.md` for juice, sound, haptics, onboarding and failure screens.
- `game/accessibility.md` always: subtitles, colour vision, text size, remapping, motion and photosensitivity.
- `game/genres.md` for the genre's conventions.
- `game/tech.md` when building in an engine or the browser.

The general craft (`foundations/craft.md` type and colour rules, `studio/color.md`, `studio/type.md`, `motion/`) still applies, adjusted by the game files where they disagree (game UI uses bolder outlines, larger text on TV, more saturated signal colours, and much faster feedback).

## 2. Direction

Run `studio/concept.md` with the game's world as the source: the UI's frames, type, colours and sounds are objects from that world (a sci-fi visor's projected glass, a fantasy grimoire's parchment and wax, a racing game's telemetry, a cozy farm's hand-painted wood).

For a realistic or sim register (racing sims, milsim, flight) skip the web prompt library: its neon and glass looks pull toward arcade; take the register from `game/hud.md` § 0 and the genre table instead, and say so on the References line. For stylised worlds, mine the prompt library for that world's material (`SKILL.md` § The inspiration pass). It has no game screens, but it is full of the surfaces game UI is made of: diagnostic consoles, terminals and telemetry for sci-fi and racing, glass and glow panels for visors, print and paper builds for grimoires and maps, retro and brutalist kits for arcade and pixel games. Search by the world's material (`find.mjs "industrial diagnostic interface dark" --type prompt`, `parts.mjs background "scanline grain glow"`, `parts.mjs type --mood retro`), open every close match whole (usually four to eight), and take frame language, number and label treatment, glow and grain recipes and motion timings, adjusted by `game/` for distance and readability. Then write the brief:

```
WORLD        what the UI is made of in this game's fiction (material, era, culture)
REPRESENTATION  which information is diegetic, spatial, meta, non-diegetic (game/principles.md § 2)
HUD          tier 1 / tier 2 / tier 3 information and where each lives
INPUT        primary and secondary input; navigation model; prompt glyph sets
TYPE         display face, UI face, number face; sizes at the target viewing distance
COLOUR       the world palette, plus the fixed signal colours (health, danger, rarity, team) with their shape backups
SIGNATURE    the one UI moment players will remember (the level-up, the loot reveal, the death screen)
REFERENCES   the library files and part ids used, and the move taken from each
```

## 3. Build a UI kit first

Before any screen: tokens (colours, signal colours, type sizes for the target distance, spacing, corner and frame language, motion timings, sound cues) and the core components in every state (default, focused, pressed, disabled, selected, new/unseen, locked, equipped): panel, button, tab bar, list row, item slot, tooltip, bar (health/progress), counter, toggle, slider, dropdown, key/button prompt, notification. Each screen is then assembled from the kit, so focus behaviour and feedback stay consistent.

On the web, render the kit as a single HTML gallery page and check it with `scripts/shot.mjs` at 1920×1080 and the target device. In an engine, build the kit as reusable prefabs/widgets/scenes (`game/tech.md`).

**Sample data speaks the game.** In a mock for a named game, fill every slot with that game's own vocabulary: real map and location names, item and ammo names, mechanics, task wording, units and abbreviations as the game writes them (for an extraction shooter: the map, the extract names, the meds and grenades on the quick slots, the ammo type). This is fiction inside the game, not a claim about the user's business, so the web rule against invented facts does not apply; only avoid real player names and real people. Generic placeholders ("Rival 1", "Item A", "Gate") make a mock read as a template. For an original game, invent a small consistent vocabulary from its world and reuse it everywhere.

**Show the systems, not only the minimum.** A mock exists to show what the HUD can do: include the game's signature systems (quick slots, task updates, squad, status effects) in the states they would plausibly appear in together, each in its own place and size, rather than a stripped screen.

**A single-screen mock** ("show me the HUD over this capture") skips the full UI kit: build the one screen on the 16:9 stage, then offer the kit as the next step.

## 4. Screens

Build in this order: the HUD in its busiest moment (combat, a race finish, a boss phase) over a real or representative game frame; then pause and settings; then the screens the loop visits most (inventory, shop, map); then the front end (title, main menu, save slots, loading); then results and failure.

**A real game named** skips the Studio concept and directions steps (`studio/concept.md`, three directions): the world and its language already exist; the work is matching them.

**A system the frame cannot honestly host** (an interaction menu with no object in front of the player, a kill feed with no fight) is left out or shown in a state where it would appear, and listed in the handoff.

**The UI language of a real game:** the HUD has to look like it belongs in that game. Before designing, write down that game's own UI language from what you know of it and from the capture: letter case (Tarkov and most milsims speak in small tracked uppercase), type style (condensed, mono, italic), how big things are (hardcore games are tiny and dry; arcade racers are loud), plate shape and opacity, its colours, how dense it is and how panels appear (always on, or on a key). Match that language closely; the genre register in `game/hud.md` § 0 is only the fallback when you do not know the game. Design the content and layout yourself, and never copy its logos, icon art or licensed fonts (pick an open face of the same style).

**The game frame:** use the user's own captures when they exist, as described in `game/hud.md` § 0b and on the 16:9 stage in § 0c. Otherwise render a representative frame yourself (canvas, WebGL or layered SVG in the game's palette and camera): here a drawn scene is the product, so the web rule against illustrations does not apply, and stock photography never stands in for gameplay. Skip `media.mjs` for the frame. Game HUDs also run at a fixed 16:9 scaled to the screen, so run `shot.mjs --kind game --sizes wide` and `lint.mjs --kind game`: they drop the small-text, tap-target and tracked-caps warnings that do not apply. Judge readability at the real viewing distance instead.

Every screen is checked:
- **with a controller only** (every element reachable, a visible focus, Back always works, focus remembered),
- **with mouse and keyboard**, and **with touch** if the platform has it,
- **at the real viewing distance** (TV at 2 to 3 metres, a phone at arm's length),
- **over the brightest and darkest game frames**,
- **with the accessibility options on** (largest text, a colour-vision mode, subtitles, reduced motion).

## 5. Hand back

The UI kit (tokens and components), each screen, the input map with prompts per device, the accessibility options implemented, the sound cue list, and what still needs real game art or engine integration.
