# onboard

Design first-run flows, empty states and activation: the path from "just signed up" to "got value".

## Assess

- What is the **aha moment**, the first time someone gets real value? How many steps from sign-up to it today?
- Who arrives: experts switching from a competitor, or first-timers to the category?
- What is required before value (an account, data, an integration), and what can wait?

## Principles

- **Show, don't tell.** Let people do the real task with guidance instead of reading about it.
- **Optional when possible.** Skippable tours, dismissible tips, a way to come back to them.
- **Time to value.** Remove or defer every step that is not needed for the first success; prefill with smart defaults or sample data clearly marked as sample.
- **Context over ceremony.** Teach a feature when someone reaches it, not all up front.
- **Respect intelligence.** No patronising copy, no confetti for clicking a button.

## Patterns

- **Welcome:** one screen at most, saying what happens next; or none, straight into the product.
- **Setup:** a short checklist (three to five items) with progress, each item a real action that pays off; never a wall of questions.
- **Sample content:** a starter project or demo data that shows the product working, removable in one click.
- **Contextual tips:** a single tooltip or inline hint at the moment of need; never a ten-step tour.
- **Empty states:** every empty screen says what will be here, why it matters, and gives one action to start (plus, if useful, a template or import). Make it visually considered, in the brand's world, not a grey icon and "No data".
- **Progressive feature discovery:** surface advanced features after the basics are used (a hint after the third manual repeat: "Do this in bulk").
- **Help:** a findable help entry, searchable docs, keyboard shortcut sheet for power users.

## Implementation

Track onboarding state per user (completed steps, dismissed tips) so nothing repeats; make tours keyboard-accessible and screen-reader friendly; never block the page with a modal that cannot be dismissed with `Esc`.

## Check

Count steps to the aha moment before and after. Walk it as a first-timer and as an expert who wants to skip everything. Every empty state has a next action. Nothing is forced twice.
