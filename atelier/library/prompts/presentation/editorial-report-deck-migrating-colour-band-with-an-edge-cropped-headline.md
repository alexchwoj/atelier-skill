# Editorial Report Deck: Migrating Colour Band with an Edge-Cropped Headline

> A field-report deck where one flat colour band moves position from slide to slide — top on the cover, bottom on the data slide, full-bleed on the closer — so the deck reads as a single field being re-cut rather than three separate pages. The title word is sliced by the frame's horizontal edge, deliberately, and a condensed poster face does all the shouting while a plain grotesque handles every functional label. Two colours only, one of them carrying all the ink. Good for research reports, field notes, annual reviews, survey findings and any deck whose credibility comes from looking measured rather than sold.


---

```json
{
  "summary": "A two-colour editorial report deck whose signature is a flat colour band that CHANGES POSITION on every slide while a condensed poster word is sliced by the frame's top or bottom edge.",
  "style": {
    "description": "Warm putty ground with a single deep pine ink that carries everything — headline, body, labels, numerals. The second colour is not an accent spike, it is all the ink. Two typefaces with strictly separate jobs: a condensed poster face for display only, a plain grotesque for every functional label and figure.",
    "prompt": "Apply a warm two-colour editorial style. Palette: ground #E5DCC8, ink #27412F, plus the same ink at 70/45/22% for hierarchy — nothing else. Colour fields are FLAT. Typography: 'Bebas Neue' for display only, at poster scale, line-height 0.78; 'Instrument Sans' 400-600 for standfirsts, table copy and labels, with corner labels uppercase at letter-spacing 0.2em and 18px. MUST use the ink colour for body text as well as headings, so the deck reads as two colours and not as black text with a coloured accent. DO NOT add a gradient, a glow, a drop shadow, a faint line-grid background, or a third hue."
  },
  "layout_and_structure": {
    "description": "Three slides sharing one migrating band. Cover: band occupies the top ~60%, headline cropped by the BOTTOM edge. Content: band drops to a thin strip at the bottom, a hairline-ruled data ledger fills the field. Closer: the band becomes the whole slide and the headline is cropped by the TOP edge.",
    "prompts": [
      {
        "part": "Cover",
        "prompt": "A flat ink-coloured band from the top edge down to about 60% height, holding a small uppercase corner label at each top corner, a tracked-caps kicker, and a standfirst of two or three lines at 27px. Inside the band, an inline-SVG illustration built only from rectangles, lines and one circle — a piece of industrial structure, drawn flat in the ground colour at varying opacity. Below the band, on the ground, set the title word in the condensed face at roughly 390px with its baseline pushed PAST the bottom of the frame so the letterforms are physically sliced by the edge. A thin outlined circle in the bottom-right corner carries three short uppercase lines, like a surveyor's stamp."
      },
      {
        "part": "Data ledger",
        "prompt": "Invert the band to a thin strip along the BOTTOM. Headline top-left as two stacked condensed lines, the second at 45% opacity. A right-aligned methodology note of three lines sits opposite it. Between them, a ledger of five rows on a four-column grid: an oversized tabular numeral at 45% opacity, a bold name at 31px, a two-line note at 20px in the 70% ink, and a right-aligned figure in the condensed face. A single hairline at 22% opacity separates rows and is the ONLY ornament. Count the rows against the available height — hiding the last row behind the band is the failure mode here."
      },
      {
        "part": "Closer",
        "prompt": "The band becomes the entire slide: ink ground, ground-colour type. Set a two-word phrase in the condensed face cropped by the TOP edge this time, mirroring the cover. A short forward-looking paragraph sits left at 29px, a large ghosted issue number sits right at 34% opacity, and a short hairline above a fine-print colophon line closes it out."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "The migrating band",
      "description": "The device that makes three slides read as one object.",
      "prompt": "One flat rectangle in the ink colour, full width, whose POSITION and HEIGHT are the only things that change between slides: anchored to the top and roughly 60% tall on the cover, anchored to the bottom and about 180px tall on the content slide, then the full frame on the closer. Keep the corner labels pinned to the band wherever it goes, flipping their colour to the ground colour when they sit on it. Do not animate it and do not add a second band."
    },
    {
      "component": "The edge-sliced headline",
      "description": "A poster word deliberately cut by the frame, alternating which edge.",
      "prompt": "Set the display word in a condensed face with white-space nowrap, then push it beyond the frame with a negative offset — bottom:-92px on the cover, top:-104px on the closer — so the stage's overflow:hidden slices it. Roughly a third to a half of the letter height should be lost. Size it from the character count so the word still fits horizontally: a condensed face runs about 0.42em average advance. Move any corner label out from under it rather than letting the two collide."
    }
  ],
  "implementation_notes": "Build it as ONE self-contained HTML file. Zero external dependencies except a Google Fonts <link>; any imagery is inline SVG or CSS, never a linked image URL. Fixed 1920x1080 stage that scales as a WHOLE (letterbox), never reflows: a .deck-viewport fixed to the window, a .deck-stage of exactly 1920x1080 with transform-origin 0 0, and a resize handler setting scale = min(innerWidth/1920, innerHeight/1080) plus a centring translate. Slides are absolutely positioned siblings; one carries .active. Arrow keys and space move between them. Every colour field is FLAT — no gradient, no radial wash, no glow, no drop shadow except where a sticker explicitly calls for a hard offset. Size poster-scale type from the CHARACTER COUNT of the actual word, never from a fixed number, or it will overflow the frame."
}
```
