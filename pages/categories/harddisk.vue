<template>
    <!-- all roles -->
    <Navbar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                
                <div class="text-white py-12" :style="{'background-image':'url(https://e0.pxfuel.com/wallpapers/458/781/desktop-wallpaper-colourful-colorful-background-for-colored.jpg)'}" >
                    <h2 class="text-4xl font-semibold">Harddisk/SSD</h2>
                </div>

                <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-ride="carousel">
                    <!--Carousel indicators-->
                    <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                        data-te-carousel-indicators>
                        <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="0"
                            data-te-carousel-active
                            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="1"
                            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 2"></button>
                        <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="2"
                            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 3"></button>
                    </div>

                    <!--Carousel items-->
                    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <!--First item-->
                        <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="block w-full"
                                alt="..." />
                            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                <h5 class="text-xl">First slide label</h5>
                                <p>
                                    Some representative placeholder content for the first slide.
                                </p>
                            </div>
                        </div>
                        <!--Second item-->
                        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item style="backface-visibility: hidden">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="block w-full"
                                alt="..." />
                            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                <h5 class="text-xl">Second slide label</h5>
                                <p>
                                    Some representative placeholder content for the second slide.
                                </p>
                            </div>
                        </div>
                        <!--Third item-->
                        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item style="backface-visibility: hidden">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" class="block w-full"
                                alt="..." />
                            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                <h5 class="text-xl">Third slide label</h5>
                                <p>
                                    Some representative placeholder content for the third slide.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!--Carousel controls - prev item-->
                    <button
                        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
                        <span class="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                    </button>
                    <!--Carousel controls - next item-->
                    <button
                        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
                        <span class="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                    </button>
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