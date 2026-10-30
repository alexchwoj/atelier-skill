# Hudson McDaniel | Compact Elite Dashboard

> Expand the athlete profile with new sections below the hero: (1) Add No-Gi / All / Gi toggle buttons above the competition log to filter match history by format. (2) Restructure the layout into a 2-column grid: LEFT (2/3 width) shows the filtered Competition Log table with match history. RIGHT (1/3 width) shows two new cards: 'Upcoming Tournaments' (list of next events Hudson is registered for) and 'Rival Fighters' (top competitors/matchups to watch). (3) Add an 'Advanced Analytics' section with detailed performance breakdowns (submission types, win/loss by position, etc.). Keep the dark luxury editorial aesthetic consistent. Reference the design at https://jitz-gg-1.onrender.com/fighter/hudson-mcdaniel-8408 for layout inspiration.


---

Expand the athlete profile with new sections below the hero: (1) Add No-Gi / All / Gi toggle buttons above the competition log to filter match history by format. (2) Restructure the layout into a 2-column grid: LEFT (2/3 width) shows the filtered Competition Log table with match history. RIGHT (1/3 width) shows two new cards: 'Upcoming Tournaments' (list of next events Hudson is registered for) and 'Rival Fighters' (top competitors/matchups to watch). (3) Add an 'Advanced Analytics' section with detailed performance breakdowns (submission types, win/loss by position, etc.). Keep the dark luxury editorial aesthetic consistent. Reference the design at https://jitz-gg-1.onrender.com/fighter/hudson-mcdaniel-8408 for layout inspiration.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hudson McDaniel | JITS.GG Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        @view-transition { navigation: auto; }
        :root {
            --black: #000000;
            --accent: #C0C0C0;
            --dark-gray: #111111;
            --accent-muted: rgba(192, 192, 192, 0.2);
        }
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: var(--black);
            color: #ffffff;
            margin: 0;
            -webkit-font-smoothing: antialiased;
        }
        .font-mono { font-family: 'Space Mono', monospace; }
        .editorial-card {
            background: var(--black);
            border: 1px solid var(--accent-muted);
            transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .massive-text {
            font-size: clamp(2.5rem, 6vw, 5rem);
            line-height: 0.9;
            letter-spacing: -0.04em;
            font-weight: 700;
        }
        .accent-text { color: var(--accent); }
        .border-accent { border-color: var(--accent) !important; }
        .bg-accent { background-color: var(--accent) !important; }
        .halftone-overlay {
            background-image: url("data:image/svg+xml,%3Csvg width='3' height='3' viewBox='0 0 3 3' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='black' fill-opacity='0.5'/%3E%3C/svg%3E");
            background-repeat: repeat;
        }
        .jits-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Space Mono', monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .jits-table th {
            text-align: left;
            padding: 1rem;
            color: rgba(255,255,255,0.4);
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .jits-table td {
            padding: 1.25rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .jits-table tr:hover td {
            background: rgba(255,255,255,0.02);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--black); }
        ::-webkit-scrollbar-thumb { background: var(--dark-gray); }
    </style>
</head>
<body>
    <div class="min-h-screen bg-black flex flex-col">
        <!-- Persistent Header -->
        <header class="w-full border-b border-white/10 bg-black sticky top-0 z-50">
            <div class="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center gap-12">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 border border-accent flex items-center justify-center">
                            <div class="w-4 h-0.5 bg-accent"></div>
                        </div>
                        <span class="font-bold text-xl tracking-tight uppercase">Jits.GG</span>
                    </div>
                    <nav class="hidden lg:flex items-center gap-8 font-mono text-[10px] tracking-[0.3em] text-white/50">
                        <a href="#" id="nav-home-link" class="hover:accent-text transition-colors">01.SYSTEM</a>
                        <a href="#" id="nav-athlete-link" class="accent-text transition-colors">02.ATHLETE</a>
                        <a href="#" id="nav-leader-link" class="hover:accent-text transition-colors">03.LEADERBOARD</a>
                        <a href="#" id="nav-tourney-link" class="hover:accent-text transition-colors">04.EVENTS</a>
                    </nav>
                </div>

                <div class="flex items-center gap-8">
                    <div class="hidden xl:flex items-center gap-4 border-x border-white/10 px-6 h-full">
                        <div class="flex items-center gap-3">
                            <button onclick="updateTheme('#C0C0C0', 'rgba(192,192,192,0.2)', 'SLVR')" class="group flex flex-col items-center gap-1 cursor-pointer">
                                <div id="swatch-SLVR" class="w-2.5 h-2.5 rounded-full bg-[#C0C0C0] transition-all"></div>
                                <span class="font-mono text-[7px] tracking-tighter text-white/30 group-hover:text-white">SLVR</span>
                            </button>
                            <button onclick="updateTheme('#D4AF37', 'rgba(212,175,55,0.2)', 'BGOLD')" class="group flex flex-col items-center gap-1 cursor-pointer">
                                <div id="swatch-BGOLD" class="w-2.5 h-2.5 rounded-full bg-[#D4AF37] transition-all"></div>
                                <span class="font-mono text-[7px] tracking-tighter text-white/30 group-hover:text-white">BGOLD</span>
                            </button>
                            <button onclick="updateTheme('#E7D192', 'rgba(231,209,146,0.2)', 'CHMP')" class="group flex flex-col items-center gap-1 cursor-pointer">
                                <div id="swatch-CHMP" class="w-2.5 h-2.5 rounded-full bg-[#E7D192] transition-all"></div>
                                <span class="font-mono text-[7px] tracking-tighter text-white/30 group-hover:text-white">CHMP</span>
                            </button>
                        </div>
                    </div>
                    <button id="cta-request-access" class="px-6 py-2 border border-white/20 text-[10px] font-mono tracking-widest hover:border-accent hover:accent-text transition-all uppercase">Request Access</button>
                </div>
            </div>
        </header>

        <!-- Dynamic Content Area -->
        <main class="max-w-[1600px] mx-auto px-6 md:px-12 py-6 md:py-10 flex-grow w-full">
            
            <!-- HERO PLAYER CARD -->
            <section class="mb-12 md:mb-16">
                <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
                    
                    <!-- The Player Card -->
                    <div class="relative w-full max-w-[240px] md:max-w-[320px] aspect-square flex-shrink-0 group">
                        <div class="absolute -top-6 -left-4 md:-top-10 md:-left-12 z-0 select-none pointer-events-none">
                            <span class="text-[8rem] md:text-[14rem] font-bold opacity-10 leading-none accent-text italic tracking-tighter">#14</span>
                        </div>
                        <div class="relative z-10 w-full h-full border-[8px] border-accent bg-dark-gray shadow-[20px_20px_0px_rgba(255,255,255,0.03)] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=600&h=600&auto=format&fit=crop" 
                                 alt="Hudson McDaniel Profile" 
                                 class="w-full h-full object-cover filter grayscale contrast-125 brightness-75">
                            <div class="absolute inset-0 halftone-overlay mix-blend-multiply opacity-50"></div>
                            <div class="absolute top-4 left-4 flex items-center gap-2 bg-black/90 border border-white/20 px-2 py-1.5 backdrop-blur-md">
                                <iconify-icon icon="material-symbols:verified" class="text-accent text-base"></iconify-icon>
                                <span class="font-mono text-[8px] uppercase tracking-[0.1em] font-bold">Verified</span>
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
                                <div>
                                    <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Team</span>
                                    <span class="font-mono text-[11px] font-bold tracking-widest">AOJ ACADEMY</span>
                                </div>
                                <div class="text-right">
                                    <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Season</span>
                                    <span class="font-mono text-[11px] font-bold tracking-widest">2024.01</span>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -bottom-4 -right-4 z-20 md:hidden">
                            <div class="bg-accent text-black p-4 font-bold">
                                <div class="font-mono text-[8px] uppercase tracking-tighter mb-1">Regional Seed</div>
                                <div class="text-4xl leading-none">#02</div>
                            </div>
                        </div>
                    </div>

                    <!-- Athlete Information -->
                    <div class="flex-grow w-full text-center lg:text-left">
                        <div class="mb-4 flex items-center justify-center lg:justify-start gap-4">
                            <span class="font-mono text-[10px] accent-text uppercase tracking-widest">[ Grey Belt / Teen II ]</span>
                            <div class="h-px w-12 bg-accent/30"></div>
                            <span class="font-mono text-[10px] text-white/40 uppercase tracking-widest underline decoration-accent/20">Lightweight Division</span>
                        </div>
                        <h1 class="massive-text uppercase mb-6">Hudson <span class="accent-text">McDaniel</span></h1>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            <div class="editorial-card p-4 md:p-6 group">
                                <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Rating</span>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-3xl md:text-4xl font-bold group-hover:accent-text transition-colors">94</span>
                                    <span class="font-mono text-[9px] accent-text">/100</span>
                                </div>
                            </div>
                            <div class="editorial-card p-4 md:p-6 group">
                                <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Streak</span>
                                <span class="text-3xl md:text-4xl font-bold group-hover:accent-text transition-colors text-emerald-500">12</span>
                            </div>
                            <div class="editorial-card p-4 md:p-6 group">
                                <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Finish</span>
                                <span class="text-3xl md:text-4xl font-bold group-hover:accent-text transition-colors">84<span class="text-lg">%</span></span>
                            </div>
                            <div class="editorial-card p-4 md:p-6 group">
                                <span class="font-mono text-[8px] text-white/40 uppercase block mb-1">Type</span>
                                <span class="text-xl md:text-2xl font-bold group-hover:accent-text transition-colors uppercase leading-tight">Pressure<br/>Savant</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href="#" id="cta-book-athlete" class="flex-1 sm:flex-initial px-8 py-4 bg-accent text-black font-mono font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all text-center">Book Seminars</a>
                            <button id="btn-share-profile" class="flex items-center justify-center px-8 py-4 border border-white/10 hover:border-accent hover:accent-text font-mono text-[10px] uppercase tracking-[0.3em] transition-all">
                                <iconify-icon icon="lucide:share-2" class="mr-2 text-sm"></iconify-icon>Share Card
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ADVANCED ANALYTICS SECTION -->
            <section class="mb-16 md:mb-20">
                <div class="flex justify-between items-baseline mb-8 px-2">
                    <div class="flex items-center gap-4">
                        <h2 class="text-2xl font-bold uppercase tracking-tighter">Advanced Analytics</h2>
                        <span class="px-2 py-0.5 border border-accent/30 font-mono text-[8px] text-accent uppercase">Tier-1 Data</span>
                    </div>
                    <span class="font-mono text-[9px] text-white/30 uppercase">Analyzed_by_JITS_v4.0</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Submission DNA -->
                    <div class="editorial-card p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <iconify-icon icon="tabler:dna" class="text-accent text-xl"></iconify-icon>
                            <h3 class="font-mono text-xs uppercase tracking-widest font-bold">Submission DNA</h3>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between font-mono text-[9px] mb-1.5">
                                    <span class="text-white/40">RNC</span>
                                    <span>42%</span>
                                </div>
                                <div class="h-1 w-full bg-white/5"><div class="h-full bg-accent w-[42%]"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between font-mono text-[9px] mb-1.5">
                                    <span class="text-white/40">ARMBAR</span>
                                    <span>28%</span>
                                </div>
                                <div class="h-1 w-full bg-white/5"><div class="h-full bg-accent w-[28%]"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between font-mono text-[9px] mb-1.5">
                                    <span class="text-white/40">TRIANGLE</span>
                                    <span>15%</span>
                                </div>
                                <div class="h-1 w-full bg-white/5"><div class="h-full bg-accent w-[15%]"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between font-mono text-[9px] mb-1.5">
                                    <span class="text-white/40">OTHER</span>
                                    <span>15%</span>
                                </div>
                                <div class="h-1 w-full bg-white/5"><div class="h-full bg-white/20 w-[15%]"></div></div>
                            </div>
                        </div>
                    </div>

                    <!-- Positional Dominance -->
                    <div class="editorial-card p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <iconify-icon icon="material-symbols:grid-view-outline-rounded" class="text-accent text-xl"></iconify-icon>
                            <h3 class="font-mono text-xs uppercase tracking-widest font-bold">Positional Mastery</h3>
                        </div>
                        <div class="flex flex-col h-[140px] justify-between">
                            <div class="flex gap-4">
                                <div class="flex-1">
                                    <div class="text-center mb-2">
                                        <div class="font-mono text-[8px] text-white/40 mb-1">TOP PRESSURE</div>
                                        <div class="text-2xl font-bold">A+</div>
                                    </div>
                                    <div class="flex justify-center gap-0.5">
                                        <div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent/20"></div>
                                    </div>
                                </div>
                                <div class="w-px bg-white/10 h-16"></div>
                                <div class="flex-1">
                                    <div class="text-center mb-2">
                                        <div class="font-mono text-[8px] text-white/40 mb-1">GUARD RETENTION</div>
                                        <div class="text-2xl font-bold">A</div>
                                    </div>
                                    <div class="flex justify-center gap-0.5">
                                        <div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent"></div><div class="w-1 h-3 bg-accent/20"></div><div class="w-1 h-3 bg-accent/20"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-white/10 pt-4 flex justify-between">
                                <span class="font-mono text-[8px] text-white/40 uppercase tracking-widest">Overall technical score</span>
                                <span class="font-mono text-[8px] text-emerald-500 font-bold tracking-widest">EXCELLENT</span>
                            </div>
                        </div>
                    </div>

                    <!-- Victory Archetype -->
                    <div class="editorial-card p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <iconify-icon icon="lucide:swords" class="text-accent text-xl"></iconify-icon>
                            <h3 class="font-mono text-xs uppercase tracking-widest font-bold">Victory Archetype</h3>
                        </div>
                        <div class="space-y-5">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 border border-accent/30 flex flex-col items-center justify-center font-bold">
                                    <span class="text-[10px] text-white/40 font-mono">SUB</span>
                                    <span class="text-xs">84%</span>
                                </div>
                                <div class="flex-1">
                                    <p class="font-mono text-[9px] uppercase leading-tight">High Finisher Profile. Relies on technical strangulation and limb isolation.</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 border border-white/10 flex flex-col items-center justify-center font-bold">
                                    <span class="text-[10px] text-white/40 font-mono">PTS</span>
                                    <span class="text-xs">16%</span>
                                </div>
                                <div class="flex-1">
                                    <p class="font-mono text-[9px] text-white/40 uppercase leading-tight">Rarely goes to judge's decision. High scoring average per match.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- COMBAT DASHBOARD: LOG + SIDEBAR -->
            <section class="mb-20">
                <div class="flex flex-col lg:grid lg:grid-cols-3 gap-8">
                    
                    <!-- LEFT COLUMN: COMPETITION LOG (2/3) -->
                    <div class="lg:col-span-2 space-y-8">
                        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
                            <h2 class="text-2xl font-bold uppercase tracking-tighter self-start">Competition Log</h2>
                            
                            <!-- FILTER TOGGLES -->
                            <div class="flex p-1 border border-white/10 bg-dark-gray">
                                <button class="px-4 py-2 font-mono text-[9px] uppercase tracking-widest bg-accent text-black font-bold">All</button>
                                <button class="px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-white/50 hover:text-white">Gi</button>
                                <button class="px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-white/50 hover:text-white border-l border-white/10">No-Gi</button>
                            </div>
                        </div>

                        <div class="editorial-card overflow-hidden">
                            <div class="overflow-x-auto">
                                <table class="jits-table">
                                    <thead>
                                        <tr>
                                            <th>Event Name</th>
                                            <th>Opponent</th>
                                            <th>Rank</th>
                                            <th>Res.</th>
                                            <th>Method</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="font-bold">Pan Kids IBJJF 2024</td>
                                            <td>Leo S. (Art of Jiu Jitsu)</td>
                                            <td class="text-white/40">Grey #04</td>
                                            <td class="text-emerald-500 font-bold italic">WIN</td>
                                            <td>RNC</td>
                                            <td>2:14</td>
                                        </tr>
                                        <tr>
                                            <td class="font-bold">Elite Youth Grand Prix</td>
                                            <td>Mason D. (Gracie Barra)</td>
                                            <td class="text-white/40">Grey #12</td>
                                            <td class="text-emerald-500 font-bold italic">WIN</td>
                                            <td>9 - 0</td>
                                            <td>Full</td>
                                        </tr>
                                        <tr>
                                            <td class="font-bold">Jiu Jitsu World League</td>
                                            <td>Zion F. (Checkmat)</td>
                                            <td class="text-white/40">Grey #09</td>
                                            <td class="text-emerald-500 font-bold italic">WIN</td>
                                            <td>Armbar</td>
                                            <td>1:02</td>
                                        </tr>
                                        <tr>
                                            <td class="font-bold">NAGA West Coast</td>
                                            <td>Kai L. (Unity BJJ)</td>
                                            <td class="text-white/40">Grey #02</td>
                                            <td class="text-rose-500 font-bold italic">LOSS</td>
                                            <td>Adv.</td>
                                            <td>Full</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="p-4 border-t border-white/5 text-center">
                                <button id="btn-load-more" class="font-mono text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-accent transition-colors">View Full Archive [18 Matches]</button>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN: SIDEBAR (1/3) -->
                    <div class="space-y-8">
                        <!-- Upcoming Tournaments -->
                        <div class="space-y-4">
                            <h3 class="font-mono text-[10px] uppercase tracking-widest font-bold border-b border-accent/20 pb-2">Upcoming Events</h3>
                            <div class="space-y-3">
                                <div class="editorial-card p-4 flex gap-4">
                                    <div class="flex flex-col items-center justify-center w-12 h-12 bg-white/5 border border-white/10">
                                        <span class="font-mono text-[8px] text-white/40">APR</span>
                                        <span class="font-bold">12</span>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold uppercase mb-1">IBJJF Las Vegas Open</h4>
                                        <div class="flex items-center gap-2">
                                            <span class="font-mono text-[8px] text-white/40">STATUS:</span>
                                            <span class="font-mono text-[8px] text-accent">REGISTERED</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="editorial-card p-4 flex gap-4 opacity-60 grayscale">
                                    <div class="flex flex-col items-center justify-center w-12 h-12 bg-white/5 border border-white/10">
                                        <span class="font-mono text-[8px] text-white/40">MAY</span>
                                        <span class="font-bold">04</span>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold uppercase mb-1">JJWL World Finals</h4>
                                        <div class="flex items-center gap-2">
                                            <span class="font-mono text-[8px] text-white/40">STATUS:</span>
                                            <span class="font-mono text-[8px] text-white/30">INVITED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Rival Fighters -->
                        <div class="space-y-4">
                            <h3 class="font-mono text-[10px] uppercase tracking-widest font-bold border-b border-accent/20 pb-2">Target Rivals</h3>
                            <div class="editorial-card">
                                <div class="divide-y divide-white/5">
                                    <div class="p-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full border border-accent/50 overflow-hidden">
                                                <img src="https://api.dicebear.com/7.x/initials/svg?seed=LS" alt="Leo S" class="w-full h-full object-cover grayscale">
                                            </div>
                                            <div>
                                                <p class="text-[10px] font-bold uppercase">Leo S.</p>
                                                <p class="text-[8px] font-mono text-white/30">AOJ ACADEMY</p>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <span class="block font-mono text-[8px] text-white/40 mb-0.5">VS HUDSON</span>
                                            <span class="font-mono text-[10px] text-emerald-500 font-bold">2-0</span>
                                        </div>
                                    </div>
                                    <div class="p-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full border border-white/20 overflow-hidden">
                                                <img src="https://api.dicebear.com/7.x/initials/svg?seed=MD" alt="Mason D" class="w-full h-full object-cover grayscale">
                                            </div>
                                            <div>
                                                <p class="text-[10px] font-bold uppercase">Mason D.</p>
                                                <p class="text-[8px] font-mono text-white/30">GRACIE BARRA</p>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <span class="block font-mono text-[8px] text-white/40 mb-0.5">VS HUDSON</span>
                                            <span class="font-mono text-[10px] text-white/50 font-bold">1-1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Systems Report Metadata -->
                        <div class="editorial-card p-6 bg-accent/5 border-dashed border-accent/20">
                            <div class="flex items-center justify-between mb-4">
                                <span class="font-mono text-[8px] uppercase tracking-[0.2em] font-bold">System Diagnostics</span>
                                <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            </div>
                            <p class="font-mono text-[9px] text-white/40 uppercase leading-relaxed">
                                Data integrity: 99.8%<br/>
                                Last sync: 02.14.24<br/>
                                Analyst: JITS_AI_V2
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Persistent Footer -->
        <footer class="border-t border-white/10 py-12">
            <div class="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex items-center gap-6">
                    <span class="font-mono text-[10px] text-white/30 uppercase tracking-widest">© 2024 JITS.GG PERFORMANCE SYSTEMS</span>
                    <div class="h-4 w-px bg-white/10"></div>
                    <span class="font-mono text-[10px] text-white/30 uppercase tracking-widest">Athlete Link: /hudson-mcdaniel</span>
                </div>
                <div class="flex gap-12 font-mono text-[10px] uppercase tracking-widest">
                    <a href="#" id="footer-legal" class="hover:accent-text">Legal</a>
                    <a href="#" id="footer-privacy" class="hover:accent-text">Privacy</a>
                    <a href="#" id="footer-contact" class="hover:accent-text">Contact Support</a>
                </div>
            </div>
        </footer>
    </div>

    <script>
        function updateTheme(accentColor, mutedColor, label) {
            document.documentElement.style.setProperty('--accent', accentColor);
            document.documentElement.style.setProperty('--accent-muted', mutedColor);
            const swatches = ['SLVR', 'BGOLD', 'CHMP'];
            swatches.forEach(s => {
                const el = document.getElementById('swatch-' + s);
                if (!el) return;
                if (s === label) {
                    el.classList.add('scale-150', 'ring-1', 'ring-white/60', 'ring-offset-1', 'ring-offset-black');
                } else {
                    el.classList.remove('scale-150', 'ring-1', 'ring-white/60', 'ring-offset-1', 'ring-offset-black');
                }
            });
            localStorage.setItem('jits_theme_accent', accentColor);
            localStorage.setItem('jits_theme_muted', mutedColor);
            localStorage.setItem('jits_theme_label', label);
        }

        window.addEventListener('DOMContentLoaded', () => {
            const savedAccent = localStorage.getItem('jits_theme_accent');
            const savedMuted = localStorage.getItem('jits_theme_muted');
            const savedLabel = localStorage.getItem('jits_theme_label');
            if (savedAccent && savedMuted && savedLabel) {
                updateTheme(savedAccent, savedMuted, savedLabel);
            } else {
                updateTheme('#C0C0C0', 'rgba(192,192,192,0.2)', 'SLVR');
            }
        });
    </script>
</body>
</html>
~~~
