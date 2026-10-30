# Tidy Design System - Reusable Navigation

> Replace the hardcoded <aside> sidebar element (from "<!-- Persistent Sidebar Navigation -->" to "</aside>") with the reusable Navigation component. Use this exact component tag: <sd-component componentId="1178bb72-9e1e-4bb2-bd46-db10764e0418" name="Navigation" activeItem="colors" dashboardHref="#dashboard" tasksHref="#tasks" roomsHref="#rooms" streaksHref="#streaks" scheduleHref="#schedule" settingsHref="#settings" userName="Designer" planName="System v1.0.4"></sd-component>


---

Replace the hardcoded <aside> sidebar element (from "<!-- Persistent Sidebar Navigation -->" to "</aside>") with the reusable Navigation component. Use this exact component tag: <sd-component componentId="1178bb72-9e1e-4bb2-bd46-db10764e0418" name="Navigation" activeItem="colors" dashboardHref="#dashboard" tasksHref="#tasks" roomsHref="#rooms" streaksHref="#streaks" scheduleHref="#schedule" settingsHref="#settings" userName="Designer" planName="System v1.0.4"></sd-component>

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tidy Design System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <style>
    @import url('https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@400,500,600,700&f[]=satoshi@400,500,700&display=swap');

    :root {
      --background: 45 40% 98%;
      --foreground: 180 15% 15%;
      --card: 0 0% 100%;
      --card-foreground: 180 15% 15%;
      --popover: 0 0% 100%;
      --popover-foreground: 180 15% 15%;
      --primary: 181 45% 50%;
      --primary-foreground: 181 10% 98%;
      --secondary: 147 47% 62%;
      --secondary-foreground: 147 10% 15%;
      --muted: 45 20% 92%;
      --muted-foreground: 180 5% 45%;
      --accent: 45 60% 94%;
      --accent-foreground: 180 15% 15%;
      --destructive: 0 84% 60%;
      --destructive-foreground: 0 0% 98%;
      --border: 45 15% 88%;
      --input: 45 15% 88%;
      --ring: 181 45% 50%;
      --radius: 0.75rem;
    }

    body {
      font-family: 'Satoshi', sans-serif;
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      letter-spacing: -0.02em;
    }

    .sidebar-link.active {
      background-color: hsl(var(--accent));
      color: hsl(var(--primary));
      font-weight: 600;
    }

    .component-card {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: hsl(var(--muted));
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: hsl(var(--muted-foreground) / 0.3);
    }

    .custom-shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
    .custom-shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
    .custom-shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05); }
  </style>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "#45B7B8",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#6FCF97",
              foreground: "#1F2937",
            },
            muted: {
              DEFAULT: "#F5F0E8",
              foreground: "#64748B",
            },
            accent: {
              DEFAULT: "#FDF6E3",
              foreground: "#2D3436",
            },
            destructive: {
              DEFAULT: "#EB5757",
              foreground: "#FFFFFF",
            },
            teal: {
              50: '#F0F9F9',
              100: '#E1F2F2',
              200: '#BDE2E2',
              300: '#8ACCCC',
              400: '#4ECDC4', // Base Teal
              500: '#45B7B8', // Primary Teal
              600: '#389A9B',
              700: '#2F7D7D',
            },
            sage: {
              50: '#F2F8F5',
              100: '#E5F1EB',
              200: '#CCE3D7',
              300: '#99C7AF',
              400: '#6FCF97', // Base Green
              500: '#52B788', // Deep Green
            },
            sand: {
              50: '#FBF9F6',
              100: '#F5F0E8',
              200: '#E8DCC8',
              300: '#D9C8AC',
            }
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          }
        }
      }
    }
  </script>
