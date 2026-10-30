# Cart-Drawer - Upselling

> Layout description A taller cart drawer that separates content into sections: cart items at the top, a divider, then a recommended or add-on products section before the checkout CTA. Maintains visibility of subtotal while encouraging AOV lift. Best suited for DTC brands with accessories, bundles, or add-ons; stores actively optimizing average order value.


---

Wireframe cart drawer component with minimal grayscale design. Layout includes: cart items list with product name, quantity, and price; horizontal divider; recommended products section with 3-4 small product cards in a row showing product image and name; checkout CTA button at bottom. Use minimal grayscale palette with clear hierarchy and functional layout.

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wireframe Cart Drawer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'General Sans', sans-serif;
            background-color: #f3f4f6;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    </style>
</head>
<body>
    <!-- Root container -->
    <div class="min-h-screen flex items-center justify-center p-4">
        
        <!-- Drawer Component -->
        <div class="w-full max-w-[420px] bg-white h-[800px] shadow-2xl flex flex-col border border-gray-200 relative overflow-hidden">
            
            <!-- Header -->
            <header class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div class="flex items-center gap-3">
                    <h2 class="text-xl font-semibold text-gray-900 tracking-tight">Your Cart</h2>
                    <span class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">3 items</span>
                </div>
                <button class="text-gray-400 hover:text-gray-900 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-50">
                    <iconify-icon icon="lucide:x" width="24"></iconify-icon>
                </button>
            </header>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto no-scrollbar">
                
                <!-- Cart Items List -->
                <div class="p-6 space-y-6">
                    <!-- Item 1 -->
                    <div class="flex gap-4 group">
                        <div class="w-20 h-24 bg-gray-100 flex items-center justify-center text-gray-300 relative overflow-hidden">
                            <iconify-icon icon="lucide:image" width="24"></iconify-icon>
                            <!-- Diagonal line for wireframe effect -->
                            <div class="absolute inset-0 border border-gray-200"></div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start">
                                    <h3 class="font-medium text-gray-900 leading-snug">Minimalist Chair</h3>
                                    <button class="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                        <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                                    </button>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">Charcoal / Oak</p>
                            </div>
                            <div class="flex justify-between items-end">
                                <div class="flex items-center border border-gray-200 rounded-sm">
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:minus" width="12"></iconify-icon>
                                    </button>
                                    <span class="text-sm w-6 text-center font-medium text-gray-900">1</span>
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:plus" width="12"></iconify-icon>
                                    </button>
                                </div>
                                <span class="font-semibold text-gray-900">$240.00</span>
                            </div>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="flex gap-4 group">
                        <div class="w-20 h-24 bg-gray-100 flex items-center justify-center text-gray-300 relative">
                            <iconify-icon icon="lucide:image" width="24"></iconify-icon>
                            <div class="absolute inset-0 border border-gray-200"></div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start">
                                    <h3 class="font-medium text-gray-900 leading-snug">Ceramic Vase Set</h3>
                                    <button class="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                        <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                                    </button>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">Matte White</p>
                            </div>
                            <div class="flex justify-between items-end">
                                <div class="flex items-center border border-gray-200 rounded-sm">
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:minus" width="12"></iconify-icon>
                                    </button>
                                    <span class="text-sm w-6 text-center font-medium text-gray-900">2</span>
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:plus" width="12"></iconify-icon>
                                    </button>
                                </div>
                                <span class="font-semibold text-gray-900">$85.00</span>
                            </div>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="flex gap-4 group">
                        <div class="w-20 h-24 bg-gray-100 flex items-center justify-center text-gray-300 relative">
                            <iconify-icon icon="lucide:image" width="24"></iconify-icon>
                            <div class="absolute inset-0 border border-gray-200"></div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start">
                                    <h3 class="font-medium text-gray-900 leading-snug">Linen Tablecloth</h3>
                                    <button class="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                        <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                                    </button>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">Natural Grey</p>
                            </div>
                            <div class="flex justify-between items-end">
                                <div class="flex items-center border border-gray-200 rounded-sm">
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:minus" width="12"></iconify-icon>
                                    </button>
                                    <span class="text-sm w-6 text-center font-medium text-gray-900">1</span>
                                    <button class="px-2 py-1 hover:bg-gray-50 text-gray-500 transition-colors">
                                        <iconify-icon icon="lucide:plus" width="12"></iconify-icon>
                                    </button>
                                </div>
                                <span class="font-semibold text-gray-900">$120.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <div class="h-px w-full bg-gray-100"></div>

                <!-- Upsell Section -->
                <div class="p-6 bg-gray-50/50">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">Recommended for you</h4>
                        <div class="flex gap-1">
                            <button class="w-6 h-6 flex items-center justify-center border border-gray-200 bg-white rounded-full text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all">
                                <iconify-icon icon="lucide:chevron-left" width="14"></iconify-icon>
                            </button>
                            <button class="w-6 h-6 flex items-center justify-center border border-gray-200 bg-white rounded-full text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all">
                                <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        <!-- Rec 1 -->
                        <div class="min-w-[140px] bg-white border border-gray-100 p-3 group cursor-pointer hover:border-gray-300 transition-colors">
                            <div class="aspect-square bg-gray-100 mb-3 flex items-center justify-center text-gray-300 relative overflow-hidden">
                                <iconify-icon icon="lucide:image" width="20"></iconify-icon>
                                <!-- Wireframe Add Overlay -->
                                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <div class="bg-white p-2 rounded-full shadow-sm text-gray-900">
                                        <iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <h5 class="text-sm font-medium text-gray-900 truncate">Bamboo Utensils</h5>
                            <p class="text-xs text-gray-500 mt-1">$24.00</p>
                        </div>

                        <!-- Rec 2 -->
                        <div class="min-w-[140px] bg-white border border-gray-100 p-3 group cursor-pointer hover:border-gray-300 transition-colors">
                            <div class="aspect-square bg-gray-100 mb-3 flex items-center justify-center text-gray-300 relative overflow-hidden">
                                <iconify-icon icon="lucide:image" width="20"></iconify-icon>
                                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <div class="bg-white p-2 rounded-full shadow-sm text-gray-900">
                                        <iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <h5 class="text-sm font-medium text-gray-900 truncate">Cotton Napkins</h5>
                            <p class="text-xs text-gray-500 mt-1">$18.00</p>
                        </div>

                        <!-- Rec 3 -->
                        <div class="min-w-[140px] bg-white border border-gray-100 p-3 group cursor-pointer hover:border-gray-300 transition-colors">
                            <div class="aspect-square bg-gray-100 mb-3 flex items-center justify-center text-gray-300 relative overflow-hidden">
                                <iconify-icon icon="lucide:image" width="20"></iconify-icon>
                                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <div class="bg-white p-2 rounded-full shadow-sm text-gray-900">
                                        <iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <h5 class="text-sm font-medium text-gray-900 truncate">Glass Pitcher</h5>
                            <p class="text-xs text-gray-500 mt-1">$42.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer / CTA -->
            <div class="bg-white border-t border-gray-200 p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-500">Subtotal</span>
                    <span class="font-semibold text-gray-900">$445.00</span>
                </div>
                <div class="flex justify-between items-center mb-6">
                    <span class="text-gray-500">Shipping</span>
                    <span class="text-gray-900 font-medium">Calculated at next step</span>
                </div>
                
                <button class="w-full bg-gray-900 hover:bg-black text-white py-4 px-6 font-medium tracking-wide flex items-center justify-center gap-2 group transition-all duration-300">
                    <span>Proceed to Checkout</span>
                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </button>
                
                <p class="text-center text-xs text-gray-400 mt-4">
                    Secure checkout powered by Stripe
                </p>
            </div>
            
        </div>
    </div>
</body>
</html>
~~~
