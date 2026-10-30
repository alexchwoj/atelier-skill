# NEURAL.FLUX | Liquid Intelligence

> Create a bold, experimental tech landing page using the Acid Graphic design system. Features: HERO SECTION: - Pitch black background (#000000) - Massive distorted headline "NEURAL.FLUX" in Clash Display Extra Bold, italicized 120px+, tracking-tight, with acid green (#CCFF00) color - Chromatic aberration effect on text (red/blue shadow splits) - Subheading with electrifying description in acid green and cyan - "ENTER EXPERIENCE" button styled as liquid chrome (gradient white→gray→white) with neon glow on hover LIQUID CHROME ELEMENTS: - Floating blob containers with iridescent gradient borders (acid green → white → hyper pink) - Background gradient drifting slowly (20s float animation) - Semi-transparent glass effect with backdrop-blur-3xl FEATURE CARDS: - 3 feature sections with "blob" shapes (rounded-[20%_80%_30%_70%/50%_20%_80%_50%]) - Each has acid green accent border - Glitch-style icon indicators - Vertical text accent elements rotated 90 degrees MARQUEE SECTION: - Continuous scrolling acid green text "NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • " repeating - Top and bottom of page - High-speed scroll animation ACCENT DETAILS: - Spiky corner decorations (SVG thorns) - Oversized transparent text with neon stroke in background - Grain overlay (5% opacity noise) - Heavy contrast and asymmetrical layout MOTION: - Text breathing pulse animation - Button scale and rotate on hover with glow - Smooth cubic-bezier(0.19, 1, 0.22, 1) ease-out timing Make it aggressive, liquid, and feel like a 2099 techno-surrealist experience. Push the distortion and ignore traditional grid safety.


---

Create a bold, experimental tech landing page using the Acid Graphic design system. Features:

HERO SECTION:

- Pitch black background (#000000)
- Massive distorted headline "NEURAL.FLUX" in Clash Display Extra Bold, italicized 120px+, tracking-tight, with acid green (#CCFF00) color
- Chromatic aberration effect on text (red/blue shadow splits)
- Subheading with electrifying description in acid green and cyan
- "ENTER EXPERIENCE" button styled as liquid chrome (gradient white→gray→white) with neon glow on hover

LIQUID CHROME ELEMENTS:

- Floating blob containers with iridescent gradient borders (acid green → white → hyper pink)
- Background gradient drifting slowly (20s float animation)
- Semi-transparent glass effect with backdrop-blur-3xl

FEATURE CARDS:

- 3 feature sections with "blob" shapes (rounded-[20%_80%_30%_70%/50%_20%_80%_50%])
- Each has acid green accent border
- Glitch-style icon indicators
- Vertical text accent elements rotated 90 degrees

MARQUEE SECTION:

- Continuous scrolling acid green text "NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • " repeating
- Top and bottom of page
- High-speed scroll animation

ACCENT DETAILS:

- Spiky corner decorations (SVG thorns)
- Oversized transparent text with neon stroke in background
- Grain overlay (5% opacity noise)
- Heavy contrast and asymmetrical layout

MOTION:

- Text breathing pulse animation
- Button scale and rotate on hover with glow
- Smooth cubic-bezier(0.19, 1, 0.22, 1) ease-out timing

Make it aggressive, liquid, and feel like a 2099 techno-surrealist experience. Push the distortion and ignore traditional grid safety.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEURAL.FLUX | Liquid Intelligence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500&family=Space+Grotesk:wght@300;700&family=Syne:wght@800&display=swap" rel="stylesheet">
    <style>
        @view-transition {
            navigation: auto;
        }

        :root {
            --acid-green: #CCFF00;
            --hyper-pink: #FF00FF;
            --cyan-glow: #00F0FF;
            --void-black: #000000;
        }

        body {
            margin: 0;
            overflow-x: hidden;
            background: var(--void-black);
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .clash-display {
            font-family: 'Syne', sans-serif;
            text-transform: uppercase;
            letter-spacing: -0.05em;
        }

        .chromatic-aberration {
            text-shadow: 
                -2px -2px 0px #ff0000, 
                2px 2px 0px #0000ff;
        }

        .liquid-chrome-btn {
            background: linear-gradient(180deg, #FFFFFF 0%, #888888 50%, #E0E0E0 100%);
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .liquid-chrome-btn:hover {
            box-shadow: 0 0 40px rgba(204, 255, 0, 0.7);
            transform: scale(1.1) rotate(2deg);
        }

        .noise-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
            pointer-events: none;
            z-index: 100;
        }

        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .animate-marquee {
            display: flex;
            width: 200%;
            animation: marquee 15s linear infinite;
        }

        .blob-shape {
            border-radius: 20% 80% 30% 70% / 50% 20% 80% 50%;
        }

        .iridescent-border {
            border: 2px solid transparent;
            background-image: linear-gradient(var(--void-black), var(--void-black)), radial-gradient(circle at top left, var(--acid-green), #ffffff, var(--hyper-pink));
            background-origin: border-box;
            background-clip: padding-box, border-box;
        }

        .drifting-blob {
            animation: float 20s ease-in-out infinite alternate;
        }

        @keyframes float {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            50% { transform: translate(100px, 50px) scale(1.1) rotate(10deg); }
            100% { transform: translate(-50px, 150px) scale(0.9) rotate(-10deg); }
        }

        .text-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }

        .glitch-flicker {
            animation: flicker 2s infinite;
        }

        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; transform: translateX(2px); }
            52% { opacity: 1; transform: translateX(0); }
        }

        .spiky-decoration {
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
        <div class="noise-overlay"></div>

        <!-- Background Drifting Elements -->
        <div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#CCFF00]/10 blur-[120px] rounded-full drifting-blob"></div>
        <div class="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#FF00FF]/10 blur-[100px] rounded-full drifting-blob" style="animation-delay: -5s;"></div>

        <!-- Top Marquee -->
        <div class="w-full border-b border-[#CCFF00]/20 py-2 bg-black/80 backdrop-blur-md z-50 overflow-hidden">
            <div class="animate-marquee whitespace-nowrap text-[var(--acid-green)] font-bold text-xs uppercase tracking-[0.2em]">
                <span class="px-4">NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • DECENTRALIZED COGNITION • NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • DECENTRALIZED COGNITION • </span>
                <span class="px-4">NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • DECENTRALIZED COGNITION • NEURAL.FLUX • QUANTUM PROCESSING • LIQUID INTELLIGENCE • DECENTRALIZED COGNITION • </span>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="relative z-50 flex justify-between items-center px-8 py-10">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-[var(--acid-green)] spiky-decoration"></div>
                <span class="clash-display text-2xl font-black italic tracking-tighter text-[var(--acid-green)]">FLUX.AI</span>
            </div>
            <div class="flex gap-12 font-bold uppercase text-[10px] tracking-[0.3em]">
                <a href="#" id="nav-core" class="hover:text-[var(--acid-green)] transition-colors">Core System</a>
                <a href="#" id="nav-nodes" class="hover:text-[var(--acid-green)] transition-colors">Nodes</a>
                <a href="#" id="nav-access" class="hover:text-[var(--acid-green)] transition-colors">Access</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <main class="flex-grow flex flex-col justify-center px-12 relative z-10">
            <!-- Massive Background Stroke Text -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
                <h2 class="text-[25rem] clash-display font-black italic text-transparent stroke-1 stroke-[var(--acid-green)] uppercase whitespace-nowrap select-none" style="-webkit-text-stroke: 1px var(--acid-green);">
                    FLUX
                </h2>
            </div>

            <div class="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
                <div class="col-span-12 lg:col-span-7">
                    <h1 class="clash-display text-[120px] lg:text-[180px] leading-[0.85] font-black italic text-[var(--acid-green)] chromatic-aberration mb-6">
                        NEURAL.<br/>FLUX
                    </h1>
                    <p class="max-w-xl text-[var(--cyan-glow)] font-medium text-xl leading-relaxed mb-12 flex items-start gap-4">
                        <span class="mt-2 w-12 h-px bg-[var(--acid-green)] shrink-0"></span>
                        Next-generation computational fluid intelligence. We don't build models; we architect cognitive liquid states that evolve in real-time.
                    </p>
                    
                    <div class="flex items-center gap-8">
                        <button id="cta-enter" class="liquid-chrome-btn px-12 py-5 clash-display text-black font-black text-xl italic skew-x-[-10deg] uppercase flex items-center gap-4">
                            Enter Experience
                            <iconify-icon icon="lucide:arrow-right" class="text-2xl"></iconify-icon>
                        </button>
                        <div class="flex flex-col gap-1">
                            <span class="text-[var(--hyper-pink)] text-[10px] font-bold tracking-[0.3em] uppercase">Protocol v4.0.9</span>
                            <span class="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">Encryption: Active</span>
                        </div>
                    </div>
                </div>

                <!-- Feature Blobs -->
                <div class="col-span-12 lg:col-span-5 relative h-[600px] hidden lg:block">
                    <div class="absolute top-0 right-0 w-80 h-80 blob-shape iridescent-border backdrop-blur-3xl p-8 flex flex-col justify-center items-center text-center">
                        <iconify-icon icon="lucide:zap" class="text-6xl text-[var(--acid-green)] mb-4 glitch-flicker"></iconify-icon>
                        <h3 class="clash-display text-2xl font-black italic">VOLT DRIVE</h3>
                        <p class="text-xs text-white/60 mt-2">Sub-millisecond inference speeds via quantum tunneling.</p>
                    </div>
                    
                    <div class="absolute bottom-10 left-0 w-72 h-72 blob-shape iridescent-border backdrop-blur-3xl p-8 flex flex-col justify-center items-center text-center rotate-[-15deg]">
                        <iconify-icon icon="lucide:waves" class="text-6xl text-[var(--cyan-glow)] mb-4"></iconify-icon>
                        <h3 class="clash-display text-2xl font-black italic">FLOW CORE</h3>
                        <p class="text-xs text-white/60 mt-2">Adaptive learning rates that mimic organic neuro-plasticity.</p>
                    </div>

                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blob-shape bg-white/5 backdrop-blur-xl border border-white/20 p-4 flex flex-col justify-center items-center text-center z-20">
                        <iconify-icon icon="lucide:shield-check" class="text-4xl text-[var(--hyper-pink)] mb-2"></iconify-icon>
                        <h3 class="clash-display text-lg font-black">SECURE</h3>
                    </div>
                </div>
            </div>
        </main>

        <!-- Feature Grid (Horizontal/Vertical hybrid) -->
        <section class="py-32 px-12 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                <!-- Feature 1 -->
                <div class="relative group">
                    <div class="absolute -left-12 top-0 h-full flex items-center">
                        <span class="text-vertical text-[var(--acid-green)] font-black text-4xl opacity-20 uppercase tracking-tighter">INTEGRATION</span>
                    </div>
                    <div class="blob-shape iridescent-border p-12 transition-all duration-700 group-hover:scale-[1.02] bg-black/20">
                        <span class="text-[var(--acid-green)] font-mono text-sm mb-6 block tracking-widest">[ 001 ]</span>
                        <h4 class="clash-display text-4xl font-black italic mb-4">MORPHIC INTERFACE</h4>
                        <p class="text-white/60 leading-relaxed">
                            UI that responds to cognitive load. Components melt and reform based on user priority and neural feedback loops.
                        </p>
                        <div class="mt-8 flex gap-4">
                            <div class="w-10 h-10 border border-[var(--acid-green)] flex items-center justify-center">
                                <iconify-icon icon="lucide:plus" class="text-[var(--acid-green)]"></iconify-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature 2 -->
                <div class="relative group mt-20">
                    <div class="absolute -left-12 top-0 h-full flex items-center">
                        <span class="text-vertical text-[var(--cyan-glow)] font-black text-4xl opacity-20 uppercase tracking-tighter">DYNAMICS</span>
                    </div>
                    <div class="blob-shape iridescent-border p-12 transition-all duration-700 group-hover:scale-[1.02] bg-black/20">
                        <span class="text-[var(--cyan-glow)] font-mono text-sm mb-6 block tracking-widest">[ 002 ]</span>
                        <h4 class="clash-display text-4xl font-black italic mb-4">CHROME SYNAPSE</h4>
                        <p class="text-white/60 leading-relaxed">
                            Proprietary liquid-metal cooling for our cluster farms, enabling 400% higher density than silicon traditionalists.
                        </p>
                        <div class="mt-8 flex gap-4">
                            <div class="w-10 h-10 border border-[var(--cyan-glow)] flex items-center justify-center">
                                <iconify-icon icon="lucide:zap-off" class="text-[var(--cyan-glow)]"></iconify-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="relative group">
                    <div class="absolute -left-12 top-0 h-full flex items-center">
                        <span class="text-vertical text-[var(--hyper-pink)] font-black text-4xl opacity-20 uppercase tracking-tighter">EVOLUTION</span>
                    </div>
                    <div class="blob-shape iridescent-border p-12 transition-all duration-700 group-hover:scale-[1.02] bg-black/20">
                        <span class="text-[var(--hyper-pink)] font-mono text-sm mb-6 block tracking-widest">[ 003 ]</span>
                        <h4 class="clash-display text-4xl font-black italic mb-4">GHOST LOGIC</h4>
                        <p class="text-white/60 leading-relaxed">
                            Sub-symbolic reasoning engines that find patterns in chaotic noise where others only see digital static.
                        </p>
                        <div class="mt-8 flex gap-4">
                            <div class="w-10 h-10 border border-[var(--hyper-pink)] flex items-center justify-center">
                                <iconify-icon icon="lucide:activity" class="text-[var(--hyper-pink)]"></iconify-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Marquee -->
        <footer class="mt-auto">
            <div class="w-full border-t border-[#CCFF00]/20 py-8 bg-black z-50 overflow-hidden">
                <div class="animate-marquee whitespace-nowrap text-[var(--acid-green)] font-black text-4xl uppercase tracking-tighter italic">
                    <span class="px-8">LIQUID INTELLIGENCE IS HERE • ASCEND YOUR COGNITION • NEURAL.FLUX • NO LIMITS • LIQUID INTELLIGENCE IS HERE • ASCEND YOUR COGNITION • NEURAL.FLUX • NO LIMITS • </span>
                    <span class="px-8">LIQUID INTELLIGENCE IS HERE • ASCEND YOUR COGNITION • NEURAL.FLUX • NO LIMITS • LIQUID INTELLIGENCE IS HERE • ASCEND YOUR COGNITION • NEURAL.FLUX • NO LIMITS • </span>
                </div>
            </div>
            <div class="px-8 py-6 flex justify-between items-center text-[10px] tracking-[0.4em] text-white/40 font-bold uppercase">
                <span>© 2099 NEURAL FLUX CORP.</span>
                <div class="flex gap-8">
                    <a href="#" id="footer-terms" class="hover:text-[var(--acid-green)]">Terms</a>
                    <a href="#" id="footer-nodes" class="hover:text-[var(--acid-green)]">Node Status</a>
                    <a href="#" id="footer-contact" class="hover:text-[var(--acid-green)]">Contact [Void]</a>
                </div>
                <span>EST. 2024 / EVOLVED 2099</span>
            </div>
        </footer>

        <!-- Random Spiky Accents -->
        <div class="absolute top-20 left-10 w-16 h-16 bg-[var(--acid-green)] spiky-decoration opacity-30 animate-pulse"></div>
        <div class="absolute bottom-40 right-10 w-24 h-24 bg-[var(--hyper-pink)] spiky-decoration opacity-20 rotate-45"></div>
    </div>
</body>
</html>
~~~
