# FedMindy | Empire Command Dashboard

> Create a desktop admin dashboard for FedMindy's backend management system. This is Mindy's control center. Design a sophisticated dark dashboard with: left sidebar navigation (Dashboard, Content Creator, Community Hub, Analytics, Platform Integration, Shop Manager, Events, Messaging, Settings), main content area showing dashboard overview with key metrics (total sales, followers, engagement rate, pending messages), quick action cards. Use the same brutalist urban luxury aesthetic as the fan-facing site - neon lime yellow (#d9ff00) accents, black background, white borders, Syncopate display font for headings. Include header with Mindy's profile/logout. Design for desktop/large screens. Make it feel powerful yet approachable - this is where she controls her empire.


---

Create a desktop admin dashboard for FedMindy's backend management system. This is Mindy's control center. Design a sophisticated dark dashboard with: left sidebar navigation (Dashboard, Content Creator, Community Hub, Analytics, Platform Integration, Shop Manager, Events, Messaging, Settings), main content area showing dashboard overview with key metrics (total sales, followers, engagement rate, pending messages), quick action cards. Use the same brutalist urban luxury aesthetic as the fan-facing site - neon lime yellow (#d9ff00) accents, black background, white borders, Syncopate display font for headings. Include header with Mindy's profile/logout. Design for desktop/large screens. Make it feel powerful yet approachable - this is where she controls her empire.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FedMindy | Empire Command</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --accent: #d9ff00;
            --bg-dark: #0a0a0a;
            --border-white: #ffffff;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            color: #fff;
            margin: 0;
            overflow: hidden;
        }

        .display-font {
            font-family: 'Syncopate', sans-serif;
            text-transform: uppercase;
        }

        .brutalist-border {
            border: 2px solid var(--border-white);
        }

        .brutalist-border-accent {
            border: 2px solid var(--accent);
        }

        .brutalist-shadow {
            box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 1);
        }

        .brutalist-shadow-accent {
            box-shadow: 4px 4px 0px 0px var(--accent);
        }

        .nav-link {
            transition: all 0.2s ease;
            border-left: 4px solid transparent;
        }

        .nav-link:hover {
            background-color: rgba(217, 255, 0, 0.05);
            border-left: 4px solid var(--accent);
            color: var(--accent);
        }

        .nav-link.active {
            background-color: rgba(217, 255, 0, 0.1);
            border-left: 4px solid var(--accent);
            color: var(--accent);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #111;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent);
        }

        .noise-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.03;
            background-image: url('https://grainy-gradients.vercel.app/noise.svg');
            z-index: 50;
        }
    </style>
