# Speed Hero Section with Content

> Replace the dummy scroll testing content with comprehensive bottom sections: (1) Features showcase - 3-column grid of feature cards with icons, titles, descriptions, and hover effects; (2) How it works - 4-step timeline/process showing implementation flow with numbered steps and vertical connector lines; (3) Stats showcase - 3 impressive metrics (e.g., "120 Lines", "60fps Performance", "1.5x Glow Intensity") with icons and bold typography; (4) CTA section with compelling headline and secondary buttons encouraging framework implementation; (5) Footer with company links, social links, legal links organized in 3-4 columns. Use consistent dark aesthetic (zinc-950 bg, white/cyan text, zinc-900 accents). All cards/sections should have smooth hover effects, transitions, and scale/shadow on interaction. Typography should be bold and modern. Icons from lucide. Maintain premium, tech-forward vibe throughout.


---

Replace the dummy scroll testing content with comprehensive bottom sections: (1) Features showcase - 3-column grid of feature cards with icons, titles, descriptions, and hover effects; (2) How it works - 4-step timeline/process showing implementation flow with numbered steps and vertical connector lines; (3) Stats showcase - 3 impressive metrics (e.g., "120 Lines", "60fps Performance", "1.5x Glow Intensity") with icons and bold typography; (4) CTA section with compelling headline and secondary buttons encouraging framework implementation; (5) Footer with company links, social links, legal links organized in 3-4 columns. Use consistent dark aesthetic (zinc-950 bg, white/cyan text, zinc-900 accents). All cards/sections should have smooth hover effects, transitions, and scale/shadow on interaction. Typography should be bold and modern. Icons from lucide. Maintain premium, tech-forward vibe throughout.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speed Hero Section</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <style>
        @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500&f[]=satoshi@700,500,400&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Cabinet Grotesk', sans-serif;
        }
        body, p, a, button, span {
            font-family: 'Satoshi', sans-serif;
        }
        
        /* Fallback CSS gradient if canvas fails or loads slowly */
        .hero-fallback-bg {
            background: linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%);
        }
    </style>
