# clarify

Improve interface language: labels, buttons, errors, empty states, help text. The product's own words, plainly. Marketing copy rules are in `foundations/craft.md` § Copy.

## Audit the language

List every string on the target and mark: vague ("Submit", "OK", "Error"), jargon ("Invalid payload", "Entity"), inconsistent (Delete here, Remove there), passive ("Changes were saved"), blaming ("You entered an invalid date"), wordy, or missing (an icon without a label, a field without a hint where one is needed).

## Message hierarchy

Decide, for each screen, what must be read (the task and its action), what may be read (help, context) and what can be skipped. Put the must-read first and shortest.

## Rewrite by function

**Actions and navigation**
- Buttons say the verb and the object: *Save draft*, *Send invoice*, *Book Thursday 7pm*. Destructive actions name what is destroyed: *Delete 3 photos*.
- Navigation uses the nouns people use, not internal names.

**Forms**
- A visible label on every field (placeholders are examples, not labels). Hints say format and why before the error happens: *We'll text you a code*.
- Mark optional fields, not required ones, when most are required.

**Errors and permissions**
- What happened, why if known, how to fix: *That card was declined. Try another card or contact your bank.* Never *Oops*, never an exclamation mark, never a bare code.
- Permission errors say who can help: *Only workspace admins can change billing. Ask Ana or another admin.*

**Loading, empty and success**
- Loading says what is loading after two seconds: *Loading your projects…*
- Empty states: what goes here, why it matters, one action.
- Success is quiet when the effect is visible; a toast only for invisible effects or undo: *Archived. Undo*.

**Help and instructions**
- Short, at the point of need, linking to more. Write for the person who has not read anything else.

## Voice, accessibility, localisation

- One voice across the product (from `DESIGN.md` or the brand's three-words-it-is), adapted to the moment: calmer in errors, warmer in success.
- Screen readers: icon buttons get an `aria-label`; status changes go through an `aria-live` region; link text makes sense out of context (no *Click here*).
- Localisation: full sentences, no string concatenation, room for 30% expansion, no idioms that do not translate.
- Consistent terms: one word per concept across the whole product.

## Check

Read every string aloud as a first-timer. Could you act on each one without help? Is every term used the same way everywhere?
