<template>
    <Navbar />
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

    <div>
        <!-- CPU -->
        <section class="py-8 mx-3" id="CPU"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center mb-4">
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">CPU</div>
                <div>
                    <!-- CPU Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredCpuProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">Mainboard</div>
                <div>
                    <!-- Mainboard Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredMainboardProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">GPU</div>
                <div>
                    <!-- GPU Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredGpuProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">RAM</div>
                <div>
                    <!-- RAM Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredRamProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">Harddisk/SSD</div>
                <div>
                    <!-- Harddisk Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredHarddiskProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">Display</div>
                <div>
                    <!-- Display Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredDisplayProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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
                <div class="text-white text-2xl font-semibold mt-4 bg-gray-900 mx-8 rounded-lg">Gaming Gear</div>
                <div>
                    <!-- Gaming Gear Product List -->
                    <div>
                        <div class="lg:h-72 md:h-96 mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
                            <div v-for="product in filteredGearProducts" :key="product.id"
                                class="bg-white text-left inline-flex shadow-md p-3 rounded-lg hover:scale-105 transition-all duration-500">
                                <div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <img :src="`http://localhost:80/storage/${product.image}`" alt="Product Image"
                                            class="h-20 mx-auto object-cover mb-4">
                                        <div class="ml-2">
                                            <h3 class="lg:text-xl font-semibold md:text-md">{{ product.name }}</h3>
                                            <span class="lg:text-xl mt-2 font-bold text-blue-900 md:text-md text-left">฿ {{
                                                product.price
                                            }}</span>
                                            <div class="text-sm font-semi text-blue-700 ">Stocks : {{
                                                product.quantity
                                            }}
                                            </div>
                                        </div>

                                        <div class="text-right">
                                            <div class="inline-flex">
                                                <button @click="addProductToStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                                                    +
                                                </button>
                                                <button @click="removeProductFromStock(product.id)"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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

export default {
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
        const products = ref([]);
        const searchQuery = ref('');
        const formData = ref({
            quantity: 1
        })

        const formErrors = ref({
            errors: null    
        })

        async function addProductToStock(productId: number) {
            const { quantity } = formData.value;
            const { data: response, error } = await useMyFetch<any>(
                `product/addStock/${productId}`,
                {
                    method: "PUT",
                    body: { quantity }
                }
            );

            if (response.value !== null) {
                console.log('Add!');
                const product = productStore.getProductById(productId);

                if (product) {
                    // Update the quantity of the product in the store
                    product.quantity += quantity;
                }
            } else {
                console.log(error);
                const { message } = error.value!.data;
                formErrors.value.errors = message;
            }
        }

        async function removeProductFromStock(productId: number) {
            const { quantity } = formData.value;
            const { data: response, error } = await useMyFetch<any>(
                `product/removeStock/${productId}`,
                {
                    method: "PUT",
                    body: { quantity }
                }
            );

            if (response.value !== null) {
                console.log('Removed!');
                const product = productStore.getProductById(productId);
                if (product) {
                    // Update the quantity of the product in the store
                    product.quantity -= quantity;
                }
            } else {
                console.log(error);
                const { message } = error.value!.data;
                formErrors.value.errors = message;
            }
        }

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
            addProductToStock,
            removeProductFromStock,
            auth,
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