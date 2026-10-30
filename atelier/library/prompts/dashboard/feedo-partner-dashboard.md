# Feedo Partner Dashboard

> Feedo Partner Dashboard: A modern, high-performance SaaS dashboard designed for service-based businesses, specifically tailored for hospitality and retail management. The aesthetic blends 'General Sans' for bold, professional typography with 'Satoshi' for readable body text. It features a clean light-mode palette dominated by Slate-900 and a vibrant Red-500 brand accent. The layout utilizes a bento-grid style with large rounded corners (16px), subtle border-strokes (Slate-200), and soft glassmorphism elements. Key features include live tracking lists, bar charts, status badges with pulse animations, and detailed sidebar navigation. Suitable for fintech, food delivery, logistics, and merchant analytics platforms.


---

```json
{
  "summary": "A professional, data-centric dashboard with a clean sidebar-navigation layout, utilizing a high-contrast color scheme (White/Slate/Red) and modern sans-serif typography. It balances dense information with significant whitespace and clear visual hierarchy through the use of cards, status badges, and micro-interactions.",
  "style": {
    "description": "The style is 'Corporate Modern' with a focus on precision and reliability. It uses General Sans (700 weight) for headings and Satoshi (400-500 weight) for body text. The color palette centers on Slate-900 (#0F172A) for primary text, Slate-500 for secondary text, and Red-500 (#EF4444) for primary actions and branding. Success, Warning, and Info states use soft-background badges (e.g., Green-50 with Green-500 text). Visual depth is achieved via 1px Slate-200 borders rather than heavy shadows.",
    "prompt": "Apply a modern SaaS aesthetic. Typography: Headers in 'General Sans' (bold), body in 'Satoshi'. Colors: Background #F8FAFC; Sidebar #FFFFFF; Text Primary #0F172A; Brand Primary #EF4444. Borders: 1px solid #E2E8F0. Border-radius: 16px (2xl) for cards, 12px (xl) for buttons/inputs. Animations: Use 'cubic-bezier(0.4, 0, 0.2, 1)' for hover transitions on all interactive elements. Include a pulse animation for status indicators. Icons: Lucide-style line icons, 20px size. Scrollbars: 6px width, Slate-300 thumb with 10px radius."
  },
  "layout_and_structure": {
    "description": "Fixed-sidebar layout with a fluid main content area. Content is structured in a high-density grid: a top header, followed by a 4-column stats row, and a two-column main body (2/3 width for primary tracking, 1/3 width for secondary info widgets).",
    "prompts": [
      {
        "part": "Sidebar Navigation",
        "prompt": "Fixed 256px width sidebar. White background with a 1px border-right (#E2E8F0). Top: Brand logo with Red-500 icon container. Middle: Navigation list with items having 10px padding and 8px gap; active state uses background #F1F5F9, text #EF4444, and a 4px right border. Bottom: User profile card with 40px circular avatar and name/role text."
      },
      {
        "part": "Header Section",
        "prompt": "Top-aligned flex row with 32px padding-bottom. Left: H1 'General Sans' (24px) with sub-text (14px Slate-500). Right: Status pill (Green-50 background, pulsating Green-500 dot), notification bell with red dot, and a 'Help Center' button in Slate-900."
      },
      {
        "part": "Statistics Grid",
        "prompt": "4-column responsive grid with 24px gaps. Each card: White background, 1px border, 24px padding. Top-left: Colored icon square (40px, 10% opacity background of icon color). Top-right: Percentage badge (e.g., +12.5% in Green-50). Bottom: Label in 14px Slate-500 and value in 24px Slate-900 Bold."
      },
      {
        "part": "Main Activity Area (2/3 Width)",
        "prompt": "Vertical stack of sections. Top section: 'Live Orders' list with a 'View All' link. Each list item has 24px padding, hover effect #F8FAFC, and includes an ID badge, item description, price, and action buttons (e.g., 'Accept' in Red-500). Bottom section: 'Sales Overview' bar chart with custom-height bars using Red gradients, 100% width, and 12px gap between bars."
      },
      {
        "part": "Secondary Widgets (1/3 Width)",
        "prompt": "Stack of 3 distinct cards. 1. Reviews: Italicized text in 12px Satoshi, 5-star yellow icon rating. 2. Promotions: High-contrast Dark Card (#0F172A) with white text and an 'Active' green pill. 3. Account Status: Vertical list of status items with circular icons and sub-labels."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Status Pulse Badge",
      "description": "A live-status indicator used for system health or online presence.",
      "prompt": "Container: bg-green-50, border-green-100, text-green-700, px-3, py-1.5, rounded-full. Inner Dot: w-2, h-2, bg-green-500, animate-pulse."
    },
    {
      "component": "Dark Action Card",
      "description": "A high-attention card for promotions or critical updates.",
      "prompt": "Background: #0F172A (Slate-900). Padding: 24px. Border-radius: 16px. Children: Primary text in White, sub-text in Slate-400. Includes a transparent-white button (border: 1px solid rgba(255,255,255,0.2)) that turns white on hover."
    },
    {
      "component": "Interactive Progress Bar Chart",
      "description": "A custom CSS-based bar chart using rounded-top columns.",
      "prompt": "Container: h-64, flex items-end, justify-between. Bar: w-full, bg-slate-50, rounded-t-lg. Inner-fill: Absolute bottom-0, bg-red-500 (varying heights), transition-all duration-300, hover:scale-y-105."
    }
  ],
  "special_notes": "MUST: Use specific brand color #EF4444 for all primary highlights. MUST: Ensure cards have exactly 16px corner radius. MUST NOT: Use heavy drop shadows; rely on 1px #E2E8F0 borders for card definition. MUST: Include 'General Sans' for a premium editorial look on headers."
}
```
