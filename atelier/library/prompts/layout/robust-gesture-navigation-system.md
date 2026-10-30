# Robust Gesture Navigation System

> A gesture-driven navigation system augmented with subtle fallback controls. Gestures remain primary, while visible affordances ensure accessibility, discoverability, and reliability. Best Suitable For Advanced consumer apps, onboarding-sensitive products, apps with broad user skill ranges.


---

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Gesture Navigation System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=manrope@800,400,500,600,700,300&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        @view-transition { navigation: auto; }
        body {
            font-family: 'Manrope', sans-serif;
            touch-action: none; /* Prevent browser default gestures for cleaner swipe UI */
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .swipe-item-inner {
            transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            touch-action: pan-y;
        }
        .swipe-item-inner.dragging {
            transition: none;
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translate(-50%, 20px) scale(0.9); }
            15% { opacity: 1; transform: translate(-50%, 0) scale(1); }
            85% { opacity: 1; transform: translate(-50%, 0) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -20px) scale(0.95); }
        }
        .toast-active {
            animation: fade-in-up 2.5s ease-out forwards;
        }
    </style>
</head>
<body>
    <div class="w-full h-screen bg-white text-gray-900 flex flex-col overflow-hidden relative selection:bg-gray-100">
        
        <!-- Edge Swipe Zones (Visual Feedback) -->
        <div id="edge-left" class="absolute inset-y-0 left-0 w-6 z-40 pointer-events-none transition-all duration-300 bg-gradient-to-r from-blue-500/0 to-transparent"></div>
        <div id="edge-right" class="absolute inset-y-0 right-0 w-6 z-40 pointer-events-none transition-all duration-300 bg-gradient-to-l from-gray-200/0 to-transparent"></div>

        <!-- Top Navigation -->
        <header class="shrink-0 pt-14 pb-4 px-6 flex justify-between items-center z-20 bg-white/90 backdrop-blur-sm border-b border-gray-50">
            <div class="flex flex-col">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900">Inbox</h1>
                <span class="text-xs font-medium text-gray-400 tracking-wide uppercase mt-1">Gesture UI Demo</span>
            </div>
            <button id="header-search-btn" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors active:scale-95">
                <iconify-icon icon="lucide:search" class="text-xl"></iconify-icon>
            </button>
        </header>

        <!-- Main Content Area -->
        <main id="inbox-list" class="flex-1 overflow-y-auto no-scrollbar px-5 py-4 relative space-y-4">
            <!-- Dynamic Items will be injected here via JS -->
        </main>

        <!-- First Visit Onboarding Hint -->
        <div id="onboarding-hint" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm transition-opacity duration-500 pointer-events-none opacity-0">
            <div class="bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex flex-col items-center gap-3 transform translate-y-4 animate-bounce">
                <iconify-icon icon="lucide:hand" class="text-4xl text-gray-300"></iconify-icon>
                <div class="text-center">
                    <p class="font-bold text-lg">Interactive Gesture Control</p>
                    <p class="text-sm text-gray-400">Swipe cards left or right to manage</p>
                </div>
            </div>
        </div>

        <!-- Bottom Fallback Navigation -->
        <footer class="shrink-0 pb-[34px] bg-white border-t border-gray-100/50 z-30">
            <div class="flex justify-around items-center h-16 px-6">
                <button id="nav-home" class="nav-btn group flex flex-col items-center gap-1 w-12 text-gray-900">
                    <div class="indicator w-6 h-1 bg-gray-900 rounded-full mb-1 transition-all duration-300"></div>
                    <iconify-icon icon="lucide:layout-grid" class="text-2xl"></iconify-icon>
                </button>
                <button id="nav-explore" class="nav-btn group flex flex-col items-center gap-1 w-12 text-gray-300 hover:text-gray-500 transition-colors">
                    <div class="indicator w-1 h-1 bg-transparent rounded-full mb-1 group-hover:bg-gray-300 transition-all"></div>
                    <iconify-icon icon="lucide:compass" class="text-2xl"></iconify-icon>
                </button>
                <button id="nav-profile" class="nav-btn group flex flex-col items-center gap-1 w-12 text-gray-300 hover:text-gray-500 transition-colors">
                    <div class="indicator w-1 h-1 bg-transparent rounded-full mb-1 group-hover:bg-gray-300 transition-all"></div>
                    <iconify-icon icon="lucide:user" class="text-2xl"></iconify-icon>
                </button>
            </div>
        </footer>

        <!-- Toast Notification System -->
        <div id="toast" class="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 pointer-events-none z-50 transition-all">
            <iconify-icon id="toast-icon" icon="lucide:check-circle" class="text-green-400 text-xl"></iconify-icon>
            <span id="toast-message" class="text-sm font-semibold"></span>
        </div>
    </div>

    <script>
        const data = [
            { id: 1, tag: 'Design System', time: '10m ago', title: 'Typography Scales', body: 'Exploring mathematical relationships in fluid typography.', color: 'bg-blue-500' },
            { id: 2, tag: 'Interaction', time: '2h ago', title: 'Haptic Feedback', body: 'Implementing vibrations to reinforce gesture completion.', color: 'bg-orange-500' },
            { id: 3, tag: 'Research', time: '1d ago', title: 'User Testing Results', body: 'Analysis of usability studies focused on mobile navigation.', color: 'bg-purple-500' },
            { id: 4, tag: 'Updates', time: '2d ago', title: 'Motion Physics', body: 'Using spring animations for natural UI element feel.', color: 'bg-green-500' },
            { id: 5, tag: 'Strategy', time: '3d ago', title: 'Q4 Roadmap', body: 'Defining our core pillars for the upcoming growth phase.', color: 'bg-indigo-500' }
        ];

        const listContainer = document.getElementById('inbox-list');
        const onboardingHint = document.getElementById('onboarding-hint');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        const toastIcon = document.getElementById('toast-icon');

        // Onboarding visibility logic
        let hasInteracted = localStorage.getItem('gesture_interacted');
        if (!hasInteracted) {
            setTimeout(() => onboardingHint.classList.add('opacity-100'), 1500);
        }

        function render() {
            listContainer.innerHTML = '';
            data.forEach(item => {
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'relative group touch-none overflow-hidden rounded-2xl';
                cardWrapper.dataset.id = item.id;

                cardWrapper.innerHTML = `
                    <!-- Action Layer -->
                    <div class="absolute inset-0 flex items-center justify-between px-6 bg-gray-100">
                        <div class="archive-reveal flex items-center gap-3 text-emerald-600 opacity-0 transition-opacity">
                            <iconify-icon icon="lucide:archive" class="text-2xl"></iconify-icon>
                            <span class="text-sm font-bold uppercase tracking-wider">Archive</span>
                        </div>
                        <div class="delete-reveal flex items-center gap-3 text-red-600 opacity-0 transition-opacity">
                            <span class="text-sm font-bold uppercase tracking-wider">Delete</span>
                            <iconify-icon icon="lucide:trash-2" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                    <!-- Foreground Card -->
                    <div class="swipe-item-inner relative bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-[0.99] select-none pointer-events-auto">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full ${item.color}"></div>
                                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">${item.tag}</span>
                            </div>
                            <span class="text-xs text-gray-400">${item.time}</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 leading-tight mb-1">${item.title}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed line-clamp-2">${item.body}</p>
                    </div>
                `;

                const inner = cardWrapper.querySelector('.swipe-item-inner');
                const archiveLabel = cardWrapper.querySelector('.archive-reveal');
                const deleteLabel = cardWrapper.querySelector('.delete-reveal');
                
                let startX = 0;
                let currentX = 0;
                let isDragging = false;

                const handleStart = (e) => {
                    isDragging = true;
                    startX = e.pageX;
                    inner.setPointerCapture(e.pointerId);
                    inner.classList.add('dragging');
                    inner.addEventListener('pointermove', handleMove);
                    inner.addEventListener('pointerup', handleEnd);
                    inner.addEventListener('pointercancel', handleEnd);
                };

                const handleMove = (e) => {
                    if (!isDragging) return;
                    const x = e.pageX;
                    currentX = x - startX;
                    
                    // Apply slight resistance for long swipes
                    const resistance = currentX > 0 ? Math.pow(currentX, 0.95) : -Math.pow(Math.abs(currentX), 0.95);
                    inner.style.transform = `translateX(${resistance}px)`;

                    // Show background actions based on direction
                    if (currentX > 20) {
                        archiveLabel.style.opacity = Math.min(currentX / 80, 1);
                        deleteLabel.style.opacity = 0;
                    } else if (currentX < -20) {
                        deleteLabel.style.opacity = Math.min(Math.abs(currentX) / 80, 1);
                        archiveLabel.style.opacity = 0;
                    } else {
                        archiveLabel.style.opacity = 0;
                        deleteLabel.style.opacity = 0;
                    }
                };

                const handleEnd = (e) => {
                    if (!isDragging) return;
                    isDragging = false;
                    inner.releasePointerCapture(e.pointerId);
                    inner.classList.remove('dragging');
                    
                    inner.removeEventListener('pointermove', handleMove);
                    inner.removeEventListener('pointerup', handleEnd);
                    inner.removeEventListener('pointercancel', handleEnd);

                    const threshold = 120;
                    if (currentX > threshold) {
                        triggerAction(item.id, 'Archived', 'lucide:archive', 'text-emerald-400');
                        inner.style.transform = `translateX(120%)`;
                        setTimeout(() => removeItem(item.id), 250);
                    } else if (currentX < -threshold) {
                        triggerAction(item.id, 'Deleted', 'lucide:trash-2', 'text-red-400');
                        inner.style.transform = `translateX(-120%)`;
                        setTimeout(() => removeItem(item.id), 250);
                    } else {
                        inner.style.transform = `translateX(0)`;
                    }
                    
                    archiveLabel.style.opacity = 0;
                    deleteLabel.style.opacity = 0;
                    currentX = 0;

                    if (!hasInteracted) {
                        hasInteracted = true;
                        localStorage.setItem('gesture_interacted', 'true');
                        onboardingHint.classList.add('opacity-0');
                    }
                };

                inner.addEventListener('pointerdown', handleStart);

                listContainer.appendChild(cardWrapper);
            });
        }

        function triggerAction(id, msg, icon, iconColor) {
            toastMessage.textContent = msg;
            toastIcon.setAttribute('icon', icon);
            toastIcon.className = `${iconColor} text-xl`;
            
            toast.classList.remove('toast-active');
            void toast.offsetWidth; // Force reflow
            toast.classList.add('toast-active');
        }

        function removeItem(id) {
            const idx = data.findIndex(i => i.id === id);
            if (idx > -1) {
                data.splice(idx, 1);
                render();
            }
        }

        // Edge Swipe Interaction Simulation
        const edgeLeft = document.getElementById('edge-left');
        window.addEventListener('pointermove', (e) => {
            if (e.pageX < 30) {
                edgeLeft.style.backgroundColor = `rgba(59, 130, 246, ${1 - (e.pageX / 30)})`;
            } else {
                edgeLeft.style.backgroundColor = 'transparent';
            }
        });

        // Nav Tab Simulation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.nav-btn').forEach(b => {
                    b.classList.remove('text-gray-900');
                    b.classList.add('text-gray-300');
                    b.querySelector('.indicator').classList.replace('w-6', 'w-1');
                    b.querySelector('.indicator').classList.replace('bg-gray-900', 'bg-transparent');
                });
                btn.classList.add('text-gray-900');
                btn.classList.remove('text-gray-300');
                btn.querySelector('.indicator').classList.replace('w-1', 'w-6');
                btn.querySelector('.indicator').classList.replace('bg-transparent', 'bg-gray-900');
            });
        });

        render();
    </script>
</body>
</html>
~~~
