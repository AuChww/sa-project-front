<template>
    <!-- all roles -->
    <Navbar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM"
            :style="{ 'background-image': 'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)' }">
            <div class="container mx-auto text-center">

                <div class="text-white py-12"
                    :style="{ 'background-image': 'url(https://e0.pxfuel.com/wallpapers/458/781/desktop-wallpaper-colourful-colorful-background-for-colored.jpg)' }">
                    <h2 class="text-4xl font-semibold">Gaming Gear</h2>
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