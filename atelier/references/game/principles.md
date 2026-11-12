# Game UI principles

## 1. Game UI is not web UI

- **Attention is on the world.** The player reads the UI in glances while doing something else. Every element earns its pixels or goes.
- **Speed beats discoverability.** Players learn the UI once and use it thousands of times: the frequent path must take the fewest inputs, even if it is less obvious.
- **Feedback is the main job.** Every input gets a visible and audible response within one frame to 100ms. Nothing for 200ms reads as broken.
- **State is always visible** where it matters: health, resources, objective, what is selected, what is new.
- **Consistency breeds intuition.** The same button always means the same action; the same colour always means the same thing; the same icon is never reused for a different verb.
- **Less is more.** Show what the player needs now; reveal complex systems progressively as they unlock.

## 2. Where information lives

| Kind | What it is | Good for | Watch |
| --- | --- | --- | --- |
| **Diegetic** | exists in the game world and the characters can see it (a suit's health spine, a car's dashboard, a wristwatch map) | immersion, horror, sims, VR | must be readable at camera distance; poor for complex or dense data |
| **Spatial** | in the 3D world but not part of the fiction (objective markers, outlines on interactables, name plates, floor arrows) | guiding attention to places and objects | clutter; occlusion; scale with distance |
| **Meta** | on the screen but part of the fiction (blood on the lens, a cracked visor, rain on the camera) | conveying state emotionally (damage, low oxygen) | never the only signal; respect reduced motion and photosensitivity |
| **Non-diegetic** | classic overlay HUD and menus | clarity, density, competitive play, RPG and strategy depth | breaks immersion; easy to overload |

Default to a **hybrid**: diegetic or meta for simple, emotional, immersive information (damage, oxygen, fear); non-diegetic for complex, precise or urgent information (ammo counts, cooldowns, quest details). Write the split in the brief.

## 3. Information tiers

| Tier | What | Where |
| --- | --- | --- |
| **1 · Survival** | health and shields, current ammo or resource, immediate threats (damage direction, incoming attack), interaction prompts | always visible or instantly shown when relevant |
| **2 · Tactical** | minimap or compass, current objective, ability cooldowns, teammate status, combo, timer | visible, hideable, adaptive |
| **3 · Strategic** | full map, inventory, quest log, stats, skill tree, codex | on demand only, in a menu or overlay |

**Never put tier 3 information in the persistent HUD.** If the HUD shows more than about six things at once in normal play, something belongs in a lower tier.

**Adaptive HUD:** show elements when they matter and fade them when they do not. Ammo appears when a weapon is drawn; health appears when it changes and fades back at full; the objective marker appears when the player is off the path; the minimap grows in new areas. Every adaptive element can be pinned on in settings.

## 4. Readability over a moving world

The HUD sits over the most unpredictable background in design: explosions, snow, night, sky, foliage.

- **Never trust the background.** Every HUD text and icon gets a guarantee: a dark plate behind it (40 to 70% opacity), a 1 to 2px outline or a soft drop shadow, or a gradient vignette in its corner. Test over the brightest and darkest frames of the game.
- **Contrast:** text and essential icons reach 4.5:1 against the worst-case background they can appear on (with their plate); large numbers and bars 3:1.
- **Shape before colour:** health, danger, rarity and team are told by shape, icon or pattern as well as colour (`game/accessibility.md` § 2).
- **Numbers that change:** tabular figures, fixed width, right-aligned, so counters do not jitter.
- **Motion budget:** the HUD itself moves only to tell the player something; idle HUD elements stay still.

## 5. Sizes and distance

Design at a reference resolution (1920×1080 for PC and console; the safe area of a reference phone for mobile) and scale.

| Context | Body / UI text | Small labels (minimum) | Headers | Icons and targets |
| --- | --- | --- | --- | --- |
| TV, couch (2 to 3 m) | 28 to 32px at 1080p (Xbox XAG 101: glyph height at least 26px, which is about `font-size: 28px`) | 24px | 40px+ | icons 48px+, focus targets large and well spaced |
| PC monitor (50 to 70 cm) | 20 to 22px at 1080p (XAG: glyph height at least 18px, about `font-size: 20px`; dense PC screens in a game that uses smaller caps labels may set labels at 14 to 16px, never values) | 14 to 16px | 28px+ | icons 32px+, mouse targets 32px+ |
| Handheld (Switch, Steam Deck) | 22 to 26px at 1080p equivalent | 18px | 32px+ | touch 48px+ |
| Phone | 16px+ (pt/dp) | 12 to 13px | 22px+ | touch targets 44 to 48px, spaced 8px+ |
| VR | text subtends ≥ 1.3° of view (≈ 2.3cm at 1m) | | | panels 1 to 3m away, within 30° of forward gaze |

Offer a text-size setting that scales all UI text up to 200%, including the letter inside button glyphs (XAG 101); the layout keeps every element at 200%, scrolling in one direction only.

**Contrast (XAG 102):** 4.5:1 for text and important elements, 3:1 for large text (about 56px on console, 40px on PC) and inactive elements, 7:1 in a high-contrast mode, always measured against the **least contrasting part** of the frame behind it, not an average.

## 6. Safe areas

- **TV:** keep all essential UI inside the **title-safe area**, 90% of the screen: 96px left and right and 54px top and bottom at 1080p (a 1728x972 box). Only full-bleed art, vignettes and damage effects go outside it. Many TVs still overscan.
- **PC-only titles:** there is no TV overscan; follow the game's own margins (often 32 to 48px at 1080p) and align new elements with the HUD already in the capture.
- **Ultrawide:** keep edge HUD in a centred 16:9 (or 21:9) region with a setting to widen it; crosshair, central prompts and subtitles stay centred on the real screen.
- **Phones:** respect notches, rounded corners and home indicators (`env(safe-area-inset-*)` on the web, the platform safe-area APIs in engines); never put buttons in the bottom 20px gesture zone.
- **Ultrawide:** keep the HUD in a 16:9 centre region by default, with a setting to spread it to the edges.
- Offer a **HUD scale** and a **safe-area adjust** setting.

## 7. Art direction: the UI is part of the world

- The UI's materials, frames, type and sounds come from the game's world (`routes/game.md` § 2). A fantasy game's inventory is not a SaaS dashboard with a parchment texture; its structure, ornament and motion are from that world too.
- **Restraint still applies:** ornament sits on frames and headers, never inside dense lists or behind numbers. Readability wins over flavour in tier 1 and 2.
- **Signal colours are reserved:** red for damage/danger, green for heal/success, and the genre's rarity scale (common grey/white, uncommon green, rare blue, epic purple, legendary orange/gold) are expectations players bring; break them only with a reason and never for decoration.
- **Type:** a display face with character for titles and big moments (from the world: carved, stencilled, pixel, brushed, technical), a highly legible UI face for everything else, and a figure face for numbers (tabular, clear 1/7 and 0/O). Pixel fonts only at integer multiples of their design size.
- **Icons:** one family, one stroke or fill logic, silhouettes recognisable at 24px, colour as a secondary cue.
