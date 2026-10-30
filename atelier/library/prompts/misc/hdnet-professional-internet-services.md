# HDNET - Professional Internet Services

> A minimalist professional design system optimized for ISP providers, SaaS, and corporate infrastructure services. Features a clean white background with a dark slate header and emerald green accents (#059669). The aesthetic emphasizes reliability and speed through 'Public Sans' typography, generous white space, and subtle card shadows. Key visual elements include bento-inspired layouts, floating status badges with micro-animations, and high-contrast call-to-action buttons. Suitable for technology sectors, telecommunications, fintech dashboards, and enterprise solution landing pages.


---

```json
{
  "summary": "A corporate minimalist design system featuring a high-contrast palette (white, dark slate, and emerald green), robust pricing cards with smooth hover states, and professional editorial typography. It utilizes structured grids and floating UI elements to communicate modern technology and infrastructure.",
  "style": {
    "description": "The style is 'Corporate Tech Minimalist'. It uses the 'Public Sans' font family across multiple weights (400-800) for a clean, readable hierarchy. The color palette is anchored by Slate-950 (#020617) for dark backgrounds, Emerald-600 (#059669) for primary actions, and White (#FFFFFF) for primary sections. Animations are understated, using cubic-bezier(0.4, 0, 0.2, 1) for transitions and gentle floating effects on key badges.",
    "prompt": "Create a professional corporate design system using the following specifications:\n- **Typography**: Primary font 'Public Sans'. Use 800 weight for headers (64px H1), 700 for subheaders (36px-48px H2), and 400-500 for body text (16px-18px). Use tracking-widest on all-caps sub-labels.\n- **Color Palette**: Backgrounds in #FFFFFF and #F8FAFC. Headers and Footer in #020617. Primary Brand Color: #059669 (Emerald). Text colors: Slate-900 (#0F172A) for headings, Slate-600 (#475569) for body, and Slate-400 (#94A3B8) for secondary text.\n- **Borders & Radius**: Use '32px' for cards and '12px-16px' for buttons. Card borders should be 1px solid #E2E8F0 except for featured items which use 2px solid #059669.\n- **Shadows**: Soft elevation for cards (0 20px 25px -5px rgba(0,0,0,0.05)). Buttons use colored drop shadows (e.g., emerald shadow on green buttons).\n- **Animations**: 300ms transitions with 'cubic-bezier(0.4, 0, 0.2, 1)'. Use a 3000ms duration bounce for secondary floating UI elements."
  },
  "layout_and_structure": {
    "description": "A structured vertical layout with a sticky dark navigation bar, high-impact hero section, three-column pricing grid, and a technical stats banner. All sections follow a maximum width of 1440px with generous horizontal padding (32px-48px).",
    "prompts": [
      {
        "part": "Sticky Header",
        "prompt": "Design a sticky header with background #020617 and a 1px border-bottom in #1E293B. Height 80px. Content: Left-aligned logo followed by a horizontal nav menu with 32px spacing (text size 14px, color #CBD5E1, hover #10B981). Right-aligned CTA button: #059669 background, white text, 10px 20px padding, 8px radius."
      },
      {
        "part": "Hero Section",
        "prompt": "Split-layout hero. Left side: Small uppercase emerald label, 60px bold slate-900 heading with secondary slate-500 span, 18px leading-relaxed body text, and a flex container for buttons and 'trusted user' social proof badges. Right side: Image container with 40px border-radius, #F8FAFC padding, and a floating badge (white, 16px radius, shadow-xl) containing an icon and speed metric located at the bottom-left of the image."
      },
      {
        "part": "Pricing Grid",
        "prompt": "Three-column grid on #F8FAFC background. Section title centered with emerald sub-label. Individual cards: 40px internal padding, 32px border-radius, white background. Header: package name, speed value (5xl font-black), and a horizontal divider. Body: check-mark list with 20px spacing. Footer: price and 100% width button. The center card must be 'featured' with a 2px emerald border and a centered top-pill badge ('Paling Diminati')."
      },
      {
        "part": "Stats Banner",
        "prompt": "Full-width section with white background and 96px vertical padding. 4-column layout. Each column: 36px font-black slate-900 value above a 12px tracking-widest uppercase slate-500 label. Separated by subtle vertical dividers or generous whitespace."
      },
      {
        "part": "Corporate Footer",
        "prompt": "Dark background (#020617), 96px top padding. 4-column grid: 1. Logo and long-form description with social icons; 2. Link list 'Quick Links'; 3. 'Contact Information' with icons; 4. (Mobile only/Stacked). Bottom bar: 48px padding-top, 1px top-border #0F172A, flex-row with copyright text (xs, all-caps) and partner/certification logos (grayscale, 20% opacity)."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Interactive Pricing Card",
      "description": "Elevated white cards with specific typography hierarchy and hover state.",
      "prompt": "Card styling: `background: #ffffff; border: 1px solid #e2e8f0; border-radius: 32px; padding: 40px; transition: transform 0.3s, box-shadow 0.3s;`. On hover: `transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);`. Pricing text: `font-size: 48px; font-weight: 900; color: #0f172a;`. Feature list icons: `iconify-icon lucide:check-circle-2` colored `#10b981`."
    },
    {
      "component": "Floating WhatsApp Contact",
      "description": "A sticky floating button with pulse effect and reveal label.",
      "prompt": "Position: fixed bottom 40px, right 40px. Button: 64px square, #059669 background, 16px radius. Animation: `hover: scale(1.1) rotate(-6deg)`. Include a pseudo-element behind the button: `background: rgba(16, 185, 129, 0.2); blur: 24px; scale: 1.5;`. Attached label: white background, slate text, appears on hover to the left of the button."
    }
  ]
}
```
