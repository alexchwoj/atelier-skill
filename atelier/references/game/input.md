# Input

Most games ship on more than one input. Design for the hardest one first (usually the gamepad on a TV), then make mouse, keyboard and touch first-class too.

## 1. Gamepad focus navigation

- **Something is always focused.** Opening a screen focuses its default action; there is never a state where the stick does nothing.
- **Focus is unmistakable:** a thick outline, a glow, a scale of 1.03 to 1.06, a highlight plate, or all of them, visible from the couch and over any background. Never rely on a colour shift alone.
- **Spatial navigation:** up/down/left/right move to the nearest element in that direction; grids move by cell; lists wrap only where it helps (long menus), never in a way that surprises (do not jump from the last tab to the first item).
- **Explicit links** where geometry misleads (from the last item of a list to the confirm button, between panes).
- **Remember focus** per screen and tab; restore it on return.
- **Repeat:** holding a direction moves once, waits 300 to 400ms, then repeats every 80 to 120ms; long lists accelerate or let the triggers page.
- **Standard mapping:** confirm = A / Cross (respect Nintendo's B-confirm layout on Switch, or offer a swap), back = B / Circle, tabs = LB/RB, sub-tabs = LT/RT, secondary action = X/Y with their glyphs shown, start/menu = pause, view/select = map or scoreboard.
- **Scroll** with the right stick in long text and detail panels, while the left stick keeps moving focus.
- **Radial menus** for quick selection (weapons, emotes, items): hold a button to open (time slows in single player), flick the stick toward a slice, release to select; 4 to 8 slices, icons plus a label for the focused one, the last selection remembered.
- **Virtual cursors** (a free pointer driven by the stick) only where spatial selection needs them (maps, strategy, drag and drop), with snapping to targets and adjustable speed.

## 2. Button prompts and glyphs

- **Show the device the player is using right now** and swap instantly on the last input: Xbox, PlayStation, Nintendo and Steam Deck glyph sets, keyboard keys, mouse buttons, touch icons. Never a keyboard prompt to a gamepad player.
- Prompts reflect **remapping** (show the bound key, not the default).
- A prompt is a glyph plus a verb ("(A) Confirm", "[R] Reload", "Hold (X) to revive" with a fill ring). The row of available actions sits at the bottom of each menu in a consistent order.
- Glyphs from a consistent set (the platform holders' official glyphs, or a licensed pack), sized to the text they sit beside, with an outline over busy backgrounds.

## 3. Mouse and keyboard

- Everything is clickable; hover shows focus the same way the gamepad does; right-click or Esc goes back; the scroll wheel scrolls and changes tabs where sensible.
- **Full keyboard navigation** without the mouse (arrows, Enter, Esc, Tab), not only in menus but in text chat and settings.
- Hotkeys for frequent actions, shown in tooltips and next to buttons; numbered hotbars; inventory shortcuts (shift-click to move a stack, ctrl-click to split).
- Smaller targets are fine on a monitor (32px+), denser layouts are welcome; tooltips appear after 300 to 500ms of hover and follow the cursor or anchor to the element.

## 4. Touch

- **Thumb zones:** movement on the bottom-left, actions on the bottom-right, information along the top; nothing important under the resting thumbs.
- Targets 44 to 48pt with 8pt spacing; primary actions larger (64 to 88pt).
- Virtual joysticks: floating (appears where the thumb lands) by default, fixed as an option; a dead zone; opacity and size settings; a layout editor in settings.
- Gestures only as shortcuts with visible alternatives; no precision drags without zoom; long-press shows details (the touch equivalent of hover).
- Respect safe areas and the home indicator (`game/principles.md` § 6).

## 5. Hold, toggle, mash

- Every hold action can be set to toggle; every button-mash (QTE) can be set to a hold or a single press; every timed press can be made untimed or slowed.
- Hold actions show progress (a fill ring around the glyph) and complete in 0.5 to 1.5s; releasing early cancels.

## 6. Remapping

- Every action rebindable per device, including menu navigation; conflicts shown and resolved in place (swap or clear); a reset per device.
- The remapping screen lists actions grouped by context (movement, combat, menus), with the current binding and an icon; pressing confirm then the new input binds it; Esc or a long press cancels.
- Changes apply everywhere at once, including the prompts.

## 7. Cross-input and multiplayer

- Separate sensitivity, dead-zone and invert settings for mouse, gamepad and gyro.
- Aim assist for gamepad in shooters, with a strength setting; disclosed in crossplay.
- Split-screen: each player's HUD in their viewport, scaled; menus show whose turn or which controller is acting.
