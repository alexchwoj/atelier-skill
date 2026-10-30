# BudgetBuddy Modern Fintech Redesign

> Redesign all screens with this EXACT color palette — no deviations: Charcoal (#141a16) for primary text and dark surfaces, Off-White (#f0ede6) for screen backgrounds, White (#ffffff) for cards and inputs, Coral Red (#e63946) for expense amounts and primary CTAs, Sage (#a3b1ac) for borders and secondary text, Teal (#2ec4b6) for income amounts and savings and AI features and positive trends, Slate (#2a3630) for elevated dark surfaces and nav bar. Use Inter font family. Border-radius 20px on main cards, 12px on nested elements. The teal+coral combo gives modern fintech energy like Wise or Nubank. Teal should appear on income amounts, savings metrics, the AI chat accent, and positive trend indicators. Coral red only on expenses, alerts, and the main action button. Keep everything else from the mature fintech direction — tight spacing, sharp typography, premium feel.


---

Redesign all screens with this EXACT color palette — no deviations: Charcoal (#141a16) for primary text and dark surfaces, Off-White (#f0ede6) for screen backgrounds, White (#ffffff) for cards and inputs, Coral Red (#e63946) for expense amounts and primary CTAs, Sage (#a3b1ac) for borders and secondary text, Teal (#2ec4b6) for income amounts and savings and AI features and positive trends, Slate (#2a3630) for elevated dark surfaces and nav bar. Use Inter font family. Border-radius 20px on main cards, 12px on nested elements. The teal+coral combo gives modern fintech energy like Wise or Nubank. Teal should appear on income amounts, savings metrics, the AI chat accent, and positive trend indicators. Coral red only on expenses, alerts, and the main action button. Keep everything else from the mature fintech direction — tight spacing, sharp typography, premium feel.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BudgetBuddy App Concept</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f0ede6;
      margin: 0;
      overflow-x: auto;
      letter-spacing: -0.01em;
    }
    :root {
      --charcoal: #141a16;
      --off-white: #f0ede6;
      --white: #ffffff;
      --coral-red: #e63946;
      --sage: #a3b1ac;
      --teal: #2ec4b6;
      --slate: #2a3630;
    }
    .iphone-screen {
      width: 390px;
      height: 844px;
      background-color: var(--off-white);
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
      box-shadow: 0 40px 80px -15px rgba(0,0,0,0.08);
      border: 10px solid #000;
      border-radius: 54px;
    }
    .custom-scroll::-webkit-scrollbar {
      display: none;
    }
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 20px;
    }
    .scanning-line {
      height: 2px;
      background: var(--coral-red);
      box-shadow: 0 0 10px var(--coral-red);
      width: 100%;
      position: absolute;
      top: 0;
      animation: scan 2.5s infinite linear;
    }
    @keyframes scan {
      0% { top: 0% }
      100% { top: 100% }
    }
    h1, h2, h3, h4 {
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
  </style>
</head>
<body>
  <div class="min-h-screen flex items-center py-12 px-12 gap-12 overflow-x-auto custom-scroll bg-[#e5e1d9]">
    
    <!-- SCREEN 1: HOME DASHBOARD -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col p-5 overflow-y-auto custom-scroll pb-24">
        <header class="flex justify-between items-center mb-6 mt-2">
          <div>
            <p class="text-[#a3b1ac] text-[11px] font-bold uppercase tracking-wider">Good morning</p>
            <h1 class="text-[#141a16] text-xl font-extrabold">Alex Mercer</h1>
          </div>
          <div class="relative">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" class="w-11 h-11 bg-white rounded-full border border-[#a3b1ac]/30">
            <span class="absolute top-0 right-0 w-3 h-3 bg-[#e63946] border-2 border-[#f0ede6] rounded-full"></span>
          </div>
        </header>

        <div class="bg-[#141a16] rounded-[20px] p-6 text-white mb-6 relative overflow-hidden shadow-xl">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <p class="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Monthly Spend</p>
          <h2 class="text-[32px] font-black tracking-tighter mb-4">$2,450.80</h2>
          <div class="flex items-center gap-1.5 text-[11px] font-bold bg-[#2ec4b6]/20 w-fit px-3 py-1.5 rounded-lg">
            <iconify-icon icon="lucide:trending-down" class="text-[#2ec4b6]"></iconify-icon>
            <span class="text-[#2ec4b6]">12% less than last month</span>
          </div>
        </div>

        <div class="bento-grid mb-6">
          <div class="bg-white rounded-[20px] p-4 border border-[#a3b1ac]/20 shadow-sm">
            <iconify-icon icon="lucide:arrow-up-right" class="text-[#2ec4b6] text-lg mb-2"></iconify-icon>
            <p class="text-[#a3b1ac] text-[10px] font-bold uppercase tracking-wide">Income</p>
            <p class="text-[#141a16] text-lg font-extrabold">$5,200</p>
          </div>
          <div class="bg-white rounded-[20px] p-4 border border-[#a3b1ac]/20 shadow-sm">
            <iconify-icon icon="lucide:arrow-down-left" class="text-[#141a16] text-lg mb-2"></iconify-icon>
            <p class="text-[#a3b1ac] text-[10px] font-bold uppercase tracking-wide">Expenses</p>
            <p class="text-[#141a16] text-lg font-extrabold">$2,450</p>
          </div>
          <div class="bg-[#141a16] rounded-[20px] p-4 col-span-2 flex items-center justify-between shadow-sm text-white">
            <div>
              <p class="text-white/40 text-[10px] font-bold uppercase tracking-wide">Total Savings</p>
              <p class="text-[#2ec4b6] text-xl font-extrabold">$12,400.00</p>
            </div>
            <div class="w-10 h-10 bg-[#2ec4b6]/10 rounded-xl flex items-center justify-center">
              <iconify-icon icon="lucide:piggy-bank" class="text-[#2ec4b6] text-xl"></iconify-icon>
            </div>
          </div>
        </div>

        <div class="mb-6 overflow-x-auto flex gap-2 custom-scroll -mx-5 px-5">
          <div class="bg-[#141a16] text-white px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">Overview</div>
          <div class="bg-white text-[#141a16] px-5 py-2 rounded-xl text-xs font-bold border border-[#a3b1ac]/20 whitespace-nowrap shadow-sm">Food</div>
          <div class="bg-white text-[#141a16] px-5 py-2 rounded-xl text-xs font-bold border border-[#a3b1ac]/20 whitespace-nowrap shadow-sm">Transport</div>
          <div class="bg-white text-[#141a16] px-5 py-2 rounded-xl text-xs font-bold border border-[#a3b1ac]/20 whitespace-nowrap shadow-sm">Bills</div>
        </div>

        <div class="flex justify-between items-center mb-4">
          <h3 class="text-[#141a16] font-extrabold text-xs uppercase tracking-wider">Recent Activity</h3>
          <a href="#" id="view-all-transactions" class="text-[#a3b1ac] text-[10px] font-bold uppercase tracking-widest hover:text-[#141a16] transition-colors">View All</a>
        </div>

        <div class="space-y-2">
          <div class="bg-white p-3 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-[#f0ede6] rounded-xl flex items-center justify-center text-lg">☕</div>
              <div>
                <p class="text-[#141a16] font-bold text-sm">Starbucks Coffee</p>
                <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">Food &bull; Today</p>
              </div>
            </div>
            <p class="text-[#e63946] font-extrabold text-sm">-$5.40</p>
          </div>
          <div class="bg-white p-3 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-[#f0ede6] rounded-xl flex items-center justify-center text-lg">🚗</div>
              <div>
                <p class="text-[#141a16] font-bold text-sm">Uber Ride</p>
                <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">Transport &bull; Yesterday</p>
              </div>
            </div>
            <p class="text-[#e63946] font-extrabold text-sm">-$18.20</p>
          </div>
          <div class="bg-white p-3 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-[#2ec4b6]/5 rounded-xl flex items-center justify-center text-lg">🏦</div>
              <div>
                <p class="text-[#141a16] font-bold text-sm">Salary Deposit</p>
                <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">Income &bull; Oct 12</p>
              </div>
            </div>
            <p class="text-[#2ec4b6] font-extrabold text-sm">+$2,600.00</p>
          </div>
        </div>

        <!-- Bottom Nav Bar Component -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-[340px] h-14 bg-[#2a3630] rounded-2xl flex items-center justify-around px-4 shadow-2xl z-50">
          <a href="#" id="nav-home" class="text-white opacity-100"><iconify-icon icon="lucide:home" class="text-xl"></iconify-icon></a>
          <a href="#" id="nav-stats" class="text-white opacity-40"><iconify-icon icon="lucide:bar-chart-3" class="text-xl"></iconify-icon></a>
          <div class="relative">
            <a href="#" id="nav-add" class="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#e63946] rounded-2xl flex items-center justify-center shadow-lg border-4 border-[#2a3630] text-white transition-transform active:scale-90">
              <iconify-icon icon="lucide:plus" class="text-2xl"></iconify-icon>
            </a>
          </div>
          <a href="#" id="nav-history" class="text-white opacity-40"><iconify-icon icon="lucide:wallet" class="text-xl"></iconify-icon></a>
          <a href="#" id="nav-settings" class="text-white opacity-40"><iconify-icon icon="lucide:user-2" class="text-xl"></iconify-icon></a>
        </div>
      </div>
    </div>

    <!-- SCREEN 2: ADD EXPENSE -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col p-6">
        <header class="flex justify-between items-center mb-8 mt-2">
          <a href="#" id="back-add" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#141a16] border border-[#a3b1ac]/20">
            <iconify-icon icon="lucide:arrow-left" class="text-xl"></iconify-icon>
          </a>
          <h2 class="text-[#141a16] font-extrabold text-xs uppercase tracking-wider">Add Expense</h2>
          <div class="w-10"></div>
        </header>

        <div class="text-center mb-10">
          <p class="text-[#a3b1ac] font-bold text-[10px] uppercase tracking-widest mb-2">Amount</p>
          <div class="flex items-center justify-center">
            <span class="text-[#141a16] text-3xl font-black mr-1">$</span>
            <input type="text" value="42.00" class="bg-transparent text-[#141a16] text-5xl font-black w-40 text-center outline-none focus:ring-0 tracking-tighter">
          </div>
        </div>

        <div class="grid grid-cols-4 gap-3 mb-8">
          <div class="flex flex-col items-center gap-2">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-xl border border-[#a3b1ac]/20 hover:border-[#141a16] cursor-pointer shadow-sm transition-all">
              🍔
            </div>
            <span class="text-[9px] font-extrabold text-[#a3b1ac] uppercase">Food</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-xl border border-[#a3b1ac]/20 hover:border-[#141a16] cursor-pointer shadow-sm transition-all">
              🚕
            </div>
            <span class="text-[9px] font-extrabold text-[#a3b1ac] uppercase">Travel</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-xl border-2 border-[#141a16] cursor-pointer shadow-sm transition-all">
              🎮
            </div>
            <span class="text-[9px] font-black text-[#141a16] uppercase">Leisure</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-xl border border-[#a3b1ac]/20 hover:border-[#141a16] cursor-pointer shadow-sm transition-all">
              🛍️
            </div>
            <span class="text-[9px] font-extrabold text-[#a3b1ac] uppercase">Retail</span>
          </div>
        </div>

        <div class="space-y-3 mb-auto">
          <div class="bg-white rounded-[12px] p-4 flex items-center gap-3 border border-[#a3b1ac]/20 shadow-sm">
            <iconify-icon icon="lucide:calendar" class="text-[#a3b1ac] text-lg"></iconify-icon>
            <span class="text-[#141a16] font-semibold text-sm">Today, 14 Oct 2023</span>
          </div>
          <div class="bg-white rounded-[12px] p-4 flex items-center gap-3 border border-[#a3b1ac]/20 shadow-sm">
            <iconify-icon icon="lucide:align-left" class="text-[#a3b1ac] text-lg"></iconify-icon>
            <input type="text" placeholder="Add payment note..." class="bg-transparent w-full text-sm outline-none font-semibold text-[#141a16] placeholder-[#a3b1ac]">
          </div>
          <div class="flex items-center gap-3 mt-4">
             <button id="camera-btn" class="w-14 h-14 bg-white border border-[#a3b1ac]/20 rounded-[12px] flex items-center justify-center text-[#141a16] shadow-sm active:scale-95 transition-all">
               <iconify-icon icon="lucide:camera" class="text-xl"></iconify-icon>
             </button>
             <button id="save-expense" class="flex-1 h-14 bg-[#e63946] rounded-[12px] text-white font-extrabold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">
               Confirm Transaction
             </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 3: TRANSACTION LIST -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col p-0 overflow-y-auto custom-scroll">
        <div class="bg-[#141a16] p-6 pt-10 rounded-b-[20px] shadow-lg mb-4">
          <h2 class="text-white font-black text-2xl mb-4 tracking-tighter">Transactions</h2>
          <div class="relative mb-6">
            <iconify-icon icon="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-lg"></iconify-icon>
            <input type="text" placeholder="Search history" class="w-full bg-white/10 h-11 rounded-xl pl-11 pr-4 text-xs font-bold text-white placeholder-white/30 outline-none border border-white/5">
          </div>
          <div class="flex gap-2 overflow-x-auto custom-scroll">
             <span class="bg-white text-[#141a16] px-4 py-2 rounded-lg text-[10px] font-black uppercase whitespace-nowrap shadow-md">All Time</span>
             <span class="bg-white/10 text-white/60 px-4 py-2 rounded-lg text-[10px] font-black uppercase whitespace-nowrap border border-white/5">Week</span>
             <span class="bg-white/10 text-white/60 px-4 py-2 rounded-lg text-[10px] font-black uppercase whitespace-nowrap border border-white/5">Month</span>
          </div>
        </div>

        <div class="px-5 space-y-6 pb-24">
          <section>
            <div class="flex justify-between items-center mb-3 border-b border-[#a3b1ac]/10 pb-2">
              <p class="text-[#a3b1ac] font-bold text-[9px] uppercase tracking-widest">Today, Oct 14</p>
              <p class="text-[#141a16] font-black text-[10px]">$45.20</p>
            </div>
            <div class="space-y-1.5">
              <div class="bg-white p-3.5 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 bg-[#f0ede6] rounded-lg flex items-center justify-center text-lg">🍔</div>
                  <div>
                    <p class="text-[#141a16] font-extrabold text-sm">Shake Shack</p>
                    <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">12:45 PM &bull; Visa **** 4242</p>
                  </div>
                </div>
                <p class="text-[#e63946] font-black text-sm">-24.50</p>
              </div>
              <div class="bg-white p-3.5 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 bg-[#f0ede6] rounded-lg flex items-center justify-center text-lg">🚕</div>
                  <div>
                    <p class="text-[#141a16] font-extrabold text-sm">Uber US</p>
                    <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">09:20 AM &bull; Mastercard **** 1092</p>
                  </div>
                </div>
                <p class="text-[#e63946] font-black text-sm">-20.70</p>
              </div>
            </div>
          </section>

          <section>
            <div class="flex justify-between items-center mb-3 border-b border-[#a3b1ac]/10 pb-2">
              <p class="text-[#a3b1ac] font-bold text-[9px] uppercase tracking-widest">Yesterday, Oct 13</p>
              <p class="text-[#141a16] font-black text-[10px]">$128.00</p>
            </div>
            <div class="bg-white p-3.5 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 bg-[#f0ede6] rounded-lg flex items-center justify-center text-lg">🛍️</div>
                  <div>
                    <p class="text-[#141a16] font-extrabold text-sm">Apple Store</p>
                    <p class="text-[#a3b1ac] text-[9px] font-bold uppercase tracking-tight">06:15 PM &bull; Apple Pay</p>
                  </div>
                </div>
                <p class="text-[#e63946] font-black text-sm">-128.00</p>
              </div>
          </section>
        </div>
      </div>
    </div>

    <!-- SCREEN 4: RECEIPT CAPTURE -->
    <div class="iphone-screen">
      <div class="h-full relative overflow-hidden bg-black flex flex-col">
        <!-- Viewfinder Background -->
        <div class="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=390&h=844&auto=format&fit=crop')] bg-cover bg-center">
           <div class="scanning-line"></div>
        </div>
        
        <div class="relative z-10 flex flex-col h-full p-6">
           <div class="flex justify-between items-center mb-auto pt-4">
             <a href="#" id="close-camera" class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/10">
               <iconify-icon icon="lucide:x"></iconify-icon>
             </a>
             <span class="text-[#2ec4b6] font-extrabold text-[9px] uppercase tracking-[0.2em] bg-black/40 backdrop-blur-xl px-4 py-2 rounded-lg border border-[#2ec4b6]/30 shadow-lg">Analyzing Data...</span>
             <div class="w-10"></div>
           </div>

           <div class="border border-white/30 border-dashed rounded-[20px] w-full h-80 mb-auto relative bg-white/5">
             <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/80 rounded-tl-lg"></div>
             <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/80 rounded-tr-lg"></div>
             <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/80 rounded-bl-lg"></div>
             <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/80 rounded-br-lg"></div>
           </div>

           <div class="bg-white rounded-[20px] p-6 mb-4 shadow-2xl">
              <div class="flex items-center gap-4 mb-5">
                <div class="w-10 h-10 bg-[#2ec4b6]/10 rounded-lg flex items-center justify-center text-[#2ec4b6] text-xl">
                  <iconify-icon icon="lucide:check-circle-2"></iconify-icon>
                </div>
                <div>
                  <p class="text-[9px] text-[#a3b1ac] font-bold uppercase tracking-widest">Merchant Recognized</p>
                  <p class="text-[#141a16] font-black text-base">Walmart Marketplace</p>
                </div>
              </div>
              <div class="flex justify-between items-end border-t border-[#a3b1ac]/10 pt-5">
                <div>
                  <p class="text-[9px] text-[#a3b1ac] font-bold uppercase tracking-widest">Extracted Total</p>
                  <p class="text-3xl font-black text-[#141a16] tracking-tighter">$84.92</p>
                </div>
                <button class="bg-[#e63946] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                  Confirm
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 5: BANK IMPORT -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col p-6 overflow-y-auto custom-scroll">
        <header class="mb-8 mt-2">
          <h2 class="text-[#141a16] font-black text-2xl tracking-tighter">Data Import</h2>
          <p class="text-[#a3b1ac] font-semibold text-xs mt-1">Sync from Bank Statement (Wise/Nubank)</p>
        </header>

        <div class="border-2 border-[#a3b1ac]/30 border-dashed rounded-[20px] p-8 mb-8 flex flex-col items-center justify-center text-center bg-white/60 hover:bg-white transition-all cursor-pointer shadow-inner">
          <div class="w-14 h-14 bg-[#141a16] rounded-2xl flex items-center justify-center text-white mb-4">
            <iconify-icon icon="lucide:file-up" class="text-2xl"></iconify-icon>
          </div>
          <p class="text-[#141a16] font-bold text-sm">Upload Statement</p>
          <p class="text-[#a3b1ac] text-[10px] font-bold uppercase mt-1 tracking-widest">PDF, CSV, or OFX</p>
        </div>

        <div class="flex justify-between items-center mb-4">
          <h3 class="text-[9px] text-[#a3b1ac] font-black uppercase tracking-widest">Review Transactions (3)</h3>
          <span class="text-[9px] text-[#141a16] font-bold cursor-pointer">Select All</span>
        </div>
        
        <div class="space-y-2 mb-8">
           <div class="bg-white p-4 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded border-2 border-[#141a16] bg-[#141a16] flex items-center justify-center">
                   <iconify-icon icon="lucide:check" class="text-white text-xs"></iconify-icon>
                </div>
                <div>
                  <p class="text-[#141a16] font-bold text-sm">Z-CANDY SHOP</p>
                  <span class="text-[9px] text-[#a3b1ac] font-bold uppercase tracking-tight">Shopping &bull; Oct 10</span>
                </div>
              </div>
              <p class="text-[#141a16] font-black text-sm">$12.50</p>
           </div>
           <div class="bg-white p-4 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded border-2 border-[#141a16] bg-[#141a16] flex items-center justify-center">
                   <iconify-icon icon="lucide:check" class="text-white text-xs"></iconify-icon>
                </div>
                <div>
                  <p class="text-[#141a16] font-bold text-sm">PETROBRAS GAS</p>
                  <span class="text-[9px] text-[#a3b1ac] font-bold uppercase tracking-tight">Transport &bull; Oct 09</span>
                </div>
              </div>
              <p class="text-[#141a16] font-black text-sm">$55.00</p>
           </div>
           <div class="bg-white p-4 rounded-[12px] flex items-center justify-between border border-[#a3b1ac]/10 opacity-40">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded border-2 border-[#a3b1ac]"></div>
                <div>
                  <p class="text-[#141a16] font-bold text-sm text-decoration-line: line-through">INTERNAL TRANSF</p>
                  <span class="text-[9px] text-[#a3b1ac] font-bold uppercase">Skipped</span>
                </div>
              </div>
              <p class="text-[#141a16] font-black text-sm">$200.00</p>
           </div>
        </div>

        <button id="confirm-import" class="w-full h-14 bg-[#e63946] rounded-xl text-white font-extrabold text-xs uppercase tracking-[0.2em] mt-auto shadow-lg active:scale-95 transition-all">
          Process Batch (2)
        </button>
      </div>
    </div>

    <!-- SCREEN 6: AI CHAT -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col">
        <header class="p-6 pt-10 bg-[#141a16] rounded-b-[20px] text-white shadow-lg">
           <div class="flex items-center gap-4">
             <div class="w-11 h-11 bg-[#2ec4b6]/10 rounded-xl flex items-center justify-center text-2xl border border-[#2ec4b6]/20">
               <iconify-icon icon="lucide:sparkles" class="text-[#2ec4b6]"></iconify-icon>
             </div>
             <div>
               <h2 class="font-black text-lg tracking-tight">Buddy Advisor</h2>
               <div class="flex items-center gap-2">
                 <span class="w-1.5 h-1.5 bg-[#2ec4b6] rounded-full animate-pulse"></span>
                 <span class="text-[10px] text-white/50 font-bold uppercase tracking-widest">Active Intelligence</span>
               </div>
             </div>
           </div>
        </header>

        <div class="flex-1 p-5 overflow-y-auto custom-scroll space-y-5 bg-[#f5f4f0]">
           <div class="flex flex-col gap-1.5">
              <div class="bg-white p-4 rounded-xl rounded-bl-none border border-[#a3b1ac]/10 shadow-sm max-w-[85%]">
                <p class="text-[13px] text-[#141a16] font-medium leading-relaxed">Analyze completed. Your spending on <strong class="text-[#2ec4b6]">Coffee & Dining</strong> is 18% above your usual baseline this week. Would you like to adjust your budget?</p>
              </div>
              <span class="text-[9px] text-[#a3b1ac] font-bold uppercase ml-1">09:41 AM</span>
           </div>

           <div class="flex flex-col gap-1.5 items-end">
              <div class="bg-[#2a3630] p-4 rounded-xl rounded-br-none shadow-md max-w-[85%] text-white">
                <p class="text-[13px] font-medium leading-relaxed">Show me the comparison by category.</p>
              </div>
              <span class="text-[9px] text-[#a3b1ac] font-bold uppercase mr-1">09:42 AM</span>
           </div>

           <div class="flex gap-1.5 items-center bg-white w-fit px-4 py-3 rounded-xl shadow-sm border border-[#a3b1ac]/10">
              <div class="w-1.5 h-1.5 bg-[#2ec4b6] rounded-full animate-bounce"></div>
              <div class="w-1.5 h-1.5 bg-[#2ec4b6] rounded-full animate-bounce delay-75"></div>
              <div class="w-1.5 h-1.5 bg-[#2ec4b6] rounded-full animate-bounce delay-150"></div>
           </div>
        </div>

        <div class="p-5 pt-2 bg-white border-t border-[#a3b1ac]/10 shadow-2xl">
           <div class="flex gap-2 overflow-x-auto custom-scroll mb-4">
              <button class="whitespace-nowrap bg-[#f0ede6] border border-[#a3b1ac]/20 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-tight text-[#141a16] hover:bg-[#2ec4b6] hover:text-white transition-colors">Balance Summary</button>
              <button class="whitespace-nowrap bg-[#f0ede6] border border-[#a3b1ac]/20 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-tight text-[#141a16] hover:bg-[#2ec4b6] hover:text-white transition-colors">Export PDF</button>
           </div>
           <div class="relative">
              <input type="text" placeholder="Query your finances..." class="w-full h-12 bg-[#f0ede6] rounded-xl px-5 text-xs font-bold shadow-inner outline-none pr-12 border border-[#a3b1ac]/20 focus:border-[#2ec4b6] transition-all">
              <button class="absolute right-2 top-2 w-8 h-8 bg-[#2ec4b6] text-white rounded-lg flex items-center justify-center active:scale-95 transition-transform">
                <iconify-icon icon="lucide:arrow-up" class="text-lg"></iconify-icon>
              </button>
           </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 7: CATEGORY MANAGEMENT -->
    <div class="iphone-screen">
      <div class="h-full flex flex-col p-6">
        <header class="flex justify-between items-center mb-8 mt-2">
           <h2 class="text-[#141a16] font-black text-2xl tracking-tighter">Allocations</h2>
           <button class="w-10 h-10 bg-[#141a16] rounded-xl flex items-center justify-center shadow-lg text-white transition-transform active:scale-95">
             <iconify-icon icon="lucide:plus" class="text-xl"></iconify-icon>
           </button>
        </header>

        <div class="space-y-3">
           <div class="bg-white p-5 rounded-[20px] border border-[#a3b1ac]/10 shadow-sm">
              <div class="flex justify-between items-center mb-4">
                 <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#f0ede6] rounded-xl flex items-center justify-center text-lg">🍔</div>
                    <div>
                       <p class="text-[#141a16] font-extrabold text-sm">Food & Drink</p>
                       <p class="text-[#a3b1ac] text-[10px] font-bold tracking-tight uppercase">$850 / $1,000 LIMIT</p>
                    </div>
                 </div>
                 <iconify-icon icon="lucide:more-horizontal" class="text-[#a3b1ac] hover:text-[#141a16] cursor-pointer"></iconify-icon>
              </div>
              <div class="w-full h-1.5 bg-[#f0ede6] rounded-full overflow-hidden">
                 <div class="h-full bg-[#e63946] rounded-full" style="width: 85%"></div>
              </div>
           </div>

           <div class="bg-white p-5 rounded-[20px] border border-[#a3b1ac]/10 shadow-sm">
              <div class="flex justify-between items-center mb-4">
                 <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#f0ede6] rounded-xl flex items-center justify-center text-lg">🚗</div>
                    <div>
                       <p class="text-[#141a16] font-extrabold text-sm">Transportation</p>
                       <p class="text-[#a3b1ac] text-[10px] font-bold tracking-tight uppercase">$320 / $400 LIMIT</p>
                    </div>
                 </div>
                 <iconify-icon icon="lucide:more-horizontal" class="text-[#a3b1ac] hover:text-[#141a16] cursor-pointer"></iconify-icon>
              </div>
              <div class="w-full h-1.5 bg-[#f0ede6] rounded-full overflow-hidden">
                 <div class="h-full bg-[#141a16] rounded-full" style="width: 80%"></div>
              </div>
           </div>

           <div class="bg-white p-5 rounded-[20px] border border-[#a3b1ac]/10 shadow-sm">
              <div class="flex justify-between items-center mb-4">
                 <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#e63946]/5 rounded-xl flex items-center justify-center text-lg">🏠</div>
                    <div>
                       <p class="text-[#141a16] font-extrabold text-sm">Fixed Costs</p>
                       <p class="text-[#e63946] text-[10px] font-black tracking-tight uppercase">$1,200 / $1,200 (MAX)</p>
                    </div>
                 </div>
                 <iconify-icon icon="lucide:alert-circle" class="text-[#e63946]"></iconify-icon>
              </div>
              <div class="w-full h-1.5 bg-[#e63946]/10 rounded-full overflow-hidden">
                 <div class="h-full bg-[#e63946] rounded-full" style="width: 100%"></div>
              </div>
           </div>

           <div class="bg-white p-6 rounded-[20px] border-2 border-dashed border-[#a3b1ac]/30 flex flex-col items-center py-10 opacity-60 hover:opacity-100 transition-all cursor-pointer group">
              <iconify-icon icon="lucide:plus-circle" class="text-[#a3b1ac] text-3xl mb-2 group-hover:text-[#141a16] transition-colors"></iconify-icon>
              <p class="text-[#141a16] font-bold text-xs uppercase tracking-widest">Create Allocation</p>
           </div>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
~~~
