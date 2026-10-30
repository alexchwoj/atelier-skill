# Orion | Contacts List

> ## Page to Generate: Contacts List People and organizations with avatar, company, last interaction. Searchable directory with full sidebar. ## Flow Context Orion additional pages for complete app experience including settings, billing, contacts, and specialized views ## Available Page Links for Navigation Use these exact URLs for navigation links between pages in this flow: - "Orion Executive Dashboard": https://draft-2e684af5-3396-4184-a1a5-64720fad5b1b.preview.superdesign.dev - "Settings Hub": https://draft-f6fc5787-a91f-44f5-8220-97f0f329befc.preview.superdesign.dev - "Billing & Plans": https://draft-d108611f-627a-40c0-8eb0-2821809e4608.preview.superdesign.dev - "Contacts List" (current page): https://draft-a33feaa2-b1ee-4cb0-8eff-e9940f0227fe.preview.superdesign.dev - "Contact Detail": https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev - "Archive": https://draft-bcf0bb74-84e9-47a0-af22-e84364b2ddc0.preview.superdesign.dev - "Area Detail": https://draft-a7eb4d0e-3517-4cec-a118-2c81c263721f.preview.superdesign.dev - "Task List": https://draft-eea8951c-4159-4716-b34b-6d869f5bf99b.preview.superdesign.dev - "Calendar - Week View": https://draft-6e2d2701-2554-4be2-8263-ce033aa50ac0.preview.superdesign.dev - "Notifications Center": https://draft-e658ea1a-d163-4ef6-b45f-2cee81ac3dad.preview.superdesign.dev - "Pricing & Plans": https://draft-c789e7c4-668b-4bfe-8016-8addf857f42c.preview.superdesign.dev **Navigation Link Instructions:** 1. For <a> tags that navigate between pages in this flow, use the URLs above as href values 2. Mark the current page as "active" in navigation elements (add "active" class or similar styling) 3. The navigation should allow users to move between all pages in this flow 4. Keep all other links (external, social media, etc.) unchanged from the source ## CRITICAL: Shared UI Components - MUST BE IDENTICAL **ABSOLUTE RULES - NO EXCEPTIONS:** 1. **Navigation Bar**: Copy the EXACT same nav/header HTML. DO NOT add, remove, or modify ANY menu items. 2. **Sidebar Menu**: If source has sidebar, copy it EXACTLY. DO NOT add or remove ANY menu items. 3. **Footer**: Copy the EXACT same footer HTML. No modifications allowed. 4. **Logo & Branding**: Must be identical - same position, size, and content. 5. **Global Layout Structure**: Same container widths, padding, margins. **WHY THIS MATTERS:** These pages belong to the SAME application flow. Users expect consistent navigation across all pages. Adding or removing nav items breaks the user experience and creates confusion. ## Visual Consistency Requirements - Use the EXACT same color palette, typography, and spacing - Follow the same component styling patterns (buttons, cards, forms, etc.) - Maintain the same responsive behavior and layout grid - ONLY the main content area should change based on the page purpose ## What You CAN Change - Main content area (the unique part of each page) - Page-specific components within the content area - Content text and data ## What You CANNOT Change - Header/Navigation structure and items - Sidebar structure and menu items (if present) - Footer structure and content - Global CSS variables and theme colors - Common UI component styles ### Source Page HTML (PRESERVE ALL SHARED UI EXACTLY): ```html <!DOCTYPE html> <html lang="en"> <head>     <meta charset="UTF-8">     <meta name="viewport" content="width=device-width, initial-scale=1.0">     <title>Orion | Executive Dashboard</title>     <script src="https://cdn.tailwindcss.com"></script>     <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">     <style>         :root {             --primary: #D4AF37;             --bg: #F9F8F6;             --text: #1A1A1A;             --border: #1A1A1A;             --easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);         }         body {             font-family: 'Inter', sans-serif;             color: var(--text);             background-color: var(--bg);         }         .serif {             font-family: 'Playfair Display', serif;         }         .tracking-editorial {             letter-spacing: 0.25em;         }         .btn-gold-slide {             position: relative;             overflow: hidden;             border: 1px solid var(--border);             transition: color 0.5s var(--easing);             z-index: 1;         }         .btn-gold-slide::after {             content: '';             position: absolute;             top: 0;             left: 0;             width: 100%;             height: 100%;             background-color: var(--primary);             transform: translateX(-101%);             transition: transform 0.5s var(--easing);             z-index: -1;         }         .btn-gold-slide:hover::after {             transform: translateX(0);         }         .btn-gold-slide:hover {             color: white;             border-color: var(--primary);         }         .luxury-card {             border-top: 1px solid var(--border);             transition: all 0.5s var(--easing);         }         .luxury-card img {             filter: grayscale(100%);             transition: filter 1.5s var(--easing), transform 1.5s var(--easing);         }         .luxury-card:hover img {             filter: grayscale(0%);             transform: scale(1.05);         }         .grid-bg {             background-image: linear-gradient(var(--border) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--border) 0.5px, transparent 0.5px);             background-size: 40px 40px;             opacity: 0.03;         }         ::-webkit-scrollbar {             width: 4px;         }         ::-webkit-scrollbar-track {             background: var(--bg);         }         ::-webkit-scrollbar-thumb {             background: var(--border);         }         @keyframes slideInUp {             from {                 opacity: 0;                 transform: translateY(20px);             }             to {                 opacity: 1;                 transform: translateY(0);             }         }         .animate-reveal {             animation: slideInUp 1.2s var(--easing) forwards;         }         .delay-1 { animation-delay: 0.2s; }         .delay-2 { animation-delay: 0.4s; }         .delay-3 { animation-delay: 0.6s; }     </style> </head> <body>     <div class="min-h-screen flex flex-col bg-[#F9F8F6] selection:bg-[#D4AF37] selection:text-white">                  <!-- Top Navigation Bar -->         <nav class="h-[80px] w-full border-b border-[#1A1A1A] flex items-center justify-between px-10 z-50 bg-[#F9F8F6]/95 backdrop-blur-sm sticky top-0">             <div class="flex items-center gap-2">                 <span class="serif text-3xl font-black tracking-tighter">OR<span class="text-[#D4AF37]">I</span>ON</span>             </div>             <div class="flex-1 max-w-xl px-12">                 <div class="relative flex items-center">                     <iconify-icon icon="lucide:search" class="absolute left-0 text-lg opacity-40"></iconify-icon>                     <input type="text" placeholder="Search your knowledge archive..."                             class="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-1 pl-8 focus:outline-none focus:border-[#D4AF37] serif italic text-lg transition-all duration-500">                 </div>             </div>             <div class="flex items-center gap-8">                 <button id="nav-notif-link" class="hover:text-[#D4AF37] transition-colors duration-500">                     <iconify-icon icon="lucide:bell" class="text-xl"></iconify-icon>                 </button>                 <button id="nav-settings-link" class="hover:text-[#D4AF37] transition-colors duration-500">                     <iconify-icon icon="lucide:settings" class="text-xl"></iconify-icon>                 </button>                 <div class="flex items-center gap-3 cursor-pointer group">                     <div class="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center text-[#F9F8F6] text-xs font-bold">                         JS                     </div>                     <span class="uppercase text-[10px] tracking-[0.3em] font-medium hidden lg:block group-hover:text-[#D4AF37] transition-colors duration-500">Julian Sterling</span>                 </div>             </div>         </nav>         <div class="flex flex-1 overflow-hidden">                          <!-- Left Sidebar (PARA) -->             <aside class="w-[280px] border-r border-[#1A1A1A] flex flex-col relative">                 <div class="absolute inset-0 grid-bg pointer-events-none"></div>                                  <div class="p-6 overflow-y-auto flex-1">                     <div class="mb-10">                         <h2 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-6 opacity-40">Knowledge Base</h2>                                                  <!-- PARA Sections -->                         <div class="space-y-8">                             <!-- Projects -->                             <div class="group cursor-pointer">                                 <div class="flex items-center justify-between mb-4">                                     <span class="serif text-xl italic">Projects</span>                                     <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">08</span>                                 </div>                                 <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100 group-hover:border-[#D4AF37]">                                     <div class="w-full h-24 overflow-hidden mb-3">                                         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Project thumbnail" class="w-full h-full object-cover">                                     </div>                                     <p class="text-[10px] uppercase tracking-widest font-semibold">Current Focus</p>                                     <p class="text-xs mt-1">Q4 Strategic Expansion</p>                                 </div>                             </div>                             <!-- Areas -->                             <div class="group cursor-pointer">                                 <div class="flex items-center justify-between mb-4">                                     <span class="serif text-xl italic">Areas</span>                                     <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">14</span>                                 </div>                                 <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">                                     <ul class="space-y-2 text-[11px] uppercase tracking-[0.2em] font-medium">                                         <li class="hover:text-[#D4AF37] transition-colors">Financial Governance</li>                                         <li class="hover:text-[#D4AF37] transition-colors">Design Directives</li>                                         <li class="hover:text-[#D4AF37] transition-colors">Personal Brand</li>                                     </ul>                                 </div>                             </div>                             <!-- Resources -->                             <div class="group cursor-pointer">                                 <div class="flex items-center justify-between mb-4">                                     <span class="serif text-xl italic">Resources</span>                                     <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">42</span>                                 </div>                                 <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">                                     <div class="grid grid-cols-2 gap-2">                                         <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">                                             <iconify-icon icon="lucide:file-text" class="opacity-40"></iconify-icon>                                         </div>                                         <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">                                             <iconify-icon icon="lucide:library" class="opacity-40"></iconify-icon>                                         </div>                                     </div>                                 </div>                             </div>                             <!-- Archive -->                             <div class="group cursor-pointer">                                 <div class="flex items-center justify-between mb-4">                                     <span class="serif text-xl italic">Archive</span>                                     <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">156</span>                                 </div>                                 <div class="luxury-card pt-2 opacity-30"></div>                             </div>                         </div>                     </div>                 </div>                 <div class="p-6 border-t border-[#1A1A1A]">                     <button id="add-new-link" class="btn-gold-slide w-full py-4 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-2">                         <iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon>                         New Entry                     </button>                 </div>             </aside>             <!-- Main Content Area -->             <main class="flex-1 overflow-y-auto px-16 py-12 custom-scrollbar">                 <header class="mb-16 animate-reveal">                     <span class="uppercase text-[11px] tracking-[0.4em] font-bold opacity-40 mb-4 block">Monday / October 23, 2023</span>                     <h1 class="serif text-8xl font-medium leading-[0.9] -ml-1">The Daily Brief</h1>                     <div class="mt-8 flex items-center gap-12">                         <div class="flex items-center gap-3">                             <span class="w-10 h-[1px] bg-[#1A1A1A]"></span>                             <span class="serif italic text-xl">Curated for Julian Sterling</span>                         </div>                         <div class="flex items-center gap-6">                             <div class="text-center">                                 <p class="text-[10px] uppercase tracking-widest opacity-40">Outlook</p>                                 <p class="serif italic">High Clarity</p>                             </div>                             <div class="text-center">                                 <p class="text-[10px] uppercase tracking-widest opacity-40">Temp</p>                                 <p class="serif italic">18° / London</p>                             </div>                         </div>                     </div>                 </header>                 <div class="grid grid-cols-12 gap-12">                     <!-- Priority Calendar -->                     <section class="col-span-8 animate-reveal delay-1">                         <h3 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-8 border-b border-[#1A1A1A] pb-4 flex justify-between items-center">                             Appointments                             <iconify-icon icon="lucide:arrow-right" class="text-sm opacity-40 cursor-pointer hover:opacity-100"></iconify-icon>                         </h3>                         <div class="space-y-6">                             <div class="flex items-start gap-8 group cursor-pointer">                                 <div class="w-24 shrink-0 text-right">                                     <p class="serif italic text-2xl">09:30</p>                                     <p class="text-[10px] uppercase tracking-widest opacity-40">AM</p>                                 </div>                                 <div class="flex-1 luxury-card pt-2 group-hover:border-[#D4AF37] transition-all duration-500">                                     <h4 class="serif text-2xl mb-1">Board Review Meeting</h4>                                     <p class="text-xs leading-relaxed opacity-60 max-w-lg">Reviewing the Q3 performance metrics and finalising the vision for international expansion into the APAC region.</p>                                 </div>                             </div>                             <div class="flex items-start gap-8 group cursor-pointer">                                 <div class="w-24 shrink-0 text-right">                                     <p class="serif italic text-2xl">14:00</p>                                     <p class="text-[10px] uppercase tracking-widest opacity-40">PM</p>                                 </div>                                 <div class="flex-1 luxury-card pt-2 group-hover:border-[#D4AF37] transition-all duration-500">                                     <h4 class="serif text-2xl mb-1">Design Critique: V3</h4>                                     <p class="text-xs leading-relaxed opacity-60 max-w-lg">Iterative feedback loop for the luxury brand assets and the new digital interface components.</p>                                 </div>                             </div>                         </div>                     </section>                     <!-- Priority Tasks -->                     <section class="col-span-4 animate-reveal delay-2">                         <h3 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-8 border-b border-[#1A1A1A] pb-4">                             Directives                         </h3>                         <ul class="space-y-4">                             <li class="flex items-start gap-4 group cursor-pointer">                                 <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">                                     <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>                                 </div>                                 <div>                                     <p class="serif text-lg leading-tight">Approve the creative budget for the seasonal campaign</p>                                     <p class="text-[9px] uppercase tracking-widest font-bold mt-1 text-[#D4AF37]">High Priority</p>                                 </div>                             </li>                             <li class="flex items-start gap-4 group cursor-pointer">                                 <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">                                     <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>                                 </div>                                 <div>                                     <p class="serif text-lg leading-tight">Draft executive summary for the investor relations deck</p>                                     <p class="text-[9px] uppercase tracking-widest font-bold mt-1 opacity-40">Finance</p>                                 </div>                             </li>                             <li class="flex items-start gap-4 group cursor-pointer">                                 <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">                                     <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>                                 </div>                                 <div>                                     <p class="serif text-lg leading-tight">Coordinate with the logistics team on international shipping</p>                                     <p class="text-[9px] uppercase tracking-widest font-bold mt-1 opacity-40">Operations</p>                                 </div>                             </li>                         </ul>                     </section>                     <!-- Featured Content/Insight -->                     <section class="col-span-12 mt-12 animate-reveal delay-3">                         <div class="border border-[#1A1A1A] p-10 flex gap-12 items-center bg-white shadow-sm">                             <div class="flex-1">                                 <span class="uppercase text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] mb-2 block">Orion Intelligence Insight</span>                                 <h2 class="serif text-4xl mb-6">Optimization Opportunity Identified</h2>                                 <p class="text-sm leading-relaxed opacity-70 mb-8 max-w-2xl">                                     Based on your recent activities in the "Financial Governance" area, Orion suggests re-allocating assets from the Archive into the Q4 Projects folder to streamline the current audit process. Historical data indicates a 14% efficiency gain when resources are localized.                                 </p>                                 <button id="cta-insight-btn" class="btn-gold-slide px-10 py-3 uppercase text-[10px] tracking-[0.3em] font-bold">                                     Execute Reallocation                                 </button>                             </div>                             <div class="w-1/3 aspect-[4/3] overflow-hidden">                                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Insight image" class="w-full h-full object-cover grayscale">                             </div>                         </div>                     </section>                 </div>             </main>             <!-- Right Sidebar Chat Placeholder -->             <aside class="w-16 border-l border-[#1A1A1A] flex flex-col items-center py-10 gap-10 hover:w-20 transition-all duration-700 bg-[#F9F8F6] z-40">                 <div class="flex flex-col items-center gap-2 cursor-pointer group">                     <iconify-icon icon="lucide:sparkles" class="text-xl text-[#D4AF37] group-hover:scale-110 transition-transform"></iconify-icon>                 </div>                 <div class="h-px w-8 bg-[#1A1A1A]/20"></div>                 <div class="flex flex-col items-center gap-1">                     <span class="uppercase text-[10px] tracking-[0.5em] font-bold [writing-mode:vertical-lr] opacity-30">Orion Agent</span>                 </div>                 <div class="flex-1"></div>                 <button id="chat-expand-btn" class="mb-4 opacity-40 hover:opacity-100 transition-opacity">                     <iconify-icon icon="lucide:chevron-left" class="text-lg"></iconify-icon>                 </button>             </aside>         </div>     </div> </body> </html> ``` Generate the HTML for "Contacts List". The shared UI (nav, sidebar, footer) must be BYTE-FOR-BYTE identical to the source.

