# Permission request- Mobile app

> A minimal, center-aligned mobile permission screen: a 64×64 circular camera icon at the top, followed by a bold title “Camera Access” and a short 2–3 line explanation about enabling video calls and photos with a privacy-respectful tone. At the bottom, a full-width primary “Allow” button (dark background, white text, 48px height, rounded corners) with a subtle “Not now” text link beneath it. Uses generous whitespace and a monochrome palette for a calm, non-pushy experience.


---

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'General Sans', sans-serif;
      background-color: #ffffff;
      color: #000000;
    }
    .wireframe-pattern {
      background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
      background-size: 20px 20px;
    }
  </style>
</head>
<body>
  <div class="w-full h-screen flex flex-col bg-white overflow-hidden">
    <!-- Main Content Area: Centered for attention -->
    <main class="flex-1 flex flex-col items-center justify-center px-10 pt-14">
      
      <!-- Top: Icon Placeholder (64x64px) -->
      <div class="w-16 h-16 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center bg-neutral-50 mb-10">
        <iconify-icon icon="lucide:camera" class="text-3xl text-neutral-400"></iconify-icon>
      </div>

      <!-- Middle: Permission Title -->
      <h1 class="text-[24px] font-bold tracking-tight text-center mb-4">
        Camera Access
      </h1>

      <!-- Middle: Explanation Text -->
      <p class="text-[15px] leading-relaxed text-neutral-500 text-center max-w-[280px]">
        We need access to your camera to enable video calls and photos within the app. Your privacy is important to us.
      </p>

    </main>

    <!-- Bottom: Action Section -->
    <footer class="shrink-0 px-8 pb-[34px] flex flex-col items-center space-y-4">
      
      <!-- Primary Action: Allow -->
      <a 
        href="#"
        id="btn-allow-permission"
        class="w-full h-12 bg-black text-white font-medium rounded-xl flex items-center justify-center text-[16px] transition-transform active:scale-[0.98]"
      >
        Allow
      </a>

      <!-- Secondary Action: Not now -->
      <a 
        href="#"
        id="btn-deny-permission"
        class="w-full h-11 flex items-center justify-center text-[14px] text-neutral-400 font-medium hover:text-neutral-600 transition-colors"
      >
        Not now
      </a>

    </footer>
  </div>
</body>
</html>
~~~
