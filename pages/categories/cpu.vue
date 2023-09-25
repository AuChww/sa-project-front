<template>
    <!-- all roles -->
    <Navbar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                
                <div class="text-white py-12" :style="{'background-image':'url(https://e0.pxfuel.com/wallpapers/458/781/desktop-wallpaper-colourful-colorful-background-for-colored.jpg)'}" >
                    <h2 class="text-4xl font-semibold">CPU</h2>
                </div>

                <div
                    class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
                    style="padding-top: 42.857143%">
                    <iframe
                        class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                        src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                        allowfullscreen=""
                        data-gtm-yt-inspected-2340190_699="true"
                        id="240632615"></iframe>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                    <!-- RAM Cards -->
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
                brand: [
                    {
                        id: 1,
                        name: 'Hyper X',
                        description: 'Explore our latest computer Components.',
                        image: 'https://cdn-icons-png.flaticon.com/512/4617/4617522.png',
                    },
                    {
                        id: 2,
                        name: 'Logitech',
                        description: 'Find the perfect laptop for your needs.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2482/2482264.png',
                    },
                    {
                        id: 3,
                        name: 'Razor',
                        description: 'Enhance your gadgets with our accessories.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2758/2758761.png',
                    },
                    {
                        id: 4,
                        name: 'Intel',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                    },
                    {
                        id: 5,
                        name: 'ASUS',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                    },
                    {
                        id: 6,
                        name: 'Nvidia',
                        description: 'Upgrade your software tools.',
                        image: 'https://cdn-icons-png.flaticon.com/512/2606/2606514.png',
                    },
                ],
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