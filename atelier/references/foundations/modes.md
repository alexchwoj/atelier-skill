# Surface modes

Name what a visitor's success looks like on **this surface** before deciding how loud the design may be. Pick the mode from the screen being built, not from the product: a developer tool's landing page is Sell; a fashion house's size guide is Read.

| Mode | The visitor… | Examples | Ambition shows as |
| --- | --- | --- | --- |
| **Sell** | decides and acts | landing pages, campaigns, pricing, launches, waitlists | a point of view: a committed world, big type, real imagery, one memorable moment |
| **Show** | is inside the work | portfolios, galleries, showcases, lookbooks, case studies | the work leads from the first screen; the interface recedes |
| **Work** | completes a task | apps, dashboards, editors, admin, settings, tools | precision and restraint: scanability, density, known patterns, brand in the details |
| **Read** | understands something | docs, articles, guides, help, changelogs | structure for comprehension, then a reading experience worth staying in |
| **Play** | is inside a game, attention on the world | HUDs, game menus, inventories, shops, dialogue, settings | glanceable clarity, instant feedback, the game world's material; see `routes/game.md` |

## What each mode changes

**Sell**
- The first screen makes the offer intelligible and desirable, exposes the action in its working form (the booking picker, the add-to-cart, the install command; a link pointing elsewhere does not count), and shows something only this product can prove.
- Colour may own whole regions (Field, Ensemble or Flood dosage). Display type may carry the voice. One authored motion moment.
- The world carries the page's parts without swallowing them: nav still reads as links, copy as text, the action as plainly clickable, sections keep a steady rhythm. A first screen painted whole as a poster with no working parts is a picture of a website, not a website.
- Anatomy: `foundations/anatomy.md`. Layout: `foundations/layout.md` § 1 to § 7.

**Show**
- The artifact leads: big, uncropped where it matters, in its own colours. Chrome is quiet and out of the way.
- Navigation between works is the main interaction (an index, a filter, next and previous); captions carry facts (client, year, role, medium).
- Motion serves looking (a slow crossfade, a zoom that preserves position), never decoration over the work.

**Work**
- Familiar patterns earn their place; invention goes into the one object the tool is known by (the ledger, the timeline, the queue).
- Accent dosage. Type ratio 1.125 to 1.2, a workhorse UI face or a system stack is fine. Controls 32 to 40px with 44px hit targets.
- Every data region has loading, empty, error and full states. State lives in the URL. Motion is feedback, 120 to 220ms.
- `foundations/layout.md` § 8. Command references that fit: `commands/harden.md`, `commands/onboard.md`, `commands/clarify.md`.

**Read**
- Measure 60 to 75ch, line-height 1.6 to 1.75, a type scale that separates heads from body at a glance.
- Wayfinding: a table of contents for long pages (sticky on wide screens), anchored headings, previous and next, search when the corpus is large.
- Code blocks with real syntax colours from the palette, copy buttons, and a mono face chosen for code, not costume.
- Light or dark from the reading scene; respect the reader's settings (zoom, font size, `prefers-color-scheme`).

## Persisting it

A site has several modes (the marketing home is Sell, the docs are Read, the app is Work). Name the mode per surface in the handoff or the project's `DESIGN.md`, never one mode for the whole product.
