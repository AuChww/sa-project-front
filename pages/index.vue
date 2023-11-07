
<template>
    <!-- all roles -->
    <Navbar />
    <Sidebar />
    <Cart />
    <div>


        <!-- Showcase Header -->
        <section
            :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
            class="bg-blue-900 text-white py-16">

            <div class="container mx-auto text-center">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                    Welcome to Our Electronics and Computer Store
                </h1>
                <p class="text-base md:text-lg lg:text-xl mb-8 transition-all">Discover the latest and greatest
                    electronic gadgets and computer accessories.
                </p>
                <a href="#Feature Product"
                    class="bg-white text-blue-900 hover:animate-bounce hover:bg-blue-700 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                    Shop Now
                </a>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>

        <!-- Product Categories Carousel -->
        <section class="py-12 mt-4 mx-4" id="Feature Video">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <!-- Featured Product Cards -->
                <div class="w-full">
                    <iframe src="https://www.youtube.com/embed/8KKE-7BzB_M" class="w-full h-full" frameborder="0"
                        allowfullscreen></iframe>
                </div>
                <div class="w-full">
                    <iframe src="https://www.youtube.com/embed/VryFK-_Ns1Q" class="w-full h-full" frameborder="0"
                        allowfullscreen></iframe>
                </div>
                <div class="w-full">
                    <iframe src="https://www.youtube.com/embed/gNSgp3d6EgQ" class="w-full h-full" frameborder="0"
                        allowfullscreen></iframe>
                </div>
                <div class="w-full">
                    <iframe src="https://www.youtube.com/embed/CTiRNnSg0jA" class="w-full h-full" frameborder="0"
                        allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <!-- Feature Products -->
        <section class="py-12 mx-3" id="Feature Product"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <div class="text-white py-8"
                    :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }">
                    <h2 class="text-3xl font-semibold">Feature Product</h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-6">
                    <!-- Featured Product Cards -->
                    <div v-for="brands in brand" :key="brands.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="brands.image" alt="Product Image" class="mx-auto h-24 object-cover ">
                    </div>
                </div>
            </div>
        </section>

        <!-- Best Seller -->
        <section class="py-12 mx-3" id="Best Seller"
            :style="{ 'background-image': 'url(https://wallpapers.com/images/hd/red-fire-background-na0r6a991986yftd.jpg)' }">
            <div>
                <div class="container mx-auto text-center text-white py-8"
                    :style="{ 'background-image': 'url(https://www.enjpg.com/img/2020/fire-23.jpg)', 'backgroundPosition': 'center 80%' }">
                    <h2 class="text-4xl font-semibold transition-all duration-500">Best Seller</h2>
                </div>
                <div class="mx-4 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 mt-6">
                    <div v-for="product in filteredProducts.slice(7, 14)" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg mx-auto hover:scale-105 transition-all duration-500">
                        <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                            <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                class="h-36 mx-auto object-cover mb-4">
                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="lg:text-xl font-bold text-blue-900 md:text-md">฿ {{ product.price
                                }}</span>
                            </div>
                        </NuxtLink>
                        <button
                            class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                            @click="addToCart(product)">
                            Add
                            <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 18 21">
                                <path
                                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </section>

        <!-- CPU -->
        <section class="py-8 mx-3" id="CPU"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 mt-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- CPU Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/cpu">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://4kwallpapers.com/images/walls/thumbs_3t/9784.jpg)', 'backgroundPosition': 'center 40%', 'backgroundSize': '280%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        CPU</h2>
                                </div>
                            </RouterLink>

                            <div v-for="product in filteredCpuProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-40 mx-auto object-cover mb-4">

                                        <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                    </NuxtLink>
                                    <div class="mt-4 flex items-center justify-between">
                                        <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                            product.price
                                        }}</span>
                                        <button
                                            class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                            @click="addToCart(product)">
                                            Add
                                            <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                viewBox="0 0 18 21">
                                                <path
                                                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Board -->
        <section class="py-8 mx-3" id="MainBoard"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- Main Board Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/mainboard">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://www.ansys.com/content/dam/amp/2023/april/blog-article-requests/how-to-plan-and-conduct-highly-accelerated-life-testing/og-how-to-halt-blog.jpg?wid=1200)', 'backgroundPosition': 'center', 'backgroundSize': '280%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        Main Board</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredMainboardProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-40 mx-auto object-cover mb-4">
                                        <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                    </NuxtLink>
                                    <div class="mt-4 flex items-center justify-between">
                                        <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                            product.price
                                        }}</span>
                                        <button
                                            class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                            @click="addToCart(product)">
                                            Add
                                            <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                viewBox="0 0 18 21">
                                                <path
                                                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- GPU -->
        <section class="py-8 mx-3" id="GPU"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- GPU Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/gpu">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://www.shutterstock.com/image-photo/graphics-card-row-fans-cyanotic-260nw-1978289216.jpg)', 'backgroundPosition': 'top right 20%', 'backgroundSize': '290%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        GPU</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredGpuProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                    <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                        class="h-40 mx-auto object-cover mb-4">
                                    <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                </NuxtLink>
                                <div class="mt-4 flex items-center justify-between">
                                    <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                        product.price
                                    }}</span>
                                    <button
                                        class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                        @click="addToCart(product)">
                                        Add
                                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 18 21">
                                            <path
                                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- RAM -->
        <section class="py-8 mx-3" id="RAM"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- RAM Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/ram">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://img.freepik.com/premium-photo/computer-memory-ram-motherboard-background-close-up-system-main-memory-random-access-memory-onboard-computer-detail-computer-components-ddr3-ddr4-ddr5_150455-6497.jpg)', 'backgroundPosition': 'center left 30%', 'backgroundSize': '300%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        RAM</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredRamProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                    <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                        class="h-40 mx-auto object-cover mb-4">
                                    <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                </NuxtLink>
                                <div class="mt-4 flex items-center justify-between">
                                    <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                        product.price
                                    }}</span>
                                    <button
                                        class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                        @click="addToCart(product)">
                                        Add
                                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 18 21">
                                            <path
                                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Harddisk -->
        <section class="py-8 mx-3" id="Harddisk"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- Harddisk Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/harddisk">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://media.istockphoto.com/id/1297963606/photo/computer-hard-disk-drives-hdd-ssd-on-circuit-board-motherboard-background-close-up-with-red.jpg?s=612x612&w=0&k=20&c=FDu0fVrhGKDKTWW__Kucv8fK9yB_L8V6VtsFjsfXeq8=)', 'backgroundPosition': 'top right 30%', 'backgroundSize': '220%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        HardDisk</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredHarddiskProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                    <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                        class="h-40 mx-auto object-cover mb-4">
                                    <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                </NuxtLink>
                                <div class="mt-4 flex items-center justify-between">
                                    <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                        product.price
                                    }}</span>
                                    <button
                                        class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                        @click="addToCart(product)">
                                        Add
                                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 18 21">
                                            <path
                                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Display -->
        <section class="py-8 mx-3" id="Display"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- Display Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/display">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://www.techspot.com/articles-info/2638/images/2023-03-06-image.jpg)', 'backgroundPosition': 'top', 'backgroundSize': '290%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 text-4xl font-semibold hover:scale-110 transition-all duration-500">
                                        Display</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredDisplayProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 items-end rounded-lg hover:scale-105 transition-all duration-500">
                                <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                    <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                        class="h-40 mx-auto object-cover mb-4">
                                    <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                </NuxtLink>
                                <div class="mt-4 flex items-center justify-between">
                                    <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                        product.price
                                    }}</span>
                                    <button
                                        class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                        @click="addToCart(product)">
                                        Add
                                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 18 21">
                                            <path
                                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gaming Gear -->
        <section class="py-8 mx-3" id="GamingGear"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white py-4 bg-gray-900 mx-8 rounded-lg"></div>
                <div>
                    <!-- Gaming Gear Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-2">
                            <RouterLink to="/categories/gaming-gear">
                                <div class="text-white h-full shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500"
                                    :style="{ 'background-image': 'url(https://img.freepik.com/premium-photo/top-view-gaming-gear_160097-851.jpg)', 'backgroundPosition': 'bottom right 40%', 'backgroundSize': '300%' }">
                                    <h2
                                        class="lg:text-4xl md:text-3xl mt-0 mb-24 font-semibold hover:scale-110 transition-all duration-500">
                                        Gaming Gear</h2>
                                </div>
                            </RouterLink>
                            <div v-for="product in filteredGearProducts.slice(0, 5)" :key="product.id"
                                class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <NuxtLink class="hover: scale-105" :to="`product/${product.id}`">
                                    <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                        class="h-40 mx-auto object-cover mb-4">
                                    <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                </NuxtLink>
                                <div class="mt-4 flex items-center justify-between">
                                    <span class="lg:text-xl font-bold text-blue-900 md:text-md text-left">฿ {{
                                        product.price
                                    }}</span>
                                    <button
                                        class="transform active:scale-x-75 transition-transform inline-flex bg-blue-800 md:text-sm lg:text-md text-white lg:px-4 md:px-2 py-2 rounded-full hover:bg-blue-700"
                                        @click="addToCart(product)">
                                        Add
                                        <svg class="ml-1 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-200 dark:group-hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 18 21">
                                            <path
                                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from '~/stores/useProductStore';
