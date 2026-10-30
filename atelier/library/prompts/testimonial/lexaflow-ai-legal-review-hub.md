# LexaFlow AI - Legal Review Hub

> Build a FULLY FUNCTIONAL interactive prototype for an internal legal contract review app. Single-page HTML application with state management and full interactivity. STRUCTURE: 1. Start Page (Action Queue):    - 4 lanes: "Ready to Review", "Blocked", "Ready to Decide", "Ready to Hand Off"    - 5 realistic sample cases distributed across lanes    - Click any case to open Request Details page    - Triage summary bar at top shows count of cases in each lane 2. Request Details Page:    - Full case information hierarchy (ID, title, priority, status, ownership, due date, context fields)    - AI case brief section (clearly labeled as AI-generated)    - Primary CTA (changes based on case state: Review, Unblock, Make Decision, Hand Off)    - Case sections: Description, Attachments (grouped), Stakeholders, Communication Thread, Audit Log    - Progressive disclosure: Secondary info in collapsible drawers/panels 3. INTERACTIVE BEHAVIORS:    a) Block/Unblock Flow:       - When case is blocked, UI switches to "blocked mode" (visual distinction, top accent bar)       - Blocker reason is prominent       - Primary CTA: "Escalate to [Owner]" or "Follow Up with [Stakeholder]"       - "Unblock" button opens modal to record resolution       - Clicking unblock moves case back to previous action type lane       - Audit log records: who blocked, reason, who unblocked, resolution, timestamp    b) Make Decision Flow:       - "Ready to Decide" cases show key risk identified by AI       - 3 action buttons: "Approve", "Approve with Conditions", "Escalate/Reject"       - Clicking any decision opens modal with reason input field       - After decision, case moves to "Ready to Hand Off" lane       - Audit log records decision, reason, who decided, timestamp    c) Hand Off Flow:       - Shows next owner and handoff checklist       - "Complete Handoff" button opens modal with pre-filled next owner       - After handoff, case moves to completed state (case disappears from queue or moves to history)       - Audit log records handoff info    d) Audit Trail:       - Full timeline of all actions: created, reviewed changes, decisions made, blocks/unblocks, handoffs       - Each entry shows: action, actor, timestamp, reason/notes, AI involvement (if applicable)       - Audit log is read-only and always visible in case details 4. SAMPLE DATA (5 cases):    - Case 1: "Globex Vendor Agreement" - Ready to Review, HIGH priority, due in 2 days, new redline detected    - Case 2: "InfoSec SLA Amendment" - Blocked, waiting on InfoSec clarification, assigned to Marcus (you're waiting on him)    - Case 3: "Cloud Services MSA" - Ready to Decide, medium risk identified, needs legal judgment    - Case 4: "Maintenance Contract Renewal" - Ready to Hand Off, legal review complete, going to Procurement    - Case 5: "Data Processing Agreement" - Blocked, missing client input, overdue (escalation needed) 5. VISUAL DESIGN:    - Modern enterprise aesthetic, clean hierarchy    - Color-coded action types (blue=review, red/orange=blocked, amber=decide, green=handoff)    - Use distinctive typography for scanning (Plus Jakarta Sans or similar)    - Modal dialogs for confirmations and reason inputs    - Toast notifications for state changes ("Case unblocked!", "Decision recorded")    - Audit log uses compact timeline format (not tables) 6. TECHNICAL IMPLEMENTATION:    - Use vanilla JS with DOM state management (no frameworks)    - Data stored in local state (not persistent, just for demo)    - Navigation between Start Page and Case Details via JS (no page reloads)    - Forms with validation before state change    - Real timestamps for audit entries    - Progressive disclosure using data-state attributes and CSS classes CRITICAL INTERACTION REQUIREMENTS: - Block state logic: When case is blocked, "Review" button is disabled, blocker reason blocks the primary action path - Unblock modal: Requires reason input before allowing state change - Decision modal: Requires one of 3 decision options + optional reason - Handoff modal: Shows next owner, checklist status, and requires confirmation - Audit log: Always shows complete history, updates in real-time as actions occur - State persistence across page views: If user blocks a case, goes back to start page, then re-enters case, it's still blocked Enterprise focus, clear accountability, no generic dashboards.

- Source: https://superdesign.dev/library/lexaflow-ai-legal-review-hub
- Category: testimonial
- Tags: -
- Preview: https://draft-f05de39a-4408-4535-b3be-feaf735a4d21.preview.superdesign.dev
- Thumbnail: https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/f05de39a-4408-4535-b3be-feaf735a4d21/1768566499423.png
- Author: We Are Viewtiful creative studio

---

Build a FULLY FUNCTIONAL interactive prototype for an internal legal contract review app. Single-page HTML application with state management and full interactivity.

STRUCTURE:

1. Start Page (Action Queue):

   - 4 lanes: "Ready to Review", "Blocked", "Ready to Decide", "Ready to Hand Off"
   - 5 realistic sample cases distributed across lanes
   - Click any case to open Request Details page
   - Triage summary bar at top shows count of cases in each lane

2. Request Details Page:

   - Full case information hierarchy (ID, title, priority, status, ownership, due date, context fields)
   - AI case brief section (clearly labeled as AI-generated)
   - Primary CTA (changes based on case state: Review, Unblock, Make Decision, Hand Off)
   - Case sections: Description, Attachments (grouped), Stakeholders, Communication Thread, Audit Log
   - Progressive disclosure: Secondary info in collapsible drawers/panels

3. INTERACTIVE BEHAVIORS:\
   a) Block/Unblock Flow:

   - When case is blocked, UI switches to "blocked mode" (visual distinction, top accent bar)
   - Blocker reason is prominent
   - Primary CTA: "Escalate to [Owner]" or "Follow Up with [Stakeholder]"
   - "Unblock" button opens modal to record resolution
   - Clicking unblock moves case back to previous action type lane
   - Audit log records: who blocked, reason, who unblocked, resolution, timestamp

   b) Make Decision Flow:

   - "Ready to Decide" cases show key risk identified by AI
   - 3 action buttons: "Approve", "Approve with Conditions", "Escalate/Reject"
   - Clicking any decision opens modal with reason input field
   - After decision, case moves to "Ready to Hand Off" lane
   - Audit log records decision, reason, who decided, timestamp

   c) Hand Off Flow:

   - Shows next owner and handoff checklist
   - "Complete Handoff" button opens modal with pre-filled next owner
   - After handoff, case moves to completed state (case disappears from queue or moves to history)
   - Audit log records handoff info

   d) Audit Trail:

   - Full timeline of all actions: created, reviewed changes, decisions made, blocks/unblocks, handoffs
   - Each entry shows: action, actor, timestamp, reason/notes, AI involvement (if applicable)
   - Audit log is read-only and always visible in case details