</head>
<body>
    <div id="app-root" class="min-h-screen bg-zinc-950 flex flex-col">
        <!-- SPEED HERO COMPONENT START -->
        <section id="hero-speed" class="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden hero-fallback-bg border-b border-white/5">
            
            <!-- Canvas Layer -->
            <canvas id="speed-canvas" class="absolute inset-0 w-full h-full z-0 opacity-0 transition-opacity duration-1000"></canvas>
            
            <!-- Content Layer -->
            <div class="relative z-10 flex flex-col items-center justify-center w-full px-4 py-20 pointer-events-none">
                
                <!-- Text Backdrop (65% opacity, backdrop blur) -->
                <div class="bg-zinc-950/65 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-[2.5rem] max-w-4xl text-center pointer-events-auto shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    
                    <!-- Badge -->
                    <div class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm tracking-wide mb-8">
                        <span class="relative flex h-2 w-2 mr-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Next-Gen Performance
                    </div>

                    <!-- Headline -->
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                        Built for <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">Speed</span>
                    </h1>
                    
                    <!-- Tagline -->
                    <p class="text-lg md:text-xl lg:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Experience motion redefined. Organic kinetic energy flowing seamlessly through every interaction.
                    </p>
                    
                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#explore" id="cta-explore" class="group relative inline-flex items-center justify-center gap-2 bg-white text-zinc-950 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.4)] w-full sm:w-auto">
                            Explore Framework
                            <iconify-icon icon="lucide:arrow-right" class="text-xl transition-transform group-hover:translate-x-1"></iconify-icon>
                        </a>
                        <a href="#docs" id="cta-docs" class="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto">
                            <iconify-icon icon="lucide:code-2" class="text-xl"></iconify-icon>
                            Read Docs
                        </a>
                    </div>
                </div>
            </div>

            <!-- Gradient overlays to soften edges -->
            <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-0 pointer-events-none"></div>
            <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-0 pointer-events-none"></div>
            <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-0 pointer-events-none"></div>

        </section>
        <!-- SPEED HERO COMPONENT END -->

        <!-- MAIN CONTENT SECTIONS -->
        <main class="flex-1 bg-zinc-950 text-white flex flex-col">
            
            <!-- 1. Features Showcase -->
            <section id="features" class="py-24 px-6 border-t border-white/5 relative">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Engineered for Performance</h2>
                        <p class="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">Three core pillars that make this animation lightweight, responsive, and visually stunning.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Card 1 -->
                        <div class="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-cyan-500/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,191,255,0.1)]">
                            <div class="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="lucide:zap" class="text-2xl"></iconify-icon>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Scroll-Driven Velocity</h3>
                            <p class="text-zinc-400 leading-relaxed">The animation seamlessly tracks your scroll momentum, accelerating the particles for a truly kinetic, interactive experience.</p>
                        </div>
                        <!-- Card 2 -->
                        <div class="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-cyan-500/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,191,255,0.1)]">
                            <div class="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="lucide:layers" class="text-2xl"></iconify-icon>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Dynamic Canvas 2D</h3>
                            <p class="text-zinc-400 leading-relaxed">Utilizes native HTML5 Canvas for pure rendering power, bypassing DOM overhead to keep frame rates locked at a buttery 60fps.</p>
                        </div>
                        <!-- Card 3 -->
                        <div class="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-cyan-500/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,191,255,0.1)]">
                            <div class="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="lucide:cpu" class="text-2xl"></iconify-icon>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Adaptive Scaling</h3>
                            <p class="text-zinc-400 leading-relaxed">Intelligently detects device capabilities, scaling line density from 40% to 100% to ensure smooth playback on any hardware.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 2. How it works -->
            <section id="how-it-works" class="py-24 px-6 bg-zinc-900/20 border-y border-white/5">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">Seamless Implementation</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <!-- Connecting Line (Desktop) -->
                        <div class="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        <!-- Step 1 -->
                        <div class="relative flex flex-col items-center text-center group">
                            <div class="w-16 h-16 rounded-full bg-zinc-950 border-2 border-cyan-500/30 text-cyan-400 font-bold text-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-cyan-500 group-hover:text-zinc-950 group-hover:border-cyan-500 transition-colors duration-300">
                                1
                            </div>
                            <h4 class="text-xl font-bold mb-2">Import Script</h4>
                            <p class="text-sm text-zinc-400">Drop the lightweight script into your project head.</p>
                        </div>
                        <!-- Step 2 -->
                        <div class="relative flex flex-col items-center text-center group">
                            <div class="w-16 h-16 rounded-full bg-zinc-950 border-2 border-cyan-500/30 text-cyan-400 font-bold text-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-cyan-500 group-hover:text-zinc-950 group-hover:border-cyan-500 transition-colors duration-300">
                                2
                            </div>
                            <h4 class="text-xl font-bold mb-2">Add Canvas</h4>
                            <p class="text-sm text-zinc-400">Place the canvas element in your hero container.</p>
                        </div>
                        <!-- Step 3 -->
                        <div class="relative flex flex-col items-center text-center group">
                            <div class="w-16 h-16 rounded-full bg-zinc-950 border-2 border-cyan-500/30 text-cyan-400 font-bold text-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-cyan-500 group-hover:text-zinc-950 group-hover:border-cyan-500 transition-colors duration-300">
                                3
                            </div>
                            <h4 class="text-xl font-bold mb-2">Configure</h4>
                            <p class="text-sm text-zinc-400">Tweak colors, speed, and density via simple props.</p>
                        </div>
                        <!-- Step 4 -->
                        <div class="relative flex flex-col items-center text-center group">
                            <div class="w-16 h-16 rounded-full bg-zinc-950 border-2 border-cyan-500/30 text-cyan-400 font-bold text-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-cyan-500 group-hover:text-zinc-950 group-hover:border-cyan-500 transition-colors duration-300">
                                4
                            </div>
                            <h4 class="text-xl font-bold mb-2">Launch</h4>
                            <p class="text-sm text-zinc-400">Watch your static hero transform into a kinetic engine.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 3. Stats Showcase -->
            <section id="stats" class="py-24 px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/10 text-center">
                        <div class="p-4 hover:scale-105 transition-transform duration-300">
                            <div class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2 tracking-tighter">120+</div>
                            <div class="text-lg text-zinc-400 font-medium uppercase tracking-wider flex items-center justify-center gap-2">
                                <iconify-icon icon="lucide:activity" class="text-cyan-400"></iconify-icon> Concurrent Lines
                            </div>
                        </div>
                        <div class="p-4 hover:scale-105 transition-transform duration-300">
                            <div class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2 tracking-tighter">60fps</div>
                            <div class="text-lg text-zinc-400 font-medium uppercase tracking-wider flex items-center justify-center gap-2">
                                <iconify-icon icon="lucide:monitor-smartphone" class="text-cyan-400"></iconify-icon> Silky Performance
                            </div>
                        </div>
                        <div class="p-4 hover:scale-105 transition-transform duration-300">
                            <div class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2 tracking-tighter">1.5x</div>
                            <div class="text-lg text-zinc-400 font-medium uppercase tracking-wider flex items-center justify-center gap-2">
                                <iconify-icon icon="lucide:sun" class="text-cyan-400"></iconify-icon> Hover Glow Spike
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 4. CTA Section -->
            <section id="cta" class="py-32 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-white/5 relative overflow-hidden">
                <!-- Decorative blur behind CTA -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div class="max-w-4xl mx-auto text-center relative z-10">
                    <h2 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
                        Ready to <span class="text-cyan-400 italic pr-2">accelerate?</span>
                    </h2>
                    <p class="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto font-medium">
                        Copy the code, configure your parameters, and drop this reusable component into any project in minutes.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#download" id="cta-download-btn" class="inline-flex items-center justify-center gap-2 bg-cyan-500 text-zinc-950 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] w-full sm:w-auto">
                            <iconify-icon icon="lucide:download" class="text-xl"></iconify-icon>
                            Get Component
                        </a>
                        <a href="#github" id="cta-github-btn" class="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:bg-zinc-700 w-full sm:w-auto">
                            <iconify-icon icon="lucide:github" class="text-xl"></iconify-icon>
                            View Source
                        </a>
                    </div>
                </div>
            </section>

        </main>

        <!-- 5. Footer -->
        <footer class="border-t border-white/10 py-16 px-6 bg-zinc-950">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <!-- Brand Column -->
                    <div class="col-span-2 md:col-span-1">
                        <a href="#" id="footer-brand" class="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 mb-6">
                            <iconify-icon icon="lucide:wind" class="text-cyan-400"></iconify-icon>
                            SpeedUI
                        </a>
                        <p class="text-zinc-400 text-sm leading-relaxed mb-6">
                            High-performance, kinetic UI components built for modern web applications.
                        </p>
                        <div class="flex gap-4">
                            <a href="#" id="social-twitter" class="text-zinc-400 hover:text-cyan-400 transition-colors"><iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon></a>
                            <a href="#" id="social-github" class="text-zinc-400 hover:text-cyan-400 transition-colors"><iconify-icon icon="lucide:github" class="text-xl"></iconify-icon></a>
                            <a href="#" id="social-dribbble" class="text-zinc-400 hover:text-cyan-400 transition-colors"><iconify-icon icon="lucide:dribbble" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                    
                    <!-- Links Column 1 -->
                    <div>
                        <h4 class="text-white font-bold mb-6">Product</h4>
                        <ul class="space-y-4">
                            <li><a href="#" id="link-components" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Components</a></li>
                            <li><a href="#" id="link-templates" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Templates</a></li>
                            <li><a href="#" id="link-pricing" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" id="link-changelog" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Changelog</a></li>
                        </ul>
                    </div>

                    <!-- Links Column 2 -->
                    <div>
                        <h4 class="text-white font-bold mb-6">Resources</h4>
                        <ul class="space-y-4">
                            <li><a href="#" id="link-docs" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Documentation</a></li>
                            <li><a href="#" id="link-blog" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
                            <li><a href="#" id="link-showcase" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Showcase</a></li>
                            <li><a href="#" id="link-support" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Support</a></li>
                        </ul>
                    </div>

                    <!-- Links Column 3 -->
                    <div>
                        <h4 class="text-white font-bold mb-6">Legal</h4>
                        <ul class="space-y-4">
                            <li><a href="#" id="link-privacy" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" id="link-terms" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" id="link-license" class="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">License</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-zinc-500 text-sm">© 2024 SpeedUI Components. All rights reserved.</p>
                    <div class="flex items-center gap-2 text-zinc-500 text-sm">
                        Built with <iconify-icon icon="lucide:heart" class="text-cyan-500"></iconify-icon> for speed.
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        /**
         * Speed Hero Canvas Implementation
         * Configurable properties aligned with specs
         */
        const SpeedHeroConfig = {
            baseSpeed: 1.2,                // 0.5 - 3x
            lineCount: 120,                // 20 - 200 (Adapts based on device heuristic)
            lineColor: '#ffffff',
            glowColor: '#00BFFF',          // Cyan glow
            waveAmplitude: 60,             // 10 - 100px (Dramatic undulation)
            densityPulseIntensity: 0.45,   // 0.15 - 1
            scrollSensitivity: 1.5,        // Eased velocity multiplier
            hoverGlowMultiplier: 1.5,      // 1.5x default intensity spike
            hoverBuffer: 100               // 100px around hero
        };

        class SpeedHero {
            constructor(containerId, canvasId, config) {
                this.container = document.getElementById(containerId);
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.config = config;
                
                this.lines = [];
                this.width = 0;
                this.height = 0;
                
                // Interaction State
                this.scrollVelocity = 0;
                this.targetScrollVelocity = 0;
                this.lastScrollY = window.scrollY;
                this.isHovered = false;
                this.currentGlowMult = 1;
                
                // Time tracking for pulses
                this.time = 0;
                
                this.init();
            }

            init() {
                // Device capability heuristic (simplified via screen size / pixel ratio for HTML demo)
                const isMobile = window.innerWidth < 768;
                const isLowEnd = window.devicePixelRatio < 2 && isMobile;
                
                if (isLowEnd) this.config.lineCount = Math.floor(this.config.lineCount * 0.4);
                else if (isMobile) this.config.lineCount = Math.floor(this.config.lineCount * 0.6);
                
                this.resize();
                window.addEventListener('resize', () => this.resize());
                
                // Initialize lines
                for (let i = 0; i < this.config.lineCount; i++) {
                    this.lines.push(this.createLine());
                }

                this.setupInteractions();
                
                // Fade in canvas
                setTimeout(() => {
                    this.canvas.classList.remove('opacity-0');
                }, 100);

                // Start loop
                this.animate();
            }

            resize() {
                const rect = this.container.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                
                this.width = rect.width;
                this.height = rect.height;
                
                this.canvas.width = this.width * dpr;
                this.canvas.height = this.height * dpr;
                
                this.ctx.scale(dpr, dpr);
            }

            createLine() {
                // Centered dominance composition: cluster more lines near the middle vertically
                // Using a simple curve to weight random distribution toward center
                const randDist = (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
                const yPos = (this.height / 2) + (randDist * this.height * 0.6);

                return {
                    y: yPos,
                    phase: Math.random() * Math.PI * 2,
                    speed: (Math.random() * 0.5 + 0.5) * this.config.baseSpeed,
                    amplitude: (Math.random() * 0.5 + 0.5) * this.config.waveAmplitude,
                    frequency: Math.random() * 0.003 + 0.001,
                    thickness: Math.random() * 1.5 + 0.5,
                    baseOpacity: Math.random() * 0.4 + 0.1
                };
            }

            setupInteractions() {
                // Scroll Tracking
                window.addEventListener('scroll', () => {
                    const currentY = window.scrollY;
                    const delta = Math.abs(currentY - this.lastScrollY);
                    
                    // Convert scroll delta to a velocity multiplier (clamped)
                    const addedVelocity = Math.min(delta * 0.02 * this.config.scrollSensitivity, 4);
                    this.targetScrollVelocity = 1 + addedVelocity;
                    
                    this.lastScrollY = currentY;
                }, { passive: true });

                // Hover Detection with buffer
                document.addEventListener('mousemove', (e) => {
                    const rect = this.container.getBoundingClientRect();
                    const inX = e.clientX >= (rect.left - this.config.hoverBuffer) && 
                                e.clientX <= (rect.right + this.config.hoverBuffer);
                    const inY = e.clientY >= (rect.top - this.config.hoverBuffer) && 
                                e.clientY <= (rect.bottom + this.config.hoverBuffer);
                    
                    this.isHovered = inX && inY;
                });
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.time += 0.016; // Approx 60fps step

                // 1. Ease Scroll Velocity (100-200ms response feel)
                this.scrollVelocity += (this.targetScrollVelocity - this.scrollVelocity) * 0.1;
                // Decay target back to 1 constantly
                this.targetScrollVelocity += (1 - this.targetScrollVelocity) * 0.05;

                // 2. Ease Hover Glow State
                const targetGlow = this.isHovered ? this.config.hoverGlowMultiplier : 1;
                this.currentGlowMult += (targetGlow - this.currentGlowMult) * 0.1;

                // 3. Density Pulsing (Breathing effect)
                const pulse = Math.sin(this.time) * this.config.densityPulseIntensity;
                // Determine how many lines to draw based on pulse
                const activeCount = Math.floor(this.lines.length * (0.6 + (pulse * 0.4)));

                // 4. Render Lines
                // Use screen blending for energetic glowing overlaps
                this.ctx.globalCompositeOperation = 'screen';

                for (let i = 0; i < activeCount; i++) {
                    const line = this.lines[i];
                    if (!line) continue;

                    // Update phase based on speed to create left-to-right motion flow
                    // Subtracting phase moves a sine wave to the right visually
                    line.phase -= line.speed * this.scrollVelocity * 0.05;

                    this.ctx.beginPath();
                    // Draw continuous curve across screen
                    for (let x = 0; x <= this.width; x += 30) {
                        // Organic sine wave
                        const y = line.y + Math.sin((x * line.frequency) + line.phase) * line.amplitude;
                        if (x === 0) this.ctx.moveTo(x, y);
                        else this.ctx.lineTo(x, y);
                    }

                    // Apply styling
                    // Calculate intensity factor based on speed & hover
                    const intensity = Math.max(1, (this.scrollVelocity * 0.5) + (this.currentGlowMult - 1));
                    
                    this.ctx.strokeStyle = this.config.lineColor;
                    this.ctx.lineWidth = line.thickness;
                    
                    // Opacity increases slightly with velocity
                    this.ctx.globalAlpha = Math.min(line.baseOpacity * intensity, 0.9);

                    // Glow effect (pure intensity, no motion blur trails)
                    this.ctx.shadowColor = this.config.glowColor;
                    // Blur radius scales with intensity
                    this.ctx.shadowBlur = 5 * intensity * (line.thickness / 2);

                    this.ctx.stroke();
                }

                // Reset composite operation
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.globalAlpha = 1.0;
                this.ctx.shadowBlur = 0;

                requestAnimationFrame(() => this.animate());
            }
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            new SpeedHero('hero-speed', 'speed-canvas', SpeedHeroConfig);
        });
    </script>
</body>
</html>
~~~
