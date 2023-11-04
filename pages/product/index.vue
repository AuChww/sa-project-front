<template>
    <Navbar />
    <Sidebar />
    <div class="mt-8 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4 font-semibold">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                        <img class="w-full h-full object-cover" src="" alt="Product Image">
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold mb-2">Product Name</h2>
                    <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                        ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700">Price: </span>
                            <span class="text-gray-600">$29.99</span>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700">Availability: </span>
                            <span class="text-emerald-500">in Stock</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <span class="font-bold text-gray-700">Select Color:</span>
                        <div class="flex items-center mt-2">
                            <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                            <button class="w-6 h-6 rounded-full bg-gray-300 mr-2"></button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <span class="font-bold text-gray-700">Select Size:</span>
                        <div class="flex items-center mt-2">
                            <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">Brand</button>
                        </div>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Product Description:</span>
                        <p class="text-gray-600 text-sm mt-2"></p>
                    </div>
                    <button class="inline-flex bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                        @click="addToCart(product)">
                        Add to Cart
                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>