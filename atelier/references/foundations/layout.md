# Layout

The canvas, sizes, sections, hero and page, for full pages and sections. Numbers are at 1440 x 900 unless a line says otherwise. On the Prompt route, the prompt's own measurements win; this file shapes everything the prompt does not cover (usually the sections below its hero). Before composing any section from here, look for it in the library (`node scripts/parts.mjs <section type> --mood <m> --print 2`): a proven section rebuilt in the page's tokens beats one composed from these rules. Use this file to judge and adjust what you lift, and to compose only what the library lacks.

## 1. The canvas

- **One container, centred and capped:** max-width 1280 to 1440px with 24px gutters on phones, 32 to 64px on desktop. At 1920 the gutters grow; the measure and the grid do not (column counts hold, `vw` visuals carry a `max-width`).
- **Twelve columns** with a 24 to 32px gap. Every section places its parts on these columns, so left edges line up from the nav to the footer.
- **Every section:** the outer element owns the background and the vertical padding; the inner container owns the width and only horizontal padding. A full-bleed band changes the background and keeps the container.

## 2. Sizes

| Role | At 1440 | Element |
| --- | --- | --- |
| Hero head | 72 to 96px (84 default) | `h1` |
| Long hero head, statement | about 60px | `.display-s` |
| Section head | 44 to 56px | `h2` |
| Item title | 22 to 28px | `h3` |
| Lead (the line under a head) | 19 to 22px | `.lead` |
| Body | 16 to 18px | `p` |
| Label, caption, meta | 13 to 14px | `small`, `figcaption`, `th` |

- **A section head under 40px at 1440 is the most common reason a page looks unfinished.**
- A head and its line sit 16 to 24px apart; the head block and the section's content 48 to 64px.
- Grid items sit one column gap apart across and 48 to 64px down; a card or well takes 32 to 40px of padding.
- Fluid sizes with `clamp()`: phones get roughly 55 to 65% of the desktop display size.

## 3. Rhythm between sections

- Sections part by 96 to 176px at 1440 (64px where the background changes), **mixed**, never one gap everywhere. Phones roughly 64 to 96px.
- Space is earned by mass: a big gap frames a tall section and is a hole under a short one. An empty-looking page wants a bigger head or visual, not a smaller gap.
- Six to nine sections for a landing page, hero and footer included; five on a thin brief.

## 4. A section

A section is one piece of the page's content shown at its best: the product at work, the menu, the lineup, the room, the price. Decide the content first, then the composition.

- **How a section opens varies from section to section.** The split head block (head on the left, a small paragraph on the right, content below) is the generated page's skeleton: use it **once per page at most**. The other ways in: no head (the content names itself), the head inside the content (on the table, the image, the card), one centred statement, a big real numeral, a sticky label in the margin, a lead-in sentence in the body, a caption under the content, a head overlapping an image or band, a running header rule, a head at display size alone on its screen. `scripts/compose.mjs` deals one per section.
- **Head size and length:** an `h2` of six words or fewer at section size; at most one lead line. Centred only over a symmetric body.
- **The body fills the width:** its widest row reaches about ten of twelve columns. A narrow text column with the right half empty is the sparse page's signature.
- **The body has mass:** a visual 360px tall or more; a set of three or four items across; a list or table of three or more rows; a working control; or a statement set at section size or larger. A head and a paragraph are a head block, never a section.
- **Never two neighbours with the same skeleton** (head-then-grid, head-then-grid…), and never the same skeleton for most of the page. Squint at the full-page screenshot: if the sections look like the same shape repeated with different content, the page has no structure of its own yet.

## 5. Compositions

A page uses three to six different ones and never the same twice in a row.

1. **Split.** Text (head, line, two to four facts or one action) beside a visual on columns 6 to 12 or 7 to 12, 440px tall or more. Swap sides at most once per page; vary the ratio (5/7, 4/8, 6/6) between splits. Never a zigzag of five.
2. **Showcase.** The head block, then one visual across all twelve columns at 16:9 to 21:9, 560px or taller; beneath it at most two smaller visuals at 8/4 or 7/5, never three equal frames.
3. **Grid.** Three or four items across, each with a photo, a large figure or a title big enough to carry the cell, then one line; equal heights, 240px or taller. Never icon-in-a-rounded-tile above a heading.
4. **Bento.** Four to six tiles in mixed spans (8+4 over 4+4+4, or 7+5 over 5+7), rows 280 to 360px, at least two tiles with a visual, one clearly the lead.
5. **Rows.** Three to five full-width rows parted by hairlines, 72 to 120px each: a title on columns 1 to 5, its line or figure on 6 to 12. Good for FAQs, indexes, timelines, price lists.
6. **Table.** Full width, four or five rows of 56 to 72px, tabular numerals, the naming column a step heavier.
7. **Figures.** Three or four real numbers large, labels beneath, parted by vertical hairlines. Only figures the user gave.
8. **Steps.** Three or four stages, a real `<ol>`, each a title and a line with a visual where there is one. Only for a process the visitor really goes through.
9. **Statement.** One sentence across eight to ten columns in two or three lines, at section size up to display size; once a page.
10. **Band.** A change of background edge to edge holding what the job wants there: booking times, the buy box, store buttons beside a screen, the next date and address. Not an email field by default.
11. **Form.** Fields on six or seven columns beside the head block, inputs 48 to 56px, one primary action.
12. **Rail.** A horizontal run past the container's edge, five or more items with the next one cut by the edge, scroll-snap, touch and keyboard scrollable.
13. **Pinned.** One visual sticky on six or seven columns while three or four short panels scroll past, each changing what the visual shows; static under ~960px.
14. **Switcher.** One area with two to five states behind a segmented control (monthly/yearly, phone/desktop, lunch/dinner). The first state visible without script.
15. **Index.** A dense, scannable list of the brief's items with facts in columns, 6 to 20 rows, the lead row larger.
16. **Schedule.** Time against place or day: a festival, a week of classes, opening hours.
17. **Offer.** The thing for sale with what a buyer needs at the moment of buying: picture, options, price, action, one line of delivery or terms.

