# Action-Centered Home

> A dominant primary action section placed above secondary actions and recent activity. The layout emphasizes “do something now” over browsing. Best Suitable For Task managers, creation tools, booking apps, AI workflow tools.


---

Design a mobile app home layout with reusable modular sections:

1. Context header - Small, contextual introduction at top
2. Primary action block - Large, visually dominant CTA section with icon, headline, and action button. Should stand alone effectively
3. Secondary action list - Grid or stacked rows of actionable items (cards/list items), repeatable
4. Recent activity section - Optional timeline or activity log

Design requirements:

- Each section must be independent and reorderable
- Primary action should be striking and work standalone
- Use bold, modern aesthetic with clear visual hierarchy
- Modern sans-serif typography with strong contrast
- Smooth interactions and spacing
- Mobile-first, finger-friendly touch targets
- Color palette: dark/moody base with vibrant accent colors

Make it look premium and modern with careful attention to spacing, typography, and visual depth.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modular Mobile Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'General Sans', sans-serif;
            background-color: #09090b;
            color: #ffffff;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .glass-panel {
            background: rgba(39, 39, 42, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mesh-gradient {
            background: radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
        }
    </style>
</head>
<body>
    <!-- Root Container -->
    <div class="w-full h-screen flex flex-col relative overflow-hidden bg-zinc-950 mesh-gradient">
        
        <!-- Optional Header Safe Area & Context -->
        <header class="shrink-0 pt-14 px-6 pb-2 flex justify-between items-end z-10">
            <div class="flex flex-col gap-1">
                <span class="text-xs font-medium tracking-wider text-zinc-500 uppercase">Monday, Oct 24</span>
                <h1 class="text-2xl font-semibold text-white tracking-tight leading-none">Good evening, <br><span class="text-zinc-400">Alex</span></h1>
            </div>
            <button class="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 active:scale-95 transition-transform">
                <iconify-icon icon="lucide:bell" width="20"></iconify-icon>
            </button>
        </header>

        <!-- Main Scrollable Content -->
        <main class="flex-1 overflow-y-auto hide-scrollbar px-6 py-6 space-y-8">
            
            <!-- Section 1: Primary Action Block (Modular) -->
            <!-- Designed to be visually dominant and self-contained -->
            <section class="relative w-full group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[32px] opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                <button class="relative w-full aspect-[4/3] bg-zinc-900 rounded-[30px] p-8 flex flex-col justify-between items-start overflow-hidden active:scale-[0.98] transition-all duration-300">
                    <!-- Decorative bg elements -->
                    <div class="absolute right-0 top-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                    
                    <div class="relative z-10">
                        <div class="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                            <iconify-icon icon="lucide:zap" width="28"></iconify-icon>
                        </div>
                        <h2 class="text-3xl font-medium text-white leading-tight">Start Focus<br>Session</h2>
                    </div>
                    
                    <div class="relative z-10 w-full flex justify-between items-end">
                        <p class="text-zinc-400 text-sm font-medium">25 min • High Intensity</p>
                        <div class="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
                        </div>
                    </div>
                </button>
            </section>

            <!-- Section 2: Secondary Action List (Modular Grid) -->
            <section>
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-sm font-medium text-zinc-400 uppercase tracking-wider">Quick Actions</h3>
                    <button class="p-1 text-zinc-500 hover:text-white transition-colors">
                        <iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
                    </button>
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                    <!-- Card 1 -->
                    <div class="glass-panel p-5 rounded-2xl active:bg-zinc-800/50 transition-colors cursor-pointer">
                        <iconify-icon icon="lucide:bar-chart-2" class="text-purple-400 mb-3 text-2xl"></iconify-icon>
                        <p class="font-medium text-zinc-200">Analytics</p>
                        <p class="text-xs text-zinc-500 mt-1">Daily report ready</p>
                    </div>
                    <!-- Card 2 -->
                    <div class="glass-panel p-5 rounded-2xl active:bg-zinc-800/50 transition-colors cursor-pointer">
                        <iconify-icon icon="lucide:calendar" class="text-pink-400 mb-3 text-2xl"></iconify-icon>
                        <p class="font-medium text-zinc-200">Schedule</p>
                        <p class="text-xs text-zinc-500 mt-1">3 events today</p>
                    </div>
                    <!-- Card 3 -->
                    <div class="glass-panel p-5 rounded-2xl active:bg-zinc-800/50 transition-colors cursor-pointer">
                        <iconify-icon icon="lucide:users" class="text-blue-400 mb-3 text-2xl"></iconify-icon>
                        <p class="font-medium text-zinc-200">Team</p>
                        <p class="text-xs text-zinc-500 mt-1">12 active now</p>
                    </div>
                    <!-- Card 4 -->
                    <div class="glass-panel p-5 rounded-2xl active:bg-zinc-800/50 transition-colors cursor-pointer flex flex-col justify-center items-center border-dashed border-zinc-700">
                        <iconify-icon icon="lucide:plus" class="text-zinc-500 text-2xl"></iconify-icon>
                        <p class="text-xs text-zinc-500 mt-2 font-medium">Add Widget</p>
                    </div>
                </div>
            </section>

            <!-- Section 3: Recent Activity (Modular List) -->
            <section>
                 <div class="flex justify-between items-center mb-4">
                    <h3 class="text-sm font-medium text-zinc-400 uppercase tracking-wider">Activity Log</h3>
                </div>
                
                <div class="space-y-0">
                    <!-- Item 1 -->
                    <div class="group flex gap-4 py-3 items-start border-b border-zinc-800/50 last:border-0">
                        <div class="mt-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <div class="flex-1">
                            <p class="text-sm text-zinc-200 font-medium leading-tight">Completed "Deep Work"</p>
                            <p class="text-xs text-zinc-500 mt-1">2 hours ago • Productivity</p>
                        </div>
                        <span class="text-xs font-mono text-zinc-600">+120xp</span>
                    </div>

                    <!-- Item 2 -->
                    <div class="group flex gap-4 py-3 items-start border-b border-zinc-800/50 last:border-0">
                        <div class="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div class="flex-1">
                            <p class="text-sm text-zinc-200 font-medium leading-tight">Synced new devices</p>
                            <p class="text-xs text-zinc-500 mt-1">5 hours ago • System</p>
                        </div>
                        <iconify-icon icon="lucide:check" class="text-zinc-600 text-xs"></iconify-icon>
                    </div>

                    <!-- Item 3 -->
                    <div class="group flex gap-4 py-3 items-start border-b border-zinc-800/50 last:border-0">
                        <div class="mt-1 w-2 h-2 rounded-full bg-zinc-600"></div>
                        <div class="flex-1">
                            <p class="text-sm text-zinc-200 font-medium leading-tight">Updated preferences</p>
                            <p class="text-xs text-zinc-500 mt-1">Yesterday • Settings</p>
                        </div>
                    </div>
                </div>
                
                <button class="w-full mt-4 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors border border-zinc-800 rounded-xl hover:bg-zinc-800/50">
                    View Full History
                </button>
            </section>

        </main>

        <!-- Optional Tab Bar for context (visual balance) -->
        <footer class="shrink-0 pb-[34px] bg-zinc-950/80 backdrop-blur-md border-t border-zinc-800">
            <nav class="flex justify-around items-center h-16">
                <a href="#" id="nav-home" class="flex flex-col items-center gap-1 text-indigo-400">
                    <iconify-icon icon="lucide:home" width="24"></iconify-icon>
                </a>
                <a href="#" id="nav-stats" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <iconify-icon icon="lucide:pie-chart" width="24"></iconify-icon>
                </a>
                <a href="#" id="nav-search" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <iconify-icon icon="lucide:search" width="24"></iconify-icon>
                </a>
                <a href="#" id="nav-profile" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <iconify-icon icon="lucide:user" width="24"></iconify-icon>
                </a>
            </nav>
        </footer>
    </div>
</body>
</html>
~~~