</head>
<body>
  <div class="flex min-h-screen">
    <!-- Persistent Sidebar Navigation -->
    <sd-component componentId="1178bb72-9e1e-4bb2-bd46-db10764e0418" name="Navigation" props='{"activeItem":"colors", "userName":"Designer", "planName":"System v1.0.4"}'></sd-component>

    <!-- Main Content Area -->
    <main class="flex-1 ml-72 p-12 max-w-7xl mx-auto space-y-24">
      
      <!-- Intro Header -->
      <section id="intro" class="space-y-4 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold uppercase tracking-wider">
          <iconify-icon icon="lucide:star-full"></iconify-icon>
          Shadcn/UI Based
        </div>
        <h2 class="text-5xl font-extrabold tracking-tight text-slate-900">
          Calm, Tidy, and <span class="text-primary italic">Frictionless.</span>
        </h2>
        <p class="text-xl text-slate-500 max-w-2xl leading-relaxed">
          A comprehensive design system for Tidy, designed specifically to reduce cognitive load and provide a soothing interface for ADHD users managing their cleaning routines.
        </p>
      </section>

      <!-- Color Palette -->
      <section id="colors" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Color Foundations</h3>
            <p class="text-slate-500 mt-1">A palette inspired by nature to keep the mind calm.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Primary Teals -->
          <div class="space-y-3">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Primary Teals</p>
            <div class="group">
              <div class="h-24 w-full bg-primary rounded-t-xl flex items-end p-4 text-white font-bold">#45B7B8</div>
              <div class="h-12 w-full bg-teal-400 border-x border-border p-3 flex justify-between items-center text-xs">
                <span>Teal 400</span>
                <span class="font-mono">#4ECDC4</span>
              </div>
              <div class="h-12 w-full bg-teal-100 rounded-b-xl border-x border-b border-border p-3 flex justify-between items-center text-xs">
                <span>Teal 100</span>
                <span class="font-mono">#E1F2F2</span>
              </div>
            </div>
          </div>
          <!-- Cleaning Greens -->
          <div class="space-y-3">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Cleaning Greens</p>
            <div class="group">
              <div class="h-24 w-full bg-secondary rounded-t-xl flex items-end p-4 text-slate-800 font-bold">#6FCF97</div>
              <div class="h-12 w-full bg-sage-500 border-x border-border p-3 flex justify-between items-center text-xs text-white">
                <span>Sage 500</span>
                <span class="font-mono">#52B788</span>
              </div>
              <div class="h-12 w-full bg-sage-100 rounded-b-xl border-x border-b border-border p-3 flex justify-between items-center text-xs">
                <span>Sage 100</span>
                <span class="font-mono">#E5F1EB</span>
              </div>
            </div>
          </div>
          <!-- Warm Neutrals -->
          <div class="space-y-3">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Warm Neutrals</p>
            <div class="group">
              <div class="h-24 w-full bg-sand-100 rounded-t-xl flex items-end p-4 text-slate-800 font-bold border border-border">#F5F0E8</div>
              <div class="h-12 w-full bg-sand-200 border-x border-border p-3 flex justify-between items-center text-xs">
                <span>Sand 200</span>
                <span class="font-mono">#E8DCC8</span>
              </div>
              <div class="h-12 w-full bg-background rounded-b-xl border-x border-b border-border p-3 flex justify-between items-center text-xs">
                <span>Background</span>
                <span class="font-mono">#FBF9F6</span>
              </div>
            </div>
          </div>
          <!-- UI States -->
          <div class="space-y-3">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Feedback States</p>
            <div class="flex gap-2 h-24">
              <div class="flex-1 bg-destructive rounded-xl shadow-inner" title="Error"></div>
              <div class="flex-1 bg-[#F59E0B] rounded-xl shadow-inner" title="Warning"></div>
              <div class="flex-1 bg-[#3B82F6] rounded-xl shadow-inner" title="Info"></div>
            </div>
            <div class="p-4 bg-white rounded-xl border border-border">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-3 h-3 rounded-full bg-primary"></div>
                <span class="text-xs font-medium text-slate-600">Focus State Teal</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-slate-200"></div>
                <span class="text-xs font-medium text-slate-600">Disabled Slate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Typography -->
      <section id="typography" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Typography Hierarchy</h3>
            <p class="text-slate-500 mt-1">Plus Jakarta Sans for headings, Satoshi for high readability.</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-border p-10 space-y-12">
          <div class="grid grid-cols-4 gap-8">
            <div class="col-span-1 border-r border-border pr-8">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Headings</p>
              <div class="space-y-1 text-slate-400 text-xs">
                <p>Font: Plus Jakarta Sans</p>
                <p>Weight: Bold (700)</p>
                <p>Letter-spacing: -2%</p>
              </div>
            </div>
            <div class="col-span-3 space-y-8">
              <div class="space-y-1">
                <h1 class="text-5xl font-bold">The living room is tidy</h1>
                <p class="text-xs text-muted-foreground font-mono uppercase">H1 — 48px / 1.1 Leading</p>
              </div>
              <div class="space-y-1">
                <h2 class="text-3xl font-bold">Time for a deep clean</h2>
                <p class="text-xs text-muted-foreground font-mono uppercase">H2 — 30px / 1.2 Leading</p>
              </div>
              <div class="space-y-1">
                <h3 class="text-xl font-bold">Laundry Basket Overflowing</h3>
                <p class="text-xs text-muted-foreground font-mono uppercase">H3 — 20px / 1.4 Leading</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-8 pt-12 border-t border-border">
            <div class="col-span-1 border-r border-border pr-8">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Body Text</p>
              <div class="space-y-1 text-slate-400 text-xs">
                <p>Font: Satoshi</p>
                <p>Weight: Regular/Medium</p>
                <p>Line-height: 1.6</p>
              </div>
            </div>
            <div class="col-span-3 space-y-6 max-w-2xl">
              <div>
                <p class="text-lg leading-relaxed">Cleaning doesn't have to be overwhelming. Break it down into small, 5-minute tasks to keep the momentum going without the stress.</p>
                <p class="text-xs text-muted-foreground font-mono uppercase mt-2">Body Large — 18px</p>
              </div>
              <div>
                <p class="text-base leading-relaxed text-slate-600">Your environment affects your focus. A tidy space leads to a tidy mind, especially when everything has a designated home.</p>
                <p class="text-xs text-muted-foreground font-mono uppercase mt-2">Body Regular — 16px</p>
              </div>
              <div>
                <p class="text-sm text-slate-500">Small tip: Use a timer to gamify your cleaning session.</p>
                <p class="text-xs text-muted-foreground font-mono uppercase mt-2">Caption — 14px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons & Actions -->
      <section id="buttons" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Buttons & Interactive</h3>
            <p class="text-slate-500 mt-1">Approachable actions with clear visual weighting.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Standard Buttons -->
          <div class="bg-white rounded-2xl border border-border p-8 space-y-6">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Variants</p>
            <div class="flex flex-wrap gap-4">
              <button class="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all focus:ring-4 focus:ring-primary/20 active:scale-95">
                Primary Action
              </button>
              <button class="px-6 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all focus:ring-4 focus:ring-secondary/20 active:scale-95">
                Secondary
              </button>
              <button class="px-6 py-2.5 bg-transparent border border-border text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all focus:ring-4 focus:ring-slate-100 active:scale-95">
                Outline
              </button>
              <button class="px-6 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-lg transition-all">
                Ghost
              </button>
            </div>
            
            <div class="pt-4">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">States</p>
              <div class="flex flex-wrap gap-4">
                <button class="px-6 py-2.5 bg-primary/40 text-white cursor-not-allowed font-semibold rounded-lg" disabled>
                  Disabled State
                </button>
                <button class="px-6 py-2.5 bg-destructive text-white font-semibold rounded-lg hover:bg-destructive/90 transition-all">
                  <iconify-icon icon="lucide:trash-2" class="mr-2 align-middle"></iconify-icon>
                  Destructive
                </button>
              </div>
            </div>
          </div>

          <!-- Toggle & Selection -->
          <div class="bg-white rounded-2xl border border-border p-8">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Toggle & Badges</p>
            <div class="space-y-8">
              <div class="flex items-center gap-12">
                <div class="space-y-2">
                  <span class="text-xs text-slate-400 font-medium uppercase">Switch</span>
                  <div class="flex items-center">
                    <button class="w-11 h-6 bg-primary rounded-full relative transition-colors">
                      <span class="absolute top-1 left-6 w-4 h-4 bg-white rounded-full shadow-sm"></span>
                    </button>
                    <span class="ml-3 text-sm font-medium">Daily Reminders</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <span class="text-xs text-slate-400 font-medium uppercase">Inactive</span>
                  <div class="flex items-center">
                    <button class="w-11 h-6 bg-slate-200 rounded-full relative transition-colors">
                      <span class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></span>
                    </button>
                    <span class="ml-3 text-sm font-medium">Quiet Mode</span>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-xs text-slate-400 font-medium uppercase">Badges</span>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">Urgent Clean</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary/10 text-sage-600 border border-secondary/20">Completed</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sand-200 text-slate-600 border border-sand-300">Planned</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-destructive/10 text-destructive border border-destructive/20">Delayed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Forms & Inputs -->
      <section id="forms" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Forms & Inputs</h3>
            <p class="text-slate-500 mt-1">Clear labels and generous target areas to minimize errors.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Text Inputs -->
          <div class="lg:col-span-2 bg-white rounded-2xl border border-border p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">Task Name</label>
                <input type="text" placeholder="e.g. Clean the kitchen counter" class="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 flex justify-between">
                  Focus Time
                  <span class="text-primary text-xs font-normal">Recommended</span>
                </label>
                <select class="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none">
                  <option>5 Minutes (Quick Burst)</option>
                  <option>15 Minutes (Standard Task)</option>
                  <option>30 Minutes (Deep Clean)</option>
                </select>
              </div>
              <div class="space-y-2 md:col-span-2">
                <label class="text-sm font-semibold text-slate-700">Task Details</label>
                <textarea rows="3" placeholder="Add any notes to help you get started..." class="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none"></textarea>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-destructive">Required Field</label>
                <input type="text" value="Invalid Input" class="w-full px-4 py-2.5 rounded-lg border border-destructive bg-destructive/5 text-destructive focus:outline-none focus:ring-4 focus:ring-destructive/10 transition-all">
                <p class="text-xs text-destructive font-medium">Please describe your cleaning goal.</p>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-400">Disabled Input</label>
                <input type="text" disabled value="Read only info" class="w-full px-4 py-2.5 rounded-lg border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed">
              </div>
            </div>
          </div>

          <!-- Selection Controls -->
          <div class="bg-white rounded-2xl border border-border p-8 space-y-8">
            <div class="space-y-4">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Checkboxes</p>
              <div class="space-y-3">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center text-white transition-all">
                    <iconify-icon icon="lucide:check" class="text-sm font-bold"></iconify-icon>
                  </div>
                  <span class="text-sm font-medium group-hover:text-primary transition-colors">Vacuum Bedroom</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-5 h-5 rounded border-2 border-border bg-white flex items-center justify-center text-transparent transition-all">
                    <iconify-icon icon="lucide:check" class="text-sm font-bold"></iconify-icon>
                  </div>
                  <span class="text-sm font-medium group-hover:text-primary transition-colors">Organize Desk</span>
                </label>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Radio Group</p>
              <div class="space-y-3">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-5 h-5 rounded-full border-2 border-primary p-0.5">
                    <div class="w-full h-full rounded-full bg-primary"></div>
                  </div>
                  <span class="text-sm font-medium">Every Day</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-5 h-5 rounded-full border-2 border-border p-0.5"></div>
                  <span class="text-sm font-medium">Weekly</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feedback & Status -->
      <section id="feedback" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Feedback & Alerts</h3>
            <p class="text-slate-500 mt-1">Communicating status without causing panic.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Alerts -->
          <div class="p-5 bg-teal-50 border border-teal-200 rounded-xl flex gap-4">
            <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-primary flex-shrink-0">
              <iconify-icon icon="lucide:check-circle" class="text-xl"></iconify-icon>
            </div>
            <div>
              <h4 class="font-bold text-teal-800">Task Completed!</h4>
              <p class="text-teal-700 text-sm mt-0.5">Great job! Your kitchen is now looking spotless. Take a 2-minute break.</p>
            </div>
          </div>

          <div class="p-5 bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl flex gap-4">
            <div class="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706] flex-shrink-0">
              <iconify-icon icon="lucide:alert-triangle" class="text-xl"></iconify-icon>
            </div>
            <div>
              <h4 class="font-bold text-[#92400E]">Deep Clean Overdue</h4>
              <p class="text-[#B45309] text-sm mt-0.5">The bathroom hasn't been deep cleaned in 2 weeks. Just do the mirror first?</p>
            </div>
          </div>

          <div class="p-5 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl flex gap-4">
            <div class="w-10 h-10 rounded-full bg-[#FEE2E2] flex items-center justify-center text-destructive flex-shrink-0">
              <iconify-icon icon="lucide:x-circle" class="text-xl"></iconify-icon>
            </div>
            <div>
              <h4 class="font-bold text-[#991B1B]">Streak At Risk</h4>
              <p class="text-[#B91C1C] text-sm mt-0.5">One task needed to maintain your 5-day cleaning streak!</p>
            </div>
          </div>

          <div class="p-5 bg-white border border-border rounded-xl flex gap-4 shadow-sm">
            <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <iconify-icon icon="lucide:info" class="text-xl"></iconify-icon>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">System Update</h4>
              <p class="text-slate-500 text-sm mt-0.5">We've added new progress icons to your dashboard. Check them out!</p>
            </div>
          </div>
        </div>

        <!-- Progress -->
        <div class="bg-white rounded-2xl border border-border p-8 space-y-6">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress Tracking</p>
          <div class="space-y-4">
            <div class="flex justify-between items-end">
              <span class="text-sm font-bold text-slate-700">Overall Tidy Level</span>
              <span class="text-lg font-bold text-primary">84%</span>
            </div>
            <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-1000" style="width: 84%"></div>
            </div>
            <div class="flex justify-between text-xs text-slate-400">
              <span>Just started</span>
              <span>Nearly there!</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Overlays -->
      <section id="overlays" class="space-y-8">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Overlays & Layout</h3>
            <p class="text-slate-500 mt-1">Focusing content and depth scales.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <!-- Modal Mockup -->
          <div class="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-12 flex items-center justify-center">
            <div class="w-full max-w-sm bg-white rounded-2xl custom-shadow-lg border border-border p-6 space-y-4 animate-in fade-in zoom-in duration-300">
              <div class="flex justify-between items-center">
                <h4 class="text-lg font-bold">Complete Task?</h4>
                <button class="text-slate-400 hover:text-slate-600 transition-colors"><iconify-icon icon="lucide:x"></iconify-icon></button>
              </div>
              <p class="text-sm text-slate-500 leading-relaxed">
                You're about to mark "Wash the dishes" as done. This will earn you 50 XP and a sparkle badge.
              </p>
              <div class="flex gap-3 pt-2">
                <button class="flex-1 px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">Wait</button>
                <button class="flex-1 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Yes, Done!</button>
              </div>
            </div>
          </div>

          <!-- Depth Scale -->
          <div class="bg-white rounded-2xl border border-border p-8 space-y-6">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Shadow & Elevation Scale</p>
            <div class="grid grid-cols-2 gap-6">
              <div class="h-24 bg-white border border-border rounded-xl flex items-center justify-center custom-shadow-sm">
                <span class="text-xs font-bold text-slate-400 uppercase">Small Elevation</span>
              </div>
              <div class="h-24 bg-white border border-border rounded-xl flex items-center justify-center custom-shadow-md">
                <span class="text-xs font-bold text-slate-400 uppercase">Medium Elevation</span>
              </div>
              <div class="h-24 bg-white border border-border rounded-xl flex items-center justify-center custom-shadow-lg col-span-2">
                <span class="text-xs font-bold text-slate-400 uppercase">Large Focus Elevation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Spacing -->
      <section id="spacing" class="space-y-8 pb-24">
        <div class="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 class="text-2xl font-bold">Spacing Scale</h3>
            <p class="text-slate-500 mt-1">Standardized grid to maintain consistency.</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-border p-10">
          <div class="space-y-6">
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">4px (1)</div>
              <div class="h-4 w-1 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">8px (2)</div>
              <div class="h-4 w-2 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">16px (4)</div>
              <div class="h-4 w-4 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">24px (6)</div>
              <div class="h-4 w-6 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">32px (8)</div>
              <div class="h-4 w-8 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">48px (12)</div>
              <div class="h-4 w-12 bg-primary rounded-full"></div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-24 text-sm font-mono text-slate-400">64px (16)</div>
              <div class="h-4 w-16 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>

  <script>
    // Simple scroll active indicator for sidebar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  </script>
</body>
</html>
~~~
