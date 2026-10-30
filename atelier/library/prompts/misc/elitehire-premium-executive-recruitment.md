# EliteHire - Premium Executive Recruitment

> 设计一个高端大气的人才招聘网站首页。采用深色优雅配色方案（深蓝灰色背景、金色/浅蓝色点缀）。页面包含：1) 顶部导航栏（logo、菜单、登录注册按钮）；2) 大气的hero搜索区域，有岗位搜索、地点、薪资筛选框和"立即搜索"按钮；3) "热门职位"section，展示4-6个职位卡片，每个卡片包含公司名、岗位名、薪资、工作地点、标签等；4) "热门企业"section，展示6个企业logo和简介；5) 底部footer。整体排版精致讲究，使用高级衬线或现代无衬线字体，间距充足。注重品质感和专业性。


---

设计一个高端大气的人才招聘网站首页。采用深色优雅配色方案（深蓝灰色背景、金色/浅蓝色点缀）。页面包含：1) 顶部导航栏（logo、菜单、登录注册按钮）；2) 大气的hero搜索区域，有岗位搜索、地点、薪资筛选框和"立即搜索"按钮；3) "热门职位"section，展示4-6个职位卡片，每个卡片包含公司名、岗位名、薪资、工作地点、标签等；4) "热门企业"section，展示6个企业logo和简介；5) 底部footer。整体排版精致讲究，使用高级衬线或现代无衬线字体，间距充足。注重品质感和专业性。

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteHire | 智选精英 领航未来</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #05080f;
            --bg-card: #0d121f;
            --gold-primary: #c5a059;
            --gold-light: #e2c08d;
            --sky-accent: #38bdf8;
        }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-deep);
            color: #f8fafc;
        }
        .font-serif {
            font-family: 'Playfair Display', serif;
        }
        .glass-nav {
            background: rgba(5, 8, 15, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(197, 160, 89, 0.1);
        }
        .gold-gradient-text {
            background: linear-gradient(135deg, #c5a059 0%, #f3d492 50%, #c5a059 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .job-card {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .job-card:hover {
            transform: translateY(-8px);
            border-color: rgba(197, 160, 89, 0.4);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
        }
        .noise-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            opacity: 0.03;
            z-index: 9999;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .luxury-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .luxury-btn::after {
            content: '';
            position: absolute;
            top: 50%; left: 50%;
            width: 300%; height: 300%;
            background: rgba(255,255,255,0.1);
            transition: all 0.5s ease;
            transform: translate(-50%, -50%) rotate(45deg) translateY(100%);
        }
        .luxury-btn:hover::after {
            transform: translate(-50%, -50%) rotate(45deg) translateY(0);
        }
    </style>
</head>
<body>
    <div class="min-h-screen relative overflow-x-hidden">
        <!-- Noise Overlay -->
        <div class="noise-overlay"></div>

        <!-- Background Gradients -->
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-900/10 rounded-full blur-[120px] -z-10"></div>
        <div class="absolute top-1/2 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] -z-10"></div>

        <!-- Header -->
        <nav class="fixed top-0 left-0 w-full z-50 glass-nav">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div class="flex items-center gap-12">
                    <a href="#" id="nav-logo" class="flex items-center gap-2 group">
                        <div class="w-10 h-10 bg-gradient-to-br from-[#c5a059] to-[#8d6e35] rounded-lg flex items-center justify-center shadow-lg">
                            <iconify-icon icon="lucide:crown" class="text-white text-2xl"></iconify-icon>
                        </div>
                        <span class="text-2xl font-serif font-bold tracking-tight text-white">
                            ELITE<span class="text-[#c5a059]">HIRE</span>
                        </span>
                    </a>
                    <div class="hidden md:flex items-center gap-8">
                        <a href="#" id="nav-find-jobs" class="text-sm font-medium text-gray-400 hover:text-[#c5a059] transition-colors">寻找机遇</a>
                        <a href="#" id="nav-companies" class="text-sm font-medium text-gray-400 hover:text-[#c5a059] transition-colors">名企荟萃</a>
                        <a href="#" id="nav-services" class="text-sm font-medium text-gray-400 hover:text-[#c5a059] transition-colors">定制服务</a>
                        <a href="#" id="nav-about" class="text-sm font-medium text-gray-400 hover:text-[#c5a059] transition-colors">关于我们</a>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <a href="#" id="nav-login" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">登录</a>
                    <a href="#" id="nav-signup" class="luxury-btn px-6 py-2.5 bg-[#c5a059] hover:bg-[#b08d4b] text-[#05080f] text-sm font-bold rounded-full shadow-lg transition-all">
                        加入计划
                    </a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <header class="pt-48 pb-32 px-6">
            <div class="max-w-5xl mx-auto text-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                    <span class="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span class="text-xs uppercase tracking-[0.2em] font-bold text-amber-200/80">发现你的卓越未来</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                    致敬每一个<br/>
                    <span class="gold-gradient-text">追求卓越</span>的灵魂
                </h1>
                <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                    为全球顶尖人才匹配最具价值的职业机遇。在 EliteHire，我们不只提供职位，更在为您构建跨越阶层的职业蓝图。
                </p>

                <!-- Search Bar -->
                <div class="relative max-w-4xl mx-auto p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch gap-2">
                    <div class="flex-1 flex items-center px-6 gap-3 border-b md:border-b-0 md:border-r border-white/10 py-4 md:py-0">
                        <iconify-icon icon="lucide:briefcase" class="text-xl text-[#c5a059]"></iconify-icon>
                        <input type="text" placeholder="搜索职位、技能或行业..." class="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 w-full">
                    </div>
                    <div class="flex-1 flex items-center px-6 gap-3 py-4 md:py-0">
                        <iconify-icon icon="lucide:map-pin" class="text-xl text-[#c5a059]"></iconify-icon>
                        <select class="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 w-full appearance-none">
                            <option class="bg-[#0d121f]">所有城市</option>
                            <option class="bg-[#0d121f]">上海, 中国</option>
                            <option class="bg-[#0d121f]">北京, 中国</option>
                            <option class="bg-[#0d121f]">香港, 中国</option>
                            <option class="bg-[#0d121f]">新加坡</option>
                        </select>
                    </div>
                    <div class="flex-1 flex items-center px-6 gap-3 py-4 md:py-0">
                        <iconify-icon icon="lucide:banknote" class="text-xl text-[#c5a059]"></iconify-icon>
                        <select class="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 w-full appearance-none">
                            <option class="bg-[#0d121f]">薪资范围</option>
                            <option class="bg-[#0d121f]">50w - 100w</option>
                            <option class="bg-[#0d121f]">100w - 200w</option>
                            <option class="bg-[#0d121f]">200w+</option>
                        </select>
                    </div>
                    <button id="hero-search-btn" class="luxury-btn px-10 py-4 bg-[#c5a059] text-[#05080f] font-bold rounded-xl md:rounded-full whitespace-nowrap shadow-lg">
                        立即搜索
                    </button>
                </div>
            </div>
        </header>

        <!-- Stats Banner -->
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
                <div class="text-center">
                    <div class="text-3xl font-serif font-bold text-white mb-1">2,500+</div>
                    <div class="text-xs uppercase tracking-widest text-gray-500">活跃高端职位</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-serif font-bold text-white mb-1">480+</div>
                    <div class="text-xs uppercase tracking-widest text-gray-500">合作跨国企业</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-serif font-bold text-white mb-1">98%</div>
                    <div class="text-xs uppercase tracking-widest text-gray-500">入职满意度</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-serif font-bold text-white mb-1">15w+</div>
                    <div class="text-xs uppercase tracking-widest text-gray-500">行业精英库</div>
                </div>
            </div>
        </section>

        <!-- Featured Jobs Section -->
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div class="max-w-xl">
                    <h2 class="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-4">Trending Roles</h2>
                    <h3 class="text-4xl font-serif font-bold text-white">热门职位推荐</h3>
                </div>
                <a href="#" id="view-all-jobs" class="group flex items-center gap-2 text-[#c5a059] font-medium">
                    <span>浏览全部职位</span>
                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Job Card 1 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                            <iconify-icon icon="logos:google-icon" class="text-2xl"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-full">全职 / 远程</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">资深产品设计专家 (UX)</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>Google Cloud</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>上海, 徐汇区</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">Figma</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">Design Ops</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">B端经验</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥60k - 90k</div>
                        <a href="#" id="apply-job-1" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>

                <!-- Job Card 2 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                            <iconify-icon icon="simple-icons:tesla" class="text-2xl text-red-500"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-full">急聘</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">人工智能算法负责人</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>Tesla Motors</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>北京, 朝阳区</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">PyTorch</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">NLP</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">博士优先</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥120k - 200k</div>
                        <a href="#" id="apply-job-2" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>

                <!-- Job Card 3 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                            <iconify-icon icon="simple-icons:louisvuitton" class="text-2xl text-white"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-full">兼职顾问</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">品牌创意艺术总监</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>LVMH Group</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>香港, 中环</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">奢饰品</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">视觉传达</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">英语</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥80k - 110k</div>
                        <a href="#" id="apply-job-3" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>

                <!-- Job Card 4 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <iconify-icon icon="simple-icons:jpmorgan" class="text-2xl text-blue-400"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-full">高管</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">亚太区风控合规主管</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>JP Morgan</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>上海, 陆家嘴</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">金融法</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">CFA</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">10年+经验</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥150k - 250k</div>
                        <a href="#" id="apply-job-4" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>

                <!-- Job Card 5 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <iconify-icon icon="simple-icons:nvidia" class="text-2xl text-green-500"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-full">全职</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">高级芯片架构设计师</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>NVIDIA</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>深圳, 南山区</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">GPU</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">Verilog</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">IC设计</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥100k - 180k</div>
                        <a href="#" id="apply-job-5" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>

                <!-- Job Card 6 -->
                <div class="job-card p-8 rounded-2xl flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <iconify-icon icon="simple-icons:bytedance" class="text-2xl text-red-400"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-full">急聘</span>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">全球化营销中心总监</h4>
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <span>ByteDance</span>
                        <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>新加坡</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">出海</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">增长</span>
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300">跨国团队</span>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="text-lg font-bold text-[#c5a059]">¥110k - 160k</div>
                        <a href="#" id="apply-job-6" class="text-sm font-semibold hover:text-[#c5a059] transition-colors flex items-center gap-1">
                            申请职位 <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Top Companies Section -->
        <section class="bg-white/[0.02] py-32 border-y border-white/5 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-4">Partnerships</h2>
                    <h3 class="text-4xl font-serif font-bold text-white">入驻名企</h3>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <!-- Company 1 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:tencent" class="text-4xl text-gray-500 group-hover:text-blue-500 transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">腾讯科技</p>
                            <p class="text-xs text-gray-500">42 个在招职位</p>
                        </div>
                    </div>
                    <!-- Company 2 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:alibaba" class="text-4xl text-gray-500 group-hover:text-orange-500 transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">阿里巴巴</p>
                            <p class="text-xs text-gray-500">28 个在招职位</p>
                        </div>
                    </div>
                    <!-- Company 3 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:huawei" class="text-4xl text-gray-500 group-hover:text-red-600 transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">华为</p>
                            <p class="text-xs text-gray-500">56 个在招职位</p>
                        </div>
                    </div>
                    <!-- Company 4 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:apple" class="text-4xl text-gray-500 group-hover:text-white transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">Apple</p>
                            <p class="text-xs text-gray-500">15 个在招职位</p>
                        </div>
                    </div>
                    <!-- Company 5 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:microsoft" class="text-4xl text-gray-500 group-hover:text-blue-400 transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">微软</p>
                            <p class="text-xs text-gray-500">31 个在招职位</p>
                        </div>
                    </div>
                    <!-- Company 6 -->
                    <div class="group cursor-pointer">
                        <div class="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 mb-4 group-hover:bg-[#c5a059]/10 group-hover:border-[#c5a059]/30 transition-all">
                            <iconify-icon icon="simple-icons:amazon" class="text-4xl text-gray-500 group-hover:text-amber-500 transition-colors"></iconify-icon>
                        </div>
                        <div class="text-center">
                            <p class="font-bold text-sm text-gray-300">亚马逊</p>
                            <p class="text-xs text-gray-500">22 个在招职位</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-32 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="bg-gradient-to-r from-[#1a2030] to-[#0d121f] rounded-[40px] p-12 md:p-24 relative overflow-hidden border border-white/10">
                    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/10 blur-[100px] -mr-48 -mt-48"></div>
                    <div class="relative z-10 grid md:grid-cols-2 items-center gap-16">
                        <div>
                            <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                                准备好开启你的<br/>
                                <span class="text-[#c5a059]">下一段卓越旅程</span>了吗？
                            </h2>
                            <p class="text-gray-400 text-lg mb-10 leading-relaxed">
                                立即上传简历，让我们的 AI 智能匹配引擎与资深职业经纪人为您精准对接全球机遇。
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <button id="cta-upload-btn" class="luxury-btn px-10 py-4 bg-[#c5a059] text-[#05080f] font-bold rounded-full shadow-xl">
                                    上传简历
                                </button>
                                <button id="cta-consult-btn" class="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                                    预约专家咨询
                                </button>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="relative">
                                <div class="absolute -inset-4 bg-gradient-to-tr from-[#c5a059]/20 to-transparent blur-2xl rounded-full"></div>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Executive Consultant" class="relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="pt-24 pb-12 px-6 border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 lg:col-span-1">
                        <a href="#" id="footer-logo" class="flex items-center gap-2 mb-8">
                            <div class="w-8 h-8 bg-[#c5a059] rounded flex items-center justify-center">
                                <iconify-icon icon="lucide:crown" class="text-white text-lg"></iconify-icon>
                            </div>
                            <span class="text-xl font-serif font-bold tracking-tight text-white">
                                ELITE<span class="text-[#c5a059]">HIRE</span>
                            </span>
                        </a>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">
                            专注于服务年薪 50w+ 的精英人才，通过行业深度洞察与资源积累，为顶级人才与企业搭建沟通的桥梁。
                        </p>
                        <div class="flex gap-4">
                            <a href="#" id="footer-social-wechat" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#c5a059] hover:border-[#c5a059] transition-all">
                                <iconify-icon icon="simple-icons:wechat"></iconify-icon>
                            </a>
                            <a href="#" id="footer-social-linkedin" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#c5a059] hover:border-[#c5a059] transition-all">
                                <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
                            </a>
                            <a href="#" id="footer-social-weibo" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#c5a059] hover:border-[#c5a059] transition-all">
                                <iconify-icon icon="simple-icons:sinaweibo"></iconify-icon>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">人才端服务</h4>
                        <ul class="space-y-4">
                            <li><a href="#" id="footer-link-1" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">寻找高端职位</a></li>
                            <li><a href="#" id="footer-link-2" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">职业生涯规划</a></li>
                            <li><a href="#" id="footer-link-3" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">简历诊断</a></li>
                            <li><a href="#" id="footer-link-4" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">薪资调研报告</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">企业端服务</h4>
                        <ul class="space-y-4">
                            <li><a href="#" id="footer-link-5" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">发布招聘需求</a></li>
                            <li><a href="#" id="footer-link-6" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">猎头招聘方案</a></li>
                            <li><a href="#" id="footer-link-7" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">雇主品牌建设</a></li>
                            <li><a href="#" id="footer-link-8" class="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">RPO 服务</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">联系我们</h4>
                        <ul class="space-y-4 text-sm text-gray-500">
                            <li class="flex items-center gap-3">
                                <iconify-icon icon="lucide:phone" class="text-[#c5a059]"></iconify-icon>
                                400-888-6666
                            </li>
                            <li class="flex items-center gap-3">
                                <iconify-icon icon="lucide:mail" class="text-[#c5a059]"></iconify-icon>
                                contact@elitehire.com
                            </li>
                            <li class="flex items-center gap-3">
                                <iconify-icon icon="lucide:map-pin" class="text-[#c5a059]"></iconify-icon>
                                上海市浦东新区陆家嘴环路 1000 号
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p class="text-xs text-gray-600">© 2024 EliteHire 智选精英人力资源有限公司. 沪ICP备12345678号</p>
                    <div class="flex gap-8">
                        <a href="#" id="footer-privacy" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">隐私政策</a>
                        <a href="#" id="footer-terms" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">服务条款</a>
                        <a href="#" id="footer-cookies" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie设置</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
~~~
