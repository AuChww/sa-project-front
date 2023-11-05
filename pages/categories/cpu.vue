<template>
    <!-- all roles -->
    <Navbar />
    <Sidebar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">


                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <!-- Item 1 -->
                        <div class="duration-700 ease-in-out" data-carousel-item>
                            <img src="https://setting.ihavecpu.com/uploads/slidebanner/shop1/slide_256.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://setting.ihavecpu.com/uploads/slidebanner/shop1/slide_188.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://images-ext-1.discordapp.net/external/mnTKytlymyGeF3Mm-w1JTfkAL9MVIuu6oqXfONB8LBk/https/setting.ihavecpu.com/uploads/slidebanner/shop1/slide_240.jpg?width=1440&height=375"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                        <!-- Item 4 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://setting.ihavecpu.com/uploads/slidebanner/shop1/slide_188.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                        <!-- Item 5 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-5.svg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                    </div>
                    <!-- Product Categories Carousel -->
                    <section class="mt-4 mx-4" id="Feature Video">
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <!-- Featured Product Cards -->
                            <div class="w-full">
                                <iframe src="https://www.youtube.com/embed/oNVSAnG5N3Y" class="w-full h-full"
                                    frameborder="0" allowfullscreen></iframe>

                            </div>
                            <div class="w-full">
                                <iframe src="https://www.youtube.com/embed/lpraYE-TLeM" class="w-full h-full"
                                    frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div class="w-full">
                                <iframe src="https://www.youtube.com/embed/n1CivRU6IHU" class="w-full h-full"
                                    frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div class="w-full">
                                <iframe src="https://www.youtube.com/embed/9JuXkUEdVK4" class="w-full h-full"
                                    frameborder="0" allowfullscreen></iframe>
                            </div>

                        </div>
                    </section>
                    <!-- Slider indicators -->
                </div>

                <div class="text-white mt-12 py-1 bg-gray-900 font-semibold text-2xl mx-2 rounded-lg">CPU</div>

                <!-- CPU -->
                <section class="py-12 mx-3" id="CPU"
                    :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
                    <div class="container mx-auto text-center">

                        <div>
                            <!-- CPU Product List -->
                            <div class="p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-left">
                                <div v-for="product in filteredCpuProducts" :key="product.id"
                                    class="bg-white shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500 relative h-full flex flex-col">
                                    <img :src="`http://localhost:80/storage/${product.image}`"  alt="Product Image" class="w-full h-100 object-cover mb-4">
                                    <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                                    <p class="text-gray-600 flex-grow overflow-hidden line-clamp-2">{{ product.description
                                    }}</p>

                                    <div class="flex justify-between mt-2">
                                        <!-- Price on the left-bottom -->
                                        <div class="text-xl font-bold text-blue-900 ">$ {{ product.price }}</div>

                                        <div v-if="auth.isLogin">
                                            <!-- Add to Cart on the right-bottom -->
                                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                                                @click="addToCart(product)">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { useProductStore } from '~/stores/useProductStore';
import { useAuthStore } from '~/stores/useAuthStore';
import { useCartStore } from '~/stores/useCartStore';
import Navbar from '~/components/Navbar.vue'; // Import the Navbar component
import Swiper from 'swiper/bundle'; // Import Swiper from the installed package
import 'swiper/swiper-bundle.css'; // Import Swiper CSS


export default {
    components: {
        Navbar, // Register the Navbar component
    },

    setup() {
        // Vue 3 Composition API setup
        const auth = useAuthStore();
        const productStore = useProductStore();
        const cartStore = useCartStore();
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
            auth,
            addToCart,
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
                    delay: 5000,
                },
            });

        });
    },
};

</script>

<style scoped>/* Tailwind CSS classes and custom styling */</style>