<template>
    <div>
        <Navbar />
        <!-- Showcase Header -->
        <section class="bg-blue-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                    Welcome to Our Electronics and Computer Store
                </h1>
                <p class="text-base md:text-lg lg:text-xl mb-8 transition-all">Discover the latest and greatest
                    electronic gadgets and computer accessories.
                </p>
                <a href="#"
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
                            class="swiper-slide bg-white shadow-md p-8 rounded-lg">
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

        <!-- Featured Products -->
        <section class="py-12 mt-3 mx-3">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Featured Products</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <!-- Featured Product Cards -->
                    <div v-for="product in featuredProducts" :key="product.id"
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
                categories: [
                    {
                        id: 1,
                        name: 'Computer Components',
                        description: 'Explore our latest computer Components.',
                        image: 'https://cdn-icons-png.flaticon.com/512/4617/4617522.png',
                    },
                    {
                        id: 2,
                        name: 'Laptops',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2482/2482264.png',
                    },
                    {
                        id: 3,
                        name: 'Accessories',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                    {
                        id: 4,
                        name: 'Software',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                    },
                ],
                featuredProducts: [
                    // Featured product data goes here
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
                        id: 2,
                        name: 'Laptops',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2482/2482264.png',
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
                        delay: 5000,
                      },
                });

            });
        },
    };
    
</script>

<style scoped>
    /* Tailwind CSS classes and custom styling */
</style>