4. SAMPLE DATA (5 cases):

   - Case 1: "Globex Vendor Agreement" - Ready to Review, HIGH priority, due in 2 days, new redline detected
   - Case 2: "InfoSec SLA Amendment" - Blocked, waiting on InfoSec clarification, assigned to Marcus (you're waiting on him)
   - Case 3: "Cloud Services MSA" - Ready to Decide, medium risk identified, needs legal judgment
   - Case 4: "Maintenance Contract Renewal" - Ready to Hand Off, legal review complete, going to Procurement
   - Case 5: "Data Processing Agreement" - Blocked, missing client input, overdue (escalation needed)

5. VISUAL DESIGN:

   - Modern enterprise aesthetic, clean hierarchy
   - Color-coded action types (blue=review, red/orange=blocked, amber=decide, green=handoff)
   - Use distinctive typography for scanning (Plus Jakarta Sans or similar)
   - Modal dialogs for confirmations and reason inputs
   - Toast notifications for state changes ("Case unblocked!", "Decision recorded")
   - Audit log uses compact timeline format (not tables)

6. TECHNICAL IMPLEMENTATION:

   - Use vanilla JS with DOM state management (no frameworks)
   - Data stored in local state (not persistent, just for demo)
   - Navigation between Start Page and Case Details via JS (no page reloads)
   - Forms with validation before state change
   - Real timestamps for audit entries
   - Progressive disclosure using data-state attributes and CSS classes

CRITICAL INTERACTION REQUIREMENTS:

- Block state logic: When case is blocked, "Review" button is disabled, blocker reason blocks the primary action path
- Unblock modal: Requires reason input before allowing state change
- Decision modal: Requires one of 3 decision options + optional reason
- Handoff modal: Shows next owner, checklist status, and requires confirmation
- Audit log: Always shows complete history, updates in real-time as actions occur
- State persistence across page views: If user blocks a case, goes back to start page, then re-enters case, it's still blocked

Enterprise focus, clear accountability, no generic dashboards.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LexaFlow AI | Internal Legal Review</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 10px;
        }
        .lane-height {
            height: calc(100vh - 240px);
        }
        .modal-enter {
            animation: modalFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes modalFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .blocked-accent {
            background: repeating-linear-gradient(
                45deg,
                #fee2e2,
                #fee2e2 10px,
                #fef2f2 10px,
                #fef2f2 20px
            );
        }
        .transition-view {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
    </style>
</head>
<body>
    <div id="app-root" class="min-h-screen flex flex-col">
        <!-- State Management will render here -->
    </div>

    <!-- Template: Toast Notifications -->
    <div id="toast-container" class="fixed bottom-8 right-8 z-50 flex flex-col gap-3"></div>

    <script>
        // --- STATE MANAGEMENT ---
        const INITIAL_CASES = [
            {
                id: "LGL-2024-001",
                title: "Globex Vendor Agreement",
                priority: "High",
                status: "Ready to Review",
                step: "Legal Review",
                owner: "Sarah Jenkins",
                dueDate: "2024-05-24",
                dept: "Procurement",
                region: "EMEA",
                value: "$240,000",
                account: "Globex Corp",
                description: "Standard vendor master agreement for logistics services. Key concerns around liability caps and data indemnity clauses in Section 14.",
                aiBrief: "New redline detected in Section 14.3. The vendor has proposed a 1x contract value liability cap, which deviates from our standard 3x requirement. Previous 3 agreements with Globex accepted 2x.",
                isBlocked: false,
                blockerReason: "",
                attachments: {
                    primary: [{ name: "Master_Agreement_v3_REDLINE.docx", size: "2.4MB", date: "2 hours ago" }],
                    supporting: [{ name: "Vendor_Risk_Assessment.pdf", size: "840KB", date: "Yesterday" }],
                    history: [{ name: "v2_Draft.docx", date: "May 20" }, { name: "v1_Original.docx", date: "May 18" }]
                },
                stakeholders: [
                    { name: "Mark Thompson", role: "Procurement Lead", avatar: "MT" },
                    { name: "Elena Rossi", role: "InfoSec", avatar: "ER" }
                ],
                auditLog: [
                    { action: "Case Created", user: "System", timestamp: "2024-05-18 09:15", note: "Request initiated via Workday" },
                    { action: "Assigned", user: "Alex Chen", timestamp: "2024-05-18 10:00", note: "Assigned to Legal (Sarah Jenkins)" }
                ]
            },
            {
                id: "LGL-2024-002",
                title: "InfoSec SLA Amendment",
                priority: "Medium",
                status: "Blocked",
                step: "Security Validation",
                owner: "Marcus Wright",
                dueDate: "2024-05-26",
                dept: "IT Infrastructure",
                region: "Global",
                value: "$0",
                account: "AWS Services",
                description: "Updating the uptime availability metrics for core cloud infrastructure to align with 2024 corporate reliability standards.",
                aiBrief: "Case is currently stalled. InfoSec has not responded to the last 3 pings regarding the uptime calculation methodology.",
                isBlocked: true,
                blockerReason: "Waiting on InfoSec clarification for Section 4.2 (Uptime Credits)",
                attachments: { primary: [{ name: "SLA_Amendment_Final.pdf", size: "1.1MB", date: "3 days ago" }], supporting: [], history: [] },
                stakeholders: [{ name: "Marcus Wright", role: "InfoSec Specialist", avatar: "MW" }],
                auditLog: [
                    { action: "Blocked", user: "Sarah Jenkins", timestamp: "2024-05-21 14:20", note: "Infrastructure team hasn't provided the availability formulas." }
                ]
            },
            {
                id: "LGL-2024-003",
                title: "Cloud Services MSA",
                priority: "High",
                status: "Ready to Decide",
                step: "Final Approval",
                owner: "Legal Lead",
                dueDate: "2024-05-23",
                dept: "Technology",
                region: "NAMER",
                value: "$1.2M",
                account: "Azure Enterprise",
                description: "New Master Services Agreement for regional cloud expansion. Significant investment with standard terms, but requires executive sign-off due to deal size.",
                aiBrief: "Medium risk identified: Jurisdiction set to Delaware but our standard is New York. However, Finance has approved the $1.2M budget allocation.",
                isBlocked: false,
                blockerReason: "",
                attachments: { primary: [{ name: "Azure_MSA_v5.docx", size: "4.2MB", date: "1 day ago" }], supporting: [{ name: "Budget_Approval.msg", size: "45KB", date: "May 21" }], history: [] },
                stakeholders: [{ name: "Janet Yuen", role: "Finance VP", avatar: "JY" }],
                auditLog: [
                    { action: "Review Completed", user: "Sarah Jenkins", timestamp: "2024-05-22 11:30", note: "Ready for final decision." }
                ]
            },
            {
                id: "LGL-2024-004",
                title: "Maintenance Contract",
                priority: "Low",
                status: "Ready to Hand Off",
                step: "Post-Review",
                owner: "Sarah Jenkins",
                dueDate: "2024-06-05",
                dept: "Facilities",
                region: "APAC",
                value: "$45,000",
                account: "Abesco Facilities",
                description: "Annual renewal for office maintenance services in Singapore office. No changes from previous year's terms.",
                aiBrief: "No critical changes detected from 2023 version. 100% compliance with current templates. Ready for Procurement execution.",
                isBlocked: false,
                blockerReason: "",
                attachments: { primary: [{ name: "Renewal_2024.pdf", size: "240KB", date: "May 15" }], supporting: [], history: [] },
                stakeholders: [{ name: "Liam Tan", role: "Facilities Manager", avatar: "LT" }],
                auditLog: [
                    { action: "Decision Made", user: "Sarah Jenkins", timestamp: "2024-05-20 15:45", note: "Approved without conditions." }
                ]
            },
            {
                id: "LGL-2024-005",
                title: "Data Processing Agreement",
                priority: "High",
                status: "Blocked",
                step: "Privacy Review",
                owner: "Privacy Officer",
                dueDate: "2024-05-20",
                dept: "Marketing",
                region: "APAC",
                value: "$12,000",
                account: "SendGrid",
                description: "DPA for new marketing email automation tool. Specifically focusing on data residency in Singapore.",
                aiBrief: "CRITICAL: Missing client data retention policy input. Without this, the privacy review cannot proceed.",
                isBlocked: true,
                blockerReason: "Missing client input for data retention periods (Section 8)",
                attachments: { primary: [{ name: "SendGrid_DPA.docx", size: "1.8MB", date: "May 12" }], supporting: [], history: [] },
                stakeholders: [{ name: "Chloe Sim", role: "Privacy Officer", avatar: "CS" }],
                auditLog: [
                    { action: "Blocked", user: "Chloe Sim", timestamp: "2024-05-19 10:10", note: "Awaiting marketing to provide data retention schedule." }
                ]
            }
        ];

        let state = {
            cases: [...INITIAL_CASES],
            view: 'queue', // 'queue' or 'details'
            activeCaseId: null,
            notification: null
        };

        // --- HELPERS ---
        const saveState = () => {
            // In a real app, this would persist to a DB
        };

        const showToast = (message, type = 'success') => {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border animate-bounce-in ${
                type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
            }`;
            toast.innerHTML = `
                <iconify-icon icon="${type === 'success' ? 'lucide:check-circle' : 'lucide:alert-circle'}"></iconify-icon>
                <span class="font-medium">${message}</span>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2', 'transition-all', 'duration-300');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        // --- RENDERING LOGIC ---
        const render = () => {
            const root = document.getElementById('app-root');
            root.innerHTML = '';

            if (state.view === 'queue') {
                root.appendChild(renderQueue());
            } else {
                root.appendChild(renderDetails(state.activeCaseId));
            }
        };

        const renderQueue = () => {
            const container = document.createElement('div');
            container.className = "flex-1 flex flex-col p-8 overflow-hidden";

            // Header/Summary
            const counts = {
                'Ready to Review': state.cases.filter(c => c.status === 'Ready to Review').length,
                'Blocked': state.cases.filter(c => c.status === 'Blocked').length,
                'Ready to Decide': state.cases.filter(c => c.status === 'Ready to Decide').length,
                'Ready to Hand Off': state.cases.filter(c => c.status === 'Ready to Hand Off').length
            };

            container.innerHTML = `
                <header class="flex justify-between items-end mb-8">
                    <div>
                        <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Action Queue</h1>
                        <p class="text-slate-500 mt-1 font-medium">Legal Review Operations & AI Copilot</p>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2 gap-3">
                            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency Score</div>
                            <div class="text-xl font-bold text-indigo-600">92%</div>
                        </div>
                    </div>
                </header>

                <div class="grid grid-cols-4 gap-4 mb-8">
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start">
                            <span class="p-2 bg-sky-50 text-sky-600 rounded-lg"><iconify-icon icon="lucide:glasses"></iconify-icon></span>
                            <span class="text-2xl font-bold">${counts['Ready to Review']}</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-500 mt-3 uppercase tracking-wider">To Review</p>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start">
                            <span class="p-2 bg-rose-50 text-rose-600 rounded-lg"><iconify-icon icon="lucide:octagon-pause"></iconify-icon></span>
                            <span class="text-2xl font-bold">${counts['Blocked']}</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-500 mt-3 uppercase tracking-wider">Blocked</p>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start">
                            <span class="p-2 bg-amber-50 text-amber-600 rounded-lg"><iconify-icon icon="lucide:gavel"></iconify-icon></span>
                            <span class="text-2xl font-bold">${counts['Ready to Decide']}</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-500 mt-3 uppercase tracking-wider">To Decide</p>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start">
                            <span class="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><iconify-icon icon="lucide:send"></iconify-icon></span>
                            <span class="text-2xl font-bold">${counts['Ready to Hand Off']}</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-500 mt-3 uppercase tracking-wider">To Hand Off</p>
                    </div>
                </div>

                <div class="flex gap-6 flex-1 overflow-x-auto pb-4">
                    ${renderLane('Ready to Review', 'sky', 'lucide:glasses')}
                    ${renderLane('Blocked', 'rose', 'lucide:octagon-pause')}
                    ${renderLane('Ready to Decide', 'amber', 'lucide:gavel')}
                    ${renderLane('Ready to Hand Off', 'emerald', 'lucide:send')}
                </div>
            `;

            return container;
        };

        const renderLane = (status, color, icon) => {
            const casesInLane = state.cases.filter(c => c.status === status);
            return `
                <div class="flex-1 min-w-[320px] flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-${color}-500"></div>
                            <h3 class="font-bold text-slate-800">${status}</h3>
                            <span class="px-2 py-0.5 bg-slate-200 text-slate-600 text-xs font-bold rounded-full">${casesInLane.length}</span>
                        </div>
                    </div>
                    <div class="flex-1 bg-slate-100/50 rounded-2xl p-3 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                        ${casesInLane.map(c => renderCaseCard(c, color)).join('')}
                        ${casesInLane.length === 0 ? '<div class="text-center py-12 text-slate-400 text-sm italic">Queue Clear</div>' : ''}
                    </div>
                </div>
            `;
        };

        const renderCaseCard = (c, color) => {
            const priorityColors = {
                'High': 'text-rose-600 bg-rose-50',
                'Medium': 'text-amber-600 bg-amber-50',
                'Low': 'text-emerald-600 bg-emerald-50'
            };
            
            return `
                <div onclick="openCase('${c.id}')" class="group bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-${color}-300 transition-all cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${c.id}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${priorityColors[c.priority]}">${c.priority}</span>
                    </div>
                    <h4 class="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight mb-2">${c.title}</h4>
                    <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">${c.stakeholders[0]?.avatar || '??'}</div>
                            <span class="text-xs font-semibold text-slate-500 truncate max-w-[80px]">${c.owner}</span>
                        </div>
                        <div class="text-xs font-bold text-slate-400 flex items-center gap-1">
                            <iconify-icon icon="lucide:calendar"></iconify-icon>
                            ${c.dueDate}
                        </div>
                    </div>
                </div>
            `;
        };

        const renderDetails = (caseId) => {
            const c = state.cases.find(item => item.id === caseId);
            if (!c) return document.createElement('div');

            const container = document.createElement('div');
            container.className = "flex-1 flex flex-col h-screen overflow-hidden";

            container.innerHTML = `
                <!-- Case Header Bar -->
                <div class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
                    <div class="flex items-center gap-4">
                        <button onclick="backToQueue()" class="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
                            <iconify-icon icon="lucide:arrow-left" class="text-xl"></iconify-icon>
                        </button>
                        <div class="h-6 w-px bg-slate-200"></div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold text-slate-400 tracking-widest">${c.id}</span>
                                <span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">${c.step.toUpperCase()}</span>
                            </div>
                            <h2 class="font-bold text-slate-900">${c.title}</h2>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="flex -space-x-2">
                            ${c.stakeholders.map(s => `<div title="${s.name} (${s.role})" class="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-indigo-600">${s.avatar}</div>`).join('')}
                            <div class="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400 cursor-pointer hover:bg-slate-200 transition-colors">+</div>
                        </div>
                        <button class="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                            Share Case
                        </button>
                    </div>
                </div>

                <!-- Main Scrollable Area -->
                <div class="flex-1 flex overflow-hidden">
                    <!-- Left Sidebar (Details) -->
                    <div class="w-80 border-r border-slate-200 bg-white overflow-y-auto custom-scrollbar p-6 flex flex-col gap-8 shrink-0">
                        <div>
                            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Context</h3>
                            <dl class="grid grid-cols-1 gap-4">
                                <div>
                                    <dt class="text-[10px] uppercase font-bold text-slate-400">Account</dt>
                                    <dd class="text-sm font-semibold text-slate-800">${c.account}</dd>
                                </div>
                                <div>
                                    <dt class="text-[10px] uppercase font-bold text-slate-400">Department</dt>
                                    <dd class="text-sm font-semibold text-slate-800">${c.dept}</dd>
                                </div>
                                <div>
                                    <dt class="text-[10px] uppercase font-bold text-slate-400">Contract Value</dt>
                                    <dd class="text-sm font-semibold text-indigo-600 font-bold">${c.value}</dd>
                                </div>
                                <div>
                                    <dt class="text-[10px] uppercase font-bold text-slate-400">Region</dt>
                                    <dd class="text-sm font-semibold text-slate-800">${c.region}</dd>
                                </div>
                            </dl>
                        </div>

                        <div>
                            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Primary Stakeholders</h3>
                            <div class="space-y-3">
                                ${c.stakeholders.map(s => `
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-600">${s.avatar}</div>
                                        <div>
                                            <p class="text-sm font-bold text-slate-800">${s.name}</p>
                                            <p class="text-xs text-slate-500 font-medium">${s.role}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <button onclick="openModal('audit')" class="w-full flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-widest hover:text-indigo-600 transition-colors">
                                Full Audit Log
                                <iconify-icon icon="lucide:history"></iconify-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Center Content -->
                    <div class="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                        ${c.isBlocked ? `
                            <div class="blocked-accent border-b border-rose-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                                <div class="flex items-center gap-4 text-rose-800">
                                    <div class="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center">
                                        <iconify-icon icon="lucide:octagon-pause" class="text-xl"></iconify-icon>
                                    </div>
                                    <div>
                                        <h4 class="font-extrabold">CASE BLOCKED</h4>
                                        <p class="text-sm font-medium">${c.blockerReason}</p>
                                    </div>
                                </div>
                                <button onclick="openModal('unblock')" class="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-rose-200 transition-all flex items-center gap-2">
                                    Resolve Blocker
                                    <iconify-icon icon="lucide:arrow-right-circle"></iconify-icon>
                                </button>
                            </div>
                        ` : ''}

                        <div class="p-8 max-w-4xl mx-auto w-full">
                            <!-- AI Brief Section -->
                            <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8 relative overflow-hidden">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="flex items-center justify-center p-2 bg-indigo-600 text-white rounded-lg">
                                        <iconify-icon icon="lucide:sparkles"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-indigo-900">AI Case Brief</h3>
                                        <p class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Analysis generated 2m ago</p>
                                    </div>
                                </div>
                                <p class="text-indigo-800 font-medium leading-relaxed">
                                    ${c.aiBrief}
                                </p>
                                <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 blur-3xl -z-1"></div>
                            </div>

                            <!-- Action Section (Changes based on status) -->
                            <div class="mb-12">
                                <div class="flex items-center justify-between mb-6">
                                    <h3 class="text-xl font-extrabold text-slate-900">Primary Work Area</h3>
                                    ${!c.isBlocked ? `
                                        <div class="flex gap-2">
                                            <button onclick="openModal('block')" class="text-xs font-bold text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors uppercase tracking-widest">
                                                <iconify-icon icon="lucide:pause-circle"></iconify-icon>
                                                Flag Blocker
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>

                                <div class="bg-white border border-slate-200 rounded-2xl p-8">
                                    ${renderActionContent(c)}
                                </div>
                            </div>

                            <!-- Documentation Section -->
                            <div class="space-y-6">
                                <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <iconify-icon icon="lucide:file-text" class="text-slate-400"></iconify-icon>
                                    Attachments
                                </h3>
                                
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="col-span-2 bg-slate-50 border border-slate-200 rounded-xl p-4">
                                        <p class="text-[10px] uppercase font-bold text-slate-400 mb-3">Primary Document</p>
                                        <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                            <div class="flex items-center gap-3">
                                                <iconify-icon icon="lucide:file-word" class="text-3xl text-sky-500"></iconify-icon>
                                                <div>
                                                    <p class="text-sm font-bold text-slate-800">${c.attachments.primary[0].name}</p>
                                                    <p class="text-xs text-slate-500 font-medium">${c.attachments.primary[0].size} • ${c.attachments.primary[0].date}</p>
                                                </div>
                                            </div>
                                            <button class="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                                <iconify-icon icon="lucide:download"></iconify-icon>
                                            </button>
                                        </div>
                                    </div>

                                    <details class="col-span-1 group">
                                        <summary class="list-none cursor-pointer p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between font-bold text-sm text-slate-600">
                                            Supporting Docs (${c.attachments.supporting.length})
                                            <iconify-icon icon="lucide:chevron-down" class="group-open:rotate-180 transition-transform"></iconify-icon>
                                        </summary>
                                        <div class="mt-2 space-y-2 px-1">
                                            ${c.attachments.supporting.length > 0 ? c.attachments.supporting.map(f => `
                                                <div class="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
                                                    <span class="text-xs font-semibold text-slate-700 truncate">${f.name}</span>
                                                    <iconify-icon icon="lucide:eye" class="text-slate-400 cursor-pointer"></iconify-icon>
                                                </div>
                                            `).join('') : '<p class="text-xs text-slate-400 p-2 italic">No supporting docs</p>'}
                                        </div>
                                    </details>

                                    <details class="col-span-1 group">
                                        <summary class="list-none cursor-pointer p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between font-bold text-sm text-slate-600">
                                            Version History
                                            <iconify-icon icon="lucide:chevron-down" class="group-open:rotate-180 transition-transform"></iconify-icon>
                                        </summary>
                                        <div class="mt-2 space-y-2 px-1">
                                            ${c.attachments.history.length > 0 ? c.attachments.history.map(f => `
                                                <div class="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
                                                    <span class="text-xs font-semibold text-slate-700 truncate">${f.name}</span>
                                                    <span class="text-[10px] font-bold text-slate-400">${f.date}</span>
                                                </div>
                                            `).join('') : '<p class="text-xs text-slate-400 p-2 italic">No previous versions</p>'}
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            return container;
        };

        const renderActionContent = (c) => {
            if (c.isBlocked) {
                return `
                    <div class="text-center py-8">
                        <div class="inline-flex items-center justify-center p-4 bg-rose-50 rounded-2xl mb-4">
                            <iconify-icon icon="lucide:lock" class="text-4xl text-rose-500"></iconify-icon>
                        </div>
                        <h4 class="text-lg font-bold text-slate-900 mb-2">Review Stalled</h4>
                        <p class="text-slate-500 max-w-sm mx-auto mb-6">
                            This request is currently flagged as blocked. Please address the outstanding issue with <b>${c.stakeholders[0]?.name}</b> to proceed.
                        </p>
                        <div class="flex justify-center gap-3">
                            <button class="px-6 py-2 border border-slate-200 font-bold rounded-xl text-slate-600 hover:bg-slate-50 transition-all">Nudge Stakeholder</button>
                            <button onclick="openModal('unblock')" class="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">Resolve Manually</button>
                        </div>
                    </div>
                `;
            }

            if (c.status === 'Ready to Review') {
                return `
                    <div class="flex flex-col gap-6">
                        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <iconify-icon icon="lucide:info" class="text-indigo-600 text-xl mt-0.5"></iconify-icon>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Review the latest redlines in <b>Section 14</b>. AI has identified a deviation from the corporate standard liability cap. Please confirm if the proposed 2x limit is acceptable given the relationship history.
                            </p>
                        </div>
                        <div class="h-40 bg-slate-200/30 border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400">
                            <iconify-icon icon="lucide:file-search" class="text-3xl mb-2"></iconify-icon>
                            <p class="text-sm font-medium">Diff View (Click to expand)</p>
                        </div>
                        <div class="flex justify-end gap-3">
                            <button onclick="openModal('decide')" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-lg shadow-indigo-100 transition-all">Complete Review & Decide</button>
                        </div>
                    </div>
                `;
            }

            if (c.status === 'Ready to Decide') {
                return `
                    <div class="flex flex-col items-center py-6">
                        <h4 class="text-xl font-extrabold text-slate-900 mb-2">Final Legal Determination Required</h4>
                        <p class="text-slate-500 text-center max-w-lg mb-8">Review is finished. AI confirms no other major deviations. Choose the final status for this contract.</p>
                        <div class="grid grid-cols-3 gap-4 w-full">
                            <button onclick="submitDecision('Approve')" class="p-6 rounded-2xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-all flex flex-col items-center gap-3">
                                <iconify-icon icon="lucide:check-circle" class="text-3xl text-emerald-600"></iconify-icon>
                                <span class="font-extrabold text-emerald-800">Approve</span>
                            </button>
                            <button onclick="submitDecision('Approve with Conditions')" class="p-6 rounded-2xl border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-all flex flex-col items-center gap-3">
                                <iconify-icon icon="lucide:shield-alert" class="text-3xl text-amber-600"></iconify-icon>
                                <span class="font-extrabold text-amber-800">Approve with Conditions</span>
                            </button>
                            <button onclick="submitDecision('Reject')" class="p-6 rounded-2xl border border-rose-200 bg-rose-50 hover:bg-rose-100 transition-all flex flex-col items-center gap-3">
                                <iconify-icon icon="lucide:x-circle" class="text-3xl text-rose-600"></iconify-icon>
                                <span class="font-extrabold text-rose-800">Reject / Redraft</span>
                            </button>
                        </div>
                    </div>
                `;
            }

            if (c.status === 'Ready to Hand Off') {
                return `
                    <div class="flex flex-col gap-6">
                        <div class="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                                <iconify-icon icon="lucide:party-popper" class="text-2xl"></iconify-icon>
                            </div>
                            <div>
                                <h4 class="font-extrabold text-emerald-900">Review Cycle Complete</h4>
                                <p class="text-sm text-emerald-700">Legal sign-off has been recorded in the system.</p>
                            </div>
                        </div>
                        
                        <div>
                            <h5 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Handoff Checklist</h5>
                            <div class="space-y-3">
                                <label class="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-xl cursor-pointer">
                                    <input type="checkbox" checked disabled class="w-4 h-4 rounded border-slate-300 text-indigo-600">
                                    <span class="text-sm font-semibold text-slate-700">Final version uploaded to Vault</span>
                                </label>
                                <label class="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-xl cursor-pointer">
                                    <input type="checkbox" checked disabled class="w-4 h-4 rounded border-slate-300 text-indigo-600">
                                    <span class="text-sm font-semibold text-slate-700">Internal approvals documented</span>
                                </label>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-extrabold text-slate-400">PL</div>
                                <div>
                                    <p class="text-xs font-bold text-slate-400 uppercase tracking-tight">Next Owner</p>
                                    <p class="text-sm font-bold text-slate-800">Procurement Lead</p>
                                </div>
                            </div>
                            <button onclick="completeHandoff()" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-100 transition-all">Submit to Procurement</button>
                        </div>
                    </div>
                `;
            }
        };

        // --- MODAL SYSTEM ---
        const openModal = (type) => {
            const c = state.cases.find(item => item.id === state.activeCaseId);
            const modalOverlay = document.createElement('div');
            modalOverlay.id = 'modal-overlay';
            modalOverlay.className = "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4";
            
            let content = '';
            if (type === 'unblock') {
                content = `
                    <div class="bg-white rounded-3xl w-full max-w-md overflow-hidden modal-enter">
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center"><iconify-icon icon="lucide:unlocked" class="text-xl"></iconify-icon></div>
                                <h3 class="text-xl font-extrabold text-slate-900">Resolve Blocker</h3>
                            </div>
                            <p class="text-sm text-slate-500 mb-6">Record how this blocker was resolved. This will be added to the permanent audit trail.</p>
                            <textarea id="modal-note" class="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Describe the resolution..."></textarea>
                        </div>
                        <div class="bg-slate-50 px-8 py-4 flex gap-3 justify-end">
                            <button onclick="closeModal()" class="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800">Cancel</button>
                            <button onclick="submitUnblock()" class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl">Confirm Resolution</button>
                        </div>
                    </div>
                `;
            } else if (type === 'audit') {
                content = `
                    <div class="bg-white rounded-3xl w-full max-w-2xl overflow-hidden modal-enter flex flex-col max-h-[80vh]">
                        <div class="p-8 border-b border-slate-100">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center"><iconify-icon icon="lucide:history" class="text-xl"></iconify-icon></div>
                                    <h3 class="text-xl font-extrabold text-slate-900">Audit History</h3>
                                </div>
                                <button onclick="closeModal()" class="p-2 hover:bg-slate-100 rounded-lg text-slate-400"><iconify-icon icon="lucide:x" class="text-xl"></iconify-icon></button>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                            ${c.auditLog.map((log, i) => `
                                <div class="relative pl-8">
                                    ${i < c.auditLog.length - 1 ? '<div class="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-slate-100"></div>' : ''}
                                    <div class="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center">
                                        <div class="w-[8px] h-[8px] rounded-full bg-indigo-600"></div>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <div class="flex items-center justify-between">
                                            <span class="text-sm font-extrabold text-slate-900">${log.action}</span>
                                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${log.timestamp}</span>
                                        </div>
                                        <p class="text-xs font-bold text-indigo-600">${log.user}</p>
                                        <p class="text-sm text-slate-500 mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">${log.note}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="bg-slate-50 p-4 text-center">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                <iconify-icon icon="lucide:lock"></iconify-icon>
                                Immutable Blockchain-Verified Audit Trail
                            </p>
                        </div>
                    </div>
                `;
            } else if (type === 'block') {
                content = `
                    <div class="bg-white rounded-3xl w-full max-w-md overflow-hidden modal-enter">
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center"><iconify-icon icon="lucide:pause-octagon" class="text-xl"></iconify-icon></div>
                                <h3 class="text-xl font-extrabold text-slate-900">Block Case</h3>
                            </div>
                            <p class="text-sm text-slate-500 mb-6">Please provide the reason for blocking this request. All stakeholders will be notified.</p>
                            <textarea id="modal-block-reason" class="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all" placeholder="What is preventing progress?"></textarea>
                        </div>
                        <div class="bg-slate-50 px-8 py-4 flex gap-3 justify-end">
                            <button onclick="closeModal()" class="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800">Cancel</button>
                            <button onclick="submitBlock()" class="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-xl">Confirm Block</button>
                        </div>
                    </div>
                `;
            }
            
            modalOverlay.innerHTML = content;
            document.body.appendChild(modalOverlay);
        };

        const closeModal = () => {
            const modal = document.getElementById('modal-overlay');
            if (modal) modal.remove();
        };

        // --- ACTIONS ---
        const openCase = (id) => {
            state.view = 'details';
            state.activeCaseId = id;
            render();
        };

        const backToQueue = () => {
            state.view = 'queue';
            state.activeCaseId = null;
            render();
        };

        const submitUnblock = () => {
            const reason = document.getElementById('modal-note').value;
            if (!reason) return showToast('Please enter a reason', 'error');

            const c = state.cases.find(item => item.id === state.activeCaseId);
            c.isBlocked = false;
            c.blockerReason = "";
            c.status = (c.id === 'LGL-2024-002') ? 'Ready to Review' : 'Ready to Review'; // Logic to decide where it returns
            c.auditLog.unshift({
                action: "Unblocked",
                user: "Sarah Jenkins",
                timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
                note: `Resolution: ${reason}`
            });

            closeModal();
            render();
            showToast('Case successfully unblocked');
        };

        const submitBlock = () => {
            const reason = document.getElementById('modal-block-reason').value;
            if (!reason) return showToast('Please enter a reason', 'error');

            const c = state.cases.find(item => item.id === state.activeCaseId);
            c.isBlocked = true;
            c.blockerReason = reason;
            c.status = 'Blocked';
            c.auditLog.unshift({
                action: "Blocked",
                user: "Sarah Jenkins",
                timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
                note: `Reason: ${reason}`
            });

            closeModal();
            render();
            showToast('Case flagged as blocked', 'error');
        };

        const submitDecision = (decision) => {
            const c = state.cases.find(item => item.id === state.activeCaseId);
            c.status = 'Ready to Hand Off';
            c.auditLog.unshift({
                action: "Decision Recorded",
                user: "Sarah Jenkins",
                timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
                note: `Final Decision: ${decision}`
            });

            render();
            showToast(`Case marked as ${decision}`);
        };

        const completeHandoff = () => {
            const cIndex = state.cases.findIndex(item => item.id === state.activeCaseId);
            state.cases.splice(cIndex, 1); // Move to history (remove from queue in this demo)

            backToQueue();
            showToast('Case successfully handed off to Procurement');
        };

        // Init
        render();

    </script>
</body>
</html>
~~~
