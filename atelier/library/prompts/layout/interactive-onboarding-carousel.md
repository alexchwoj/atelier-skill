# Interactive Onboarding Carousel

> A minimal, functional onboarding carousel with five steps, featuring smooth sliding transitions. Users can navigate forward and backward with Next/Previous buttons or jump directly via clickable pagination dots. JavaScript manages step state, updates titles, descriptions, and active indicators, while subtle CSS transitions maintain a clean wireframe aesthetic throughout the experience.


---

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wireframe Onboarding Carousel</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body {
      font-family: 'Inter', sans-serif;
    }
    /* Custom diagonal pattern for placeholder */
    .wireframe-pattern {
      background-image: repeating-linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6),
      repeating-linear-gradient(45deg, #f3f4f6 25%, #f9fafb 25%, #f9fafb 75%, #f3f4f6 75%, #f3f4f6);
      background-position: 0 0, 10px 10px;
      background-size: 20px 20px;
    }
  </style>
</head>
<body>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
    
    <!-- Main Card Container -->
    <main class="w-full max-w-[340px] bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
      
      <!-- Carousel Viewport -->
      <div class="w-full overflow-hidden mb-8">
        <div id="carousel-track" class="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
          
          <!-- Step 1 -->
          <div class="w-full flex-shrink-0 flex flex-col items-center select-none">
            <div class="w-full aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 mb-6 relative overflow-hidden group">
              <div class="absolute inset-0 wireframe-pattern opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="lucide:bar-chart-2" class="text-gray-300 text-5xl"></iconify-icon>
              </div>
              <div class="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
                300 x 225
              </div>
            </div>
            <div class="text-center space-y-3 px-2">
              <h1 class="text-xl font-bold text-gray-900 tracking-tight">
                Track Progress
              </h1>
              <p class="text-sm text-gray-500 leading-relaxed">
                Monitor your daily activities and analyze performance with real-time charts.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="w-full flex-shrink-0 flex flex-col items-center select-none">
            <div class="w-full aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 mb-6 relative overflow-hidden group">
              <div class="absolute inset-0 wireframe-pattern opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="lucide:target" class="text-gray-300 text-5xl"></iconify-icon>
              </div>
              <div class="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
                300 x 225
              </div>
            </div>
            <div class="text-center space-y-3 px-2">
              <h1 class="text-xl font-bold text-gray-900 tracking-tight">
                Set Goals
              </h1>
              <p class="text-sm text-gray-500 leading-relaxed">
                Define clear objectives and track your journey towards success.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="w-full flex-shrink-0 flex flex-col items-center select-none">
            <div class="w-full aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 mb-6 relative overflow-hidden group">
              <div class="absolute inset-0 wireframe-pattern opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="lucide:pie-chart" class="text-gray-300 text-5xl"></iconify-icon>
              </div>
              <div class="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
                300 x 225
              </div>
            </div>
            <div class="text-center space-y-3 px-2">
              <h1 class="text-xl font-bold text-gray-900 tracking-tight">
                Analyze Data
              </h1>
              <p class="text-sm text-gray-500 leading-relaxed">
                Gain valuable insights with powerful reporting tools and visualizations.
              </p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="w-full flex-shrink-0 flex flex-col items-center select-none">
            <div class="w-full aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 mb-6 relative overflow-hidden group">
              <div class="absolute inset-0 wireframe-pattern opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="lucide:users" class="text-gray-300 text-5xl"></iconify-icon>
              </div>
              <div class="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
                300 x 225
              </div>
            </div>
            <div class="text-center space-y-3 px-2">
              <h1 class="text-xl font-bold text-gray-900 tracking-tight">
                Collaborate
              </h1>
              <p class="text-sm text-gray-500 leading-relaxed">
                Share results with your team and work together seamlessly.
              </p>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="w-full flex-shrink-0 flex flex-col items-center select-none">
            <div class="w-full aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 mb-6 relative overflow-hidden group">
              <div class="absolute inset-0 wireframe-pattern opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="lucide:rocket" class="text-gray-300 text-5xl"></iconify-icon>
              </div>
              <div class="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
                300 x 225
              </div>
            </div>
            <div class="text-center space-y-3 px-2">
              <h1 class="text-xl font-bold text-gray-900 tracking-tight">
                Get Started
              </h1>
              <p class="text-sm text-gray-500 leading-relaxed">
                Everything is set. Launch your new productivity journey today.
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Pagination Dots -->
      <div class="flex items-center gap-2 mb-8" id="pagination-dots">
        <button class="dot w-2 h-2 rounded-full bg-gray-800 transition-all duration-300 hover:scale-125 focus:outline-none" aria-label="Go to slide 1"></button>
        <button class="dot w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 hover:scale-125 focus:outline-none hover:bg-gray-300" aria-label="Go to slide 2"></button>
        <button class="dot w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 hover:scale-125 focus:outline-none hover:bg-gray-300" aria-label="Go to slide 3"></button>
        <button class="dot w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 hover:scale-125 focus:outline-none hover:bg-gray-300" aria-label="Go to slide 4"></button>
        <button class="dot w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 hover:scale-125 focus:outline-none hover:bg-gray-300" aria-label="Go to slide 5"></button>
      </div>

      <!-- Actions -->
      <div class="w-full flex flex-col items-center">
        <button id="btn-next" class="w-full py-3 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:border-gray-800 hover:text-gray-900 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1">
          Next
        </button>
        
        <div class="w-full flex justify-between items-center mt-4 px-1 h-4">
          <button id="btn-back" class="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors invisible">
            Back
          </button>
          <button id="btn-skip" class="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors">
            Skip Tour
          </button>
        </div>
      </div>

    </main>

    <!-- Wireframe Context Label -->
    <div id="step-label" class="mt-8 font-mono text-[10px] text-gray-300 uppercase tracking-widest transition-opacity duration-300">
      Wireframe v1.0 • Screen 01/05
    </div>

  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const track = document.getElementById('carousel-track');
      const dots = document.querySelectorAll('.dot');
      const nextBtn = document.getElementById('btn-next');
      const backBtn = document.getElementById('btn-back');
      const skipBtn = document.getElementById('btn-skip');
      const stepLabel = document.getElementById('step-label');
      
      let currentStep = 0;
      const totalSteps = 5;

      function updateCarousel() {
        // Slide track
        track.style.transform = `translateX(-${currentStep * 100}%)`;
        
        // Update Dots
        dots.forEach((dot, index) => {
          if (index === currentStep) {
            dot.classList.remove('bg-gray-200', 'hover:bg-gray-300');
            dot.classList.add('bg-gray-800');
          } else {
            dot.classList.add('bg-gray-200', 'hover:bg-gray-300');
            dot.classList.remove('bg-gray-800');
          }
        });

        // Update Buttons visibility/text
        if (currentStep === totalSteps - 1) {
          nextBtn.textContent = 'Get Started';
          skipBtn.classList.add('invisible');
        } else {
          nextBtn.textContent = 'Next';
          skipBtn.classList.remove('invisible');
        }

        if (currentStep === 0) {
          backBtn.classList.add('invisible');
        } else {
          backBtn.classList.remove('invisible');
        }

        // Update Label
        stepLabel.textContent = `Wireframe v1.0 • Screen 0${currentStep + 1}/05`;
      }

      // Event Listeners
      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps - 1) {
          currentStep++;
          updateCarousel();
        } else {
          // Reset for demo purposes
          currentStep = 0;
          updateCarousel();
        }
      });

      backBtn.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          updateCarousel();
        }
      });

      skipBtn.addEventListener('click', () => {
        currentStep = totalSteps - 1;
        updateCarousel();
      });
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentStep = index;
          updateCarousel();
        })
      });
    });
  </script>
</body>
</html>
~~~
