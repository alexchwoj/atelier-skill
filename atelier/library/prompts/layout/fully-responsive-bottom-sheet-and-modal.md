# Fully Responsive Bottom Sheet & Modal

> A non-blocking overlay that slides up from the bottom of the viewport. Keeps content visible while introducing a persistent promotional CTA. Easy to dismiss and less disruptive than full modals. Best suited for Mobile-first experiences, repeat visitors, subtle promotions, brands sensitive to intrusiveness.


---

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="view-transition" content="same-origin">
  <title>Responsive Wireframe Bottom Sheet</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap" rel="stylesheet">
  <style>
    @view-transition { navigation: auto; }
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 0.4s;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    body { font-family: 'General Sans', sans-serif; }
    .modal-container { view-transition-name: modal-container; }
  </style>
</head>
<body>
  <div class="min-h-screen bg-gray-100 flex justify-center overflow-hidden relative">
    
    <!-- Mock Background App UI -->
    <div class="w-full h-full bg-white flex flex-col pt-8 md:pt-12 overflow-y-auto">
      <!-- Fake Header -->
      <div class="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto w-full mb-8">
        <div class="w-8 h-8 rounded-full bg-gray-200"></div>
        <div class="w-24 md:w-32 h-4 bg-gray-200 rounded"></div>
        <div class="w-8 h-8 rounded-full bg-gray-200"></div>
      </div>
      
      <!-- Fake Content Blocks: Responsive Grid -->
      <div class="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20">
        <!-- Card 1 -->
        <div class="w-full aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
        <!-- Content 1 -->
        <div class="space-y-4 flex flex-col justify-center">
          <div class="w-3/4 h-8 bg-gray-200 rounded-lg"></div>
          <div class="w-full h-4 bg-gray-100 rounded"></div>
          <div class="w-full h-4 bg-gray-100 rounded"></div>
          <div class="w-2/3 h-4 bg-gray-100 rounded"></div>
        </div>
        <!-- Card 2 -->
        <div class="w-full aspect-video bg-gray-50 rounded-2xl border border-gray-100 sm:col-span-2 lg:col-span-1"></div>
        <!-- Card 3 -->
        <div class="hidden lg:block w-full aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
        <!-- Card 4 -->
        <div class="hidden lg:block w-full aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
        <!-- Card 5 -->
        <div class="hidden lg:block w-full aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
      </div>
    </div>

    <!-- Overlay Backdrop -->
    <div class="absolute inset-0 bg-black/60 z-10 backdrop-blur-sm transition-opacity"></div>

    <!-- Bottom Sheet / Modal Component -->
    <!-- Mobile: Bottom docked | Tablet: Bottom Centered | Desktop: Center Modal -->
    <div class="modal-container absolute bottom-0 md:bottom-8 lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full sm:max-w-xl md:max-w-2xl lg:max-w-[560px] bg-white rounded-t-[32px] md:rounded-[32px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] lg:shadow-2xl transform transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)">
      
      <!-- Drag Handle (Mobile only) -->
      <div class="w-full flex justify-center pt-3 pb-1 md:hidden">
        <div class="w-12 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      <!-- Close Button -->
      <button class="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors z-30" aria-label="Close modal" id="close-modal-btn">
        <iconify-icon icon="lucide:x" class="text-2xl"></iconify-icon>
      </button>

      <!-- Content Container -->
      <div class="px-6 sm:px-10 pt-4 pb-10 md:pt-10 md:pb-12 lg:p-14 flex flex-col items-center text-center">
        
        <!-- Icon / Graphic Placeholder -->
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
          <iconify-icon icon="lucide:tag" class="text-3xl md:text-4xl text-gray-800"></iconify-icon>
        </div>

        <!-- Headline -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3 md:mb-4 leading-tight">
          Get 25% Off
        </h2>

        <!-- Subtext -->
        <p class="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md mb-8 md:mb-10">
          Unlock exclusive savings on your first purchase. This limited-time offer ends soon.
        </p>

        <!-- CTA Button -->
        <a href="#" id="claim-offer-btn" class="w-full bg-gray-900 hover:bg-black text-white font-semibold text-lg md:text-xl py-4 md:py-5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] group">
          <span>Claim Discount</span>
          <iconify-icon icon="lucide:arrow-right" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
        </a>

        <!-- Secondary Action -->
        <a href="#" id="no-thanks-link" class="mt-6 text-sm md:text-base font-medium text-gray-400 hover:text-gray-600 transition-colors py-2 px-4">
          No thanks, I prefer full price
        </a>

      </div>
    </div>

  </div>
</body>
</html>
~~~
