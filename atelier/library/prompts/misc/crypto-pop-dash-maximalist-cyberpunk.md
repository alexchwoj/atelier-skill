# Crypto Pop Dash - Maximalist Cyberpunk

> Maximalist cyberpunk neon: electric colors (hot pink #ff00ff, cyan #00ffff, lime #00ff00) with glitch effects and chromatic aberration, bold geometric shapes, sharp angular elements, layered text with multiple colors, intense particle effects on bubble pop, retro futuristic UI with LED-style displays, chaotic energy with overlapping elements


---

Maximalist cyberpunk neon: electric colors (hot pink #ff00ff, cyan #00ffff, lime #00ff00) with glitch effects and chromatic aberration, bold geometric shapes, sharp angular elements, layered text with multiple colors, intense particle effects on bubble pop, retro futuristic UI with LED-style displays, chaotic energy with overlapping elements

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Crypto Pop Dash - Cyberpunk</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=VT323&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
<style>
  :root {
    --neon-pink: #ff00ff;
    --neon-cyan: #00ffff;
    --neon-lime: #00ff00;
    --bg-dark: #050505;
  }
  body {
    font-family: 'Orbitron', sans-serif;
    background-color: var(--bg-dark);
    color: #fff;
  }
  .font-tech {
    font-family: 'Share Tech Mono', monospace;
  }
  .font-led {
    font-family: 'VT323', monospace;
  }

  /* Glitch Text Effect */
  .glitch-text {
    position: relative;
    color: #fff;
    text-shadow: 2px 2px var(--neon-pink), -2px -2px var(--neon-cyan);
    animation: glitch-skew 3s infinite linear alternate-reverse;
  }
  @keyframes glitch-skew {
    0% { transform: skew(0deg); }
    20% { transform: skew(-2deg); }
    21% { transform: skew(0deg); }
    100% { transform: skew(0deg); }
  }
  
  /* Scanline Overlay */
  .scanlines {
    background: linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgba(255,255,255,0) 50%,
      rgba(0,0,0,0.3) 50%,
      rgba(0,0,0,0.3)
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 40;
  }

  /* Cyber Grid Background */
  .cyber-grid {
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    position: absolute;
    inset: 0;
    transform: perspective(500px) rotateX(20deg);
    transform-origin: top center;
    opacity: 0.6;
  }

  /* Angular Clip Paths */
  .clip-angle {
    clip-path: polygon(
      15px 0, 100% 0, 
      100% calc(100% - 15px), 
      calc(100% - 15px) 100%, 
      0 100%, 
      0 15px
    );
  }
  .clip-tag {
    clip-path: polygon(
      0 0, 100% 0, 
      100% calc(100% - 15px), 
      calc(100% - 10px) 100%, 
      0 100%
    );
  }

  /* Neon Glow Utilities */
  .glow-text-pink { text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink); }
  .glow-text-cyan { text-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan); }
  .glow-text-lime { text-shadow: 0 0 10px var(--neon-lime), 0 0 20px var(--neon-lime); }
  
  .glow-box-pink { box-shadow: 0 0 15px rgba(255, 0, 255, 0.4), inset 0 0 10px rgba(255, 0, 255, 0.2); }
  .glow-box-cyan { box-shadow: 0 0 15px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2); }

  /* Animations */
  @keyframes digitalBurst {
    0% { transform: scale(1); opacity: 1; filter: hue-rotate(0deg) brightness(1); }
    50% { transform: scale(1.5) skew(10deg); opacity: 0.8; filter: hue-rotate(90deg) brightness(2) contrast(200%); }
    100% { transform: scale(2) skew(-10deg); opacity: 0; filter: hue-rotate(180deg) brightness(3); }
  }
  .animate-digital-pop {
    animation: digitalBurst 0.4s ease-out forwards;
  }

  /* Chromatic Aberration for hover */
  .hover-chromatic:hover {
    animation: glitch-skew 0.3s infinite;
    text-shadow: 3px 0 var(--neon-pink), -3px 0 var(--neon-cyan);
  }
