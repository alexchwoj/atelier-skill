# SkimBuster - Adjusted Layout Position

> move up higher


---

move up higher

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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @view-transition {
      navigation: auto;
    }
    
    body {
      font-family: 'Lato', sans-serif;
      margin: 0;
      overflow: hidden;
    }

    .neomorph-inset {
      box-shadow: 
        inset 6px 6px 14px rgba(0, 0, 0, 0.9),
        inset -2px -2px 10px rgba(255, 255, 255, 0.01);
    }

    .neomorph-raised {
      box-shadow: 
        10px 10px 25px rgba(0, 0, 0, 0.85),
        -4px -4px 20px rgba(255, 255, 255, 0.01);
    }

    .glass-effect {
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.03);
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-15px) scale(1.05); }
    }

    .bg-app-texture {
      background-image: url('https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/315fc9da-4eca-4adb-b35e-7fecb7a70483/1768680035660-dcf95ed5/SkimbusterNoSkimmercreen.png');
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #000000;
    }

    /* Custom transition for inputs */
    .input-group:focus-within .input-icon {
      color: #9999A0;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <div class="h-screen w-full relative overflow-hidden bg-black text-[#9999A0] font-['Lato']">
    
    <!-- Background Layer -->
    <div class="absolute inset-0 bg-app-texture z-0"></div>

    <!-- Animated Background Decor -->
    <div class="absolute -top-24 -left-24 w-64 h-64 bg-slate-400/5 rounded-full blur-[100px] animate-pulse"></div>
    <div class="absolute top-1/2 -right-32 w-80 h-80 bg-slate-400/5 rounded-full blur-[120px]"></div>

    <!-- Content Layer -->
    <div class="relative z-10 h-full w-full flex flex-col items-center justify-between pt-2 pb-10 px-8">

    <!-- Header Section -->
    <div class="w-full flex flex-col items-center mt-0 mb-4 relative z-10">
      <div class="relative animate-float">
        <div class="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-110"></div>
        <img src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/315fc9da-4eca-4adb-b35e-7fecb7a70483/1768678879460-71673f20/SkimbusterByMicclo-13_1__1_.png" alt="SkimBuster Logo" class="w-72 h-auto relative z-10 drop-shadow-[0_0_20px_rgba(153,153,160,0.15)]">
      </div>
    </div>

    <!-- Login Form -->
    <div class="w-full max-w-sm space-y-5 relative z-10">
      
      <!-- Email Input -->
      <div class="input-group space-y-2">
        <div class="relative flex items-center glass-effect neomorph-inset rounded-3xl transition-all duration-300">
          <div class="pl-5 py-4">
            <iconify-icon icon="lucide:mail" class="input-icon text-[#9999A0] text-xl transition-all duration-300"></iconify-icon>
          </div>
          <input 
            id="email-input"
            type="email" 
            placeholder="Email address"
            class="w-full bg-transparent px-4 py-4 focus:outline-none text-[#9999A0] placeholder-[#9999A0]/50 text-sm font-light"
          >
        </div>
      </div>

      <!-- Password Input -->
      <div class="input-group space-y-2">
        <div class="relative flex items-center glass-effect neomorph-inset rounded-3xl transition-all duration-300">
          <div class="pl-5 py-4">
            <iconify-icon icon="lucide:lock" class="input-icon text-[#9999A0] text-xl transition-all duration-300"></iconify-icon>
          </div>
          <input 
            id="password-input"
            type="password" 
            placeholder="Password"
            class="w-full bg-transparent px-4 py-4 focus:outline-none text-[#9999A0] placeholder-[#9999A0]/50 text-sm font-light"
          >
          <div class="pr-5">
            <iconify-icon icon="lucide:eye-off" class="text-[#9999A0] hover:text-white cursor-pointer text-lg"></iconify-icon>
          </div>
        </div>
      </div>

      <!-- Remember Me Toggle -->
      <div class="flex items-center justify-between px-1">
        <span class="text-xs font-medium text-[#9999A0]">Remember me</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="w-11 h-6 bg-[#090a0d] peer-focus:outline-none rounded-full peer glass-effect neomorph-inset peer-checked:after:translate-x-full peer-checked:after:border-slate-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#9999A0] after:border-slate-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/10 peer-checked:after:bg-[#9999A0]"></div>
        </label>
      </div>

      <!-- Forgot Password Link -->
      <div class="text-center -mt-2">
        <a id="forgot-password-link" href="#" class="text-xs text-[#9999A0] hover:brightness-125 transition-all font-medium">Forgot password?</a>
      </div>

      <!-- Login Button -->
      <button 
        id="login-cta-btn"
        class="w-full py-4 glass-effect neomorph-raised rounded-3xl text-[#9999A0] font-bold tracking-widest drop-shadow-[0_0_5px_rgba(153,153,160,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group relative overflow-hidden"
      >
        <span class="relative z-10">LOGIN</span>
        <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>

      <!-- Footer Registration -->
      <div class="text-center pt-2">
        <p class="text-xs text-[#9999A0]">
          Don't have an account? 
          <a id="register-link" href="#" class="text-[#9999A0] font-bold ml-1 hover:underline">Register</a>
        </p>
      </div>
    </div>

    <!-- Bottom Action -->
    <div class="mb-32 mt-4 relative z-10">
       <a id="scan-action-link" href="#" class="block hover:scale-110 active:scale-95 transition-all duration-300">
          <img src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/315fc9da-4eca-4adb-b35e-7fecb7a70483/1768680630321-16f3e149/Scan.png" alt="Scan Action" class="w-40 h-40 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
       </a>
    </div>
    </div>

    <!-- Decorative light rays -->
    <div class="absolute top-0 left-0 w-full h-1/2 pointer-events-none opacity-20 z-0">
      <div class="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent transform rotate-[15deg]"></div>
      <div class="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent transform -rotate-[10deg]"></div>
    </div>

  </div>

  <script>
    // Simple interaction feedback
    document.getElementById('login-cta-btn').addEventListener('click', (e) => {
      e.preventDefault();
      const btn = e.currentTarget;
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin text-xl text-[#9999A0]"></iconify-icon>';
      setTimeout(() => {
        btn.innerHTML = '<span class="relative z-10 text-[#9999A0]">SUCCESS</span>';
        btn.classList.add('bg-[#9999A0]/20');
      }, 1500);
    });
  </script>
</body>
</html>
~~~
