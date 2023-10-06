<template>
    <!-- Product List Section -->
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">Explore Our Products</h2>
            <p class="text-gray-600 text-base mb-8 transition-all">The price display is taxed.</p>

            <!-- Filter Input Field -->
            <input v-model="searchQuery" type="text" placeholder="Search products..."
                class="mb-4 px-4 py-2 border border-gray-300 rounded-md">

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
                            <div class="text-xl font-bold text-blue-900 ">{{ product.price }} $</div>

                            <!-- Add to Cart on the right-bottom -->
                            <button class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from '~/stores/useProductStore';

export default {
    name: 'ProductList',
    setup() {
        const productStore = useProductStore();
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

        return {
            searchQuery,
            filteredProducts,
        };
    },
};
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  