- Source: https://superdesign.dev/library/orion-or-contacts-list
- Category: form
- Tags: -
- Preview: https://draft-a33feaa2-b1ee-4cb0-8eff-e9940f0227fe.preview.superdesign.dev
- Thumbnail: https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/a33feaa2-b1ee-4cb0-8eff-e9940f0227fe/1768456905583.png
- Author: Sid Dani

---

## Page to Generate: Contacts List

People and organizations with avatar, company, last interaction. Searchable directory with full sidebar.

## Flow Context

Orion additional pages for complete app experience including settings, billing, contacts, and specialized views

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "Orion Executive Dashboard": https://draft-2e684af5-3396-4184-a1a5-64720fad5b1b.preview.superdesign.dev
- "Settings Hub": https://draft-f6fc5787-a91f-44f5-8220-97f0f329befc.preview.superdesign.dev
- "Billing & Plans": https://draft-d108611f-627a-40c0-8eb0-2821809e4608.preview.superdesign.dev
- "Contacts List" (current page): https://draft-a33feaa2-b1ee-4cb0-8eff-e9940f0227fe.preview.superdesign.dev
- "Contact Detail": https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev
- "Archive": https://draft-bcf0bb74-84e9-47a0-af22-e84364b2ddc0.preview.superdesign.dev
- "Area Detail": https://draft-a7eb4d0e-3517-4cec-a118-2c81c263721f.preview.superdesign.dev
- "Task List": https://draft-eea8951c-4159-4716-b34b-6d869f5bf99b.preview.superdesign.dev
- "Calendar - Week View": https://draft-6e2d2701-2554-4be2-8263-ce033aa50ac0.preview.superdesign.dev
- "Notifications Center": https://draft-e658ea1a-d163-4ef6-b45f-2cee81ac3dad.preview.superdesign.dev
- "Pricing & Plans": https://draft-c789e7c4-668b-4bfe-8016-8addf857f42c.preview.superdesign.dev

