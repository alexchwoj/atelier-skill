# Command Center

> Build the complete Sainou AI Recruiter Co-Pilot command center interface implementing the GEM framework and Sage Command design system. Create a 4-panel split-pane layout (Left Navigation, Center Reader/Console, Right Inbox) with dark theme (#2C2C30 background), sage green accent (#8E9C78), and Open Sans typography. Include: (1) Left Panel: Search, persistent entity navigation (Companies, Company Contacts, Jobs, Candidates) with colored badges. (2) Center Top (Intelligence Brief): Empty state prompting "Select a company from the left navigation" with IBR v2.0 badge visible. (3) Center Bottom (Co-Pilot Console): Persistent chat interface with placeholder "Ask a question..." input and example prompt. (4) Right Panel (Inbox/Needs Review): Two unassociated file cards showing "Bulk Process 2025-01-17" (5 files, 2 hours ago) in warning state and "Protocol Labs - Draft" with tech stack analysis in ready-for-review state. Include Activity Tray in bottom right showing "No active tasks". Implement dark theme with precise spacing, subtle borders, smooth interactions on hover/focus, and full accessibility. Use CSS-only animations for non-blocking UI transitions. Create a professional "cockpit" aesthetic that conveys mastery and command. Make the interface feel dense but scannable, prioritizing information density and low-interaction cost.


---

Build the complete Sainou AI Recruiter Co-Pilot command center interface implementing the GEM framework and Sage Command design system. Create a 4-panel split-pane layout (Left Navigation, Center Reader/Console, Right Inbox) with dark theme (#2C2C30 background), sage green accent (#8E9C78), and Open Sans typography. Include: (1) Left Panel: Search, persistent entity navigation (Companies, Company Contacts, Jobs, Candidates) with colored badges. (2) Center Top (Intelligence Brief): Empty state prompting "Select a company from the left navigation" with IBR v2.0 badge visible. (3) Center Bottom (Co-Pilot Console): Persistent chat interface with placeholder "Ask a question..." input and example prompt. (4) Right Panel (Inbox/Needs Review): Two unassociated file cards showing "Bulk Process 2025-01-17" (5 files, 2 hours ago) in warning state and "Protocol Labs - Draft" with tech stack analysis in ready-for-review state. Include Activity Tray in bottom right showing "No active tasks". Implement dark theme with precise spacing, subtle borders, smooth interactions on hover/focus, and full accessibility. Use CSS-only animations for non-blocking UI transitions. Create a professional "cockpit" aesthetic that conveys mastery and command. Make the interface feel dense but scannable, prioritizing information density and low-interaction cost.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sainou AI Co-Pilot Command Center</title>
    <meta name="view-transition" content="same-origin">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        sage: {
                            500: '#8E9C78',
                            600: '#7A8666',
                            900: '#2C3326',
                        },
                        midnight: {
                            base: '#2C2C30',
                            light: '#36363B',
                            border: '#FFFFFF1A', // 10% white opacity
                        },
                        warning: {
                            DEFAULT: '#EAB308',
                            dim: '#422006',
                        }
                    },
                    fontFamily: {
                        'open-sans': ['Open Sans', 'sans-serif'],
                    },
                    boxShadow: {
                        'glow': '0 0 15px rgba(142, 156, 120, 0.15)',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: 'Open Sans', sans-serif;
        }
        /* Custom Scrollbar for professional density */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #4A4A4F;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #5A5A5F;
        }
        .glass-panel {
            background: rgba(44, 44, 48, 0.7);
            backdrop-filter: blur(10px);
        }
        .text-shadow {
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        @view-transition { navigation: auto; }
        ::view-transition-old(root), ::view-transition-new(root) {
            animation-duration: 0.4s;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        ::view-transition-old(root) { animation-name: fade-out; }
        ::view-transition-new(root) { animation-name: fade-in; }
        @keyframes fade-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.98); } }
        @keyframes fade-in { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        .sidebar { view-transition-name: sidebar; }
        .main-content { view-transition-name: main-content; }
        .header-nav { view-transition-name: header-nav; }
    </style>
</head>
<body>
    <div class="h-screen w-full bg-midnight-base text-gray-200 flex overflow-hidden selection:bg-sage-500 selection:text-white">
        
        <!-- Left Navigation Panel -->
        <nav class="sidebar w-[260px] flex flex-col border-r border-midnight-border bg-midnight-base flex-shrink-0">
            <!-- Branding -->
            <div class="h-16 flex items-center px-5 border-b border-midnight-border">
                <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded bg-sage-500 flex items-center justify-center text-midnight-base">
                        <iconify-icon icon="lucide:bot" class="text-lg"></iconify-icon>
                    </div>
                    <span class="font-bold tracking-tight text-white">Sainou Co-Pilot</span>
                </div>
            </div>

            <!-- Search -->
            <div class="p-4">
                <div class="relative group">
                    <iconify-icon icon="lucide:search" class="absolute left-3 top-2.5 text-gray-500 group-focus-within:text-sage-500 transition-colors"></iconify-icon>
                    <input type="text" placeholder="Search (⌘K)" 
                        class="w-full bg-midnight-light border border-midnight-border rounded-md py-2 pl-9 pr-3 text-sm text-gray-200 focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-all placeholder-gray-500">
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="flex-1 px-3 space-y-1 overflow-y-auto py-2">
                <!-- Active State -->
                <a href="#" id="nav-companies" class="flex items-center justify-between px-3 py-2.5 rounded-md bg-sage-500/10 border border-sage-500/30 text-sage-500 group transition-all shadow-glow">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:folder-open" class="text-lg"></iconify-icon>
                        <span class="font-semibold text-sm">Companies</span>
                    </div>
                    <span class="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">3</span>
                </a>

                <a href="#" id="nav-contacts" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:users" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Company Contacts</span>
                    </div>
                </a>

                <a href="#" id="nav-jobs" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:briefcase" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Jobs</span>
                    </div>
                </a>

                <a href="#" id="nav-candidates" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:target" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Candidates</span>
                    </div>
                </a>

                <div class="pt-4 pb-2 px-3">
                    <span class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Intelligence Flows</span>
                </div>

                <a href="https://p.superdesign.dev/draft/1aeb6cc5-de8b-48f9-beba-f7ba589d63ec" id="nav-companies-list-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:layout-list" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Companies List</span>
                    </div>
                </a>

                <a href="https://p.superdesign.dev/draft/b4132307-6234-423f-889a-e224440d46cf" id="nav-company-brief-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:file-text" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Company Brief</span>
                    </div>
                </a>

                <a href="https://p.superdesign.dev/draft/78e8143e-ff09-42a6-b34d-7a750f3c607a" id="nav-job-brief-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:clipboard-list" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Job Brief</span>
                    </div>
                </a>

                <a href="https://p.superdesign.dev/draft/8bb734f1-d19b-409c-8b4e-c8f2fdf5bd73" id="nav-candidate-brief-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:user-check" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Candidate Brief</span>
                    </div>
                </a>

                <a href="https://p.superdesign.dev/draft/6d3c861a-e3b8-4cfb-8f08-1ab16c0bcf90" id="nav-ibr-review-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:clipboard-check" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">IBR Review Mode</span>
                    </div>
                </a>

                <a href="https://p.superdesign.dev/draft/1aedcd70-83ef-4bbf-b415-353a12dbd927" id="nav-bulk-inbox-link" class="flex items-center justify-between px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 border border-transparent transition-all group">
                    <div class="flex items-center gap-3">
                        <iconify-icon icon="lucide:inbox" class="text-lg group-hover:text-gray-300"></iconify-icon>
                        <span class="font-medium text-sm">Bulk Process Inbox</span>
                    </div>
                </a>
            </div>

            <!-- Bottom Actions -->
            <div class="p-3 border-t border-midnight-border">
                <a href="https://p.superdesign.dev/draft/9f5d50c1-a6da-4da6-a38e-b0360ed6a7b3" id="nav-settings" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:bg-midnight-light hover:text-gray-100 transition-all">
                    <iconify-icon icon="lucide:settings" class="text-lg"></iconify-icon>
                    <span class="font-medium text-sm">Settings</span>
                </a>
            </div>
        </nav>

        <!-- Center Area (Split Vertically) -->
        <main class="main-content flex-1 flex flex-col min-w-0 border-r border-midnight-border">
            
            <!-- Top: Intelligence Brief (Reader) -->
            <div class="flex-1 flex flex-col min-h-0 relative">
                <!-- Header -->
                <header class="header-nav h-14 border-b border-midnight-border flex items-center justify-between px-6 bg-midnight-base z-10">
                    <div class="flex items-center gap-3">
                        <h2 class="text-lg font-semibold text-gray-100 tracking-tight">Intelligence Brief</h2>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-sage-900/40 border border-sage-500/30 text-sage-500 text-xs font-medium">
                            <iconify-icon icon="lucide:lock" class="text-[10px]"></iconify-icon>
                            <span>IBR v2.0</span>
                        </div>
                        <button id="btn-options" class="text-gray-500 hover:text-gray-300 transition-colors">
                            <iconify-icon icon="lucide:more-horizontal" class="text-xl"></iconify-icon>
                        </button>
                    </div>
                </header>

                <!-- Content: Empty State -->
                <div class="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center">
                    <div class="max-w-md w-full text-center space-y-6 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
                        <div class="w-20 h-20 mx-auto rounded-full bg-midnight-light border border-midnight-border flex items-center justify-center text-gray-600 mb-4">
                            <iconify-icon icon="lucide:layout-template" class="text-3xl"></iconify-icon>
                        </div>
                        <div class="space-y-2">
                            <p class="text-lg text-gray-300 font-medium">
                                Select a company from the left navigation
                            </p>
                            <p class="text-sm text-gray-500">
                                to view its Intelligence Brief and verify candidate data against the IBR record.
                            </p>
                        </div>
                        <div class="pt-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs text-gray-600 bg-midnight-light/50 border border-white/5 font-mono">
                                <iconify-icon icon="lucide:command" class="text-[10px]"></iconify-icon>
                                <span>+ K to search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom: Co-Pilot Console -->
            <div class="h-[35%] min-h-[250px] border-t border-midnight-border bg-midnight-base flex flex-col">
                <!-- Console Header -->
                <div class="h-10 px-4 border-b border-midnight-border flex items-center gap-2 bg-midnight-light/30">
                    <iconify-icon icon="lucide:terminal-square" class="text-sage-500"></iconify-icon>
                    <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Co-Pilot Console</span>
                </div>

                <!-- Chat Output -->
                <div class="flex-1 overflow-y-auto p-4 space-y-4">
                    <!-- AI Welcome Message -->
                    <div class="flex gap-3 animate-[slideUp_0.4s_ease-out]">
                        <div class="w-8 h-8 rounded bg-sage-500/20 border border-sage-500/30 flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="lucide:bot" class="text-sage-500 text-sm"></iconify-icon>
                        </div>
                        <div class="bg-midnight-light border border-midnight-border rounded-lg rounded-tl-none p-3 max-w-[80%]">
                            <p class="text-sm text-gray-300 leading-relaxed">
                                <span class="mr-1">👋</span> Hi! Ask me anything about your companies, jobs, or candidates.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Input Area -->
                <div class="p-4 pt-0">
                    <div class="relative">
                        <textarea 
                            placeholder="Ask a question..."
                            class="w-full bg-[#202023] border border-midnight-border rounded-lg p-3 pr-12 text-sm text-gray-200 focus:outline-none focus:border-sage-500/50 focus:ring-1 focus:ring-sage-500/50 transition-all resize-none h-[50px] overflow-hidden placeholder-gray-600"
                        ></textarea>
                        <button id="btn-send" class="absolute right-2 bottom-2 p-1.5 text-gray-500 hover:text-sage-500 transition-colors rounded-md hover:bg-white/5">
                            <iconify-icon icon="lucide:send-horizontal" class="text-lg"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Right Inbox Panel -->
        <aside class="w-[320px] flex flex-col bg-midnight-base flex-shrink-0 relative">
            <!-- Header -->
            <div class="h-14 border-b border-midnight-border flex items-center justify-between px-4 bg-midnight-base">
                <div class="flex items-center gap-2">
                    <iconify-icon icon="lucide:inbox" class="text-gray-400"></iconify-icon>
                    <span class="text-sm font-semibold text-gray-200">Inbox / Needs Review</span>
                </div>
                <span class="bg-midnight-light border border-white/5 text-xs font-mono text-gray-500 px-1.5 py-0.5 rounded">2</span>
            </div>

            <!-- Inbox Items -->
            <div class="flex-1 overflow-y-auto p-4 space-y-3">
                
                <!-- Card 1: Bulk Process -->
                <div class="group relative bg-midnight-light/40 border border-warning/30 rounded-lg p-3 hover:bg-midnight-light hover:border-warning/50 transition-all cursor-pointer">
                    <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-warning-500 animate-pulse"></div>
                    
                    <div class="flex items-start gap-3 mb-2">
                        <div class="text-warning-500 mt-0.5">
                            <iconify-icon icon="lucide:folder-clock" class="text-lg"></iconify-icon>
                        </div>
                        <div>
                            <h4 class="text-sm font-medium text-gray-200 leading-tight group-hover:text-warning-400 transition-colors">Bulk Process 2025-01-17</h4>
                            <p class="text-xs text-gray-500 mt-1">5 files • Unassociated</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-2 mt-3">
                        <div class="flex -space-x-2">
                            <div class="w-5 h-5 rounded-full bg-gray-700 border border-midnight-base flex items-center justify-center text-[8px] text-gray-400">PDF</div>
                            <div class="w-5 h-5 rounded-full bg-gray-700 border border-midnight-base flex items-center justify-center text-[8px] text-gray-400">PDF</div>
                            <div class="w-5 h-5 rounded-full bg-gray-700 border border-midnight-base flex items-center justify-center text-[8px] text-gray-400">+3</div>
                        </div>
                        <span class="text-[10px] text-gray-600 ml-auto flex items-center gap-1">
                            <iconify-icon icon="lucide:clock" class="text-[10px]"></iconify-icon>
                            2 hours ago
                        </span>
                    </div>
                </div>

                <!-- Card 2: Draft Review -->
                <div class="group relative bg-midnight-light/40 border border-midnight-border rounded-lg p-3 hover:bg-midnight-light hover:border-sage-500/40 transition-all cursor-pointer">
                    <div class="flex items-start gap-3 mb-2">
                        <div class="text-gray-400 group-hover:text-sage-400 transition-colors mt-0.5">
                            <iconify-icon icon="lucide:file-text" class="text-lg"></iconify-icon>
                        </div>
                        <div>
                            <h4 class="text-sm font-medium text-gray-200 leading-tight">Protocol Labs - Draft</h4>
                            <p class="text-xs text-gray-500 mt-1">Tech stack analysis</p>
                        </div>
                    </div>

                    <div class="mt-3 flex items-center justify-between">
                         <div class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-warning/10 border border-warning/20">
                            <iconify-icon icon="lucide:alert-triangle" class="text-warning text-[10px]"></iconify-icon>
                            <span class="text-[10px] font-medium text-warning">Ready for Review</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Bottom Activity Tray -->
            <div class="h-16 border-t border-midnight-border bg-midnight-base p-3">
                <div class="h-full rounded-md border border-dashed border-midnight-border bg-midnight-light/20 flex items-center px-3 gap-3 hover:bg-midnight-light/40 transition-colors cursor-pointer group">
                    <div class="w-2 h-2 rounded-full bg-sage-500/50"></div>
                    <div class="flex-1 overflow-hidden">
                        <div class="text-xs font-medium text-gray-400 group-hover:text-gray-300">Activity Tray</div>
                        <div class="text-[10px] text-gray-600 truncate">No active tasks. Click to expand...</div>
                    </div>
                    <iconify-icon icon="lucide:chevron-up" class="text-gray-600 group-hover:text-gray-400"></iconify-icon>
                </div>
            </div>
        </aside>
    </div>

    <!-- CSS Animation Definitions -->
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</body>
</html>
~~~
