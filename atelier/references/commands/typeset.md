# typeset

Improve typography inside the existing identity: hierarchy, scale, measure, rhythm and delivery. Replacing the faces is a new identity; do that only when asked (then `studio/type.md`).

## Two assessments

Run them separately (two contexts if the harness has subagents), then combine.

1. **Typographic review**, answering each with a file, selector or computed value:
   - Which faces, weights and roles exist? Do they fit the product, or are they unexamined defaults? Is every family needed?
   - Can heading, body, label, meta and data be told apart at a glance? Are neighbouring sizes or weights too close to do different jobs?
   - Is there a deliberate scale, or a pile of arbitrary values? Do repeated roles stay identical across screens?
   - Is body copy 45 to 75 characters wide, with line-height and tracking tuned to the face and the ground?
   - What happens with long headings, translation, zoom, narrow containers and font fallback?
   - Are only the used weights loaded, with swap and metric fallbacks?
2. **Mechanical scan:** `node scripts/lint.mjs <target>` and `node scripts/shot.mjs <target>`.

## Set the system

Find the library prompts that use the same faces or the same class of pairing (`node scripts/fonts.mjs --pairings` lists each pairing with example prompts; open three or four of them) and study how they set them: display size and tracking, line-height, where the italic or the mono appears, label treatment. Those are tested settings; prefer them to values derived from rules.

State the roles, the contrast between them, the measure and density, which faces are authoritative, and any constraints. Use the fewest roles and families that make the hierarchy unmistakable, combining size, weight, space and colour rather than asking size alone to work. Name tokens by purpose (`--text-section`), not value.

## Apply

The rules in `foundations/craft.md` § 1: body 16px or more; measure 45 to 75ch; leading tuned to width and ground; display tracking and line-height by size; `balance` on heads and `pretty` on body; tabular figures for data; only used weights loaded; zoom and user font settings respected. Marketing display type may be fluid; dense product and reading screens stay predictable.

## Check

Roles recognisable without reading; long text comfortable at every width; loading without jumps or invisible text; zoom and focus intact; the scan shows nothing unexplained.