</style>
</head>
<body class="overflow-hidden bg-[#050505] selection:bg-[#ff00ff] selection:text-white">
<div class="min-h-screen flex flex-col relative w-full h-full">
  
  <!-- Dynamic Cyber Background -->
  <div class="absolute inset-0 z-0 bg-[#050505]">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_#220033_0%,_#050505_70%)]"></div>
    <div class="cyber-grid"></div>
    <!-- Random floating particles/noise -->
    <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] mix-blend-overlay"></div>
  </div>

  <!-- Scanlines Overlay -->
  <div class="absolute inset-0 scanlines pointer-events-none z-50 mix-blend-overlay"></div>

  <!-- Header -->
  <header class="relative z-40 flex flex-wrap items-center justify-between gap-6 px-6 pt-6 pb-2 w-full">
    <div class="relative group cursor-default">
      <h1 class="text-3xl md:text-5xl font-black uppercase tracking-widest italic glitch-text" data-text="CRYPTO POP">
        CRYPTO <span class="text-[#00ffff]">POP</span> DASH
      </h1>
      <div class="h-1 w-full bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#00ff00] mt-1"></div>
    </div>
    
    <div class="flex flex-wrap gap-4 items-center">
      <!-- Score HUD -->
      <div class="clip-angle bg-black/80 border-2 border-[#00ffff] px-6 py-2 min-w-[120px] flex flex-col items-end shadow-[0_0_15px_rgba(0,255,255,0.3)]">
        <span class="text-[10px] text-[#00ffff] uppercase tracking-[0.2em] font-tech">Score_Count</span>
        <span id="scoreValue" class="text-3xl font-led text-[#00ffff] leading-none drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">0000</span>
      </div>
      
      <!-- Lives HUD -->
      <div class="clip-angle bg-black/80 border-2 border-[#ff00ff] px-6 py-2 min-w-[100px] flex flex-col items-end shadow-[0_0_15px_rgba(255,0,255,0.3)]">
        <span class="text-[10px] text-[#ff00ff] uppercase tracking-[0.2em] font-tech">Sys_Lives</span>
        <div class="flex gap-1 mt-1" id="livesContainer">
            <!-- JS will populate, initially simple text fallback -->
           <span id="livesValue" class="text-3xl font-led text-[#ff00ff] leading-none">3</span>
        </div>
      </div>
      
      <!-- Time HUD -->
      <div class="clip-angle bg-black/80 border-2 border-[#00ff00] px-6 py-2 min-w-[100px] flex flex-col items-end shadow-[0_0_15px_rgba(0,255,0,0.3)]">
        <span class="text-[10px] text-[#00ff00] uppercase tracking-[0.2em] font-tech">T_Minus</span>
        <span id="timeValue" class="text-3xl font-led text-[#00ff00] leading-none drop-shadow-[0_0_5px_rgba(0,255,0,0.8)]">60s</span>
      </div>
    </div>
  </header>

  <!-- Game Area -->
  <main id="gameArea" class="relative flex-1 w-full border-t border-b border-white/20 overflow-hidden mt-4 bg-black/20">
    
    <!-- Decorative HUD Lines -->
    <div class="absolute top-10 left-0 w-4 h-full border-l-2 border-dashed border-white/10 opacity-50"></div>
    <div class="absolute top-10 right-0 w-4 h-full border-r-2 border-dashed border-white/10 opacity-50"></div>
    <div class="absolute bottom-10 left-10 w-32 h-32 border-b-2 border-l-2 border-[#00ffff]/20 rounded-bl-3xl"></div>
    <div class="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-[#ff00ff]/20 rounded-tr-3xl"></div>

    <!-- Start Screen Overlay -->
    <div id="startScreen" class="absolute inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center transition-all duration-300">
      <div class="max-w-5xl w-full border border-white/10 bg-black/80 p-1 relative clip-angle shadow-2xl">
        <!-- Inner Frame -->
        <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffff]"></div>
        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ffff]"></div>
        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffff]"></div>
        <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffff]"></div>

        <div class="p-8 md:p-12 flex flex-col items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          <h2 class="text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-white to-[#00ffff] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Initialize Protocol
          </h2>
          
          <p class="text-[#00ffff] font-tech text-lg md:text-xl tracking-wider mb-10 max-w-2xl leading-relaxed border-l-4 border-[#ff00ff] pl-6 text-left">
            <span class="text-white">MISSION:</span> INTERCEPT CRYPTO ASSETS BEFORE SYSTEM PURGE.<br>
            <span class="text-white">WARNING:</span> AVOID MALICIOUS MEME TOKENS.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            <!-- Card 1 -->
            <div class="group relative bg-slate-900/80 border border-white/20 p-5 clip-tag hover:border-[#00ff00] transition-colors">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full border-2 border-[#00ff00] bg-cover bg-center shadow-[0_0_15px_#00ff00]"
                     style="background-image:url('https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024');"></div>
                <div class="text-left">
                  <p class="text-xs text-gray-400 font-tech uppercase">Asset Type: BTC</p>
                  <strong class="text-[#00ff00] text-xl font-bold font-led tracking-wide">+10 CREDITS</strong>
                </div>
              </div>
              <div class="absolute bottom-0 right-0 w-full h-1 bg-[#00ff00] opacity-50"></div>
            </div>

            <!-- Card 2 -->
            <div class="group relative bg-slate-900/80 border border-white/20 p-5 clip-tag hover:border-[#00ffff] transition-colors">
              <div class="flex items-center gap-4">
                <div class="relative w-14 h-14">
                  <div class="absolute top-0 left-0 w-10 h-10 rounded-full border border-[#00ffff] bg-cover bg-center z-10"
                       style="background-image:url('https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024');"></div>
                  <div class="absolute bottom-0 right-0 w-10 h-10 rounded-full border border-[#00ffff] bg-cover bg-center z-20"
                       style="background-image:url('https://cryptologos.cc/logos/solana-sol-logo.png?v=024');"></div>
                </div>
                <div class="text-left">
                  <p class="text-xs text-gray-400 font-tech uppercase">Asset Type: ALT</p>
                  <strong class="text-[#00ffff] text-xl font-bold font-led tracking-wide">+30 CREDITS</strong>
                </div>
              </div>
              <div class="absolute bottom-0 right-0 w-full h-1 bg-[#00ffff] opacity-50"></div>
            </div>

            <!-- Card 3 -->
            <div class="group relative bg-slate-900/80 border border-white/20 p-5 clip-tag hover:border-[#ff00ff] transition-colors">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full border-2 border-[#ff00ff] bg-cover bg-center shadow-[0_0_15px_#ff00ff]"
                     style="background-image:url('https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=024');"></div>
                <div class="text-left">
                  <p class="text-xs text-gray-400 font-tech uppercase">THREAT: MEME</p>
                  <strong class="text-[#ff00ff] text-xl font-bold font-led tracking-wide">-25 & DMG</strong>
                </div>
              </div>
              <div class="absolute bottom-0 right-0 w-full h-1 bg-[#ff00ff] opacity-50"></div>
            </div>
          </div>

          <button id="startBtn" class="relative px-12 py-4 bg-[#ff00ff] text-black font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-[#ff00ff] transition-all duration-200 clip-angle shadow-[5px_5px_0px_#00ffff] active:translate-y-1 active:shadow-none">
            <span class="relative z-10 flex items-center gap-2">
              <iconify-icon icon="mdi:console-line" class="text-2xl"></iconify-icon> EXECUTE
            </span>
          </button>
          
          <div class="mt-6 text-xs font-tech text-white/40 tracking-[0.3em] animate-pulse">
            SYSTEM READY_ WAITING FOR INPUT
          </div>
        </div>
      </div>
    </div>

    <!-- Game Over Screen -->
    <div id="gameOverScreen" class="absolute inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-8 text-center opacity-0 pointer-events-none transition-all duration-500">
      <div class="border-4 border-[#ff00ff] p-2 clip-angle bg-black shadow-[0_0_50px_rgba(255,0,255,0.4)] relative overflow-hidden">
         <!-- Glitch overlay -->
         <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
         
         <div class="bg-[#1a051a] p-10 md:p-16 flex flex-col items-center clip-angle">
            <h2 class="text-6xl md:text-8xl font-black mb-2 text-[#ff00ff] glitch-text" style="font-family: 'Rubik Glitch', 'Orbitron', sans-serif;" data-text="SYSTEM FAILURE">SYSTEM FAILURE</h2>
            <p id="gameOverMessage" class="text-xl text-[#00ffff] font-tech font-bold mb-8 uppercase tracking-widest border-b border-[#00ffff]/30 pb-2">Connection Severed</p>
            
            <div class="flex flex-col items-center mb-10">
              <p class="text-white/60 uppercase tracking-[0.5em] text-xs mb-2">Final_Data_Harvest</p>
              <span id="finalScore" class="text-7xl font-led text-[#00ff00] drop-shadow-[0_0_10px_#00ff00]">0000</span>
            </div>

            <button id="restartBtn" class="group relative px-10 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] font-bold text-xl uppercase tracking-widest hover:bg-[#00ffff] hover:text-black transition-all duration-200">
              <span class="flex items-center gap-2">
                 <iconify-icon icon="mdi:refresh"></iconify-icon> REBOOT SYSTEM
              </span>
              <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ffff] group-hover:bg-[#00ffff]"></div>
              <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ffff] group-hover:bg-[#00ffff]"></div>
            </button>
         </div>
      </div>
    </div>

    <!-- Bubbles Container -->
    <div id="bubbleContainer" class="absolute inset-0 z-20 pointer-events-none w-full h-full">
        <!-- Bubbles injected here -->
    </div>

  </main>
</div>

<script>
  // Game Assets
  const normalImage = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024';
  const bonusImages = [
    'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024',
    'https://cryptologos.cc/logos/solana-sol-logo.png?v=024',
    'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=024'
  ];
  const avoidImage = 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=024';

  // DOM Elements
  const gameArea = document.getElementById('gameArea');
  const bubbleContainer = document.getElementById('bubbleContainer');
  const startOverlay = document.getElementById('startScreen');
  const gameOverOverlay = document.getElementById('gameOverScreen');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  
  const scoreValue = document.getElementById('scoreValue');
  const livesValue = document.getElementById('livesValue');
  const timeValue = document.getElementById('timeValue');
  const finalScore = document.getElementById('finalScore');
  const gameOverMessage = document.getElementById('gameOverMessage');

  // Game State
  let score = 0;
  let lives = 3;
  const maxLives = 3;
  let timeElapsed = 0;
  const timeLimit = 60;
  
  let bubbles = [];
  let lastBubbleTime = 0;
  let lastFrameTime = 0;
  let animationFrame;
  let gameRunning = false;

  // Audio Context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playTone(freq, duration = 0.15, type = 'sawtooth', volume = 0.1) {
    if (!audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.value = volume;
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) { console.error(e); }
  }

  function updateHUD() {
    scoreValue.textContent = score.toString().padStart(4, '0');
    // Render lives as blocks
    // livesValue.textContent = "▮".repeat(lives) + "▯".repeat(maxLives - lives);
    livesValue.innerHTML = lives;
    livesValue.style.color = lives < 2 ? '#ff0000' : '#ff00ff';
    
    const timeLeft = Math.max(0, Math.ceil(timeLimit - timeElapsed));
    timeValue.textContent = timeLeft + 's';
    if (timeLeft <= 10) {
        timeValue.classList.add('text-red-500', 'animate-pulse');
    } else {
        timeValue.classList.remove('text-red-500', 'animate-pulse');
    }
  }

  function pickType() {
    const roll = Math.random();
    if (roll < 0.7) return 'normal';
    if (roll < 0.9) return 'bonus';
    return 'avoid';
  }

  function spawnBubble() {
    const type = pickType();
    const bubbleEl = document.createElement('div');
    
    // New Maximalist Styles
    // Using rounded-full for the image container but wrapping in effects
    const baseClasses = ['absolute', 'w-[75px]', 'h-[75px]', 'rounded-full', 'cursor-pointer', 'transition-transform', 'duration-100', 'z-30', 'pointer-events-auto', 'hover:scale-110', 'flex', 'items-center', 'justify-center', 'backdrop-blur-sm', 'bg-black/40'];
    
    // Inner image element for cleaner look
    const innerEl = document.createElement('div');
    innerEl.className = "w-full h-full rounded-full bg-cover bg-center border-2";
    
    if (type === 'normal') {
       const img = normalImage;
       innerEl.style.backgroundImage = `url('${img}')`;
       innerEl.classList.add('border-[#00ff00]', 'shadow-[0_0_15px_#00ff00]');
       bubbleEl.classList.add(...baseClasses);
    } else if (type === 'bonus') {
       const img = bonusImages[Math.floor(Math.random() * bonusImages.length)];
       innerEl.style.backgroundImage = `url('${img}')`;
       innerEl.classList.add('border-[#00ffff]', 'shadow-[0_0_20px_#00ffff]', 'animate-pulse');
       bubbleEl.classList.add(...baseClasses);
    } else {
       const img = avoidImage;
       innerEl.style.backgroundImage = `url('${img}')`;
       innerEl.classList.add('border-[#ff00ff]', 'shadow-[0_0_20px_#ff00ff]');
       bubbleEl.classList.add(...baseClasses, 'hover:shadow-[0_0_30px_#ff00ff]');
    }

    bubbleEl.appendChild(innerEl);

    // Glitch decorative element on bubble
    const glitchLine = document.createElement('div');
    glitchLine.className = "absolute w-full h-[2px] bg-white/50 top-1/2 left-0 -translate-y-1/2 hidden group-hover:block pointer-events-none";
    bubbleEl.appendChild(glitchLine);

    const startLeft = Math.random() * (gameArea.clientWidth - 80);
    bubbleEl.style.left = `${startLeft}px`;
    bubbleEl.style.top = '-90px';
    bubbleEl.style.willChange = 'top, transform';

    const speed = 120 + Math.random() * 100; // Faster for cyberpunk action
    
    const bubbleObj = {
      el: bubbleEl,
      type,
      y: -90,
      speed,
      popped: false
    };

    // Interaction
    const handlePop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        popBubble(bubbleObj);
    };

    bubbleEl.addEventListener('mousedown', handlePop);
    bubbleEl.addEventListener('touchstart', handlePop);

    bubbleContainer.appendChild(bubbleEl);
    bubbles.push(bubbleObj);
  }

  function popBubble(bubbleObj) {
    if (bubbleObj.popped) return;
    bubbleObj.popped = true;
    const { el, type } = bubbleObj;

    // Animation
    el.classList.add('animate-digital-pop');
    el.style.pointerEvents = 'none';

    // Game Logic
    let delta = 0;
    if (type === 'normal') {
      delta = 10;
      playTone(880, 0.1, 'square', 0.1); 
    } else if (type === 'bonus') {
      delta = 30;
      playTone(1200, 0.1, 'sine', 0.1); 
      setTimeout(() => playTone(1500, 0.1, 'square', 0.1), 50);
    } else {
      delta = -25;
      lives = Math.max(0, lives - 1);
      playTone(100, 0.4, 'sawtooth', 0.3);
      // Red flash effect
      const flash = document.createElement('div');
      flash.className = "absolute inset-0 bg-[#ff0000]/30 z-40 pointer-events-none";
      gameArea.appendChild(flash);
      setTimeout(() => flash.remove(), 150);
    }

    score = Math.max(0, score + delta);
    updateHUD();

    if (lives <= 0) {
      triggerGameOver('CRITICAL SYSTEM FAILURE');
    }

    // Cleanup
    setTimeout(() => removeBubble(bubbleObj), 400);
  }

  function removeBubble(bubbleObj) {
    const idx = bubbles.indexOf(bubbleObj);
    if (idx >= 0) bubbles.splice(idx, 1);
    if (bubbleObj.el && bubbleObj.el.parentNode) {
      bubbleObj.el.parentNode.removeChild(bubbleObj.el);
    }
  }

  function triggerGameOver(message) {
    if (!gameRunning) return;
    gameRunning = false;
    cancelAnimationFrame(animationFrame);
    
    gameOverOverlay.classList.remove('opacity-0', 'pointer-events-none');
    finalScore.textContent = score.toString().padStart(4, '0');
    gameOverMessage.textContent = message || 'SESSION TERMINATED';
    playTone(60, 1.0, 'sawtooth', 0.2);
  }

  function clearBubbles() {
    bubbles.forEach(b => {
        if(b.el) b.el.remove();
    });
    bubbles = [];
    bubbleContainer.innerHTML = '';
  }

  function gameLoop(timestamp) {
    if (!gameRunning) return;
    if (!lastFrameTime) lastFrameTime = timestamp;
    const delta = (timestamp - lastFrameTime) / 1000;
    lastFrameTime = timestamp;

    timeElapsed += delta;
    updateHUD();

    if (timeElapsed >= timeLimit) {
      triggerGameOver('TIME QUOTA EXCEEDED');
      return;
    }

    // Spawn Logic - Intense pace
    const baseInterval = 700;
    const spawnInterval = Math.max(250, baseInterval - (score * 1.5));
    
    if (timestamp - lastBubbleTime > spawnInterval) {
      spawnBubble();
      lastBubbleTime = timestamp;
    }

    // Move Bubbles
    const areaHeight = gameArea.clientHeight;
    bubbles.forEach((bubble) => {
      if (bubble.popped) return;
      
      bubble.y += bubble.speed * delta;
      bubble.el.style.top = `${bubble.y}px`;

      if (bubble.y > areaHeight + 20) {
        bubble.popped = true;
        if (bubble.type !== 'avoid') {
          lives = Math.max(0, lives - 1);
          if (lives <= 0) {
             updateHUD();
             triggerGameOver('ASSET LEAKAGE CRITICAL');
             return;
          }
        }
        removeBubble(bubble);
        updateHUD();
      }
    });

    animationFrame = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    score = 0;
    lives = maxLives;
    timeElapsed = 0;
    lastBubbleTime = 0;
    lastFrameTime = 0;
    
    clearBubbles();
    updateHUD();
    
    startOverlay.classList.add('opacity-0', 'pointer-events-none');
    gameOverOverlay.classList.add('opacity-0', 'pointer-events-none');
    
    // Play start sound
    playTone(400, 0.1, 'square', 0.1);
    setTimeout(() => playTone(800, 0.2, 'square', 0.1), 100);

    gameRunning = true;
    animationFrame = requestAnimationFrame(gameLoop);
  }

  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', startGame);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !gameRunning) {
       startGame();
    }
  });
</script>
</body>
</html>
~~~
