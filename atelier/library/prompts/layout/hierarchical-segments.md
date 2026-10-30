# Hierarchical Segments

> A segmented tab layout that represents sub-sections under a single parent page. The parent context remains fixed while users move laterally between related sections. Best Suitable For Profile pages, settings areas, product detail views, account management screens.


---

make it interactive

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Wireframe Segmented Tab System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'General Sans', sans-serif;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .tab-content {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-out;
        }
        .tab-content.hidden {
            display: none;
            opacity: 0;
            transform: translateY(10px);
        }
        .tab-content.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <div class="w-full h-screen flex flex-col bg-gray-50 overflow-hidden text-gray-900">
        
        <header class="shrink-0 pt-14 px-4 pb-2 bg-white border-b border-gray-100 z-20 flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <button id="nav-back-btn" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition-all">
                    <iconify-icon icon="lucide:chevron-left" class="text-2xl text-gray-600"></iconify-icon>
                </button>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Project</span>
                    <h1 class="text-lg font-semibold text-gray-900">Mobile Redesign</h1>
                </div>
                <button id="nav-more-btn" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition-all">
                    <iconify-icon icon="lucide:more-horizontal" class="text-2xl text-gray-600"></iconify-icon>
                </button>
            </div>

            <div class="w-full p-1 bg-gray-100 rounded-xl grid grid-cols-3 gap-1">
                <button id="tab-tasks-btn" onclick="switchTab('tasks')" class="tab-btn relative py-2 px-3 rounded-lg bg-white text-gray-900 shadow-sm flex items-center justify-center gap-2 transition-all">
                    <span class="text-sm font-medium">Tasks</span>
                    <span class="tab-indicator flex h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                </button>
                <button id="tab-files-btn" onclick="switchTab('files')" class="tab-btn relative py-2 px-3 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 flex items-center justify-center transition-all">
                    <span class="text-sm font-medium">Files</span>
                    <span class="tab-indicator hidden h-1.5 w-1.5 rounded-full bg-gray-900 ml-2"></span>
                </button>
                <button id="tab-team-btn" onclick="switchTab('team')" class="tab-btn relative py-2 px-3 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 flex items-center justify-center transition-all">
                    <span class="text-sm font-medium">Team</span>
                    <span class="tab-indicator hidden h-1.5 w-1.5 rounded-full bg-gray-900 ml-2"></span>
                </button>
            </div>
        </header>

        <main class="flex-1 overflow-y-auto no-scrollbar relative">
            <div id="content-tasks" class="tab-content active p-4 space-y-6">
                <section>
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Sprint Overview</h2>
                        <span class="text-xs text-gray-400">Updated 2m ago</span>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                            <div class="flex items-start justify-between mb-6">
                                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <iconify-icon icon="lucide:circle-dashed" class="text-gray-500"></iconify-icon>
                                </div>
                                <span class="text-2xl font-bold text-gray-900">12</span>
                            </div>
                            <p class="text-sm font-medium text-gray-600">Pending</p>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                            <div class="flex items-start justify-between mb-6">
                                <div class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                                    <iconify-icon icon="lucide:check-circle-2" class="text-white"></iconify-icon>
                                </div>
                                <span class="text-2xl font-bold text-gray-900">24</span>
                            </div>
                            <p class="text-sm font-medium text-gray-600">Completed</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">In Progress</h2>
                        <button id="filter-tasks-btn" class="text-xs font-medium text-gray-900">Filter</button>
                    </div>
                    <div class="space-y-3">
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm active:scale-[0.99] transition-transform">
                            <div class="flex justify-between items-start mb-2">
                                <span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-600 uppercase tracking-wider">Design</span>
                                <iconify-icon icon="lucide:more-vertical" class="text-gray-400"></iconify-icon>
                            </div>
                            <h3 class="text-base font-semibold text-gray-900 mb-1">Wireframe User Flow</h3>
                            <p class="text-sm text-gray-500 mb-4 line-clamp-1">Create the initial navigation paths for the new onboarding...</p>
                            <div class="flex items-center justify-between pt-3 border-t border-gray-50">
                                <div class="flex -space-x-2">
                                    <div class="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                    <div class="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                                </div>
                                <div class="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                    <iconify-icon icon="lucide:clock" class="text-gray-400"></iconify-icon>
                                    <span>Due Today</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm active:scale-[0.99] transition-transform">
                            <div class="flex justify-between items-start mb-2">
                                <span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-600 uppercase tracking-wider">Dev</span>
                                <iconify-icon icon="lucide:more-vertical" class="text-gray-400"></iconify-icon>
                            </div>
                            <h3 class="text-base font-semibold text-gray-900 mb-1">API Integration</h3>
                            <p class="text-sm text-gray-500 mb-4 line-clamp-1">Connect the frontend to the new user database endpoint.</p>
                            <div class="flex items-center justify-between pt-3 border-t border-gray-50">
                                <div class="flex -space-x-2">
                                    <div class="w-6 h-6 rounded-full bg-gray-800 border-2 border-white"></div>
                                </div>
                                <div class="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                    <iconify-icon icon="lucide:calendar" class="text-gray-400"></iconify-icon>
                                    <span>Oct 24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="h-20"></div>
            </div>

            <div id="content-files" class="tab-content hidden p-4 space-y-6">
                <section>
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Recent Uploads</h2>
                        <button id="view-all-files-btn" class="text-xs font-medium text-gray-900">View All</button>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
                             <iconify-icon icon="lucide:file-text" class="text-4xl text-gray-400 mb-3"></iconify-icon>
                             <span class="text-sm font-medium text-gray-900 text-center truncate w-full">Brand_Guidelines.pdf</span>
                             <span class="text-[10px] text-gray-400">12.4 MB</span>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
                             <iconify-icon icon="lucide:image" class="text-4xl text-gray-400 mb-3"></iconify-icon>
                             <span class="text-sm font-medium text-gray-900 text-center truncate w-full">Hero_Asset_v2.png</span>
                             <span class="text-[10px] text-gray-400">2.1 MB</span>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Folders</h2>
                    <div class="space-y-3">
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                            <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                <iconify-icon icon="lucide:folder" class="text-xl"></iconify-icon>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-sm font-medium">User Research</h3>
                                <p class="text-[10px] text-gray-400">18 files • Oct 20</p>
                            </div>
                            <iconify-icon icon="lucide:chevron-right" class="text-gray-400"></iconify-icon>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                            <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                <iconify-icon icon="lucide:folder" class="text-xl"></iconify-icon>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-sm font-medium">Prototypes</h3>
                                <p class="text-[10px] text-gray-400">5 files • Oct 18</p>
                            </div>
                            <iconify-icon icon="lucide:chevron-right" class="text-gray-400"></iconify-icon>
                        </div>
                    </div>
                </section>
                <div class="h-20"></div>
            </div>

            <div id="content-team" class="tab-content hidden p-4 space-y-6">
                <section>
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Collaborators</h2>
                        <span class="text-xs text-gray-400">5 Online</span>
                    </div>
                    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                        <div class="p-4 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold">JD</div>
                            <div class="flex-1">
                                <h3 class="text-sm font-medium">John Doe</h3>
                                <p class="text-[10px] text-gray-400">Lead Designer</p>
                            </div>
                            <span class="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div class="p-4 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">SA</div>
                            <div class="flex-1">
                                <h3 class="text-sm font-medium">Sarah Adams</h3>
                                <p class="text-[10px] text-gray-400">Project Manager</p>
                            </div>
                            <span class="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div class="p-4 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">MT</div>
                            <div class="flex-1">
                                <h3 class="text-sm font-medium">Mark Thompson</h3>
                                <p class="text-[10px] text-gray-400">Frontend Developer</p>
                            </div>
                            <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                        </div>
                    </div>
                </section>
                <section>
                    <button id="add-member-btn" class="w-full py-4 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-medium text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
                        <iconify-icon icon="lucide:user-plus"></iconify-icon>
                        Invite New Member
                    </button>
                </section>
                <div class="h-20"></div>
            </div>
        </main>

        <div class="absolute bottom-8 right-4 pointer-events-none">
             <button id="cta-fab-btn" class="pointer-events-auto w-14 h-14 bg-gray-900 rounded-full shadow-lg shadow-gray-900/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <iconify-icon icon="lucide:plus" class="text-white text-2xl"></iconify-icon>
             </button>
        </div>

        <footer class="shrink-0 pb-[34px] bg-gray-50"></footer>
    </div>

    <script>
        function switchTab(tab) {
            const tabs = ['tasks', 'files', 'team'];
            
            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}-btn`);
                const content = document.getElementById(`content-${t}`);
                const indicator = btn.querySelector('.tab-indicator');

                if (t === tab) {
                    btn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                    btn.classList.remove('text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200/50');
                    indicator.classList.remove('hidden');
                    indicator.classList.add('flex');
                    
                    content.classList.remove('hidden');
                    setTimeout(() => content.classList.add('active'), 10);
                } else {
                    btn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                    btn.classList.add('text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200/50');
                    indicator.classList.add('hidden');
                    indicator.classList.remove('flex');
                    
                    content.classList.remove('active');
                    setTimeout(() => content.classList.add('hidden'), 300);
                }
            });
        }
    </script>
</body>
</html>
~~~
