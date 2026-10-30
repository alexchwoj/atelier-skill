# GeneSearch Pro | Precision Analysis

> Update the tab content system so that each tab (Clinical Evidence, Structural Data, Family Targets, Similar Targets) displays its own unique content: 1. CLINICAL EVIDENCE tab: Shows line graph of clinical progression over time, compound molecular structure images, and radial plot for clinical scoring dimensions 2. STRUCTURAL DATA tab: Shows protein structure visualization, 3D molecular diagram representation, and comparison charts for structural properties 3. FAMILY TARGETS tab: Shows family tree/network diagram, target relationship visualizations, and data table of related family gene targets with scores 4. SIMILAR TARGETS tab: Shows similarity comparison charts, target relationship network, and data table of similar genes with similarity scores and druggability ratings Each tab should: - Have visually distinct placeholder content that represents its data type - Maintain the same professional design aesthetic - Use responsive grid layout for visualizations - Include appropriate icons/visuals to distinguish tab types - Be fully clickable and functional with JavaScript to switch between tabs smoothly Implement tab switching that dynamically shows/hides content based on active tab selection.


---

Update the tab content system so that each tab (Clinical Evidence, Structural Data, Family Targets, Similar Targets) displays its own unique content:

1. CLINICAL EVIDENCE tab: Shows line graph of clinical progression over time, compound molecular structure images, and radial plot for clinical scoring dimensions

2. STRUCTURAL DATA tab: Shows protein structure visualization, 3D molecular diagram representation, and comparison charts for structural properties

3. FAMILY TARGETS tab: Shows family tree/network diagram, target relationship visualizations, and data table of related family gene targets with scores

4. SIMILAR TARGETS tab: Shows similarity comparison charts, target relationship network, and data table of similar genes with similarity scores and druggability ratings

Each tab should:

- Have visually distinct placeholder content that represents its data type
- Maintain the same professional design aesthetic
- Use responsive grid layout for visualizations
- Include appropriate icons/visuals to distinguish tab types
- Be fully clickable and functional with JavaScript to switch between tabs smoothly

