# SGW - Enhanced Modal Interaction

> Increase the height of the "今すぐ注文を確定する" (Confirm Order Now) submit button. Make it larger and more prominent - increase the padding and font size to make it a more substantial, clickable button that stands out more in the form.


---

Increase the height of the "今すぐ注文を確定する" (Confirm Order Now) submit button. Make it larger and more prominent - increase the padding and font size to make it a more substantial, clickable button that stands out more in the form.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SGW - Immersive Interactive Platform</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        @view-transition {
            navigation: auto;
        }

        body {
            font-family: 'Plus+Jakarta+Sans', sans-serif;
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        /* Custom 3D & Animation effects */
        .perspective-container {
            perspective: 3000px;
        }

        .dashboard-3d {
            transform: rotateX(12deg) rotateY(-8deg) rotateZ(1deg);
            box-shadow: -40px 60px 120px -20px rgba(0, 0, 0, 0.1), 
                        0 10px 20px -5px rgba(0, 0, 0, 0.03);
            transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .floating {
            animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0) scale(1); }
            50% { transform: translateY(-40px) rotate(8deg) scale(1.05); }
        }

        /* Dynamic Mouse Cursor Animation */
        .simulated-cursor {
            position: absolute;
            pointer-events: none;
            z-index: 200;
            transform: translate(200px, 150px);
            filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3));
            transition: all 0.1s linear;
        }

        /* Sequential Form Animations */
        .modal-element {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-element.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Grid Background Pattern */
        .bg-grid {
            background-image: radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px);
            background-size: 50px 50px;
        }

        /* Interactive Cursor Animation Timeline */
        @keyframes cursor-flow {
            0% { transform: translate(100px, 100px); }
            15% { transform: translate(250px, 580px) scale(1); } /* Move to New Order */
            18% { transform: translate(250px, 580px) scale(0.8); } /* Click */
            21% { transform: translate(250px, 580px) scale(1); }
            35% { transform: translate(500px, 350px); } /* Hover Search */
            55% { transform: translate(500px, 450px); } /* Hover Category */
            75% { transform: translate(500px, 780px); } /* Move to Submit */
            80% { transform: translate(500px, 780px) scale(0.85); } /* Click Submit */
            100% { transform: translate(100px, 100px); }
        }

        .animate-cursor-journey {
            animation: cursor-flow 18s infinite ease-in-out;
        }

        /* Glassmorphism */
        .glass {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .input-focus-effect:focus-within {
            border-color: #38bdf8;
            box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.1);
        }

        /* Gradient Shine */
        .shine {
            position: relative;
            overflow: hidden;
        }
        .shine::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
            transform: rotate(45deg);
            animation: shine 3s infinite;
        }
        @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-[#f1f5f9] text-slate-800 relative">
        
        <!-- Background Grid -->
        <div class="fixed inset-0 bg-grid opacity-30 pointer-events-none"></div>

        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-[100] glass border-b border-slate-200/50">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-[#10b981] rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200/50">
                            <iconify-icon icon="lucide:shield-check" class="text-2xl"></iconify-icon>
                        </div>
                        <span class="text-2xl font-bold tracking-tight text-slate-900">SGW</span>
                    </div>
                    <div class="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-600">
                        <a href="#" id="nav-services-link" class="hover:text-emerald-600 transition-colors flex items-center gap-1">サービス <iconify-icon icon="lucide:chevron-down" class="text-xs"></iconify-icon></a>
                        <a href="#" id="nav-testimonials-link" class="hover:text-emerald-600 transition-colors">お客様の声</a>
                        <a href="#" id="nav-features-link" class="hover:text-emerald-600 transition-colors flex items-center gap-1">機能紹介 <iconify-icon icon="lucide:chevron-down" class="text-xs"></iconify-icon></a>
                        <a href="#" id="nav-blog-link" class="hover:text-emerald-600 transition-colors">ブログ</a>
                        <a href="#" id="nav-usage-link" class="hover:text-emerald-600 transition-colors">利用方法</a>
                        <a href="#" id="nav-faq-link" class="hover:text-emerald-600 transition-colors">よくある質問</a>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 text-emerald-700 text-sm font-bold">
                        <iconify-icon icon="lucide:check-circle" class="text-lg"></iconify-icon>
                        <span>ログイン済み</span>
                    </div>
                    <button id="theme-toggle-btn" class="p-2.5 rounded-xl hover:bg-slate-100 text-slate-500 transition-all">
                        <iconify-icon icon="lucide:sun-medium" class="text-xl"></iconify-icon>
                    </button>
                    <a href="#" id="nav-dashboard-cta" class="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">
                        <iconify-icon icon="lucide:layout-dashboard"></iconify-icon>
                        ダッシュボード
                    </a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <main class="pt-36 pb-64 px-6 relative">
            <div class="max-w-7xl mx-auto flex flex-col items-center">
                
                <!-- Hero Text -->
                <div class="text-center mb-24 max-w-4xl">
                    <span class="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black tracking-widest uppercase mb-8 shadow-sm">REVOLUTIONIZING ORDERING</span>
                    <h1 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-10">
                        直感的な操作で<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">未来をデザインする</span>
                    </h1>
                    <p class="text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                        SGWは、圧倒的なスピードと美しさを兼ね備えた、究極のダッシュボード体験をエンジニアリングしました。
                    </p>
                </div>

                <!-- 3D Dashboard Showcase Container -->
                <div class="relative w-full max-w-[1280px] perspective-container">
                    
                    <!-- Floating 3D Assets with high-intensity parallax -->
                    <div class="absolute -top-32 -left-32 w-64 h-64 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" id="parallax-bg-1"></div>
                    <div class="absolute top-60 -right-40 w-80 h-80 bg-sky-400/15 rounded-full blur-[120px] pointer-events-none" id="parallax-bg-2"></div>
                    
                    <!-- Dynamic Floating Icons -->
                    <div class="absolute -top-20 left-20 w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center floating" style="animation-delay: -0.5s;" id="parallax-icon-1">
                        <iconify-icon icon="logos:bitcoin" class="text-5xl"></iconify-icon>
                    </div>
                    <div class="absolute bottom-10 -left-24 w-28 h-28 bg-white shadow-2xl rounded-full flex items-center justify-center floating" style="animation-delay: -3.2s;" id="parallax-icon-2">
                        <iconify-icon icon="flat-color-icons:statistics" class="text-6xl"></iconify-icon>
                    </div>
                    <div class="absolute top-1/3 -right-20 w-20 h-20 bg-white shadow-2xl rounded-2xl flex items-center justify-center floating" style="animation-delay: -1.8s;" id="parallax-icon-3">
                        <iconify-icon icon="fluent-emoji:rocket" class="text-4xl"></iconify-icon>
                    </div>
                    <div class="absolute -bottom-16 right-40 w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center floating" style="animation-delay: -5s;" id="parallax-icon-4">
                        <iconify-icon icon="fluent-emoji:money-bag" class="text-5xl"></iconify-icon>
                    </div>

                    <!-- Main Dashboard Frame -->
                    <div class="dashboard-3d bg-white rounded-[3rem] p-5 md:p-10 overflow-hidden relative border border-slate-200/40 shadow-2xl">
                        
                        <!-- Simulated Cursor -->
                        <div class="simulated-cursor animate-cursor-journey" id="main-simulated-cursor">
                            <iconify-icon icon="lucide:cursor" class="text-emerald-500 text-4xl rotate-[-25deg]"></iconify-icon>
                        </div>

                        <!-- Mockup Header -->
                        <div class="flex items-center justify-between mb-12">
                            <div class="flex items-center gap-5">
                                <div class="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-200">
                                    <iconify-icon icon="lucide:user"></iconify-icon>
                                </div>
                                <h2 class="text-3xl font-black text-slate-800 tracking-tight">ダッシュボード</h2>
                            </div>
                            <div class="flex items-center gap-4">
                                <button class="px-6 py-2.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2" id="dashboard-refresh-btn">
                                    <iconify-icon icon="lucide:refresh-cw" class="text-xl"></iconify-icon>
                                    更新
                                </button>
                            </div>
                        </div>

                        <!-- Content Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                                <div class="flex justify-between items-start mb-8">
                                    <div class="w-14 h-14 bg-emerald-500 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-emerald-100">
                                        <iconify-icon icon="lucide:wallet" class="text-3xl"></iconify-icon>
                                    </div>
                                    <button class="text-xs font-black bg-emerald-500 text-white px-5 py-2.5 rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200">+ 入金</button>
                                </div>
                                <div class="text-4xl font-black text-slate-900 mb-2 tracking-tight">¥25,450</div>
                                <div class="text-sm text-slate-400 font-bold">ウォレット残高</div>
                            </div>

                            <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                                <div class="flex justify-between items-start mb-8">
                                    <div class="w-14 h-14 bg-amber-500 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-amber-100">
                                        <iconify-icon icon="lucide:crown" class="text-3xl"></iconify-icon>
                                    </div>
                                    <span class="text-[11px] font-black bg-amber-500 text-white px-3 py-1.5 rounded-lg">ゴールド</span>
                                </div>
                                <div class="text-4xl font-black text-slate-900 mb-2 tracking-tight">ゴールド</div>
                                <div class="text-sm text-slate-400 font-bold">VIPランク</div>
                            </div>

                            <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                                <div class="flex justify-between items-start mb-8">
                                    <div class="w-14 h-14 bg-sky-500 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-sky-100">
                                        <iconify-icon icon="lucide:bar-chart-3" class="text-3xl"></iconify-icon>
                                    </div>
                                    <span class="text-xs font-black text-sky-600 uppercase tracking-wider">完了率 81%</span>
                                </div>
                                <div class="text-4xl font-black text-slate-900 mb-2 tracking-tight">80</div>
                                <div class="text-sm text-slate-400 font-bold">注文履歴</div>
                            </div>

                            <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                                <div class="flex justify-between items-start mb-8">
                                    <div class="w-14 h-14 bg-fuchsia-500 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-fuchsia-100">
                                        <iconify-icon icon="lucide:calendar-check" class="text-3xl"></iconify-icon>
                                    </div>
                                    <span class="text-xs font-black text-emerald-500 uppercase tracking-wider">+¥1,000</span>
                                </div>
                                <div class="text-4xl font-black text-slate-900 mb-2 tracking-tight">¥4,683</div>
                                <div class="text-sm text-slate-400 font-bold">今月の支出</div>
                            </div>
                        </div>

                        <!-- Bottom Section -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div class="lg:col-span-2">
                                <div class="bg-slate-50/70 border border-slate-200/50 rounded-[3rem] p-10 h-full">
                                    <div class="flex items-center gap-4 mb-10">
                                        <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl">
                                            <iconify-icon icon="lucide:sparkles"></iconify-icon>
                                        </div>
                                        <div>
                                            <h3 class="text-2xl font-black">サービス注文</h3>
                                            <p class="text-sm text-slate-400 font-bold">お好みのサービスを選択してください</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-3 gap-6">
                                        <div class="bg-sky-50 p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 border border-sky-100 transition-all cursor-pointer group hover:bg-sky-100" id="btn-new-order-trigger">
                                            <div class="w-14 h-14 bg-sky-500 rounded-[1.25rem] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform"><iconify-icon icon="lucide:plus"></iconify-icon></div>
                                            <div class="flex flex-col gap-1">
                                                <span class="font-black text-lg">新規注文</span>
                                                <span class="text-[10px] text-slate-400 font-bold">サービスを注文</span>
                                            </div>
                                        </div>
                                        <div class="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 border border-fuchsia-100 hover:bg-fuchsia-100 transition-all">
                                            <div class="w-14 h-14 bg-fuchsia-500 rounded-[1.25rem] flex items-center justify-center text-white text-2xl"><iconify-icon icon="lucide:layers"></iconify-icon></div>
                                            <div class="flex flex-col gap-1">
                                                <span class="font-black text-lg">大量注文</span>
                                                <span class="text-[10px] text-slate-400 font-bold">まとめて注文</span>
                                            </div>
                                        </div>
                                        <div class="bg-amber-50 p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 border border-amber-100 hover:bg-amber-100 transition-all">
                                            <div class="w-14 h-14 bg-amber-500 rounded-[1.25rem] flex items-center justify-center text-white text-2xl"><iconify-icon icon="lucide:star"></iconify-icon></div>
                                            <div class="flex flex-col gap-1">
                                                <span class="font-black text-lg">VIP特典</span>
                                                <span class="text-[10px] text-slate-400 font-bold">ゴールド</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-8">
                                <div class="bg-white border border-slate-200/50 rounded-[3rem] p-8 shadow-sm flex-1">
                                    <div class="flex items-center gap-4 mb-8">
                                        <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl"><iconify-icon icon="lucide:target"></iconify-icon></div>
                                        <div>
                                            <span class="font-black block">VIP進捗</span>
                                            <span class="text-[10px] text-slate-400 font-bold">次のレベルまで</span>
                                        </div>
                                    </div>
                                    <div class="space-y-6">
                                        <div class="space-y-3">
                                            <div class="flex justify-between text-xs font-black">
                                                <span class="text-slate-400 flex items-center gap-2"><iconify-icon icon="lucide:check-circle"></iconify-icon>ベーシック</span>
                                                <span class="text-slate-900">¥0</span>
                                            </div>
                                            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-500 w-full"></div>
                                            </div>
                                        </div>
                                        <div class="space-y-3">
                                            <div class="flex justify-between text-xs font-black">
                                                <span class="text-orange-600 flex items-center gap-2"><iconify-icon icon="lucide:award"></iconify-icon>ブロンズ</span>
                                                <span class="text-slate-900">¥10,000</span>
                                            </div>
                                            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-orange-500 w-[65%]"></div>
                                            </div>
                                        </div>
                                        <div class="space-y-3">
                                            <div class="flex justify-between text-xs font-black">
                                                <span class="text-slate-400 flex items-center gap-2"><iconify-icon icon="lucide:award"></iconify-icon>シルバー</span>
                                                <span class="text-slate-900">¥50,000</span>
                                            </div>
                                            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-300 w-0"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- MODAL OVERLAY (Initially Hidden, optimized for single-view fit) -->
                        <div id="new-order-modal" class="absolute inset-0 z-[150] bg-white opacity-0 pointer-events-none transition-all duration-700 flex flex-col p-8 lg:p-10">
                            <!-- Modal Header -->
                            <div class="modal-element flex items-center gap-5 mb-6">
                                <div class="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl shadow-sky-100">
                                    <iconify-icon icon="lucide:plus"></iconify-icon>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-slate-900">新規注文</h3>
                                    <p class="text-slate-500 text-xs font-bold uppercase tracking-wider">利用可能なサービスから選択</p>
                                </div>
                            </div>

                            <!-- Modal Form -->
                            <div class="space-y-4 max-w-5xl flex-1 flex flex-col justify-between">
                                <div class="modal-element">
                                    <label class="flex items-center gap-2 text-[10px] font-black text-slate-400 mb-2 tracking-widest uppercase">
                                        <iconify-icon icon="lucide:search" class="text-sky-500"></iconify-icon>
                                        サービス検索
                                    </label>
                                    <div class="relative input-focus-effect rounded-xl border-2 border-slate-100 transition-all overflow-hidden bg-slate-50/50">
                                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                                            <iconify-icon icon="lucide:search"></iconify-icon>
                                        </div>
                                        <input type="text" placeholder="キーワードを入力" class="w-full py-3.5 pl-11 pr-5 bg-transparent outline-none font-bold text-slate-700 placeholder:text-slate-300 text-sm">
                                    </div>
                                </div>

                                <div class="modal-element grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="space-y-2">
                                        <label class="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                            <iconify-icon icon="lucide:folder" class="text-sky-500"></iconify-icon>
                                            カテゴリー
                                        </label>
                                        <div class="relative input-focus-effect rounded-xl border-2 border-slate-100 bg-white">
                                            <select class="w-full appearance-none py-3.5 px-5 pr-10 bg-transparent outline-none font-bold text-slate-700 text-sm">
                                                <option>カテゴリーを選択</option>
                                                <option>SNSプロモーション</option>
                                                <option>WEBマーケティング</option>
                                                <option>コンテンツ制作</option>
                                            </select>
                                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <iconify-icon icon="lucide:chevron-down"></iconify-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                            <iconify-icon icon="lucide:shopping-bag" class="text-sky-500"></iconify-icon>
                                            サービス
                                        </label>
                                        <div class="relative input-focus-effect rounded-xl border-2 border-slate-100 bg-white">
                                            <select class="w-full appearance-none py-3.5 px-5 pr-10 bg-transparent outline-none font-bold text-slate-700 text-sm">
                                                <option>サービスを選択</option>
                                                <option>Instagram いいね (高品質)</option>
                                                <option>Youtube 視聴数増量</option>
                                                <option>Twitter フォロワー増加</option>
                                            </select>
                                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <iconify-icon icon="lucide:chevron-down"></iconify-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-element space-y-2">
                                    <label class="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                        <iconify-icon icon="lucide:link" class="text-sky-500"></iconify-icon>
                                        ターゲットリンク
                                    </label>
                                    <div class="input-focus-effect rounded-xl border-2 border-slate-100 transition-all overflow-hidden bg-slate-50/50">
                                        <input type="text" placeholder="https://example.com/your-link" class="w-full py-3.5 px-5 bg-transparent outline-none font-bold text-slate-700 placeholder:text-slate-300 text-sm">
                                    </div>
                                </div>

                                <div class="modal-element space-y-2">
                                    <label class="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                        <iconify-icon icon="lucide:hash" class="text-sky-500"></iconify-icon>
                                        注文数量
                                    </label>
                                    <div class="input-focus-effect rounded-xl border-2 border-slate-100 transition-all overflow-hidden bg-slate-50/50">
                                        <input type="number" placeholder="数量を入力してください" class="w-full py-3.5 px-5 bg-transparent outline-none font-bold text-slate-700 placeholder:text-slate-300 text-sm">
                                    </div>
                                </div>

                                <div class="modal-element pt-4">
                                    <button class="w-full py-8 rounded-[2rem] bg-gradient-to-r from-sky-400 to-sky-500 text-white font-black text-2xl shadow-2xl shadow-sky-300/60 hover:scale-[1.01] transition-transform shine" id="modal-submit-btn">
                                        今すぐ注文を確定する
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>

        <!-- CTA Section -->
        <section class="py-40 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-3xl">
                    <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <div class="bg-grid w-full h-full"></div>
                    </div>
                    <div class="relative z-10">
                        <h2 class="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">次世代の管理を、<br/><span class="text-emerald-400">今すぐ手に入れる。</span></h2>
                        <p class="text-slate-400 text-xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                            SGWはビジネスの常識を塗り替えます。数分で始まる、これまでにない体験をあなたのチームへ。
                        </p>
                        <div class="flex flex-wrap justify-center gap-8">
                            <a href="#" id="cta-get-started" class="px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105">
                                無料で始める
                            </a>
                            <a href="#" id="cta-book-demo" class="px-12 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-lg transition-all border border-white/20 backdrop-blur-sm">
                                デモを予約
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="border-t border-slate-200 py-24 bg-white relative z-10">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div class="col-span-2">
                        <div class="flex items-center gap-3 mb-10">
                            <div class="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                                <iconify-icon icon="lucide:shield-check" class="text-2xl"></iconify-icon>
                            </div>
                            <span class="text-2xl font-black tracking-tight text-slate-900">SGW</span>
                        </div>
                        <p class="text-slate-500 font-medium max-w-sm mb-10 leading-relaxed">
                            究極のデザインとテクノロジーで、業務をアートへと昇華させる次世代プラットフォーム。
                        </p>
                        <div class="flex gap-6">
                            <a href="#" id="footer-social-twitter" class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all shadow-sm"><iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-social-instagram" class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all shadow-sm"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-social-linkedin" class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all shadow-sm"><iconify-icon icon="lucide:linkedin" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">プロダクト</h4>
                        <ul class="space-y-5 text-slate-500 font-bold">
                            <li><a href="#" id="f-dash-link" class="hover:text-emerald-500 transition-colors">ダッシュボード</a></li>
                            <li><a href="#" id="f-price-link" class="hover:text-emerald-500 transition-colors">料金プラン</a></li>
                            <li><a href="#" id="f-api-link" class="hover:text-emerald-500 transition-colors">API 連携</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">サポート</h4>
                        <ul class="space-y-5 text-slate-500 font-bold">
                            <li><a href="#" id="f-help-link" class="hover:text-emerald-500 transition-colors">ヘルプセンター</a></li>
                            <li><a href="#" id="f-contact-link" class="hover:text-emerald-500 transition-colors">お問い合わせ</a></li>
                            <li><a href="#" id="f-terms-link" class="hover:text-emerald-500 transition-colors">利用規約</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div class="text-slate-400 font-bold text-sm">
                        © 2024 SGW Platform. Engineered for Excellence.
                    </div>
                    <div class="flex gap-8 text-sm font-bold text-slate-400">
                        <a href="#" id="f-privacy-link" class="hover:text-slate-900">プライバシーポリシー</a>
                        <a href="#" id="f-legal-link" class="hover:text-slate-900">特商法に基づく表記</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        // Advanced Parallax and Interaction Control
        const dashboard = document.querySelector('.dashboard-3d');
        const modal = document.getElementById('new-order-modal');
        const modalElements = document.querySelectorAll('.modal-element');
        const cursor = document.getElementById('main-simulated-cursor');
        
        // Floating assets for parallax
        const assets = [
            { id: 'parallax-bg-1', factor: 0.15 },
            { id: 'parallax-bg-2', factor: 0.25 },
            { id: 'parallax-icon-1', factor: -0.4 },
            { id: 'parallax-icon-2', factor: 0.35 },
            { id: 'parallax-icon-3', factor: -0.2 },
            { id: 'parallax-icon-4', factor: 0.45 }
        ];

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Apply main dashboard rotation based on scroll
            const rotX = 12 - (scrollY * 0.015);
            const rotY = -8 + (scrollY * 0.01);
            const transY = scrollY * -0.05;
            dashboard.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(1deg) translateY(${transY}px)`;

            // Apply individual parallax factors to floating assets
            assets.forEach(asset => {
                const el = document.getElementById(asset.id);
                if (el) {
                    el.style.transform = `translateY(${scrollY * asset.factor}px)`;
                }
            });
        });

        // Simulation Logic for the New Order Click
        // We detect the cursor's keyframe timeline cycle to trigger the modal simulation
        setInterval(() => {
            const rect = cursor.getBoundingClientRect();
            const dashRect = dashboard.getBoundingClientRect();
            
            // Check if cursor is roughly over the "New Order" button area in simulated animation
            // In the animation keyframes, it hits there around 18% of 18s loop
            // To keep it simple and robust for this prototype, we'll use a timer that matches the keyframe loop
        }, 1000);

        function triggerModalSequence() {
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
            
            modalElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, 400 + (index * 150)); // Staggered entrance
            });
        }

        function resetModalSequence() {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            modalElements.forEach(el => el.classList.remove('active'));
        }

        // Loop the modal sequence to match the cursor journey
        // Journey timeline: 18s loop
        // 0-15s: moving to button
        // 18s: click
        // 25s+: modal active
        // 85s+: modal reset
        function runSimulation() {
            setTimeout(() => {
                triggerModalSequence();
            }, 3500); // 18% of 18s is ~3.24s

            setTimeout(() => {
                resetModalSequence();
            }, 14500); // Reset before loop ends
        }

        // Initial trigger and loop
        runSimulation();
        setInterval(runSimulation, 18000);

        // Manual trigger for testing
        document.getElementById('btn-new-order-trigger').addEventListener('click', () => {
            triggerModalSequence();
        });
    </script>
</body>
</html>
~~~
