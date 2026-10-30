# Fontaine Bleue - Expanded Features

> An institutional and professional design system optimized for premium aquatic centers, luxury sports clubs, and wellness facilities. Featuring a deep 'Institutional Blue' (#0060A8) paired with a high-action 'Accent Blue' (#1473E6), this style emphasizes trust, cleanliness, and structural elegance. It utilizes the Plus Jakarta Sans typeface across a range of weights to create clear hierarchy, from bold uppercase navigational labels to light, italicized hero subheaders. The layout features a 1170px max-width container, 80px vertical section spacing, and 28px grid gaps. Interactive elements use subtle scale transforms and vertical lifts to suggest responsiveness and quality.


---

```json
{
  "summary": "A clean, corporate-institutional design system with an aquatic theme, utilizing layered blues, crisp white surfaces, and refined sans-serif typography. Suitable for high-end membership-based businesses.",
  "style": {
    "description": "The style is defined by its 'Institutional' feel—structured, reliable, and premium. It uses Plus Jakarta Sans (weights 300-700). Primary colors include Institutional Blue (#0060A8) for brand identity and Hero Fill (#0066AE) for high-impact backgrounds. Accent Blue (#1473E6) is reserved for interactive states, underlines, and icons. Backgrounds toggle between pure white and Surface Gray (#F1F5F8) to differentiate sections. Card components use a 10px border radius and a specific light shadow (0px 1px 3px 0px rgba(0,0,0,0.1)).",
    "prompt": "Apply an 'Institutional Aquatic' design system. Typography: Use 'Plus Jakarta Sans' globally. Headers should be bold, uppercase with tracking-tight (-0.025em). Body text should be #6C6C6C at 13px-16px. Color Palette: Institutional Blue (#0060A8), Accent Blue (#1473E6), Background Gray (#F1F5F8), and Deep Navy Footer (#031120). UI Elements: All cards must have a border-radius of 10px and a subtle shadow (box-shadow: 0 1px 3px rgba(0,0,0,0.1)). Hover states for interactive cards should include a transition: -translate-y-1 and a duration of 300ms. Buttons should be pill-shaped (rounded-full) with font-weight: bold. Form inputs should be #F1F5F8 with no borders and a 10px radius."
  },
  "layout_and_structure": {
    "description": "A modular vertical stack of sections starting with a utility-focused header and ending with a deep-color comprehensive footer. Employs a centered 1170px container.",
    "prompts": [
      {
        "part": "Utility Strip & Navigation",
        "prompt": "Create a two-tier header. Top tier: White background, 40px height, containing a right-aligned 'Member Access' link in #1473E6 (11px, uppercase). Bottom tier: Sticky white header with a 40px square logo (#0060A8), uppercase brand title, and centered navigation links in 14px bold gray text. Right side: Pill-shaped CTA button in #0066AE."
      },
      {
        "part": "Hero Section",
        "prompt": "A 600px height hero section with a full-width background image and a gradient overlay (from #0060A8/90 to transparent). Content includes a pill-shaped tag with backdrop-blur, a large H2 (64px) with mixed weights (regular and light italic), and a secondary 'Institutional Status Card' (white, 10px radius) positioned at the bottom-right corner showing operating hours."
      },
      {
        "part": "Services Grid",
        "prompt": "A 3-column grid (28px gap) on #F1F5F8 background. Each card has a 200px image top, 32px padding, a bold #0060A8 title, and a 'Learn More' link in uppercase #1473E6 with a right arrow icon. Cards lift slightly on hover."
      },
      {
        "part": "Gallery & Featured Info",
        "prompt": "A split layout. Left: Large 450px height carousel/image with rounded (16px) corners and a floating 'Info Box' at the bottom-left. Right: A 350px wide column containing a stacked 'Value Prop' box with a blue left-border (#1473E6) and an image below it."
      },
      {
        "part": "Pricing Tiers",
        "prompt": "Display 3 membership cards in a grid. Each card is white, 10px radius, with a 4px solid top-border of #1473E6. Feature lists use #1473E6 checkmark icons. The center 'Popular' card includes a small pill-badge floating above the top border. Buttons are full-width, pill-shaped #0066AE."
      },
      {
        "part": "Testimonials Grid",
        "prompt": "Against a solid #0060A8 background, arrange 4 white cards in a 2x2 grid. Each card features 5-star ratings in #1473E6, italicized testimonial text in black, and a bold #0060A8 attribution name."
      },
      {
        "part": "Booking Form",
        "prompt": "A two-column section on white. Left: Title with #1473E6 underline and contact metadata. Right: A form with inputs (10px radius, #F1F5F8 bg), labels in 10px bold uppercase gray, and a full-width #0066AE submit button."
      },
      {
        "part": "Footer",
        "prompt": "A 4-column layout on #031120 (Deep Navy). Columns: Brand/Logo, Site Map, Contact Info with icons, and Social Links. Text color: #9CA3AF. Bottom strip: Copyright and legal links separated by a thin white/10 opacity border."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Institutional Underline",
      "description": "A specific header decoration used to denote importance and structure.",
      "prompt": "For section headers (24px, #0060A8, Uppercase), place a 4px tall, 48px wide horizontal bar in #1473E6 directly below the text with a 4px top margin."
    },
    {
      "component": "Status Overlay Card",
      "description": "A floating card used over hero images to provide vital utility info.",
      "prompt": "Create a white card with 24px padding, 10px border-radius, and a 4px solid left-border in #1473E6. Inside, place a circular gray icon container (#F1F5F8) on the left of two lines of text (Title: 14px Bold Black; Subtitle: 11px Gray)."
    }
  ],
  "special_notes": "MUST: Use 'Plus Jakarta Sans' as the primary font. MUST: Use #1473E6 for all interactive links and accent lines. MUST: Keep section padding at exactly 80px (vertical). MUST: Maintain 10px corner radius for cards and inputs. DO NOT: Use pure black for body text; use #6C6C6C. DO NOT: Use rounded corners larger than 16px. DO NOT: Use border-styles on form inputs; use background-color #F1F5F8 instead."
}
```
