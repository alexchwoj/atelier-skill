# Top Segmented Tab

> A top segmented tab system used to switch between parallel views within the same context. Content changes instantly without triggering full navigation, keeping users mentally anchored. Best Suitable For Analytics views, dashboards, comparison tools, inboxes, financial breakdowns.


---

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Segmented Navigation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Satoshi', sans-serif;
        }
        /* Hide scrollbar for chrome/safari/opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
    </style>
</head>
<body>
    <div class="w-full h-screen flex flex-col bg-white text-gray-900">
        <!-- Fixed Header Area -->
        <div class="shrink-0 bg-white z-50">
            <!-- Top Bar -->
            <header class="pt-14 px-6 pb-6 flex items-center justify-between">
                <button id="header-back-btn" class="p-2 -ml-2 rounded-full hover:bg-gray-50 transition-colors">
                    <iconify-icon icon="lucide:arrow-left" class="text-2xl"></iconify-icon>
                </button>
                
                <h1 class="text-lg font-bold tracking-tight">Project Alpha</h1>
                
                <button id="header-options-btn" class="p-2 -mr-2 rounded-full hover:bg-gray-50 transition-colors">
                    <iconify-icon icon="lucide:more-horizontal" class="text-2xl"></iconify-icon>
                </button>
            </header>

            <!-- Segmented Control -->
            <nav class="px-6 w-full">
                <div id="tab-list" class="flex justify-between items-end w-full">
                    <!-- Tabs -->
                    <button id="tab-overview" data-tab="overview" class="tab-btn group flex flex-col items-center gap-3 w-1/4 cursor-pointer">
                        <span class="tab-text text-sm font-bold text-black">Overview</span>
                        <div class="tab-indicator h-[2px] w-full bg-black rounded-full"></div>
                    </button>

                    <button id="tab-activity" data-tab="activity" class="tab-btn group flex flex-col items-center gap-3 w-1/4 cursor-pointer">
                        <span class="tab-text text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">Activity</span>
                        <div class="tab-indicator h-[2px] w-full bg-transparent group-hover:bg-gray-100 rounded-full transition-colors"></div>
                    </button>

                    <button id="tab-settings" data-tab="settings" class="tab-btn group flex flex-col items-center gap-3 w-1/4 cursor-pointer">
                        <span class="tab-text text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">Settings</span>
                        <div class="tab-indicator h-[2px] w-full bg-transparent group-hover:bg-gray-100 rounded-full transition-colors"></div>
                    </button>

                    <button id="tab-insights" data-tab="insights" class="tab-btn group flex flex-col items-center gap-3 w-1/4 cursor-pointer">
                        <span class="tab-text text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">Insights</span>
                        <div class="tab-indicator h-[2px] w-full bg-transparent group-hover:bg-gray-100 rounded-full transition-colors"></div>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Content Regions -->
        <main id="content-container" class="flex-1 overflow-y-auto bg-gray-50">
            
            <!-- Overview Content -->
            <div id="content-overview" class="tab-panel px-6 py-8 space-y-8">
                <section>
                    <div class="bg-white p-6 shadow-sm">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Current Status</p>
                                <h2 class="text-3xl font-bold">On Track</h2>
                            </div>
                            <div class="bg-black text-white p-2 rounded-full">
                                <iconify-icon icon="lucide:activity" class="text-xl block"></iconify-icon>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between text-sm">
                                <span class="font-medium">Completion</span>
                                <span class="font-bold">78%</span>
                            </div>
                            <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-black w-[78%]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-5 shadow-sm flex flex-col justify-between h-32">
                        <iconify-icon icon="lucide:clock" class="text-gray-400 text-xl"></iconify-icon>
                        <div>
                            <span class="text-2xl font-bold block">124h</span>
                            <span class="text-xs text-gray-500 font-medium">Time Logged</span>
                        </div>
                    </div>
                    <div class="bg-white p-5 shadow-sm flex flex-col justify-between h-32">
                        <iconify-icon icon="lucide:check-circle" class="text-gray-400 text-xl"></iconify-icon>
                        <div>
                            <span class="text-2xl font-bold block">24</span>
                            <span class="text-xs text-gray-500 font-medium">Tasks Done</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-bold text-gray-900">Recent Updates</h3>
                        <button id="view-all-overview" class="text-xs font-medium text-gray-500 hover:text-black">View All</button>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-gray-200 flex items-center justify-center shrink-0">
                                <span class="font-bold text-xs text-gray-600">JD</span>
                            </div>
                            <div class="flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900 leading-tight">Design files updated</p>
                                <p class="text-xs text-gray-500 mt-1 line-clamp-1">Uploaded new wireframes for review</p>
                            </div>
                            <span class="text-xs text-gray-400 whitespace-nowrap">2m</span>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Activity Content (Hidden by default) -->
            <div id="content-activity" class="tab-panel hidden px-6 py-8 space-y-6">
                <h3 class="text-sm font-bold text-gray-900 uppercase tracking-widest">Timeline</h3>
                <div class="space-y-8 relative">
                    <div class="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div class="relative pl-10">
                        <div class="absolute left-[13px] top-1 w-2 h-2 rounded-full bg-black"></div>
                        <p class="text-xs text-gray-400 mb-1">Today, 10:45 AM</p>
                        <p class="text-sm font-medium text-gray-900">System maintenance completed</p>
                        <p class="text-xs text-gray-500 mt-1">Server clusters optimized for high traffic.</p>
                    </div>
                    <div class="relative pl-10">
                        <div class="absolute left-[13px] top-1 w-2 h-2 rounded-full bg-gray-300"></div>
                        <p class="text-xs text-gray-400 mb-1">Yesterday, 2:15 PM</p>
                        <p class="text-sm font-medium text-gray-900">New team member added</p>
                        <p class="text-xs text-gray-500 mt-1">Sarah Jenkins joined as Senior Developer.</p>
                    </div>
                    <div class="relative pl-10">
                        <div class="absolute left-[13px] top-1 w-2 h-2 rounded-full bg-gray-300"></div>
                        <p class="text-xs text-gray-400 mb-1">Feb 12, 09:00 AM</p>
                        <p class="text-sm font-medium text-gray-900">Quarterly goal achieved</p>
                        <p class="text-xs text-gray-500 mt-1">Infrastructure cost reduced by 15%.</p>
                    </div>
                </div>
            </div>

            <!-- Settings Content (Hidden by default) -->
            <div id="content-settings" class="tab-panel hidden px-6 py-8 space-y-6">
                <div class="space-y-4">
                    <div class="bg-white p-4 flex items-center justify-between">
                        <div>
                            <p class="text-sm font-bold">Notifications</p>
                            <p class="text-xs text-gray-500">Push and Email updates</p>
                        </div>
                        <div class="w-10 h-5 bg-black rounded-full relative">
                            <div class="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex items-center justify-between">
                        <div>
                            <p class="text-sm font-bold">Privacy Mode</p>
                            <p class="text-xs text-gray-500">Hide metrics from others</p>
                        </div>
                        <div class="w-10 h-5 bg-gray-200 rounded-full relative">
                            <div class="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <button id="logout-btn" class="w-full py-4 text-center text-red-500 text-sm font-bold border border-red-100 hover:bg-red-50 transition-colors mt-8">
                        Sign Out
                    </button>
                </div>
            </div>

            <!-- Insights Content (Hidden by default) -->
            <div id="content-insights" class="tab-panel hidden px-6 py-8 space-y-8">
                <div class="bg-black text-white p-6">
                    <p class="text-xs font-medium opacity-60 uppercase mb-1">AI Projection</p>
                    <h2 class="text-2xl font-bold">+12% Expected Growth</h2>
                    <p class="text-xs opacity-80 mt-2">Based on current velocity, the project will finish 3 days early.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-sm font-bold">Top Performers</h3>
                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                        <span class="text-sm">Development</span>
                        <span class="text-sm font-bold text-green-600">High</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                        <span class="text-sm">Marketing</span>
                        <span class="text-sm font-bold text-orange-500">Medium</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                        <span class="text-sm">QA Testing</span>
                        <span class="text-sm font-bold text-gray-400">Pending</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Safe Area Spacer -->
            <div class="h-[34px]"></div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-btn');
            const panels = document.querySelectorAll('.tab-panel');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = tab.getAttribute('data-tab');

                    // Update Visual Tabs state
                    tabs.forEach(t => {
                        const text = t.querySelector('.tab-text');
                        const indicator = t.querySelector('.tab-indicator');
                        
                        if (t === tab) {
                            text.classList.remove('text-gray-400', 'font-medium');
                            text.classList.add('text-black', 'font-bold');
                            indicator.classList.remove('bg-transparent');
                            indicator.classList.add('bg-black');
                        } else {
                            text.classList.add('text-gray-400', 'font-medium');
                            text.classList.remove('text-black', 'font-bold');
                            indicator.classList.add('bg-transparent');
                            indicator.classList.remove('bg-black');
                        }
                    });

                    // Toggle Content Panels
                    panels.forEach(panel => {
                        if (panel.id === `content-${target}`) {
                            panel.classList.remove('hidden');
                        } else {
                            panel.classList.add('hidden');
                        }
                    });
                });
            });
        });
    </script>
</body>
</html>
~~~
