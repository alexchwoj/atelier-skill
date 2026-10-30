# Game accessibility

Accessibility options are part of the UI, designed and built like any other screen, available before the first gameplay (on first boot, before the intro) and from the pause menu. Based on the Game Accessibility Guidelines (gameaccessibilityguidelines.com) and the Xbox Accessibility Guidelines.

## 1. Subtitles and captions

- On by default or offered on first boot; **size** setting (at least 3 steps, the largest about twice the smallest), **background** opacity slider (a dark box behind the text, default 50 to 75%), **speaker names** (optionally coloured, with a shape or label too), **direction** indicators for off-screen speakers.
- At most 2 lines, about 40 characters per line (42 maximum), centred bottom inside the safe area, on screen long enough to read (about 15 characters per second).
- **Captions** for important sounds ("[distant gunfire]", "[door creaks behind you]"), separately switchable.
- Text everywhere else (dialogue boxes, menus, codex) follows the text-size setting too.

## 2. Colour vision

- **Never colour alone.** Every colour-coded meaning also has a shape, icon, pattern, label or position: enemies vs allies (shape of marker, outline style), rarity (border shape, label), damage types (icon), team (symbol), health (bar plus number option).
- Offer modes for protanopia, deuteranopia and tritanopia that **remap the game's signal colours** (not a full-screen filter that degrades the whole image), plus a custom colour picker for key signals (enemy highlight, crosshair, team).
- Check the HUD and the key screens with a colour-vision simulator.

## 3. Text and UI size

- Text scale from 100% to at least 150% (200% where layouts allow), applied to every screen; layouts reflow rather than clip. Minimum sizes in `game/principles.md` § 5.
- HUD scale and HUD opacity settings; safe-area adjust.
- A legible UI font option (some studios offer a dyslexia-friendly or plain alternative to a stylised face).
- High-contrast mode: solid plates behind text, stronger outlines, the world desaturated behind menus.

## 4. Input and motor

- Full remapping for every action and device; hold-to-toggle for every hold; alternatives to button mashing and rapid timing; adjustable timing windows; aim assist and auto-aim strength; one-handed presets where possible; support for adaptive controllers and copilot modes.
- No action requires simultaneous presses that cannot be rebound.
- Menus never time out.

## 5. Motion, flashes and comfort

- Settings for **camera shake**, **motion blur**, **head bob**, **FOV** (PC 60 to 120°), **camera acceleration**, **screen flashes** (reduce or remove), **chromatic aberration** and **film grain**.
- **Photosensitivity:** no full-screen flashes above three per second; avoid large saturated red flashes and high-contrast stripes in motion; a warning at boot; the Harding test for high-risk content.
- **VR comfort:** vignette during movement, snap turning, seated mode, height calibration, teleport movement option.
- The UI's own motion follows `motion/accessibility.md` (reduced motion collapses movement to fades).

## 6. Cognitive

- A quest log and objective reminders; tutorials and controls revisitable at any time; difficulty and assist options without shaming labels; a "story" or assist mode; pausable cutscenes; summaries ("Previously…") when resuming.
- Consistent layouts and controls across screens; no essential information that only appears once.

## 7. Audio

- Separate volume sliders (master, music, effects, dialogue, UI); mono audio; visual indicators for important sounds (a sound radar or directional captions); no information carried by sound alone.

## 8. Screen readers and narration

- Menu narration: read the focused element, its type, state and position ("Subtitles, toggle, on, 3 of 12"); text-to-speech for chat and speech-to-text where there is voice chat. On the web, real elements and ARIA make this work; in engines, use the platform's accessibility APIs or a narration plugin.

## 9. Checklist

- [ ] Accessibility options reachable before gameplay and from pause
- [ ] Subtitles: size, background, speaker names, captions
- [ ] No colour-only information on the HUD or in menus
- [ ] Text scale to 150%+ without clipping
- [ ] Full remapping, hold/toggle, no mandatory mashing
- [ ] Shake, blur, flashes, FOV settings; photosensitivity warning
- [ ] Every menu usable with controller only, keyboard only, and mouse only
