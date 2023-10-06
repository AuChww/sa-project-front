<template>
    <!-- Product List Section -->
    <section class="bg-gray-100 py-16 transition-all">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">Explore Our Products</h2>
            <p class="text-gray-600 text-base mb-8 transition-all">The price display is taxed.</p>

            <!-- Dropdown Menu for Sort By -->
            <div class="relative inline-block text-left z-50" @click="toggleDropdown">
                <button
                    class="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 z-50">
                    Sort By
                    <svg class="h-5 w-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M2.293 6.293a1 1 0 011.414 0L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Dropdown Panel -->
                <div v-show="showDropdown"
                    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                    <!-- Sorting Options -->
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a @click="sortBy('name')" href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem">Sort by Name</a>
                        <a @click="sortBy('price')" href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem">Sort by Price</a>
                    </div>
                </div>
            </div>

            <!-- Filter Input Field -->
            <input v-model="searchQuery" type="text" placeholder="Search products..."
                class="mb-4 px-4 py-2 border border-gray-300 rounded-md">

            <!-- Product List -->
            <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
                style="position: relative; z-index: 0;">
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
        const showDropdown = ref(false);
        const isLoading = ref(true);
        let sortByOption = null;

        const toggleDropdown = () => {
            showDropdown.value = !showDropdown.value;
        };

        const closeDropdown = () => {
            showDropdown.value = false;
        };

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
            return products.value
                .filter((product) => {
                    // Filter by search query
                    return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
                })
                .sort((a, b) => {
                    if (sortByOption === 'name') {
                        return a.name.localeCompare(b.name);
                    } else if (sortByOption === 'price') {
                        return a.price - b.price;
                    } else {
                        return 0; // No sorting
                    }
                });
        });

        // Function to handle sorting
        const sortBy = (option) => {
            sortByOption = option;
            console.log(`Sorting by ${option}`);
            closeDropdown();
        };

        return {
            searchQuery,
            filteredProducts,
            showDropdown,
            toggleDropdown,
            closeDropdown,
            sortBy,
        };
    },
};
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  