**Navigation Link Instructions:**

1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## CRITICAL: Shared UI Components - MUST BE IDENTICAL

**ABSOLUTE RULES - NO EXCEPTIONS:**

1. **Navigation Bar**: Copy the EXACT same nav/header HTML. DO NOT add, remove, or modify ANY menu items.
2. **Sidebar Menu**: If source has sidebar, copy it EXACTLY. DO NOT add or remove ANY menu items.
3. **Footer**: Copy the EXACT same footer HTML. No modifications allowed.
4. **Logo & Branding**: Must be identical - same position, size, and content.
5. **Global Layout Structure**: Same container widths, padding, margins.

**WHY THIS MATTERS:**\
These pages belong to the SAME application flow. Users expect consistent navigation across all pages. Adding or removing nav items breaks the user experience and creates confusion.

## Visual Consistency Requirements

- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns (buttons, cards, forms, etc.)
- Maintain the same responsive behavior and layout grid
- ONLY the main content area should change based on the page purpose

## What You CAN Change

- Main content area (the unique part of each page)
- Page-specific components within the content area
- Content text and data

## What You CANNOT Change

- Header/Navigation structure and items
- Sidebar structure and menu items (if present)
- Footer structure and content
- Global CSS variables and theme colors
- Common UI component styles

### Source Page HTML (PRESERVE ALL SHARED UI EXACTLY):

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orion | Executive Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #D4AF37;
            --bg: #F9F8F6;
            --text: #1A1A1A;
            --border: #1A1A1A;
            --easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text);
            background-color: var(--bg);
        }

        .serif {
            font-family: 'Playfair Display', serif;
        }

        .tracking-editorial {
            letter-spacing: 0.25em;
        }

        .btn-gold-slide {
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
            transition: color 0.5s var(--easing);
            z-index: 1;
        }

        .btn-gold-slide::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--primary);
            transform: translateX(-101%);
            transition: transform 0.5s var(--easing);
            z-index: -1;
        }

        .btn-gold-slide:hover::after {
            transform: translateX(0);
        }

        .btn-gold-slide:hover {
            color: white;
            border-color: var(--primary);
        }

        .luxury-card {
            border-top: 1px solid var(--border);
            transition: all 0.5s var(--easing);
        }

        .luxury-card img {
            filter: grayscale(100%);
            transition: filter 1.5s var(--easing), transform 1.5s var(--easing);
        }

        .luxury-card:hover img {
            filter: grayscale(0%);
            transform: scale(1.05);
        }

        .grid-bg {
            background-image: linear-gradient(var(--border) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--border) 0.5px, transparent 0.5px);
            background-size: 40px 40px;
            opacity: 0.03;
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border);
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-reveal {
            animation: slideInUp 1.2s var(--easing) forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col bg-[#F9F8F6] selection:bg-[#D4AF37] selection:text-white">
        
        <!-- Top Navigation Bar -->
        <nav class="h-[80px] w-full border-b border-[#1A1A1A] flex items-center justify-between px-10 z-50 bg-[#F9F8F6]/95 backdrop-blur-sm sticky top-0">
            <div class="flex items-center gap-2">
                <span class="serif text-3xl font-black tracking-tighter">OR<span class="text-[#D4AF37]">I</span>ON</span>
            </div>

            <div class="flex-1 max-w-xl px-12">
                <div class="relative flex items-center">
                    <iconify-icon icon="lucide:search" class="absolute left-0 text-lg opacity-40"></iconify-icon>
                    <input type="text" placeholder="Search your knowledge archive..." 
                           class="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-1 pl-8 focus:outline-none focus:border-[#D4AF37] serif italic text-lg transition-all duration-500">
                </div>
            </div>

            <div class="flex items-center gap-8">
                <button id="nav-notif-link" class="hover:text-[#D4AF37] transition-colors duration-500">
                    <iconify-icon icon="lucide:bell" class="text-xl"></iconify-icon>
                </button>
                <button id="nav-settings-link" class="hover:text-[#D4AF37] transition-colors duration-500">
                    <iconify-icon icon="lucide:settings" class="text-xl"></iconify-icon>
                </button>
                <div class="flex items-center gap-3 cursor-pointer group">
                    <div class="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center text-[#F9F8F6] text-xs font-bold">
                        JS
                    </div>
                    <span class="uppercase text-[10px] tracking-[0.3em] font-medium hidden lg:block group-hover:text-[#D4AF37] transition-colors duration-500">Julian Sterling</span>
                </div>
            </div>
        </nav>

        <div class="flex flex-1 overflow-hidden">
            
            <!-- Left Sidebar (PARA) -->
            <aside class="w-[280px] border-r border-[#1A1A1A] flex flex-col relative">
                <div class="absolute inset-0 grid-bg pointer-events-none"></div>
                
                <div class="p-6 overflow-y-auto flex-1">
                    <div class="mb-10">
                        <h2 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-6 opacity-40">Knowledge Base</h2>
                        
                        <!-- PARA Sections -->
                        <div class="space-y-8">
                            <!-- Projects -->
                            <div class="group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Projects</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">08</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100 group-hover:border-[#D4AF37]">
                                    <div class="w-full h-24 overflow-hidden mb-3">
                                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Project thumbnail" class="w-full h-full object-cover">
                                    </div>
                                    <p class="text-[10px] uppercase tracking-widest font-semibold">Current Focus</p>
                                    <p class="text-xs mt-1">Q4 Strategic Expansion</p>
                                </div>
                            </div>

                            <!-- Areas -->
                            <div class="group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Areas</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">14</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">
                                    <ul class="space-y-2 text-[11px] uppercase tracking-[0.2em] font-medium">
                                        <li class="hover:text-[#D4AF37] transition-colors">Financial Governance</li>
                                        <li class="hover:text-[#D4AF37] transition-colors">Design Directives</li>
                                        <li class="hover:text-[#D4AF37] transition-colors">Personal Brand</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Resources -->
                            <div class="group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Resources</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">42</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">
                                            <iconify-icon icon="lucide:file-text" class="opacity-40"></iconify-icon>
                                        </div>
                                        <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">
                                            <iconify-icon icon="lucide:library" class="opacity-40"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Archive -->
                            <div class="group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Archive</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">156</span>
                                </div>
                                <div class="luxury-card pt-2 opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t border-[#1A1A1A]">
                    <button id="add-new-link" class="btn-gold-slide w-full py-4 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-2">
                        <iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon>
                        New Entry
                    </button>
                </div>
            </aside>

            <!-- Main Content Area -->
            <main class="flex-1 overflow-y-auto px-16 py-12 custom-scrollbar">
                <header class="mb-16 animate-reveal">
                    <span class="uppercase text-[11px] tracking-[0.4em] font-bold opacity-40 mb-4 block">Monday / October 23, 2023</span>
                    <h1 class="serif text-8xl font-medium leading-[0.9] -ml-1">The Daily Brief</h1>
                    <div class="mt-8 flex items-center gap-12">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-[1px] bg-[#1A1A1A]"></span>
                            <span class="serif italic text-xl">Curated for Julian Sterling</span>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="text-center">
                                <p class="text-[10px] uppercase tracking-widest opacity-40">Outlook</p>
                                <p class="serif italic">High Clarity</p>
                            </div>
                            <div class="text-center">
                                <p class="text-[10px] uppercase tracking-widest opacity-40">Temp</p>
                                <p class="serif italic">18° / London</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="grid grid-cols-12 gap-12">
                    <!-- Priority Calendar -->
                    <section class="col-span-8 animate-reveal delay-1">
                        <h3 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-8 border-b border-[#1A1A1A] pb-4 flex justify-between items-center">
                            Appointments
                            <iconify-icon icon="lucide:arrow-right" class="text-sm opacity-40 cursor-pointer hover:opacity-100"></iconify-icon>
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start gap-8 group cursor-pointer">
                                <div class="w-24 shrink-0 text-right">
                                    <p class="serif italic text-2xl">09:30</p>
                                    <p class="text-[10px] uppercase tracking-widest opacity-40">AM</p>
                                </div>
                                <div class="flex-1 luxury-card pt-2 group-hover:border-[#D4AF37] transition-all duration-500">
                                    <h4 class="serif text-2xl mb-1">Board Review Meeting</h4>
                                    <p class="text-xs leading-relaxed opacity-60 max-w-lg">Reviewing the Q3 performance metrics and finalising the vision for international expansion into the APAC region.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-8 group cursor-pointer">
                                <div class="w-24 shrink-0 text-right">
                                    <p class="serif italic text-2xl">14:00</p>
                                    <p class="text-[10px] uppercase tracking-widest opacity-40">PM</p>
                                </div>
                                <div class="flex-1 luxury-card pt-2 group-hover:border-[#D4AF37] transition-all duration-500">
                                    <h4 class="serif text-2xl mb-1">Design Critique: V3</h4>
                                    <p class="text-xs leading-relaxed opacity-60 max-w-lg">Iterative feedback loop for the luxury brand assets and the new digital interface components.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Priority Tasks -->
                    <section class="col-span-4 animate-reveal delay-2">
                        <h3 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-8 border-b border-[#1A1A1A] pb-4">
                            Directives
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-4 group cursor-pointer">
                                <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">
                                    <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>
                                </div>
                                <div>
                                    <p class="serif text-lg leading-tight">Approve the creative budget for the seasonal campaign</p>
                                    <p class="text-[9px] uppercase tracking-widest font-bold mt-1 text-[#D4AF37]">High Priority</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4 group cursor-pointer">
                                <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">
                                    <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>
                                </div>
                                <div>
                                    <p class="serif text-lg leading-tight">Draft executive summary for the investor relations deck</p>
                                    <p class="text-[9px] uppercase tracking-widest font-bold mt-1 opacity-40">Finance</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4 group cursor-pointer">
                                <div class="w-4 h-4 border border-[#1A1A1A] mt-1 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1A1A1A]">
                                    <iconify-icon icon="lucide:check" class="text-white text-[10px] opacity-0 group-hover:opacity-100"></iconify-icon>
                                </div>
                                <div>
                                    <p class="serif text-lg leading-tight">Coordinate with the logistics team on international shipping</p>
                                    <p class="text-[9px] uppercase tracking-widest font-bold mt-1 opacity-40">Operations</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <!-- Featured Content/Insight -->
                    <section class="col-span-12 mt-12 animate-reveal delay-3">
                        <div class="border border-[#1A1A1A] p-10 flex gap-12 items-center bg-white shadow-sm">
                            <div class="flex-1">
                                <span class="uppercase text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] mb-2 block">Orion Intelligence Insight</span>
                                <h2 class="serif text-4xl mb-6">Optimization Opportunity Identified</h2>
                                <p class="text-sm leading-relaxed opacity-70 mb-8 max-w-2xl">
                                    Based on your recent activities in the "Financial Governance" area, Orion suggests re-allocating assets from the Archive into the Q4 Projects folder to streamline the current audit process. Historical data indicates a 14% efficiency gain when resources are localized.
                                </p>
                                <button id="cta-insight-btn" class="btn-gold-slide px-10 py-3 uppercase text-[10px] tracking-[0.3em] font-bold">
                                    Execute Reallocation
                                </button>
                            </div>
                            <div class="w-1/3 aspect-[4/3] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Insight image" class="w-full h-full object-cover grayscale">
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <!-- Right Sidebar Chat Placeholder -->
            <aside class="w-16 border-l border-[#1A1A1A] flex flex-col items-center py-10 gap-10 hover:w-20 transition-all duration-700 bg-[#F9F8F6] z-40">
                <div class="flex flex-col items-center gap-2 cursor-pointer group">
                    <iconify-icon icon="lucide:sparkles" class="text-xl text-[#D4AF37] group-hover:scale-110 transition-transform"></iconify-icon>
                </div>
                <div class="h-px w-8 bg-[#1A1A1A]/20"></div>
                <div class="flex flex-col items-center gap-1">
                    <span class="uppercase text-[10px] tracking-[0.5em] font-bold [writing-mode:vertical-lr] opacity-30">Orion Agent</span>
                </div>
                <div class="flex-1"></div>
                <button id="chat-expand-btn" class="mb-4 opacity-40 hover:opacity-100 transition-opacity">
                    <iconify-icon icon="lucide:chevron-left" class="text-lg"></iconify-icon>
                </button>
            </aside>

        </div>
    </div>
</body>
</html>
~~~

Generate the HTML for "Contacts List". The shared UI (nav, sidebar, footer) must be BYTE-FOR-BYTE identical to the source.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orion | Contacts List</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #D4AF37;
            --bg: #F9F8F6;
            --text: #1A1A1A;
            --border: #1A1A1A;
            --easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text);
            background-color: var(--bg);
        }

        .serif {
            font-family: 'Playfair Display', serif;
        }

        .tracking-editorial {
            letter-spacing: 0.25em;
        }

        .btn-gold-slide {
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
            transition: color 0.5s var(--easing);
            z-index: 1;
        }

        .btn-gold-slide::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--primary);
            transform: translateX(-101%);
            transition: transform 0.5s var(--easing);
            z-index: -1;
        }

        .btn-gold-slide:hover::after {
            transform: translateX(0);
        } 

        .btn-gold-slide:hover {
            color: white;
            border-color: var(--primary);
        }

        .luxury-card {
            border-top: 1px solid var(--border);
            transition: all 0.5s var(--easing);
        }

        .luxury-card img {
            filter: grayscale(100%);
            transition: filter 1.5s var(--easing), transform 1.5s var(--easing);
        }

        .luxury-card:hover img {
            filter: grayscale(0%);
            transform: scale(1.05);
        }

        .grid-bg {
            background-image: linear-gradient(var(--border) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--border) 0.5px, transparent 0.5px);
            background-size: 40px 40px;
            opacity: 0.03;
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border);
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-reveal {
            animation: slideInUp 1.2s var(--easing) forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        .contact-row {
            transition: background-color 0.4s var(--easing);
        }
        .contact-row:hover {
            background-color: rgba(26, 26, 26, 0.02);
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col bg-[#F9F8F6] selection:bg-[#D4AF37] selection:text-white">
        
        <!-- Top Navigation Bar -->
        <nav class="h-[80px] w-full border-b border-[#1A1A1A] flex items-center justify-between px-10 z-50 bg-[#F9F8F6]/95 backdrop-blur-sm sticky top-0">
            <div class="flex items-center gap-2">
                <a href="https://draft-2e684af5-3396-4184-a1a5-64720fad5b1b.preview.superdesign.dev" id="nav-logo-link" class="serif text-3xl font-black tracking-tighter decoration-none text-inherit">OR<span class="text-[#D4AF37]">I</span>ON</a>
            </div>

            <div class="flex-1 max-w-xl px-12">
                <div class="relative flex items-center">
                    <iconify-icon icon="lucide:search" class="absolute left-0 text-lg opacity-40"></iconify-icon>
                    <input type="text" placeholder="Search your network directory..." 
                           class="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-1 pl-8 focus:outline-none focus:border-[#D4AF37] serif italic text-lg transition-all duration-500">
                </div>
            </div>

            <div class="flex items-center gap-8">
                <a href="https://draft-e658ea1a-d163-4ef6-b45f-2cee81ac3dad.preview.superdesign.dev" id="nav-notif-link" class="hover:text-[#D4AF37] transition-colors duration-500">
                    <iconify-icon icon="lucide:bell" class="text-xl"></iconify-icon>
                </a>
                <a href="https://draft-f6fc5787-a91f-44f5-8220-97f0f329befc.preview.superdesign.dev" id="nav-settings-link" class="hover:text-[#D4AF37] transition-colors duration-500">
                    <iconify-icon icon="lucide:settings" class="text-xl"></iconify-icon>
                </a>
                <div class="flex items-center gap-3 cursor-pointer group">
                    <div class="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center text-[#F9F8F6] text-xs font-bold">
                        JS
                    </div>
                    <span class="uppercase text-[10px] tracking-[0.3em] font-medium hidden lg:block group-hover:text-[#D4AF37] transition-colors duration-500">Julian Sterling</span>
                </div>
            </div>
        </nav>

        <div class="flex flex-1 overflow-hidden">
            
            <!-- Left Sidebar (PARA) -->
            <aside class="w-[280px] border-r border-[#1A1A1A] flex flex-col relative">
                <div class="absolute inset-0 grid-bg pointer-events-none"></div>
                
                <div class="p-6 overflow-y-auto flex-1">
                    <div class="mb-10">
                        <h2 class="uppercase text-[11px] tracking-[0.4em] font-bold mb-6 opacity-40">Knowledge Base</h2>
                        
                        <!-- PARA Sections -->
                        <div class="space-y-8">
                            <!-- Projects -->
                            <a href="https://draft-eea8951c-4159-4716-b34b-6d869f5bf99b.preview.superdesign.dev" id="sidebar-projects-link" class="block group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Projects</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">08</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100 group-hover:border-[#D4AF37]">
                                    <div class="w-full h-24 overflow-hidden mb-3">
                                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Project thumbnail" class="w-full h-full object-cover">
                                    </div>
                                    <p class="text-[10px] uppercase tracking-widest font-semibold">Current Focus</p>
                                    <p class="text-xs mt-1">Q4 Strategic Expansion</p>
                                </div>
                            </a>

                            <!-- Areas -->
                            <a href="https://draft-a7eb4d0e-3517-4cec-a118-2c81c263721f.preview.superdesign.dev" id="sidebar-areas-link" class="block group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Areas</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">14</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">
                                    <ul class="space-y-2 text-[11px] uppercase tracking-[0.2em] font-medium">
                                        <li class="hover:text-[#D4AF37] transition-colors">Financial Governance</li>
                                        <li class="hover:text-[#D4AF37] transition-colors text-[#D4AF37]">Global Network</li>
                                        <li class="hover:text-[#D4AF37] transition-colors">Design Directives</li>
                                    </ul>
                                </div>
                            </a>

                            <!-- Resources -->
                            <div class="group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Resources</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">42</span>
                                </div>
                                <div class="luxury-card pt-4 opacity-70 group-hover:opacity-100">
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">
                                            <iconify-icon icon="lucide:file-text" class="opacity-40"></iconify-icon>
                                        </div>
                                        <div class="h-12 border border-[#1A1A1A]/10 flex items-center justify-center">
                                            <iconify-icon icon="lucide:library" class="opacity-40"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Archive -->
                            <a href="https://draft-bcf0bb74-84e9-47a0-af22-e84364b2ddc0.preview.superdesign.dev" id="sidebar-archive-link" class="block group cursor-pointer">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="serif text-xl italic">Archive</span>
                                    <span class="text-[10px] font-bold border border-[#1A1A1A] px-1.5 py-0.5">156</span>
                                </div>
                                <div class="luxury-card pt-2 opacity-30"></div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t border-[#1A1A1A]">
                    <button id="add-new-link" class="btn-gold-slide w-full py-4 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-2">
                        <iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon>
                        Add Contact
                    </button>
                </div>
            </aside>

            <!-- Main Content Area -->
            <main class="flex-1 overflow-y-auto px-16 py-12 custom-scrollbar">
                <header class="mb-16 animate-reveal">
                    <span class="uppercase text-[11px] tracking-[0.4em] font-bold opacity-40 mb-4 block">Network / CRM</span>
                    <h1 class="serif text-8xl font-medium leading-[0.9] -ml-1">The Directory</h1>
                    <div class="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-[#1A1A1A] pb-8">
                        <div class="flex items-center gap-12">
                            <div class="flex items-center gap-3">
                                <span class="w-10 h-[1px] bg-[#1A1A1A]"></span>
                                <span class="serif italic text-xl">Curated Contacts & Organizations</span>
                            </div>
                            <div class="flex items-center gap-6">
                                <div class="text-center">
                                    <p class="text-[10px] uppercase tracking-widest opacity-40">Total Entries</p>
                                    <p class="serif italic">842</p>
                                </div>
                                <div class="text-center">
                                    <p class="text-[10px] uppercase tracking-widest opacity-40">Active Lead</p>
                                    <p class="serif italic">12</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                             <button class="flex items-center gap-2 px-4 py-2 border border-[#1A1A1A] uppercase text-[10px] tracking-widest font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                                <iconify-icon icon="lucide:filter"></iconify-icon>
                                Filter
                             </button>
                             <button class="flex items-center gap-2 px-4 py-2 border border-[#1A1A1A] uppercase text-[10px] tracking-widest font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                                <iconify-icon icon="lucide:arrow-up-down"></iconify-icon>
                                Sort
                             </button>
                        </div>
                    </div>
                </header>

                <div class="animate-reveal delay-1">
                    <!-- Table Header -->
                    <div class="grid grid-cols-12 gap-4 px-6 py-4 uppercase text-[10px] tracking-[0.3em] font-bold opacity-40 border-b border-[#1A1A1A]/10">
                        <div class="col-span-5">Identity / Affiliation</div>
                        <div class="col-span-3">Focus Area</div>
                        <div class="col-span-3">Last Engagement</div>
                        <div class="col-span-1 text-right">Status</div>
                    </div>

                    <!-- Contact List -->
                    <div class="divide-y divide-[#1A1A1A]/10">
                        <!-- Contact 1 -->
                        <a href="https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev" id="contact-1-link" class="grid grid-cols-12 gap-4 px-6 py-8 items-center contact-row group cursor-pointer">
                            <div class="col-span-5 flex items-center gap-6">
                                <div class="w-16 h-16 bg-white border border-[#1A1A1A] flex-shrink-0 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Portrait" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                                </div>
                                <div>
                                    <h3 class="serif text-3xl mb-1">Alistair Thorne</h3>
                                    <p class="uppercase text-[10px] tracking-[0.2em] opacity-60">Managing Director / Thorne & Co.</p>
                                </div>
                            </div>
                            <div class="col-span-3">
                                <span class="text-xs uppercase tracking-widest">Venture Capital</span>
                            </div>
                            <div class="col-span-3">
                                <p class="serif italic text-lg">Oct 12, 2023</p>
                                <p class="text-[9px] uppercase tracking-widest opacity-40">Strategic Briefing</p>
                            </div>
                            <div class="col-span-1 flex justify-end">
                                <div class="w-2 h-2 rounded-none bg-[#D4AF37]"></div>
                            </div>
                        </a>

                        <!-- Contact 2 -->
                        <a href="https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev" id="contact-2-link" class="grid grid-cols-12 gap-4 px-6 py-8 items-center contact-row group cursor-pointer">
                            <div class="col-span-5 flex items-center gap-6">
                                <div class="w-16 h-16 bg-white border border-[#1A1A1A] flex-shrink-0 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Portrait" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                                </div>
                                <div>
                                    <h3 class="serif text-3xl mb-1">Elena Vance</h3>
                                    <p class="uppercase text-[10px] tracking-[0.2em] opacity-60">Creative Director / Studio Vance</p>
                                </div>
                            </div>
                            <div class="col-span-3">
                                <span class="text-xs uppercase tracking-widest">Design Directives</span>
                            </div>
                            <div class="col-span-3">
                                <p class="serif italic text-lg">Sep 28, 2023</p>
                                <p class="text-[9px] uppercase tracking-widest opacity-40">Brand Audit</p>
                            </div>
                            <div class="col-span-1 flex justify-end">
                                <div class="w-2 h-2 rounded-none bg-transparent border border-[#1A1A1A]/20"></div>
                            </div>
                        </a>

                        <!-- Contact 3 -->
                        <a href="https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev" id="contact-3-link" class="grid grid-cols-12 gap-4 px-6 py-8 items-center contact-row group cursor-pointer">
                            <div class="col-span-5 flex items-center gap-6">
                                <div class="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    <span class="text-[#F9F8F6] font-bold text-xl">NM</span>
                                </div>
                                <div>
                                    <h3 class="serif text-3xl mb-1">Nathaniel Mercer</h3>
                                    <p class="uppercase text-[10px] tracking-[0.2em] opacity-60">General Counsel / Mercer Legal</p>
                                </div>
                            </div>
                            <div class="col-span-3">
                                <span class="text-xs uppercase tracking-widest">Governance</span>
                            </div>
                            <div class="col-span-3">
                                <p class="serif italic text-lg">Yesterday</p>
                                <p class="text-[9px] uppercase tracking-widest opacity-40">Compliance Review</p>
                            </div>
                            <div class="col-span-1 flex justify-end">
                                <div class="w-2 h-2 rounded-none bg-[#D4AF37] animate-pulse"></div>
                            </div>
                        </a>

                        <!-- Contact 4 (Organization) -->
                        <a href="https://draft-7d1d1ad6-9e1f-4d2f-9b9a-605689d06fc6.preview.superdesign.dev" id="contact-4-link" class="grid grid-cols-12 gap-4 px-6 py-8 items-center contact-row group cursor-pointer">
                            <div class="col-span-5 flex items-center gap-6">
                                <div class="w-16 h-16 bg-white border border-[#1A1A1A] flex-shrink-0 overflow-hidden p-2">
                                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100" alt="Company" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700">
                                </div>
                                <div>
                                    <h3 class="serif text-3xl mb-1">Aether Dynamics</h3>
                                    <p class="uppercase text-[10px] tracking-[0.2em] opacity-60">Corporate Entity / Aerospace</p>
                                </div>
                            </div>
                            <div class="col-span-3">
                                <span class="text-xs uppercase tracking-widest">Investment Portfolio</span>
                            </div>
                            <div class="col-span-3">
                                <p class="serif italic text-lg">Oct 05, 2023</p>
                                <p class="text-[9px] uppercase tracking-widest opacity-40">Quarterly Report</p>
                            </div>
                            <div class="col-span-1 flex justify-end">
                                <div class="w-2 h-2 rounded-none bg-transparent border border-[#1A1A1A]/20"></div>
                            </div>
                        </a>
                    </div>

                    <!-- Pagination/Footer of list -->
                    <div class="flex justify-between items-center py-12 px-6 border-t border-[#1A1A1A]">
                         <p class="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Showing 4 of 842 records</p>
                         <div class="flex gap-8">
                            <button class="uppercase text-[10px] tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity">Previous</button>
                            <button class="uppercase text-[10px] tracking-[0.3em] font-bold hover:text-[#D4AF37] transition-colors">Next Page</button>
                         </div>
                    </div>
                </div>
            </main>

            <!-- Right Sidebar Chat Placeholder -->
            <aside class="w-16 border-l border-[#1A1A1A] flex flex-col items-center py-10 gap-10 hover:w-20 transition-all duration-700 bg-[#F9F8F6] z-40">
                <div class="flex flex-col items-center gap-2 cursor-pointer group">
                    <iconify-icon icon="lucide:sparkles" class="text-xl text-[#D4AF37] group-hover:scale-110 transition-transform"></iconify-icon>
                </div>
                <div class="h-px w-8 bg-[#1A1A1A]/20"></div>
                <div class="flex flex-col items-center gap-1">
                    <span class="uppercase text-[10px] tracking-[0.5em] font-bold [writing-mode:vertical-lr] opacity-30">Orion Agent</span>
                </div>
                <div class="flex-1"></div>
                <button id="chat-expand-btn" class="mb-4 opacity-40 hover:opacity-100 transition-opacity">
                    <iconify-icon icon="lucide:chevron-left" class="text-lg"></iconify-icon>
                </button>
            </aside>

        </div>
    </div>
</body>
</html>
~~~
