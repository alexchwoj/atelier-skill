# colorize

Bring colour into a design that is too grey, or rebalance one whose colour does no work: colour as hierarchy, meaning and atmosphere. Keep confirmed brand colours and semantic conventions; never replace a visual identity under the name of colourising it (that is the Studio route).

## Audit first

From `DESIGN.md`, tokens and representative screens: which colours are brand commitments; the current roles (surfaces, text, action, borders, status); where greyscale hides hierarchy or state; contrast failures; colour used as the only signal; light and dark needs; chart needs.

## Choose a strategy

Name the dosage (`foundations/craft.md` § 2), the temperature and the contrast range before editing. Sell and Show pages may let colour own regions; Work and Read screens use colour to encode action, selection, status and wayfinding, where rarity gives the accent its force.

See how the library handles colour in the same mood and mode before choosing: `node scripts/parts.mjs color --mood <m> --theme <t> --print 3`. Borrow the approach (where the accent lives, how much of the page it owns, how surfaces step), not the hues, unless the brand has none yet.

Build roles, not a bag of swatches: canvas and raised surfaces, primary and secondary text, action, focus and selection, borders, success, warning, error, info, and data categories if needed. `node scripts/palette.mjs --from "<brand hex>" --dosage <d> --mode both` generates a set with contrast fixed; merge it into the existing token names.

## Apply at system scale

- The strongest colour owns a deliberate region or role, not scattered specks.
- The primary action stays easy to find; its colour is not spent on decoration.
- On coloured surfaces, secondary text derives from the surface or foreground hue, never a washed-out grey.
- Status colours consistent everywhere and paired with text or icons.
- Charts distinguish series by lightness, chroma, shape or label, not hue alone.
- Dark mode composed, not inverted; theme switches remap semantic tokens.

## Check

Every colour has a role; attention lands where it should; the palette holds in quiet, dense, empty and error states; contrast passes in both themes; the result looks like this product, not a generic "colourful" treatment.
