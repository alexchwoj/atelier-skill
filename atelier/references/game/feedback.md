# Feedback, juice and onboarding

## 1. The feedback stack

Every meaningful action fires several layers on the same frame:

1. **Visual:** the UI changes (a bar moves, a number pops, a slot flashes), plus particles, flashes or a camera kick in the world.
2. **Audio:** a UI sound or an impact, pitched and layered by significance.
3. **Haptic:** controller rumble matched to intensity and pattern (short and sharp for hits, a long low rumble for engines); off-switch and strength in settings.
4. **Systemic:** the state actually changes and the player can see it (the door opens, the enemy staggers, the resource count updates).

**Within one frame to 100ms.** No visible response for 200ms reads as a dropped input.

## 2. Juice, scaled to significance

| Event | Response |
| --- | --- |
| Menu focus move | a quiet tick, focus animation 80 to 120ms |
| Confirm / back | distinct sounds; the pressed element scales to 0.95 for 60 to 100ms |
| Normal hit | hit marker 80 to 120ms, a small number, a light sound |
| Critical hit, headshot | larger number with a shape cue, a sharper sound, a 30 to 60ms hit-stop |
| Kill, objective done | a distinct sting, a short UI banner (1.5 to 2.5s) |
| Level up, rare loot | the delight budget: a reveal sequence (anticipation 300 to 600ms, burst, settle), light rays, a fanfare; skippable after the first time |
| Taking damage | bar chip (`game/hud.md` § 2), edge vignette, controller pulse; heavier for bigger hits |
| Low health | slow pulse (1Hz or slower) and a heartbeat sound; never a constant flash |

- **Scale to significance:** common events stay small so rare ones can be big. If everything explodes, nothing does.
- **Number pops:** scale from 1.2 to 1.0 with an ease-out in 150 to 250ms, then rise and fade; counters roll quickly (200 to 600ms total) rather than jump.
- **Hit-stop and screen shake** are game feel, not UI; when the UI uses them, keep them tiny and always respect the shake setting.
- **Never hide the game:** if particles or flashes hide enemies or text, reduce them. Every juice layer has a setting to reduce it (shake, flashes, particles, damage numbers).

## 3. UI sound

A small, consistent set: navigate, confirm, back, error/unavailable, tab switch, open/close panel, notification, equip, purchase, level up. Short (50 to 300ms), from the game's world (metal clicks for a military game, paper and quill for a fantasy journal), mixed below dialogue, on their own volume slider.

## 4. Onboarding

The best tutorial is no tutorial. Descend this ladder only as needed:

1. **Implicit:** the level teaches (a first room with one exit, a safe place to try the jump, scorch marks near the explosive barrel, an NPC demonstrating).
2. **Contextual prompts:** a glyph and a verb near the relevant object, only when needed, only the first 3 to 5 times, never pausing play.
3. **Guided scenarios:** a short, low-risk situation that requires the new mechanic.
4. **Explicit:** text or voice, as a last resort, short, skippable, and always available again in a help or codex section.

Teaching schedule: first 30 seconds, movement; first 5 minutes, the core verb; first 30 minutes, each basic mechanic on its own; first hour, combinations; beyond, advanced and optional systems revealed as they unlock (a new tab appears with a "new" mark).

Never an unskippable tutorial on a replay; never a wall of text before play.

## 5. Failure

A failure screen answers three questions:

1. **What happened:** a clear death or defeat state, not an ambiguous fade.
2. **Why:** the cause ("Killed by Warden's slam", a kill cam, the damage breakdown).
3. **What to do next:** a hint on repeated failure, a loadout suggestion, and **Retry focused and instant**.

## 6. Progress and reward

- Show progress toward the next goal everywhere it is relevant (XP bar after a match, collectibles per area, completion %).
- Reveal rewards in rising order of value; let the player skip and see a summary.
- Show what is new: unseen markers on tabs, items and abilities, cleared on focus, never nagging.