Under ~960px every composition stacks in reading order (head block, then body; a split's visual after its text; grids to two, then one under ~640px; a rail stays a rail; pinned unpins). Visuals keep their aspect ratio and lose their minimum height.

## 6. The hero

The first screen, and only the first screen. Pick a hero shape from the job (`foundations/anatomy.md`) and vary it; text beside a picture is the most common generated hero, so take it only when the picture is the strongest thing the brief has.

| Shape | Height | Content |
| --- | --- | --- |
| **Balanced** | fills the screen under the nav | text on six columns, visual on six, centred vertically |
| **Spotlight** | fills the screen | text on five columns, a big visual on seven (60 to 75% of the screen tall), may bleed off the edge |
| **Short** | 50 to 60% of the screen | the first section shows above the fold; for docs, tools, utilities |
| **Grounded** | fills the screen | a tall image or field above, the head resting at the base |
| **Column** | fills the screen | one centred column of 44ch or less, the head larger than usual |
| **Full-bleed** | 92 to 100svh | full-bleed photo, video or canvas; content on its calmest part, low-left or centred |
| **Action-first** | fills the screen | the action is the visual: the subscribe field with the latest issue, the booking times, the buy box |
| **List-first** | fills the screen | the content is the visual: the lineup, the menu, the list of projects |

- **First screen at 1280 x 800:** headline, one sentence and the primary action all visible without scrolling.
- **Centred in its screen:** the space under the content is 1.0 to 1.5 times the space above; no dead band of 160px+ between the content and the fold. Spare height goes to a larger visual or larger type, never more copy.
- **The visual is big:** six or seven columns and 60% of the screen tall or more, or a portrait object at 75% tall on four or five columns; text and visual 48 to 120px apart, centred on each other.
- **Text:** the head (seven words or fewer), one sentence, one or two actions. Nothing else: no badge row, no stat strip, no "trusted by" logos unless the user supplied them.

## 7. The page

- **The job decides the anatomy** (`foundations/anatomy.md`): where the action lives and which category-native sections the page is built around. Never hero, three features, call to action, footer.
- **Lead with the strongest real thing after the hero;** put each fact where it does work, once.
- **Steps, figures and a schedule are choices, not defaults.** Most generated pages have all three.
- **Pace:** a dense section (grid, table, bento, index) is followed by a quiet one (statement, showcase).
- **Pictures** take a quarter to a third of the page below the hero and never lead two sections in a row; the sections between are built from type, figures, rules, the product, a table, a form.
- **The close is the job:** end on what the visitor came to do (booking times, buy box, store buttons, next date and address) or on the last strong section. An email sign-up closes the page only when a mailing list is native to the job.
- **Nav:** one line, 56 to 80px, sized to the page's real destinations. Vary it: edge-aligned (wordmark and one action at opposite edges), a floating pill, a masthead (large centred wordmark over a rule), a heavy slab, a bar that retracts on scroll. Wordmark-left, links-centre, button-right is the default; choose it on purpose.
- **Footer:** a statement (one closing sentence large, links beneath), a colophon (credits and address as one paragraph), a letter close, a contact card, a single line under a hairline, or the last section simply ending with the links in its margin. Two are overused: four link columns plus a social row (only for a real sitemap) and the wordmark set edge to edge (now a cliché of its own; rarely, and never two pages in a row).

## 8. App screens

Dashboards, admin, settings, tools: a screen someone works in. The marketing rules step aside (no hero, no fold, no word budget, no section rhythm, no reveal on load).

- **The look lends palette, faces, radius and surfaces,** never layout or ornament. One family is often right; a familiar sans is allowed. Type ratio 1.125 to 1.2, no fluid heads.
- **Accent dosage:** the accent marks the primary action, current selection and state; a second neutral carries sidebars, toolbars and panels.
- **Shell:** a top bar by default; a sidebar only past about seven destinations, collapsing to a menu on phones. Standard patterns (tabs, breadcrumbs, command palette) beat invented ones; a modal is the last answer after inline editing and disclosure.
- **Density is the design:** controls 32 to 40px with 44px hit targets, tables before cards, one container recipe.
- **Every data region has four states:** loading (a skeleton shaped like the content), empty (what belongs here and one action), error (what broke, what to do), full.
- **State lives in the URL** (filters, tabs, pagination); destructive actions are undone or confirmed.
- **Motion is state, never decoration:** 120 to 220ms, nothing orchestrated.
- **Figures** are a number and a label in tabular numerals; no icon tile, gradient or trend arrow nobody measured.
- **A signature still matters:** the one object the tool is known by (the ledger, the timeline, the queue), not a greeting above four stat cards.

## 9. Before shipping

Scroll at 1440 x 900 one screen at a time: is something on each screen big enough to be its reason? Then squint: with the words blurred, each section still has a shape and the page a rhythm of heavy and light. Then 375 wide: nothing scrolls sideways, nothing overlaps, tap targets are 44px.