Implement tab switching that dynamically shows/hides content based on active tab selection.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GeneSearch Pro | Precision Analysis</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        @view-transition {
            navigation: auto;
        }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        .mono {
            font-family: 'JetBrains Mono', monospace;
        }
        .mode-tab-active {
            background-color: #0066CC;
            color: white;
            box-shadow: 0 4px 6px -1px rgb(0 102 204 / 0.2);
        }
        .score-high { background-color: #10b981; color: white; }
        .score-medium { background-color: #fbbf24; color: #92400e; }
        .score-low { background-color: #f43f5e; color: white; }
        
        .chart-placeholder {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px dashed #cbd5e1;
        }
        
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: grid;
            animation: fadeIn 0.4s ease-out forwards;
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-slate-50 flex flex-col">
        <!-- Header -->
        <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-[#0066CC] rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                            <iconify-icon icon="lucide:dna" class="text-white text-2xl"></iconify-icon>
                        </div>
                        <div>
                            <h1 class="font-bold text-slate-900 text-lg leading-tight tracking-tight">GeneSearch <span class="text-[#0066CC]">Pro</span></h1>
                            <p class="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Druggability Suite</p>
                        </div>
                    </div>
                    
                    <!-- Mode Switcher -->
                    <div class="bg-slate-100 p-1 rounded-xl flex items-center">
                        <button id="mode-single" class="px-5 py-2 text-sm font-bold rounded-lg transition-all mode-tab-active">
                            Single Gene Analysis
                        </button>
                        <button id="mode-batch" class="px-5 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all">
                            Batch Analysis
                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3 pl-2 cursor-pointer">
                        <div class="text-right hidden sm:block">
                            <p class="text-sm font-bold text-slate-900">Dr. Sarah Chen</p>
                            <p class="text-[10px] text-slate-500 font-medium">Senior Research Scientist</p>
                        </div>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User Avatar" class="w-9 h-9 rounded-full border border-slate-200 bg-slate-50">
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow max-w-[1440px] mx-auto w-full px-6 py-8">
            
            <!-- SINGLE GENE MODE CONTENT -->
            <div id="content-single" class="animate-fade-in flex flex-col gap-8">
                <!-- Top Control Bar -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Left: Search -->
                    <div class="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                        <div class="flex-grow relative flex items-center">
                            <iconify-icon icon="lucide:search" class="absolute left-4 text-slate-400 text-xl"></iconify-icon>
                            <input type="text" value="EGFR" class="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 border border-transparent focus:border-blue-400 font-semibold text-slate-700" placeholder="Enter Gene Symbol...">
                        </div>
                        <button id="search-btn" class="bg-[#0066CC] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                            <span>Analyze</span>
                            <iconify-icon icon="lucide:zap"></iconify-icon>
                        </button>
                    </div>
                    
                    <!-- Right: Druggability Scorer Controls -->
                    <div class="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3 px-3">
                            <iconify-icon icon="lucide:settings-2" class="text-slate-400 text-xl"></iconify-icon>
                            <span class="text-sm font-bold text-slate-600">Druggability Scorer</span>
                        </div>
                        <div class="flex gap-2">
                            <button id="browse-config" class="px-4 py-3 text-sm font-bold text-[#0066CC] bg-blue-50 hover:bg-blue-100 rounded-xl transition-all flex items-center gap-2">
                                <iconify-icon icon="lucide:file-code"></iconify-icon>
                                Browse Config File
                            </button>
                            <button id="reset-single" class="px-4 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Result Header: Info + Score -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Gene Info Card -->
                    <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-[#0066CC]"></div>
                        <div class="flex items-center gap-3">
                            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">EGFR</h2>
                            <span class="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full tracking-wider border border-emerald-200">Clinically Relevant</span>
                        </div>
                        <p class="text-slate-600 leading-relaxed">
                            Epidermal growth factor receptor. This gene encodes a transmembrane glycoprotein that is a member of the protein kinase superfamily. Binding of the protein to a ligand induces receptor dimerization and tyrosine autophosphorylation and leads to cell proliferation.
                        </p>
                        <div class="flex gap-6 mt-2">
                            <div><p class="text-[10px] font-bold text-slate-400 uppercase">Chromosome</p><p class="font-bold mono">7p11.2</p></div>
                            <div><p class="text-[10px] font-bold text-slate-400 uppercase">UniProt ID</p><p class="font-bold mono">P00533</p></div>
                            <div><p class="text-[10px] font-bold text-slate-400 uppercase">Family</p><p class="font-bold">Tyrosine Kinase</p></div>
                        </div>
                    </div>

                    <!-- Overall Druggability Score Card -->
                    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-center items-center text-center">
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Overall Druggability Score</p>
                        <div class="relative">
                            <svg class="w-32 h-32 transform -rotate-90">
                                <circle cx="64" cy="64" r="58" stroke="#f1f5f9" stroke-width="12" fill="transparent" />
                                <circle cx="64" cy="64" r="58" stroke="#10b981" stroke-width="12" fill="transparent" 
                                    stroke-dasharray="364.4" stroke-dashoffset="36.4" stroke-linecap="round" />
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-4xl font-extrabold text-slate-900">0.90</span>
                            </div>
                        </div>
                        <div class="mt-4 px-6 py-1.5 score-high rounded-full text-xs font-extrabold tracking-widest uppercase">
                            HIGH POTENTIAL
                        </div>
                    </div>
                </div>

                <!-- Detailed Analysis Tabs -->
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-200">
                        <button id="tab-clinical" class="flex flex-col items-center gap-2 px-8 py-4 border-b-2 border-[#0066CC] group transition-all">
                            <span class="text-sm font-bold text-[#0066CC]">Clinical Evidence</span>
                            <span class="px-2 py-0.5 score-high text-[9px] font-black rounded tracking-tighter">0.95</span>
                        </button>
                        <button id="tab-structural" class="flex flex-col items-center gap-2 px-8 py-4 border-b-2 border-transparent hover:border-slate-300 transition-all text-slate-400 hover:text-slate-600">
                            <span class="text-sm font-bold">Structural Data</span>
                            <span class="px-2 py-0.5 score-high text-[9px] font-black rounded tracking-tighter">0.88</span>
                        </button>
                        <button id="tab-family" class="flex flex-col items-center gap-2 px-8 py-4 border-b-2 border-transparent hover:border-slate-300 transition-all text-slate-400 hover:text-slate-600">
                            <span class="text-sm font-bold">Family Targets</span>
                            <span class="px-2 py-0.5 score-medium text-[9px] font-black rounded tracking-tighter">0.64</span>
                        </button>
                        <button id="tab-similar" class="flex flex-col items-center gap-2 px-8 py-4 border-b-2 border-transparent hover:border-slate-300 transition-all text-slate-400 hover:text-slate-600">
                            <span class="text-sm font-bold">Similar Targets</span>
                            <span class="px-2 py-0.5 score-low text-[9px] font-black rounded tracking-tighter">0.32</span>
                        </button>
                    </div>

                    <!-- Visualizations Container -->
                    <div id="tab-content-container">
                        <!-- CLINICAL EVIDENCE CONTENT -->
                        <div id="content-tab-clinical" class="tab-content active grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Chart Card -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Clinical Progression</h3>
                                    <iconify-icon icon="lucide:trending-up" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl relative p-4 overflow-hidden">
                                    <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0 80 Q 20 75, 35 50 T 60 40 T 100 10" fill="none" stroke="#0066CC" stroke-width="2" />
                                        <circle cx="35" cy="50" r="2" fill="#0066CC" />
                                        <circle cx="60" cy="40" r="2" fill="#0066CC" />
                                    </svg>
                                    <div class="absolute bottom-2 left-2 text-[8px] font-bold text-slate-400">Phase I → II → III</div>
                                </div>
                            </div>

                            <!-- Molecular Structure Card -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Lead Compounds</h3>
                                    <iconify-icon icon="lucide:microscope" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl flex items-center justify-center gap-4">
                                    <div class="flex flex-col items-center gap-2">
                                        <iconify-icon icon="mdi:molecule" class="text-4xl text-emerald-500/40"></iconify-icon>
                                        <span class="text-[9px] font-bold text-slate-500">Gefitinib</span>
                                    </div>
                                    <div class="flex flex-col items-center gap-2">
                                        <iconify-icon icon="mdi:molecule" class="text-4xl text-blue-500/40"></iconify-icon>
                                        <span class="text-[9px] font-bold text-slate-500">Erlotinib</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Radial Plot Card -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Clinical Scoring Map</h3>
                                    <iconify-icon icon="lucide:radar" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl flex items-center justify-center p-4">
                                    <div class="relative w-32 h-32 border-2 border-slate-200 rounded-full flex items-center justify-center">
                                        <div class="absolute w-24 h-24 bg-[#0066CC]/10 border border-[#0066CC]/30 rounded-full" style="clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);"></div>
                                        <span class="text-[8px] absolute top-1 font-bold text-slate-500 uppercase">Efficacy</span>
                                        <span class="text-[8px] absolute right-1 font-bold text-slate-500 uppercase">Safety</span>
                                        <span class="text-[8px] absolute bottom-1 font-bold text-slate-500 uppercase">PK/PD</span>
                                        <span class="text-[8px] absolute left-1 font-bold text-slate-500 uppercase">IP Status</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- STRUCTURAL DATA CONTENT -->
                        <div id="content-tab-structural" class="tab-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Protein Structure -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Protein Domain Arch.</h3>
                                    <iconify-icon icon="lucide:layers" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl flex items-center justify-center p-6">
                                    <div class="w-full space-y-3">
                                        <div class="h-4 w-full bg-[#0066CC]/20 rounded flex items-center justify-center">
                                            <span class="text-[8px] font-bold text-slate-500 uppercase">Extracellular</span>
                                        </div>
                                        <div class="h-4 w-3/4 bg-[#0066CC]/40 rounded mx-auto flex items-center justify-center">
                                            <span class="text-[8px] font-bold text-slate-500 uppercase">Transmembrane</span>
                                        </div>
                                        <div class="h-4 w-full bg-[#0066CC]/60 rounded flex items-center justify-center">
                                            <span class="text-[8px] font-bold text-slate-700 uppercase">Kinase Domain</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 3D Pocket Representation -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Binding Pocket Vol.</h3>
                                    <iconify-icon icon="lucide:box" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl flex items-center justify-center">
                                    <div class="w-32 h-32 bg-slate-200/50 rounded-full flex items-center justify-center relative">
                                        <div class="w-16 h-16 bg-[#0066CC]/10 border-2 border-[#0066CC]/20 rounded-lg rotate-45"></div>
                                        <div class="absolute text-[10px] font-black text-[#0066CC]">742 Å³</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Structural Properties -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Metric Comparisons</h3>
                                    <iconify-icon icon="lucide:bar-chart-2" class="text-[#0066CC]"></iconify-icon>
                                </div>
                                <div class="h-48 chart-placeholder rounded-xl flex flex-col justify-center px-6 gap-3">
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span>Pocket Depth</span><span>88%</span></div>
                                        <div class="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div class="h-full bg-emerald-500 w-[88%]"></div></div>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span>Hydrophobicity</span><span>65%</span></div>
                                        <div class="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div class="h-full bg-blue-500 w-[65%]"></div></div>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span>Enclosure</span><span>92%</span></div>
                                        <div class="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div class="h-full bg-indigo-500 w-[92%]"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- FAMILY TARGETS CONTENT -->
                        <div id="content-tab-family" class="tab-content grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div class="lg:col-span-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Kinase Family Tree</h3>
                                <div class="h-64 chart-placeholder rounded-xl flex items-center justify-center">
                                    <iconify-icon icon="lucide:git-pull-request" class="text-6xl text-[#0066CC]/20 rotate-90"></iconify-icon>
                                    <div class="absolute text-[10px] font-bold text-slate-400">Phylogenetic Map</div>
                                </div>
                            </div>
                            <div class="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Family Members Summary</h3>
                                <div class="overflow-hidden rounded-xl border border-slate-100">
                                    <table class="w-full text-left">
                                        <thead>
                                            <tr class="bg-slate-50">
                                                <th class="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase">Member</th>
                                                <th class="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase">Rel. %</th>
                                                <th class="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase">Score</th>
                                                <th class="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-50">
                                            <tr>
                                                <td class="px-4 py-2 text-xs font-bold text-slate-700">HER2</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">82%</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">0.86</td>
                                                <td class="px-4 py-2"><span class="text-[8px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded font-bold">DRUGGABLE</span></td>
                                            </tr>
                                            <tr>
                                                <td class="px-4 py-2 text-xs font-bold text-slate-700">HER3</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">64%</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">0.42</td>
                                                <td class="px-4 py-2"><span class="text-[8px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded font-bold">CHALLENGING</span></td>
                                            </tr>
                                            <tr>
                                                <td class="px-4 py-2 text-xs font-bold text-slate-700">HER4</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">59%</td>
                                                <td class="px-4 py-2 text-[10px] mono text-slate-500">0.55</td>
                                                <td class="px-4 py-2"><span class="text-[8px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold">ASSESSING</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- SIMILAR TARGETS CONTENT -->
                        <div id="content-tab-similar" class="tab-content grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Functional Similarity Network</h3>
                                <div class="h-64 chart-placeholder rounded-xl flex items-center justify-center p-8">
                                    <div class="relative w-full h-full">
                                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center shadow-lg">
                                            <span class="text-white font-black text-[10px]">EGFR</span>
                                        </div>
                                        <!-- Node dots -->
                                        <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-slate-300 rounded-full"></div>
                                        <div class="absolute bottom-1/4 right-1/4 w-3 h-3 bg-slate-400 rounded-full"></div>
                                        <div class="absolute top-1/3 right-1/5 w-3 h-3 bg-slate-300 rounded-full"></div>
                                        <div class="absolute bottom-1/5 left-1/3 w-3 h-3 bg-slate-500 rounded-full"></div>
                                        <svg class="absolute inset-0 w-full h-full stroke-slate-200" stroke-width="1">
                                            <line x1="25%" y1="25%" x2="50%" y2="50%" />
                                            <line x1="75%" y1="75%" x2="50%" y2="50%" />
                                            <line x1="80%" y1="33%" x2="50%" y2="50%" />
                                            <line x1="33%" y1="80%" x2="50%" y2="50%" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                                <h3 class="text-sm font-bold text-slate-700 uppercase tracking-tight">Similar Gene Rankings</h3>
                                <div class="space-y-3">
                                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <span class="w-6 h-6 bg-blue-100 text-blue-700 flex items-center justify-center rounded text-[10px] font-black">01</span>
                                            <div>
                                                <p class="text-xs font-bold text-slate-800">MET</p>
                                                <p class="text-[9px] text-slate-500">Pathway overlap: 88%</p>
                                            </div>
                                        </div>
                                        <div class="text-right"><p class="text-xs font-black text-[#0066CC]">0.82</p></div>
                                    </div>
                                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <span class="w-6 h-6 bg-blue-100 text-blue-700 flex items-center justify-center rounded text-[10px] font-black">02</span>
                                            <div>
                                                <p class="text-xs font-bold text-slate-800">FGFR1</p>
                                                <p class="text-[9px] text-slate-500">Pathway overlap: 74%</p>
                                            </div>
                                        </div>
                                        <div class="text-right"><p class="text-xs font-black text-[#0066CC]">0.78</p></div>
                                    </div>
                                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <span class="w-6 h-6 bg-blue-100 text-blue-700 flex items-center justify-center rounded text-[10px] font-black">03</span>
                                            <div>
                                                <p class="text-xs font-bold text-slate-800">IGF1R</p>
                                                <p class="text-[9px] text-slate-500">Pathway overlap: 61%</p>
                                            </div>
                                        </div>
                                        <div class="text-right"><p class="text-xs font-black text-[#0066CC]">0.71</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BATCH ANALYSIS MODE CONTENT (HIDDEN BY DEFAULT) -->
            <div id="content-batch" class="hidden animate-fade-in flex flex-col gap-8">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <!-- Left: Inputs -->
                    <div class="lg:col-span-1 flex flex-col gap-6">
                        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                            <label class="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <iconify-icon icon="lucide:list-plus"></iconify-icon>
                                Enter Gene List
                            </label>
                            <textarea rows="12" class="w-full p-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 border border-slate-200 font-medium text-slate-600 text-sm" placeholder="Enter genes (e.g. BRCA1, EGFR, TP53, PTEN...) separated by commas or new lines."></textarea>
                            
                            <div class="flex flex-col gap-3 mt-2">
                                <button id="upload-btn" class="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold hover:bg-slate-50 transition-all">
                                    <iconify-icon icon="lucide:upload-cloud"></iconify-icon>
                                    Upload CSV/TXT
                                </button>
                                <button id="calc-btn" class="w-full bg-[#0066CC] hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3">
                                    <iconify-icon icon="lucide:calculator"></iconify-icon>
                                    Calculate Druggability
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Results Table -->
                    <div class="lg:col-span-3 flex flex-col gap-4">
                        <!-- Progress Status -->
                        <div class="bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span class="text-sm font-bold text-slate-700 uppercase tracking-wide">Batch Progress:</span>
                                </div>
                                <span class="text-sm font-bold text-blue-600">Completed: 124 / 500 genes</span>
                            </div>
                            <div class="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div class="w-1/4 h-full bg-[#0066CC] transition-all duration-500"></div>
                            </div>
                        </div>

                        <!-- Main Results Table -->
                        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead>
                                        <tr class="bg-slate-50 border-b border-slate-200">
                                            <th class="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gene</th>
                                            <th class="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Score</th>
                                            <th class="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Clinical</th>
                                            <th class="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Structural</th>
                                            <th class="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Family</th>
                                            <th class="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Similar</th>
                                            <th class="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Interpretation</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100">
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="px-6 py-4 font-extrabold text-[#0066CC]">EGFR</td>
                                            <td class="px-4 py-4 font-bold mono">0.90</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.95</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.88</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.64</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.32</td>
                                            <td class="px-6 py-4">
                                                <span class="px-3 py-1 rounded-full score-high text-[10px] font-black uppercase tracking-widest">HIGH</span>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="px-6 py-4 font-extrabold text-[#0066CC]">TP53</td>
                                            <td class="px-4 py-4 font-bold mono">0.52</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.82</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.14</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.44</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.68</td>
                                            <td class="px-6 py-4">
                                                <span class="px-3 py-1 rounded-full score-medium text-[10px] font-black uppercase tracking-widest">MEDIUM</span>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="px-6 py-4 font-extrabold text-[#0066CC]">BRCA1</td>
                                            <td class="px-4 py-4 font-bold mono">0.88</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.92</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.84</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.72</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.55</td>
                                            <td class="px-6 py-4">
                                                <span class="px-3 py-1 rounded-full score-high text-[10px] font-black uppercase tracking-widest">HIGH</span>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="px-6 py-4 font-extrabold text-[#0066CC]">PTEN</td>
                                            <td class="px-4 py-4 font-bold mono">0.21</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.64</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.12</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.05</td>
                                            <td class="px-4 py-4 text-xs font-semibold text-slate-500">0.03</td>
                                            <td class="px-6 py-4">
                                                <span class="px-3 py-1 rounded-full score-low text-[10px] font-black uppercase tracking-widest">LOW</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                <span>Showing first 50 results</span>
                                <div class="flex gap-2">
                                    <button id="export-csv-btn" class="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Export CSV</button>
                                    <button id="export-pdf-btn" class="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Export PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Status Footer -->
        <footer class="bg-white border-t border-slate-200 py-3 px-6">
            <div class="max-w-[1440px] mx-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-1.5">
                        <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span>Scoring Engine Online</span>
                    </div>
                    <div class="h-3 w-[1px] bg-slate-200"></div>
                    <span>Mode: <span id="status-mode">Single Analysis</span></span>
                </div>
                <div class="flex items-center gap-6">
                    <a href="#" id="help-link" class="hover:text-[#0066CC]">Help & Documentation</a>
                    <a href="#" id="config-link" class="hover:text-[#0066CC]">System Configuration</a>
                </div>
            </div>
        </footer>
    </div>

    <script>
        const modeSingleBtn = document.getElementById('mode-single');
        const modeBatchBtn = document.getElementById('mode-batch');
        const contentSingle = document.getElementById('content-single');
        const contentBatch = document.getElementById('content-batch');
        const statusMode = document.getElementById('status-mode');

        modeSingleBtn.addEventListener('click', () => {
            modeSingleBtn.classList.add('mode-tab-active');
            modeSingleBtn.classList.remove('text-slate-500');
            modeBatchBtn.classList.remove('mode-tab-active');
            modeBatchBtn.classList.add('text-slate-500');
            
            contentSingle.classList.remove('hidden');
            contentBatch.classList.add('hidden');
            statusMode.textContent = 'Single Analysis';
        });

        modeBatchBtn.addEventListener('click', () => {
            modeBatchBtn.classList.add('mode-tab-active');
            modeBatchBtn.classList.remove('text-slate-500');
            modeSingleBtn.classList.remove('mode-tab-active');
            modeSingleBtn.classList.add('text-slate-500');
            
            contentBatch.classList.remove('hidden');
            contentSingle.classList.add('hidden');
            statusMode.textContent = 'Batch Analysis';
        });

        // Enhanced tab navigation for single gene analysis
        const tabs = ['clinical', 'structural', 'family', 'similar'];
        tabs.forEach(tabId => {
            const btn = document.getElementById(`tab-${tabId}`);
            const content = document.getElementById(`content-tab-${tabId}`);
            
            if (btn) {
                btn.addEventListener('click', () => {
                    // Reset all buttons
                    tabs.forEach(t => {
                        const b = document.getElementById(`tab-${t}`);
                        const c = document.getElementById(`content-tab-${t}`);
                        
                        b.classList.remove('border-[#0066CC]', 'text-[#0066CC]');
                        b.classList.add('border-transparent', 'text-slate-400');
                        c.classList.remove('active');
                    });

                    // Set active state for clicked button
                    btn.classList.add('border-[#0066CC]', 'text-[#0066CC]');
                    btn.classList.remove('border-transparent', 'text-slate-400');
                    
                    // Show target content
                    if (content) {
                        content.classList.add('active');
                    }
                });
            }
        });
    </script>
</body>
</html>
~~~
