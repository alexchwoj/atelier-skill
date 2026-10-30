# Modern Illustrator LinkedIn Profile Header

> [Quick Edit] Auto-save


---

[Quick Edit] Auto-save

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rushi Arpan Shah - Profile</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --color-header-bg: #F5F5F2;
      --color-profile-bg: #1B1F23;
      --color-blue-primary: #71B7FB;
      --color-blue-hover: #5DA6E8;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #0d1117;
      color: white;
    }

    .font-script {
      font-family: 'Dancing Script', cursive;
    }

    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    .wave-container {
      position: relative;
      height: 40px;
      width: 100%;
      overflow: hidden;
      background: var(--color-header-bg);
    }

    .wave-svg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .profile-card {
      max-width: 900px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #30363d;
    }

    .btn-action {
      transition: all 0.2s ease;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 16px;
      border-radius: 9999px;
    }

    .bg-sketch {
      opacity: 0.85;
      filter: contrast(1.1);
    }
  </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4 md:p-10">

  <div class="profile-card bg-[#1b1f23]">
    
    <!-- HEADER SECTION (ILLUSTRATED) -->
    <div class="relative bg-[#F5F5F2] pt-4 px-6 overflow-hidden min-h-[180px] md:min-h-[220px]">
      <!-- Top Left Email -->
      

      <!-- Background Sketches (Simulation) -->
      

      <!-- Boat Sketch Center -->
      

      <!-- Script Name Right -->
      
    </div>

    <!-- WAVE DIVIDER -->
    <div class="wave-container">
      
    </div>

    <!-- MAIN CONTENT SECTION -->
    <div class="px-6 md:px-8 pb-8 -mt-16 md:-mt-20">
      <div class="flex flex-col md:flex-row justify-between items-start gap-6">
        
        <!-- Left: Profile Image and Bio -->
        <div class="flex-1">
          <!-- Profile Image Overlap -->
          <div class="relative inline-block mb-4">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-[#1b1f23] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;h=256&amp;auto=format&amp;fit=crop" alt="Rushi Arpan Shah" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="mt-2">
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-white tracking-tight">Rushi Arpan Shah</h1>
              <iconify-icon icon="material-symbols:verified" class="text-blue-400 text-xl"></iconify-icon>
              <span class="text-gray-400 text-sm ml-1">He/Him</span>
            </div>
            <p class="text-gray-200 mt-1 max-w-2xl leading-snug text-sm md:text-[15px]">
              Int. B.Tech CSE '25 – MBA '27, Nirma University | Backend Architectures | ML/DL | Agentic AI | Data Storyteller | 4× Hackathon Laureate
            </p>
            <div class="mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-xs md:text-sm text-gray-400">
              <span>Vadodara, Gujarat, India</span>
              <span class="mx-1">•</span>
              <a href="#" id="contact-info-link" class="text-blue-400 font-semibold hover:underline">Contact info</a>
            </div>
            <div class="mt-2">
               <a href="#" id="github-profile-link" class="flex items-center gap-1.5 text-blue-400 font-semibold hover:underline text-sm">
                 Github Profile 
                 <iconify-icon icon="lucide:external-link" class="text-xs"></iconify-icon>
               </a>
            </div>
            <div class="mt-3 text-sm text-gray-300">
              <span class="font-semibold">1,691 followers</span>
              <span class="mx-1">•</span>
              <span class="font-semibold">500+ connections</span>
            </div>
          </div>
        </div>

        <!-- Right: Badges -->
        <div class="w-full md:w-64 mt-20 md:mt-1">
           <div class="space-y-4">
             <div class="flex items-center gap-3 group cursor-pointer">
               <div class="w-10 h-10 bg-white rounded flex items-center justify-center p-1 overflow-hidden">
                 <img src="https://api.iconify.design/logos:stripe.svg" class="w-full" alt="Emplay Inc.">
               </div>
               <span class="text-sm font-semibold text-white group-hover:underline">Emplay Inc.</span>
             </div>
             <div class="flex items-center gap-3 group cursor-pointer">
               <div class="w-10 h-10 bg-[#f8f1e7] rounded flex items-center justify-center p-1 overflow-hidden">
                  <img src="https://api.iconify.design/logos:stanford.svg" class="w-full" alt="Nirma University">
               </div>
               <span class="text-sm font-semibold text-white group-hover:underline">Nirma University, Ahmedabad, Gujarat, India</span>
             </div>
           </div>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="mt-6 flex flex-wrap items-center gap-2">
        <button class="btn-action bg-[#71B7FB] text-[#000] hover:bg-[#5DA6E8]" id="cta-open-to">
          Open to
        </button>
        <button class="btn-action border border-[#71B7FB] text-[#71B7FB] hover:bg-[#71B7FB1a]" id="cta-add-section">
          Add section
        </button>
        <button class="btn-action border border-gray-500 text-gray-300 hover:bg-gray-800" id="cta-enhance">
          Enhance profile
        </button>
        <button class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 hover:bg-gray-800" id="cta-more">
          <iconify-icon icon="lucide:more-horizontal" class="text-xl"></iconify-icon>
        </button>
      </div>

    </div>

  </div>


</body></html>
~~~