import { useAuthStore } from '~/stores/useAuthStore';
import { useCartStore } from '~/stores/useCartStore';

export default {
    data() {
        return {
            isAnimating: false,
            auth: useProductStore(),
            brand: [
                {
                    id: 1,
                    name: 'Intel',
                    image: 'https://miro.medium.com/v2/resize:fit:2400/1*tGK9XdcRZLZNo3u2ep17HA.jpeg',
                },
                {
                    id: 2,
                    name: 'Razor',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNm61CdK5DzSjyqvAVxMTUaOojutf07U0PA&usqp=CAU',
                },
                {
                    id: 3,
                    name: 'Logitech',
                    image: 'https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo.png',
                },
                {
                    id: 4,
                    name: 'Asus',
                    image: 'https://dlcdnimgs.asus.com/websites/global/Sno/79183.jpg',
                },
                {
                    id: 5,
                    name: 'Nvidia',
                    image: 'https://s3-symbol-logo.tradingview.com/nvidia--600.png',
                },
                {
                    id: 6,
                    name: 'MSI',
                    image: 'https://assets.entrepreneur.com/content/1x1/300/20190628132046-2019-msi-dragon-spirit-logo-digital-v-4c-b.jpeg?format=pjeg&auto=webp',
                },
                {
                    id: 7,
                    name: 'Gigabyte',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6l-UYmlE7XlVZXRN4WwXtOaX7mi6iNxauE-s_QyR1sLEbIl-NAKRYzU-wYRnW3zCfra4&usqp=CAU',
                },
                {
                    id: 8,
                    name: 'AMD',
                    image: 'https://www.profesionalreview.com/wp-content/uploads/2012/09/amd_logo.jpg',
                },
                {
                    id: 9,
                    name: 'Steel Series',
                    image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Steelseries-logo.png',
                },
                {
                    id: 10,
                    name: 'Corsair',
                    image: 'https://www.extremeit.com/wp-content/uploads/2020/02/Corsair-logo-H.png',
                },
                {
                    id: 11,
                    name: 'LG',
                    image: 'https://dasintergroup.com/daswp/wp-content/uploads/2019/11/Size-Insert-product-Picture-product-2.jpg',
                },
            ],
        }
    },
    methods: {
        animateButton() {
            // This method will be called when the button is clicked
            // You can apply animation-related classes here based on isAnimating
            if (this.isAnimating) {
                return 'animate-pulse'; // Example animation class; you can replace this with your desired animation class
            } else {
                return '';
            }
        },
    },

    components: {
        Navbar: () => import('~/components/Navbar.vue'), // Import the Navbar component
    },

    setup() {
        // Vue 3 Composition API setup
        const auth = useAuthStore();
        const productStore = useProductStore();
        const cartStore = useCartStore(); // Use the Cart store
        const products = ref([]);
        const searchQuery = ref('');

        onMounted(async () => {
            try {
                await productStore.fetchProducts();
                products.value = productStore.products;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        // Computed property to filter products based on the search query
        const filteredProducts = computed(() => {
            return products.value.filter((product) => {
                // Adjust this condition based on your filtering criteria
                return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        });

        const filteredCpuProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'CPU';
            });
        });

        const filteredMainboardProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'Mainboard';
            });
        });

        const filteredGpuProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'GPU';
            });
        });

        const filteredRamProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'RAM';
            });
        });

        const filteredHarddiskProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'Harddisk';
            });
        });

        const filteredDisplayProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'Display';
            });
        });

        const filteredGearProducts = computed(() => {
            return products.value.filter((product) => {
                return product.category === 'Gameing-Gear';
            });
        });

        const addToCart = (product) => {
            // Log a message when the addToCart function is called
            console.log('Adding product to the cart:', product);

            // Use the addToCart method from the Cart store
            cartStore.addToCart(product);

            // Log a message to confirm that the product was added to the cart
            console.log('Product added to the cart:', product);

            // Optionally, show a notification or feedback to the user that the product was added to the cart
        };

        

        return {
            searchQuery,
            filteredProducts,
            filteredCpuProducts,
            filteredMainboardProducts,
            filteredGpuProducts,
            filteredRamProducts,
            filteredHarddiskProducts,
            filteredDisplayProducts,
            filteredGearProducts,
            auth,

            addToCart,
        };
    },

    mounted() {
        this.$nextTick(() => {
            const swiper = new Swiper(this.$refs.categorySwiper as HTMLElement, {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: this.$refs.categoryPagination as HTMLElement,
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
            });
        });
    },
};
</script>

<style>
.background-animate {
    z-index: -10;
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
}

@keyframes AnimationName {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}
</style>