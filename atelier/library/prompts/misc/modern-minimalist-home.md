# Modern Minimalist Home

> Modern minimalist professional Lost & Found home screen. Design a clean, sophisticated interface with white background and subtle gradients only on action buttons. Use premium spacing, elegant sans-serif typography, and restrained shadows for a refined aesthetic. Focus on clarity and elegant simplicity rather than visual effects. The design should feel premium but understated. Include: clean header with FindIt logo, welcoming headline, two action buttons with subtle gradients (one for reporting lost items, one for reporting found items), minimal bottom navigation, and sophisticated micro-interactions. Emphasize refinement, whitespace, and professional elegance throughout.


---

Modern minimalist professional Lost & Found home screen. Design a clean, sophisticated interface with white background and subtle gradients only on action buttons. Use premium spacing, elegant sans-serif typography, and restrained shadows for a refined aesthetic. Focus on clarity and elegant simplicity rather than visual effects. The design should feel premium but understated. Include: clean header with FindIt logo, welcoming headline, two action buttons with subtle gradients (one for reporting lost items, one for reporting found items), minimal bottom navigation, and sophisticated micro-interactions. Emphasize refinement, whitespace, and professional elegance throughout.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="view-transition" content="same-origin">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <style>
    @import url('https://api.fontshare.com/v2/css?f[]=general-sans@600,500,400&f[]=satoshi@500,400&display=swap');

    body {
      font-family: 'Satoshi', sans-serif;
      -webkit-tap-highlight-color: transparent;
      background-color: #ffffff;
    }

    .font-display {
      font-family: 'General Sans', sans-serif;
    }

    @view-transition {
      navigation: auto;
    }

    ::view-transition-old(main-content) {
      animation: 0.25s ease-out both fade-out;
    }
    ::view-transition-new(main-content) {
      animation: 0.25s ease-in 0.1s both fade-in;
    }

    @keyframes fade-out {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .minimal-shadow {
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);
    }

    .gradient-lost {
      background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
    }

    .gradient-found {
      background: linear-gradient(135deg, #FB923C 0%, #F97316 100%);
    }

    .nav-blur {
      background: rgba(255, 255, 255, 0.98);
    }
  </style>
</head>
<body>
  <div class="w-full h-screen flex flex-col bg-white overflow-hidden" style="view-transition-name: main-content">
    
    <!-- Header -->
    <header class="shrink-0 pt-14 px-8 pb-6 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center">
          <iconify-icon icon="lucide:locate-fixed" class="text-white text-xl"></iconify-icon>
        </div>
        <span class="text-xl font-display font-semibold tracking-tight text-slate-900">FindIt</span>
      </div>
      <a href="#profile" id="header-profile-link" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center active:scale-95 transition-transform">
        <iconify-icon icon="lucide:user" class="text-slate-600 text-xl"></iconify-icon>
      </a>
    </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto px-8 flex flex-col">
      
      <!-- Typography Section -->
      <div class="mt-6 mb-12">
        <h1 class="text-[36px] leading-[1.1] font-display font-semibold text-slate-900 tracking-tight">
          Reuniting <br/>what matters.
        </h1>
        <p class="mt-4 text-slate-500 text-[17px] leading-relaxed max-w-[280px]">
          The most reliable way to recover your lost essentials or return found items.
        </p>
      </div>

      <!-- Action Cards -->
      <div class="space-y-5 mb-12">
        <a href="#lost" id="cta-lost-report" class="group block">
          <div class="gradient-lost p-6 rounded-[32px] flex items-center justify-between minimal-shadow transition-all active:scale-[0.98]">
            <div class="flex flex-col gap-1">
              <span class="text-white/80 text-sm font-medium">Quick Report</span>
              <h2 class="text-white text-2xl font-display font-semibold">I lost something</h2>
            </div>
            <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <iconify-icon icon="lucide:search" class="text-white text-2xl"></iconify-icon>
            </div>
          </div>
        </a>

        <a href="#found" id="cta-found-report" class="group block">
          <div class="gradient-found p-6 rounded-[32px] flex items-center justify-between minimal-shadow transition-all active:scale-[0.98]">
            <div class="flex flex-col gap-1">
              <span class="text-white/80 text-sm font-medium">Return Item</span>
              <h2 class="text-white text-2xl font-display font-semibold">I found something</h2>
            </div>
            <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <iconify-icon icon="lucide:plus" class="text-white text-2xl"></iconify-icon>
            </div>
          </div>
        </a>
      </div>

      <!-- Quick Activity / Recent -->
      <div class="mt-auto pb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-slate-900 font-display font-semibold text-lg">Recently reported</h3>
          <a href="#browse" id="view-all-link" class="text-sky-600 text-sm font-medium">View all</a>
        </div>
        
        <div class="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
          <div class="min-w-[140px] bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div class="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center">
               <iconify-icon icon="lucide:key" class="text-slate-300 text-3xl"></iconify-icon>
            </div>
            <p class="text-sm font-semibold text-slate-900">Keys</p>
            <p class="text-[11px] text-slate-500">2m ago • Central Park</p>
          </div>
          <div class="min-w-[140px] bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div class="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center">
               <iconify-icon icon="lucide:wallet" class="text-slate-300 text-3xl"></iconify-icon>
            </div>
            <p class="text-sm font-semibold text-slate-900">Wallet</p>
            <p class="text-[11px] text-slate-500">15m ago • Metro Station</p>
          </div>
        </div>
      </div>

    </main>

    <!-- Navigation -->
    <footer class="shrink-0 nav-blur border-t border-slate-100 px-8 pb-[34px] pt-4">
      <nav class="flex items-center justify-between">
        <a href="#" id="nav-home" class="flex flex-col items-center gap-1.5">
          <iconify-icon icon="lucide:home" class="text-[22px] text-slate-900"></iconify-icon>
          <span class="text-[10px] font-bold text-slate-900 tracking-wider uppercase">Home</span>
        </a>
        <a href="#" id="nav-discover" class="flex flex-col items-center gap-1.5 group">
          <iconify-icon icon="lucide:compass" class="text-[22px] text-slate-400 group-hover:text-slate-600"></iconify-icon>
          <span class="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 tracking-wider uppercase">Discover</span>
        </a>
        <a href="#" id="nav-alerts" class="flex flex-col items-center gap-1.5 group">
          <iconify-icon icon="lucide:bell" class="text-[22px] text-slate-400 group-hover:text-slate-600"></iconify-icon>
          <span class="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 tracking-wider uppercase">Alerts</span>
        </a>
        <a href="#" id="nav-settings" class="flex flex-col items-center gap-1.5 group">
          <iconify-icon icon="lucide:settings" class="text-[22px] text-slate-400 group-hover:text-slate-600"></iconify-icon>
          <span class="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 tracking-wider uppercase">Menu</span>
        </a>
      </nav>
    </footer>

  </div>
</body>
</html>
~~~
