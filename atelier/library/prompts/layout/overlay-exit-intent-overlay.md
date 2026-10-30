# Overlay -  Exit Intent Overlay

> A wide overlay triggered on exit intent, split into two visual columns. One side communicates the offer value, the other side contains the input or action. Preserves some page context while still creating urgency. Best suited for Abandoning users, cart or PDP exit recovery, brands optimizing bounce-rate recovery without fully blocking content.


---

Exit-intent discount overlay wireframe with split layout. Left side: text heading "Wait, before you go!" with discount offer details and description. Right side: email subscription form with input field and subscribe button. Close icon (X) in top right corner. Clean wireframe style with basic shapes, minimal styling, and clear information hierarchy. Gray wireframe colors with black text and borders.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exit Intent Wireframe</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&f[]=switzer@400,500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Switzer', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, button, .font-heading {
      font-family: 'General Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
    
    <!-- Background Abstract Wireframe Context (simulating underlying page) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none grid grid-cols-12 gap-4 p-8 content-start">
      <div class="col-span-12 h-16 border-2 border-black bg-neutral-300"></div>
      <div class="col-span-12 h-64 border-2 border-black bg-neutral-200 mt-8"></div>
      <div class="col-span-4 h-48 border-2 border-black bg-neutral-200 mt-8"></div>
      <div class="col-span-4 h-48 border-2 border-black bg-neutral-200 mt-8"></div>
      <div class="col-span-4 h-48 border-2 border-black bg-neutral-200 mt-8"></div>
    </div>
    
    <!-- Overlay Backdrop -->
    <div class="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm z-0"></div>

    <!-- Main Modal Component -->
    <div class="relative w-full max-w-5xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row z-10 overflow-hidden">
      
      <!-- Close Button -->
      <button id="close-overlay-btn" class="absolute top-0 right-0 z-30 p-4 hover:bg-neutral-100 transition-colors group border-l-2 border-b-2 border-black bg-white">
        <iconify-icon icon="lucide:x" class="text-2xl text-black group-hover:rotate-90 transition-transform duration-300"></iconify-icon>
      </button>

      <!-- Left Column: Content & Offer -->
      <div class="w-full md:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-black bg-white relative">
        <!-- Decorative geometric element -->
        <div class="absolute top-6 left-6 w-8 h-8 border border-black flex items-center justify-center">
          <div class="w-4 h-4 bg-neutral-200 rounded-full"></div>
        </div>

        <div class="mt-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 border border-black rounded-full bg-neutral-50 mb-6 w-fit">
            <div class="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span class="text-xs font-bold uppercase tracking-wider">Limited Time Offer</span>
          </div>
          
          <h2 class="text-5xl md:text-6xl font-bold text-black leading-[0.9] tracking-tight mb-6">
            Wait,<br>
            before<br>
            you go!
          </h2>
          
          <div class="w-16 h-1 bg-black mb-6"></div>
          
          <p class="text-lg text-neutral-600 leading-relaxed mb-8">
            We hate goodbyes. Grab this exclusive offer before you leave and get <span class="font-bold text-black border-b-2 border-neutral-300">20% off</span> your entire cart today.
          </p>

          <div class="flex items-center gap-4 text-sm font-medium text-neutral-500">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full border border-black bg-neutral-200"></div>
              <div class="w-8 h-8 rounded-full border border-black bg-neutral-100"></div>
              <div class="w-8 h-8 rounded-full border border-black bg-white flex items-center justify-center text-[10px]">+2k</div>
            </div>
            <span>people claimed this today</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="w-full md:w-7/12 p-8 md:p-12 lg:p-16 bg-neutral-50 flex flex-col justify-center">
        <div class="max-w-md mx-auto w-full space-y-8">
          
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-bold border-b-2 border-black pb-2 inline-block mb-2">Join the Newsletter</h3>
            <p class="text-neutral-500">Unlock your discount code instantly.</p>
          </div>

          <form class="space-y-6" onsubmit="event.preventDefault();">
            <div class="space-y-2 group">
              <label for="email-input" class="block text-sm font-bold uppercase tracking-widest text-neutral-800">
                Email Address
              </label>
              <div class="relative">
                <input 
                  id="email-input" 
                  type="email" 
                  placeholder="you@example.com" 
                  class="w-full h-16 px-6 bg-white border-2 border-black text-lg outline-none focus:ring-4 focus:ring-neutral-200 transition-all placeholder:text-neutral-300"
                >
                <iconify-icon icon="lucide:mail" class="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 text-xl pointer-events-none"></iconify-icon>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="relative flex items-center">
                <input id="consent-checkbox" type="checkbox" class="peer h-5 w-5 cursor-pointer appearance-none border-2 border-black bg-white checked:bg-black transition-all">
                <iconify-icon icon="lucide:check" class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"></iconify-icon>
              </div>
              <label for="consent-checkbox" class="text-sm text-neutral-500 cursor-pointer select-none">
                I agree to receive marketing emails. View our <a id="privacy-link" href="#" class="underline decoration-neutral-400 hover:text-black hover:decoration-black">Privacy Policy</a>.
              </label>
            </div>

            <button id="cta-subscribe-btn" class="w-full h-16 bg-black text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 group">
              <span>Unlock Discount</span>
              <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform duration-300"></iconify-icon>
            </button>
          </form>

          <div class="pt-6 border-t border-neutral-200 flex justify-center md:justify-start gap-6 opacity-50">
            <iconify-icon icon="logos:visa" class="text-2xl grayscale"></iconify-icon>
            <iconify-icon icon="logos:mastercard" class="text-2xl grayscale"></iconify-icon>
            <iconify-icon icon="logos:paypal" class="text-2xl grayscale"></iconify-icon>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</body>
</html>
~~~