</head>
<body>
    <div class="flex h-screen bg-[#0a0a0a] relative overflow-hidden">
        <div class="noise-overlay"></div>

        <!-- Sidebar Navigation -->
        <aside class="w-72 border-r-2 border-white/10 flex flex-col z-10">
            <div class="p-8">
                <h1 class="display-font text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <span class="text-[#d9ff00]">FM</span> OS
                </h1>
                <p class="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Empire Command v2.4.0</p>
            </div>

            <nav class="flex-1 px-4 space-y-2">
                <a href="#" id="nav-dashboard" class="nav-link active flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:layout-dashboard" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest font-bold">Dashboard</span>
                </a>
                <a href="#" id="nav-content" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:camera" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Content Creator</span>
                </a>
                <a href="#" id="nav-community" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:users" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Community Hub</span>
                </a>
                <a href="#" id="nav-analytics" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:bar-chart-3" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Analytics</span>
                </a>
                <a href="#" id="nav-integration" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:share-2" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Integrations</span>
                </a>
                <div class="pt-4 pb-2 px-4">
                    <span class="text-[10px] uppercase tracking-widest text-white/30 font-bold">Commerce</span>
                </div>
                <a href="#" id="nav-shop" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:shopping-bag" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Shop Manager</span>
                </a>
                <a href="#" id="nav-events" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:calendar" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Events</span>
                </a>
                <a href="#" id="nav-messaging" class="nav-link flex items-center gap-4 px-4 py-3">
                    <iconify-icon icon="lucide:message-square" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Messaging</span>
                </a>
            </nav>

            <div class="p-6 border-t-2 border-white/10">
                <a href="#" id="nav-settings" class="nav-link flex items-center gap-4 px-4 py-3 mb-4">
                    <iconify-icon icon="lucide:settings" class="text-xl"></iconify-icon>
                    <span class="display-font text-xs tracking-widest">Settings</span>
                </a>
                <div class="flex items-center gap-3 px-2">
                    <div class="w-10 h-10 brutalist-border rounded-full overflow-hidden bg-white/10">
                        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200" alt="Mindy Profile" class="w-full h-full object-cover grayscale">
                    </div>
                    <div>
                        <p class="text-sm font-bold">FedMindy</p>
                        <p class="text-[10px] text-white/40">Administrator</p>
                    </div>
                    <a href="#" id="logout-btn" class="ml-auto text-white/40 hover:text-[#d9ff00] transition-colors">
                        <iconify-icon icon="lucide:log-out" class="text-lg"></iconify-icon>
                    </a>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto z-10">
            <!-- Top Header -->
            <header class="h-20 border-b-2 border-white/10 flex items-center justify-between px-10 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-20">
                <div>
                    <h2 class="display-font text-lg font-bold tracking-tight">Dashboard Overview</h2>
                </div>
                <div class="flex items-center gap-6">
                    <div class="relative group">
                        <input type="text" placeholder="SEARCH COMMANDS..." class="bg-white/5 border-2 border-white/10 px-4 py-2 text-xs display-font focus:border-[#d9ff00] outline-none transition-all w-64">
                        <iconify-icon icon="lucide:search" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#d9ff00]"></iconify-icon>
                    </div>
                    <button id="header-notif" class="relative p-2 brutalist-border bg-white/5 hover:bg-white hover:text-black transition-all">
                        <iconify-icon icon="lucide:bell" class="text-xl"></iconify-icon>
                        <span class="absolute -top-1 -right-1 w-3 h-3 bg-[#d9ff00] rounded-full border-2 border-black"></span>
                    </button>
                    <button id="header-add" class="display-font text-[10px] font-bold tracking-widest bg-[#d9ff00] text-black px-6 py-2.5 brutalist-shadow-accent hover:translate-x-1 hover:translate-y-1 transition-all">
                        + NEW PROJECT
                    </button>
                </div>
            </header>

            <!-- Dashboard Content -->
            <div class="p-10 space-y-10">
                
                <!-- Metrics Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Sales Metric -->
                    <div class="bg-white/5 p-6 brutalist-border relative group overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <iconify-icon icon="lucide:trending-up" class="text-8xl text-[#d9ff00]"></iconify-icon>
                        </div>
                        <p class="display-font text-[10px] tracking-widest text-white/50 mb-2">Gross Revenue (MTD)</p>
                        <div class="flex items-end gap-3">
                            <h3 class="text-4xl font-black tabular-nums">$128,450</h3>
                            <span class="text-[#d9ff00] text-xs font-bold mb-1">+12.4%</span>
                        </div>
                    </div>

                    <!-- Followers Metric -->
                    <div class="bg-white/5 p-6 brutalist-border relative group overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <iconify-icon icon="lucide:heart" class="text-8xl text-red-500"></iconify-icon>
                        </div>
                        <p class="display-font text-[10px] tracking-widest text-white/50 mb-2">Active Community</p>
                        <div class="flex items-end gap-3">
                            <h3 class="text-4xl font-black tabular-nums">1.2M</h3>
                            <span class="text-[#d9ff00] text-xs font-bold mb-1">+5.2k</span>
                        </div>
                    </div>

                    <!-- Engagement Metric -->
                    <div class="bg-white/5 p-6 brutalist-border relative group overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <iconify-icon icon="lucide:zap" class="text-8xl text-yellow-400"></iconify-icon>
                        </div>
                        <p class="display-font text-[10px] tracking-widest text-white/50 mb-2">Engagement Rate</p>
                        <div class="flex items-end gap-3">
                            <h3 class="text-4xl font-black tabular-nums">8.4%</h3>
                            <span class="text-[#d9ff00] text-xs font-bold mb-1">+0.8%</span>
                        </div>
                    </div>

                    <!-- Messages Metric -->
                    <div class="bg-white/5 p-6 brutalist-border relative group overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <iconify-icon icon="lucide:mail" class="text-8xl text-blue-400"></iconify-icon>
                        </div>
                        <p class="display-font text-[10px] tracking-widest text-white/50 mb-2">Pending Inquiries</p>
                        <div class="flex items-end gap-3">
                            <h3 class="text-4xl font-black tabular-nums">42</h3>
                            <span class="text-[#d9ff00] text-xs font-bold mb-1">New</span>
                        </div>
                    </div>
                </div>

                <!-- Main Data Section -->
                <div class="grid grid-cols-12 gap-8">
                    
                    <!-- Activity/Revenue Chart Mockup -->
                    <div class="col-span-8 bg-white/5 brutalist-border p-8">
                        <div class="flex items-center justify-between mb-8">
                            <h4 class="display-font text-sm font-bold tracking-widest">Revenue Projection</h4>
                            <div class="flex gap-2">
                                <button class="px-3 py-1 text-[10px] display-font bg-white/10 hover:bg-[#d9ff00] hover:text-black transition-colors">7D</button>
                                <button class="px-3 py-1 text-[10px] display-font bg-[#d9ff00] text-black">30D</button>
                                <button class="px-3 py-1 text-[10px] display-font bg-white/10 hover:bg-[#d9ff00] hover:text-black transition-colors">1Y</button>
                            </div>
                        </div>
                        <!-- Mock Chart Grid -->
                        <div class="h-[300px] flex items-end gap-2">
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[40%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[60%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[55%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[85%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[70%]"></div>
                            <div class="flex-1 bg-[#d9ff00] h-[95%] relative">
                                <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 text-[10px] font-bold brutalist-shadow whitespace-nowrap">PEAK: $8,420</div>
                            </div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[65%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[50%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[80%]"></div>
                            <div class="flex-1 bg-white/10 hover:bg-[#d9ff00]/40 transition-all h-[75%]"></div>
                        </div>
                        <div class="flex justify-between mt-4 text-[10px] text-white/30 display-font">
                            <span>MAY 01</span>
                            <span>MAY 10</span>
                            <span>MAY 20</span>
                            <span>MAY 30</span>
                        </div>
                    </div>

                    <!-- Quick Actions Sidebar -->
                    <div class="col-span-4 space-y-6">
                        <h4 class="display-font text-sm font-bold tracking-widest">Quick Operations</h4>
                        
                        <button id="action-post" class="w-full text-left bg-white text-black p-4 brutalist-shadow-accent hover:-translate-x-1 hover:-translate-y-1 transition-all group">
                            <div class="flex items-center justify-between">
                                <span class="display-font text-xs font-bold">Draft New Post</span>
                                <iconify-icon icon="lucide:plus-circle" class="text-xl group-hover:rotate-90 transition-transform"></iconify-icon>
                            </div>
                            <p class="text-[10px] mt-1 opacity-60 font-medium">Instagram, TikTok, YouTube</p>
                        </button>

                        <button id="action-product" class="w-full text-left bg-black text-white p-4 brutalist-border hover:bg-[#d9ff00] hover:text-black transition-all group">
                            <div class="flex items-center justify-between">
                                <span class="display-font text-xs font-bold">Add Shop Item</span>
                                <iconify-icon icon="lucide:shopping-cart" class="text-xl"></iconify-icon>
                            </div>
                            <p class="text-[10px] mt-1 opacity-60 font-medium">Restock signature dragon suits</p>
                        </button>

                        <button id="action-mentoring" class="w-full text-left bg-black text-white p-4 brutalist-border hover:bg-[#d9ff00] hover:text-black transition-all group">
                            <div class="flex items-center justify-between">
                                <span class="display-font text-xs font-bold">Manage Mentoring</span>
                                <iconify-icon icon="lucide:users-2" class="text-xl"></iconify-icon>
                            </div>
                            <p class="text-[10px] mt-1 opacity-60 font-medium">14 pending requests today</p>
                        </button>
                    </div>
                </div>

                <!-- Secondary Section: Recent Activity & Messaging -->
                <div class="grid grid-cols-2 gap-8">
                    <!-- Recent Submissions Table -->
                    <div class="bg-white/5 brutalist-border overflow-hidden">
                        <div class="p-6 border-b-2 border-white/10">
                            <h4 class="display-font text-sm font-bold tracking-widest">Recent Orders</h4>
                        </div>
                        <table class="w-full text-left text-xs">
                            <thead>
                                <tr class="border-b border-white/10 uppercase tracking-widest text-white/40">
                                    <th class="px-6 py-4 font-bold">Customer</th>
                                    <th class="px-6 py-4 font-bold">Item</th>
                                    <th class="px-6 py-4 font-bold">Amount</th>
                                    <th class="px-6 py-4 font-bold">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-500">AL</div>
                                            <span>Alex Luna</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">Dragon Suit (W)</td>
                                    <td class="px-6 py-4 font-bold">$185.00</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2 py-0.5 bg-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-tighter">Paid</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-500">SR</div>
                                            <span>Sarah Reed</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">Mentoring (1hr)</td>
                                    <td class="px-6 py-4 font-bold">$450.00</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-tighter">Pending</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] font-bold text-red-500">JB</div>
                                            <span>James Bond</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">Signed Poster</td>
                                    <td class="px-6 py-4 font-bold">$45.00</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2 py-0.5 bg-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-tighter">Paid</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-4 text-center border-t border-white/10">
                            <button class="display-font text-[10px] font-bold tracking-widest text-[#d9ff00] hover:underline">View All Transactions</button>
                        </div>
                    </div>

                    <!-- Community Pulse -->
                    <div class="bg-white/5 brutalist-border p-8">
                        <div class="flex items-center justify-between mb-8">
                            <h4 class="display-font text-sm font-bold tracking-widest">Community Pulse</h4>
                            <iconify-icon icon="lucide:more-horizontal" class="text-white/40"></iconify-icon>
                        </div>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="w-1 bg-[#d9ff00]"></div>
                                <div class="flex-1">
                                    <p class="text-xs font-bold">High Sentiment Alert</p>
                                    <p class="text-[10px] text-white/50 mt-1">Your latest vlog has 94% positive sentiment across 1,200 comments.</p>
                                </div>
                                <span class="text-[10px] text-white/30 uppercase">2m ago</span>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-1 bg-red-500"></div>
                                <div class="flex-1">
                                    <p class="text-xs font-bold">Restock Request Spiked</p>
                                    <p class="text-[10px] text-white/50 mt-1">'Dragon Joggers (White)' mentions are up 300% in DMs.</p>
                                </div>
                                <span class="text-[10px] text-white/30 uppercase">15m ago</span>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-1 bg-blue-500"></div>
                                <div class="flex-1">
                                    <p class="text-xs font-bold">New Collaboration Invite</p>
                                    <p class="text-[10px] text-white/50 mt-1">Nike Brand Team sent a portal integration request.</p>
                                </div>
                                <span class="text-[10px] text-white/30 uppercase">1h ago</span>
                            </div>
                        </div>
                        <button class="w-full mt-8 py-3 brutalist-border text-xs display-font font-bold hover:bg-white hover:text-black transition-all">
                            ENTER COMMUNITY HUB
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer / Status Bar -->
            <footer class="p-6 border-t-2 border-white/10 flex justify-between text-[10px] text-white/30 display-font">
                <div class="flex gap-8">
                    <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#d9ff00] animate-pulse"></span> SERVER: OPTIMAL</span>
                    <span class="flex items-center gap-2"><iconify-icon icon="lucide:clock"></iconify-icon> LAST SYNC: 2 MIN AGO</span>
                </div>
                <div>
                    <span>&copy; FEDMINDY EMPIRE SYSTEM 2024</span>
                </div>
            </footer>
        </main>
    </div>
</body>
</html>
~~~
