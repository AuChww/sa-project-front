<template>
    <!-- all roles -->
    <Navbar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                
                <div class="text-white py-12" :style="{'background-image':'url(https://e0.pxfuel.com/wallpapers/458/781/desktop-wallpaper-colourful-colorful-background-for-colored.jpg)'}" >
                    <h2 class="text-4xl font-semibold">Accessary</h2>
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