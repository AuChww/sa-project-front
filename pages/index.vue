
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
        <section class="bg-gray-100 py-16 ">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-4">Explore Our Categories</h2>
                <p class="text-gray-600 text-base mb-8 transition-all">Swipe left-right through the cataegory.</p>

                <!-- Swiper Carousel Container -->
                <div class="swiper-container" ref="categorySwiper" style="overflow-x: hidden;">
                    <div class="swiper-wrapper">
                        <!-- Category Cards -->
                        <div v-for="category in categories" :key="category.id"
                            class="swiper-slide bg-white shadow-md p-8 rounded-lg"
                            :style="{ 'background-image': 'url(https://wallpapers.com/images/featured/1366x768-4lygqv03leitaipx.jpg)' }">
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
        <section class="py-12 mx-3" id="Feature Product"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <div class="text-white py-8"
                    :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }">
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
        <section class="py-12 mx-3" id="Best Seller"
            :style="{ 'background-image': 'url(https://wallpapers.com/images/hd/red-fire-background-na0r6a991986yftd.jpg)' }">
            <div>
                <!-- Product List -->
                <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    <div v-for="product in filteredProducts" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500 relative h-full flex flex-col">
                        <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                        <p class="text-gray-600 flex-grow overflow-hidden text-ellipsis">{{ product.description }}</p>

                        <div class="flex justify-between mt-2">
                            <!-- Price on the left-bottom -->
                            <div class="text-xl font-bold text-blue-900 ">$ {{ product.price }}</div>

                            <!-- Add to Cart on the right-bottom -->
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                                @click="addToCart(product)">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CPU -->
        <section class="py-12 mx-3" id="CPU"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/cpu">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">CPU</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- CPU Cards -->
                    <div v-for="product in CPU" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="Main Board"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/mainboard">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Main Board</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Main Board Cards -->
                    <div v-for="product in MainBoard" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="GPU"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/gpu">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">GPU</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- GPU Cards -->
                    <div v-for="product in GPU" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="RAM"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/ram">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">RAM</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- RAM Cards -->
                    <div v-for="product in RAM" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="Harddisk"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/harddisk">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Harddisk/SSD</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Harddisk Cards -->
                    <div v-for="product in Harddisk" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="Accessary"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/accessary">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Accessary</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Accessary Cards -->
                    <div v-for="product in Accessary" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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
        <section class="py-12 mx-3" id="Gaming Gear"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">
                <RouterLink to="/categories/gaming-gear">
                    <div class="text-white py-8"
                        :style="{ 'background-image': 'url(https://cdn.bhdw.net/im/color-image-of-circular-shapes-combined-from-colors-wallpaper-103050_w635.webp)' }">
                        <h2 class="text-4xl font-semibold hover:scale-150 transition-all duration-500">Gaming Gear</h2>
                        <h4>more product >></h4>
                    </div>
                </RouterLink>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- Gaming Gear Cards -->
                    <div v-for="product in GamingGear" :key="product.id"
                        class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                        <RouterLink to="/product/">
                            <img :src="product.image" alt="Product Image" class="w-full h-100 object-cover mb-4">
                        </RouterLink>
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

<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from '~/stores/useProductStore';
import { useCartStore } from '~/stores/useCartStore';

export default {
    components: {
        Navbar: () => import('~/components/Navbar.vue'), // Import the Navbar component
    },

    setup() {
        // Vue 3 Composition API setup
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

<style>.background-animate {
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
}</style>