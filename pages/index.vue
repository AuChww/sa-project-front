<template>
    <!-- all roles -->
    <Navbar />
    <Sidebar />
    <Cart />
    <div>

        <!-- Showcase Header -->
        <section :style="{'background-image':'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)'}" class="bg-blue-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                    Welcome to Our Electronics and Computer Store
                </h1>
                <p class="text-base md:text-lg lg:text-xl mb-8 transition-all">Discover the latest and greatest
                    electronic gadgets and computer accessories.
                </p>
                <a href="#Product"
                    class="bg-white text-blue-900 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                    Shop Now
                </a>
            </div>
        </section>

        <!-- Product Categories Carousel -->
        <section class="bg-gray-100 py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-4">Explore Our Categories</h2>
                <p class="text-gray-600 text-base mb-8 transition-all">Swipe left-right through the cataegory.</p>

                <!-- Swiper Carousel Container -->
                <div class="swiper-container" ref="categorySwiper" style="overflow-x: hidden;">
                    <div class="swiper-wrapper">
                        <!-- Category Cards -->
                        <div v-for="category in categories" :key="category.id"
                            class="swiper-slide bg-white shadow-md p-8 rounded-lg" 
                            :style="{'background-image':'url(https://wallpapers.com/images/featured/1366x768-4lygqv03leitaipx.jpg)'}">
                            <img :src="category.image" alt="Category Image" class="w-16 h-16 mx-auto mb-4">
                            <h3 class="text-xl font-semibold">{{ category.name }}</h3>
                            <p class="text-gray-600">{{ category.description }}</p>
                        </div>
                    </div>

                    <!-- Add Pagination -->
                    <div class="swiper-pagination hidden 2xl:block 2xl:py-3 " ref="categoryPagination"></div>
                </div>
            </div>
        </section>

        <!-- Feature Products -->
        <section class="py-12 mx-3" id="Feature Product" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <div class="text-white py-8" :style="{'background-image':'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)'}" >
                    <h2 class="text-3xl font-semibold">Feature Product</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Featured Product Cards -->
                    <div v-for="brands in brand" :key="brands.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="brands.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ brands.name }}</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Best Seller -->
        <section class="py-12 mx-3" id="Best Seller" :style="{'background-image':'url(https://wallpapers.com/images/hd/red-fire-background-na0r6a991986yftd.jpg)'}">
            <div class="container mx-auto text-center">
                <div class="text-white py-8" :style="{'background-image':'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHe-JBaQuniqZd9yVjVlDuBROw6GIj9gLcKEVdy_sKCNOaC1h6Smr6HKA71igKhgeU7hM&usqp=CAU)'}" >
                    <h2 class="text-3xl font-semibold">Best Seller</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Best Seller Product Cards -->
                    
                    <div v-for="product in BestSeller" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CPU -->
        <section class="py-12 mx-3" id="CPU" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/cpu">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">CPU</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- CPU Cards -->
                    <div v-for="product in CPU" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Board -->
        <section class="py-12 mx-3" id="Main Board" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/mainboard">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Main Board</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Main Board Cards -->
                    <div v-for="product in MainBoard" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- GPU -->
        <section class="py-12 mx-3" id="GPU" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/gpu">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">GPU</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- GPU Cards -->
                    <div v-for="product in GPU" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- RAM -->
        <section class="py-12 mx-3" id="RAM" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/ram">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">RAM</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- RAM Cards -->
                    <div v-for="product in RAM" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Harddisk -->
        <section class="py-12 mx-3" id="Harddisk" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/harddisk">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Harddisk/SSD</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Harddisk Cards -->
                    <div v-for="product in Harddisk" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Accessary -->
        <section class="py-12 mx-3" id="Accessary" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/accessary">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Accessary</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Accessary Cards -->
                    <div v-for="product in Accessary" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gaming Gear -->
        <section class="py-12 mx-3" id="Gaming Gear" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/gaming-gear">
                    <div class="text-white py-8" :style="{'background-image':'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)'}" >
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Gaming Gear</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Gaming Gear Cards -->
                    <div v-for="product in GamingGear" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600">{{ product.description }}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-xl font-bold text-blue-900">{{ product.price }}</span>
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar.vue'; // Import the Navbar component
    import Swiper from 'swiper/bundle'; // Import Swiper from the installed package
    import 'swiper/swiper-bundle.css'; // Import Swiper CSS

    export default {
        components: {
            Navbar, // Register the Navbar component
        },

        data() {
            return {
                brand: [
                    {
                        id: 1,
                        name: 'Hyper X',
                        description: 'Explore our latest computer Components.',
                        image: 'https://oz1gadget.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/04/21175324/HyperX-Cloud-Stinger-2-Core.jpg',
                    },
                    {
                        id: 2,
                        name: 'Logitech',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://www.jib.co.th/img_master/product/original/2022091309030255180_1.jpg',
                    },
                    {
                        id: 3,
                        name: 'Razor',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://static-jaymart.com/ecom/public/1yZy0ryH9xceNFowRpGLxYXJy97.jpg',
                    },
                    {
                        id: 4,
                        name: 'Intel',
                        description: 'Upgrade your software tools.',
                        image: 'https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1688808251315.jpg',
                    },
                    {
                        id: 5,
                        name: 'ASUS',
                        description: 'Upgrade your software tools.',
                        image: 'https://www.jib.co.th/img_master/product/original/20230404173200_58791_352_1.jpg',
                    },
                    {
                        id: 6,
                        name: 'Nvidia',
                        description: 'Upgrade your software tools.',
                        image: 'https://img.ws.mms.shopee.co.th/th-11134207-7qul0-lh5yekxxy7skf9',
                    },
                ],
                categories: [
                    {
                        id: 1,
                        name: 'CPU',
                        description: 'Explore our latest computer Components.',
                        image: 'https://cdn-icons-png.flaticon.com/512/4617/4617522.png',
                    },
                    {
                        id: 2,
                        name: 'Main Board',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2482/2482264.png',
                    },
                    {
                        id: 3,
                        name: 'GPU',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                    {
                        id: 4,
                        name: 'RAM',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                    },
                    {
                        id: 5,
                        name: 'Harddisk/SSD',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                    {
                        id: 6,
                        name: 'Accessories',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                    {
                        id: 7,
                        name: 'Gaming Gear',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                ],
                BestSeller: [
                    // Best Seller product data goes here
                    {
                        id: 1,
                        name: 'Intel Core I5 12600K',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2021102715152349469_1.png',
                        price: "454 $",
                    },
                    {
                        id: 2,
                        name: 'Gigabyte Nvidia Geforce RTX 3060',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://www.jib.co.th/img_master/product/original/2021061814352847269_1.jpg',
                        price: "454 $",
                    },
                    {
                        id: 3,
                        name: 'Accessories',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                        price: "454 $",
                    },
                    {
                        id: 4,
                        name: 'Software',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                        price: "454 $",
                    },
                    {
                        id: 5,
                        name: 'Laptops',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2482/2482264.png',
                        price: "454 $",
                    },
                    {
                        id: 6,
                        name: 'Accessories',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                        price: "454 $",
                    },
                    {
                        id: 7,
                        name: 'Software',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                        price: "454 $",
                    },
                ],
                CPU: [
                    // CPU product data goes here
                    {
                        id: 1,
                        name: 'Intel Core I5 12600K',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2021102715152349469_1.png',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'Intel Core i9-11900K',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media-cdn.bnn.in.th/237836/BX8070811900K-1-square_medium.jpg',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'AMD Ryzen 9 5950X',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0133528/A0133528OK_BIG_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'AMD Ryzen 7 5800X',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0133526/A0133526OK_BIG_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'Intel Core i7-11700K',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media-cdn.bnn.in.th/108082/Intel-CPU-Core-i7-11700K-3.6-GHz-8C-16T-LGA1200-1-square_medium.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'AMD Ryzen 5 5600x',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media-cdn.bnn.in.th/52091/AMD-CPU-Ryzen-5-5600X-3.7GHz-6C-12T-AM4-gen5-1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'AMD Ryzen 9 5900X',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2020110315571243473_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'Intel Core i9-10900K',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2020051316293839042_1.jpg',
                        price: "454 $",
                    },
                ],
                MainBoard: [
                    // mainboard product data goes here
                    {
                        id: 1,
                        name: 'ASUS ROG Strix B550-F',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://dlcdnwebimgs.asus.com/gain/25BA78E2-16EF-458B-BAD4-786AECFCBC38',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'MSI MPG B550 Gaming Carbon WiFi',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.ascenti.co.th/wp-content/uploads/2020/07/msi-MPG-B550-GAMING-CARBON-WIFI-2.jpg',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'GIGABYTE Aorus X570 Elite',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,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',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'ASUS ROG Crosshair VIII Hero',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2019071117315134467_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'MSI MAG B550 Tomahawk',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media-cdn.bnn.in.th/29747/MSI-Mainboard-MAG-B550-Tomahawk-AM4-2-square_medium.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'ASRock B550M Steel Legend',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://admin.ihavecpu.com//data/img/shop1/product/product7298_800.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'ASUS Prime B450M-A/CSM',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.asus.com/media/global/gallery/rwsyrd6lvstqh0yy_setting_xxx_0_90_end_2000.png',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'GIGABYTE B450 AORUS Elite',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0136639/A0136639OK_BIG_5.jpg',
                        price: "454 $",
                    },
                ],
                GPU: [
                    // GPU product data goes here
                    {
                        id: 1,
                        name: 'NVIDIA GeForce RTX 3090',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media.ldlc.com/r1600/ld/products/00/05/73/29/LD0005732942_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'NVIDIA GeForce RTX 3080',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'AMD Radeon RX 6900 XT',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%206900%20XT%20OC%20Formula%2016GB(M1).png',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'NVIDIA GeForce RTX 3070',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://notebookspec.com/storage/pc-vga/vga_1487_20210714-143606_20201102-101734_1.png',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'AMD Radeon RX 6800 XT',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://notebookspec.com/storage/pc-vga/vga_1347_20201225-131634_1.png',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'NVIDIA GeForce RTX 3060 Ti',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2023021013182157837_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'AMD Radeon RX 6700 XT',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%206700%20XT%20Challenger%20D%2012GB(M1).png',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'NVIDIA GeForce GTX 1660 Super',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0135263/A0135263OK_BIG_1.jpg',
                        price: "454 $",
                    },
                ],
                RAM: [
                    // RAM product data goes here
                    {
                        id: 1,
                        name: 'Corsair Vengeance LPX',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0135262/A0135262OK_BIG_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'G.Skill Trident Z RGB',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/20180718164547_25388_21_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'Crucial Ballistix',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.autonetpc.com/wp-content/uploads/2020/04/image.png',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'Kingston HyperX Predator',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2018110316195832101_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'Crucial Ballistix Max',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media.ldlc.com/r1600/ld/products/00/05/58/79/LD0005587942_2_0005588115.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'Team Group T-Force Xtreem',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0136773/A0136773OK_BIG_2.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'Patriot Viper Steel',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://storage.googleapis.com/file-computeandmore/images/1f774bf0-fd40-4b2b-b875-c1c17fdf3f37.jpg',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'Corsair Dominator Platinum RGB',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://storage.googleapis.com/file-computeandmore/large_images/398cb2f7-e921-4665-a96c-f9aec103f3ca.png',
                        price: "454 $",
                    },
                ],
                Harddisk: [
                    // Harddisk product data goes here
                    {
                        id: 1,
                        name: 'Seagate Barracuda',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,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',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'Western Digital Blue',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-desktop-sata-hdd/gallery/wd-blue-pc-desktop-hard-drive-500gb.png.thumb.1280.1280.png',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'Seagate IronWolf',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/products/nas-drives/ironwolf-hard-drive/_shared/images/ironwolf-pro-20tb-hero-front.png',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'Western Digital Black',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-desktop-sata-hdd/gallery/wd-black-desktop-500gb.png',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'Toshiba P300',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2018082913581531240_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'Seagate FireCuda',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/products/gaming-drive/pc-gaming/_shared/images/firecuda-hdd-card-layout-product.png',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'Western Digital Red',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsV3tQDMgsBKJFLtK3BU8H2cdHIFPjZvg5ElbNDr5egz0vf2TDf9fwPXG8RpLYev2iWDk&usqp=CAU',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'HGST Ultrastar',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.neoshop.co.th/wp-content/uploads/2023/07/ultrastar-dc-hc550-hdd-16tb-left.png',
                        price: "454 $",
                    },
                ],
                Accessary: [
                    // Accessary product data goes here
                    {
                        id: 1,
                        name: 'ASUS ROG Swift PG279QZ',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://gameone.ph/media/catalog/product/cache/7a2235b416a1900151232a782f707140/a/s/asus-rog-swift-pg329q-32-gaming-monitor-1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'Dell Alienware AW3418DW',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,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/l81ciJsfmHavRvGYR2atQqMymRUbdojeKjCQ0+JBUi6O9Z2MoQ2qRiaf6Zh4HKoB3v2gTzCvshRfbXQLAYmS6iKbz7dLuOniQO64/rAoPej3TnBYuGsqZKh/u6kNdPBt4d+ySpQqZ2z1Q1WycNWbUHxagyO+U2WuPk1aGE6SbW2YQ3EMe6kLZa4LmxpDK7Zg8pdHBQL1RQzo91i4LEw1zuwqH2ahABP6L/gnzg8lMkHqIiAiIgIiICIiAiIgIiICje3tq41j+zwuCdVdH/Fe9jaYkcM2ZxGkd3xUkRBWtfoPjsaQ7H4yGTPZURIHCJhoI4lrjzUk2P0HwOGgsoNe4e3U77p4jNZp/VAUmRB4vURAREQEREBERAREQF8PYCCCAQdQd6+0QRHbHV7gMRJ7LsnGe9ROTXi2Cw+bVxML0W2pgf/AKeJZWpD+5rAtgcG3IHi0s8FZKIOHsDauIqyzEYSph3tFyXMex27uuaZnfBFuJXcREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'LG OLED C1',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/6/267469.jpg',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'Acer Predator X27',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,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',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'SteelSeries QcK',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/20181012112629_11588_24_1.png',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'Corsair MM300',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://oz1gadget.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/02/23112013/Corsair-MM300-Medium_01.webp',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'Logitech G240',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/20190708143041_14813_24_1.png',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'Razer Goliathus',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,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',
                        price: "454 $",
                    },
                ],
                GamingGear: [
                    // Gaming Gear product data goes here
                    {
                        id: 1,
                        name: 'Razer DeathAdder Elite',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/20180807143626_24024_24_1.png',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'RAZER MAMBA ELITE',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://wtfitonline.com/wp-content/uploads/2020/08/Razer-Mamba-Elite.jpg',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'Razer BlackWidow V3',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://static-jaymart.com/ecom/public/1yZy0ryH9xceNFowRpGLxYXJy97.jpg',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'Razer Gaming Keyboard Ornata V3 X',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media.education.studio7thailand.com/68202/Razer--Gaming-Keyboard-Ornata-V3-X-TH-1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'HyperX Cloud II',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/20180726151125_18571_21_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'SteelSeries Arctis 7',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000264739_arctis7p-wht.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'Logitech G Pro X',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80,w_1000/v1648026471/products/PRD202203000438/skus/zfxgoyuva2leairf7hnj.jpg',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'Razer Nari Ultimate',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2018121713413132584_1.jpg',
                        price: "454 $",
                    },
                ],
            };
        },

        mounted() {
            this.$nextTick(() => {
                const swiper = new Swiper(this.$refs.categorySwiper, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: this.$refs.categoryPagination,
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

<style scoped>
    /* Tailwind CSS classes and custom styling */
</style>