<template>
    <!-- all roles -->
    <Navbar />
    <div>

        <!-- RAM -->
        <section class="py-2 mx-3" id="RAM" :style="{'background-image':'url(https://i.pinimg.com/originals/fb/d9/e0/fbd9e0015089d44af6c70f47bb1c4ee1.jpg)'}">
            <div class="container mx-auto text-center">
                
                <div class="text-white py-12" :style="{'background-image':'url(https://e0.pxfuel.com/wallpapers/458/781/desktop-wallpaper-colourful-colorful-background-for-colored.jpg)'}" >
                    <h2 class="text-4xl font-semibold">Mainboard</h2>
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
                        name: 'ASUS ROG Strix B550-F',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://dlcdnwebimgs.asus.com/gain/25BA78E2-16EF-458B-BAD4-786AECFCBC38',
                        price: "454 $",
                    },

                    {
                        id: 2,
                        name: 'MSI MPG B550 Gaming Carbon WiFi',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.ascenti.co.th/wp-content/uploads/2020/07/msi-MPG-B550-GAMING-CARBON-WIFI-2.jpg',
                        price: "454 $",
                    },

                    {
                        id: 3,
                        name: 'GIGABYTE Aorus X570 Elite',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUZFRgYGhgfGhobGxwbHRsZIR0aGyIfHB8hIS0kGx8rHx0dKDclKi4xNDQ0IiM6PzozPi0zNDEBCwsLEA8QHRERGzEdIiEzNDEzMzMxMzM+MzE0MT4+MTExMTMzMz40MzMzMzM/MzMxNDE+MzEyMTMxMTE+MTM1P//AABEIANAA8gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABLEAACAQIEAwQGBgYGCAcBAAABAhEAAwQSITEFQVETImGBBgcycZGhQlKxwdHwFCNicpLCJIKis9LhFTNDU5SVsvE0VGNzo8PTJf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQEAAQMDBQEAAAAAAAAAAAECEQMhMQQyQRIzUWHhE//aAAwDAQACEQMRAD8A7NSlKBSlKBSlKDBicQltGd2CIilmYmAFAkknoBXM73rPdWzJYFy27vlDMUIQQqjQGGMMxkH2gOVPW/xa4DbwiBsjqLj5d3hmAU+GYA++K56bTdmpIJUO6hhMbI0e8hgaDsvAPT3C4puzOaw8aC4VCsZAhWnUydjBNXCvmi0upHUH7NPmKvvqz9IWS7+i3HYpcEW8xJCOPorPsqw5bSBA7xoOtUrFcuKozMQoHMkAfGvSuCJBBHUa0HulQPEvSrCYe72N27kfKrEBHYAGYkqDB0mDyjrWxhfSLCXTCYm0x+rnUN/CTPyoJaleQZ1FeqBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKDlHrTQfplhzsLWu8R2n0iPZHjvy51Ui+fBljJJxRJJ3JNpN/EwTVm9crEX8OBs1t58YdY+Z+yqzZj9CIA2xCec2nM/FaojhoQfzof86/WEEwYg6EaR0jpRxt+eVftzkeoFVHriFh1w1ordLWrj3FNlBtfykZmTRScpBmZAPlWHsXsAPauPbctqUZ03IOhDcsp/jblAG1w68SranIW0HIkSCR9njHgK8Y/2T4EfhUVq/wClLmIu3cRcMvcuMTGwEKoUeAUADwFSth0cd5Qw6EA1WcRwrEWGRhBF5S6AGQVgNqCNwGH41s8P4oJhu6Zgg7T9x8DQWzDWQmtq5dsH/wBN2UfAEVJWuM8St/6vFm6BydVJP8Sk/OoTD4jx+cfbWW5xFVEZ0U/tMAB5Tr8RVRPr6x8bajtrVph1hkJ9zZip8hUrhvWnaj9bhnX/ANt1f/qyVzxuIYdWztdzP9Yy3ksCFHur8scRw95wgGpnvEZAABMsTH2a6Dc1FfQ1q4GUMNQwBHuImslcGu8VxoRAcRcVE1tqr5YAORQxAEgbQSRAmrDivT29auSHzHY2riKMojc5GmfPy6OB1ilczw3rR/3mHEfWVyPkVP8A1VJ4f1l4Vvbt37fiVUr8Q0n4VBeaVgw2IW4iuhzKyhlPVSJBrPQKUpQKUpQKUpQKUpQKUpQKUpQKUpQcl9cg/X4XTe3eE9DKR8z8qpSeygG03iR1IGGgn3ZmjpJ61dvXPIu4QgT3b58gbX41V8JhVODNw+2l1QOmV1lh/wDHb18DVGheGnmPtrPbwqXLXtHOXyhR9FAAzOx88oHXynHdWVPurNwp+8w+sv2Gfvrj6jVz07c+Xo9JM3qyanMvP8fjqFhVEAaAVgxOqE1bcPwkYrDXLhI7S0CA0MCVVZCP3crGAoV8wbWDIUVVXTQj6wMe/wDP3106ftjl1PfUxw65hezRrljFXHSxcAZDchGGUFlzNkyEaEroIgjWtQcP4VdZQ92/azWizk2w5F+VJ1Ck697RYTbaYqc9DTjWt2lw9y2AbeJAR1juh0mSSczZmBGgABMzVVa7bW4ltu7mDGd4CiTtuY5DpWmEhw/geBuCz/TEts+HZri3VYKl5cndBzqADmfSTIQRvUVxDg6pYw5DW3LoGLITmnKsq4OoIJjlqrdK3sThbYdwrrcRJ/WD2WHVZ+jHjy571o4l0tqO+qgnfQ9CYHMx76DTs4dF9q0H+Xx3mthDGiWwq6bQOQBmN9fya/cHikuSFJaBqYj5QOvSt5EYrmg5QSswYkQSJjcSNPEUGnisQ6ISpOaAq8wASAR7vxqBu8RuMxZ0LEsCSdCfY000AjTbnVixidw+9P8ArWoh0ABPQIf7r8KDVs8SC6w6EbEchAB10PXXxFTvB+JvZLFG3RkYEyCrggg5T9h5VF28OuYggaZNxprk38NDVv4/hkYvcXJORmBtaI8Bjtr3iY56AqDQdW9A7ufh+HP7LD+F2X7qsVVX1bn/APn2x9Vrg+Ls331aqgUpSgUpSgUpSgUpSgUpSgUpSgUpSg5Z65LAZ8IT9XFD4LbcfNRVawAnBXvB7H2R+NWf1yz/AEUghY/SJPvW2sDrIY1TMFistu/bIJzvZUdBl7VyT5LHnV+EY4rUsOVYRuDHzg1uqK0HEMfA/gfvqazzLPy3jX06lnwuPoxcHbdkxcK5GUozoQ6yQZR1hcpaZkaDQxUZxjCZbjgLkBZmQQRCkkqIZQRHs6gbGsGAvyFcAEqRI5GNQD4EaeZqY4u3aBX7pAgLAcHIRmUNmYjSdhp3qYnGYbvOqjPR1MGAn6VauIAbq9qijV4QqpIOYkKW0iO8OU1C8VwPaAQYKnQkA+RFWz0SS/nIsBLhF24WtXI9hray4MyNQq/9zUNiZztmUK2ZpUCApkyAOQB0iqyr9nhLGVFu3nI7raxPuM8q84jhqrGbDsCQD3HB0PvAqx4ZgDnEyjxB0nuI0+A78fPnFZMUQ7ZpA055jzJ5L41RTnwgWCi3bcyGM6jTTRTqJqV4VcuwVN1imkqViSNATPOJ131OupqTFmSAI103/GvdzCMihzGVojXqJH2Gg1cYv6tz0A+8/wAtRONGl0fsKR5B/wD86m7om3c8FP2MKhbm5/dceQ7aoP21BumdA2SeexuTp5VY7eRrbgOxACRoAQDOkyBrof6sTrrWFchgw3Csw+Nwj7RW9YxWYoc479sFxyzZAwDRJIk7RsPgHXvVTczYH3XG+JS22nhLVd6oHqnMWcQn1b0xrzRRz1+jzq/1ApSlApSlApSlApSlApSlApSlApSlBz/1m4YPcwUzo97bxQfLr4TXLuHSyMwBI7S2zabLkxAknkMzIvvYDnXR/XKpNrDgEiXcac+7t8qpPBFPZYsEAHs7Og5AX7JHyg+dUYwK0cUIbyH3j8K3GaBUPj7pDAg6/d+ZP9WqiW4ORmYdQv8AOftzVLds0ZTBEEeRj7IH8I5CqvgsZlObmMzET9VTt1naPEdKs7UivzhXZi/Du2Hm5b/pKwptzaugIWkMFdlG0jQzGlamMRVuOqv2ihmAf6wBMN571ixs5yJ7rKhI01ZC8HyDn415U0H7h9A23+sP93aH3VsrhrjCVQsOoK+ehM/KsNtIkEfSB+KgbcvZqRwPEezQrlnvEgyRvl/w/OiI1RDDlqN962sSpNlTr3YEbDUmSR1kb+J61qXDJPv8PuAHyFbt1R2ROvd292aNeuwoIw6gjqCPiCKiQZZR9ZG+JIH/ANlXC/h1/RM4sZH7SM+cGBKe0JJ5gR4kwI1qOGIPZmOUf3P4fOorVsmezPVIPxt/4jVm4yoTBWrtsWgcqLKDYSwgj6J0BPUk9dYCyFGTTr8QLf8Ah+Rrf4riHbDdmQkIiZWAAYr2n0tdT3ydPiaCf9U/G736eLLXCbd1XJWBqyqrKZiREtz5+6u5184erNsvFMKf2rg8jZuL18K+j6gUpSgUpSgUpSgUpSgUpSgUpSgUpSgoXrRC5MOWOUC4+vSUIk+E1R8BcFxsa6zle0hWRBgXLXL+rV49a1jPZsLMd+4ZiYyYe9c+eSJ5TNcw4dchLpVj3lQMTuw7S38pj4e+nHflee3BeeoTEXMzEz7j4bz9jfxVIYu7A/Pl57nyqMj8/nlJn3MaqNTHNlWNpMe7/tt7iK3eFekr24S6C6dfpgeB+kPA/GvD4QsJIIBmPEDf4RFYcNwoM+pIA6fnbegtFzEpdyvbYMIYHwPdMEbg71u8KtBnkiQPdvyBnrUPhcIlv2VAMb7kj3nXyqafFW7IkOHGRZK5lykTIIgZjz5jWqNS9xTO7u4BZwmioyQVDA6KmUaEbdD5v0m2QNWkjUFdj5lay4fitouirkDIG7smWaPaIOs89OQ86PiSyBSIyltTGo0A2/OoojXbE2/rR5oP562/9IW2QorSwzsvskRmK7jfuvMeJ6VqXL6GSpBHQEE+4RvXkQTtr7tqD8sqQfaJEgwSSNPCov2Mg6Fh8FJ/kqZtAE8ohufODHzqFxA1P7Lt9l4VFYGMBf2Xcf3o/lFTPELIa2YIEWukiVykgdDrOnj1NRd2JYdbjDzJuD76lsUf1KnTvW7g111m4o05Hu7/AOZIafoVc7PiODPW7aH8eden7VfTFfNPoRw65icbYFsAG3ctucxgQjo5jfXKDpFfS1QKUpQKUpQKUpQKUpQKUpQKUpQKUpQc99b/AP4Wyc2WL4BMkaG3dEaamenMTMia5bgr0rciSMtrU8pv2RoNgJb7a7R6xOCNi8IApWbL9rDEgEKjgiQDrDVwLiPFLrI1tVVLQguqCZAZYLtG2fL01I3qjNiXkj4+R2+Xe8zWNELEKNyY+78fKKi7Vh5Hl9sVZuF8Ldmy2ka6/ejQnYCYgHr8B40GxgwroYTIocALucq5wfE65ddtd62cDw1GLB3CHKxQRmzMBmVZU6T15b1poxS5aSe6ytmH1iCsfaazYW8XuXVfUI65dNQMojUanzqjZe0SSMuVuY5aAk+P535VGcRtM9tlQ6kaePu61Lg7mWMzMsxmQRsTEwTWBrY6b+/8+dERuPv3cUlsZMr2j3GAAKSS0SBLDNJ1jzrUxeLxQBUqp5aK3KNoaOVWFLeYkknWBOpkbamen2RXi4gCk5pidOU67a7VFV63fu5R+qUt9aD1Ph49a3MDxB1uHtLKurCCrZihBVl15g6yDrqBU8MOnaBRKgpOh8RG9fmLw6/oqXVLFi4S4JUgd1jsBK7Dc0GmrBmOVdCGgCTHQfdURiDqfG4B5MzD+apPDOBMkDpMa1D4zEL2jKYjOp38UP3fOg8OZLeFxG+Jtn+Y1Lq2a0mug9rrqzcjvz291RFxgA5EkgA+YAifO2KkrXF8qCzAyCAG5wWYnn7vfNBZvQBUTiFjK85jcBEEGOyaJ6d6RudR4iu3Vw30axmHXGYXsi4btFRgRvJZZJ2Myu3j59yqBSlKBSlKBSlKBSlKBSlKBSlKBSlKDU4ks2bg6o4/smvnXhXE3w+coqMLttVbNIjVWDKQQyka6qQdQQQQK+jsUO437rfYa+fcL6OWyR2ha4cpifZECBC7RoT8KzrUzLb4jWM3Vknmofh+HBgrBVNF1nvnQe+JmfwreXjWIwZzWx3cvdkDaQ2oZSG9mdt4O4ESGJt27aqqjuxIIhSO4AROWfpHzrxxebgQO5uAWwoBnuIJORfAd0D3mtstHHYpDfsnOp0bMcwMHunvGdPOvzBYq2Ll4l0ALLBzLB7o211qQ4Jwux2Ls9qxcftFVO2xLYYFZuBspDKHMhNBO/lW7cwOEKtnscPDhlhf9JPGUhsxP6zQghIHielORH/plv8A3ifxL+Nfhxdv66fxD8az/oeE/wDL8O/5ncP89fhwuF/3HDv+Y3T/AD605HhMbbgg3FHIar40vYy2VjtFJ94/PSvRwmGP+w4f/wAdfP8ANXlsFhv9zw//AI3Ef4qDYtYhe0t95fYE6jqa9qoGAJzSWu5oGkFWuJ1MiIOoG4HiY7iVjDJZuOLeFtuMmTsr126S2ZZBV5HszrBPPlWhc0toyhBNvulGLgtmYtmJAg5idBMUExjsYL1tAtsIUUKSIl2LO3ISdydIAk6EkE+cPYsvnRcNcZxAZ174aAdCJmC0HujXQVaPVvat3MErvbRnzvLMqkyGMctwDAq467DYeQH3Cg47jeF20KhkNtwZK3BkYoC50DEco1G3lp7wuE7NUIuEkZMyQQLcXMuWT7Q138PGum8Y4clxCt1AwGuvtKToCCNUPmD5VzrinAbllu0t/rUXafbUa7x7Q1Oo+AigzcC4hbDYe0LffXF2XDzpkDTG++vMHbcbV32vmbC3DbuJcOgBzAnYxzB5619M1ApSlApSlApSlApSlApSlApSlApSlBju7H3GuN4BAbigjTK4jxKHl4KAP61dnri3D7hW6nM6/wCce8kDyrn1uP8AO8uvQ+5OELiLmpzKGIJOupAGpAkxElV23rXa4Z1OYqAB0kGB5F58krcx+HyhWEkt7ozBm8Z9rU6cvjF3HgabcvgQPlmb+sK3nxHPXuq0WcbwXsMl0OzhAdO0zM5XUAoe42ad4G24qtcUw2BdlbD9rlKic06eHeMyBvy6VHqgmsi1pH5+g2Oj/wBmvFrAJO3/AGIIPjtWYGvaNQeU4fb07o8Nvkdm9xg1+rgLasO6Dr038COfu0O2prZVvn5z9z/I1sogZdx7zqP3ZO37reEGqjBbwisGGUQeQGmnIDQ6aaaMPGtC9gwltwvMN4zvt1jyYeNb6zJjUD2jrAA+sTsB0baNDWfEYV3tu6jOqg5mBDAaTqZ72kbw3voLJ6s74GFdSJy3ngcoKWz7zz6Vbv0tp7pAiekAc9Ntvz1576vb/wCquAfXU/FQP5auGJuZAF2JAJ236T0H2+4VFesXiZnUxr585Pifw6VE4i7NZsSSu/n4Hf7NR1qNxFyNdvE/nagrfpCbYuIgUZ2BZo2yyF1HU66+FfQmEfMiN9ZVPxANfLRxva4l7nI+z+6CI+QnzNfTXo++bCYdutm0f7C0ElSlKgUpSgUpSgUpSgUpSgUpSgUpSg/K4Ri8cth1dgx7zhYj6EbyeZYnyFd3ripNgXn7fs8qs0C4AVzFlA0IP0UbltNS5mpZflrGrmzU8xWcZxpGAUKwChgPZnU6a77FvecvSv2zgrl5c1tQQBJGYA6gQACdYXKNOZA3IqynG4FTMYUAKsZVLGc5J0FrYK0zqTBEbCqNaZlC5WIiNuoESOh8d6s8cJbzeWYqQYOhre4Rwq5irnZ2ozZWbvGBA9wJJ8AK0URmOkk17S49tgVZrbjYqSrCRyIMjSqjJicO1tmRxDKWBG8FWKkaeKmt7inBLmHt2rjshW8hdMrToAhIOm47Rdp59KjncEftHUnUmfeW57k8orFJPUxt4b0Evh+FMcMcSLiZQ4RrZOokqoJHiWn3BjI54sNiATvB231joCdG/db41Fmv0uOo+NBN4UEXVYAaHXcQNeW402B02g1L8PT+j3bYUd61eVjlkyLbKuvIdxhHOqthceFjOVdTmAAZSw0B2mY1G+m8TBFSXCOMXLaXSLco+VDDmM0XGJyxEjMNGJ+jvQePVvihbW/zYdnk6T3wSZ6aQOp+FtfFBjI1MCS2ywACY1zSevMxBJqi+iF0pdupIaRLA7N3j4yDruDI61Zb2JEQoyjfeST1JgT0GmmvUyEJ6W8cuZ1sWmI2LkHvEmNCZkSJJPuE7zVLj3LeZRcOqwwDGCpkGZIBnXWtzj5KYln5EKQY2GTL9oP5NY8MmZe0bcc5ganKBI2k6Ty1mYig1uFrNxQdAQfsJ+0V9L+h2KVsFhhnUt2SrEiSVGXbyr5e/Bvhry5e6rD6GuFxuCYQD2toSdP9pB21kgxG2uulB9QUpSoFKUoFKUoFKUoFKUoFKUoFKUoFfP8A6RWGe7cTOQouuSIBMqXE6+DBfhX0BXB+NtGIvRyu3I94uN8JY/2asEHhOGWCzLfxDWtO4cqkMwkETHXSNzyrNiMGqYZGjvNDExrBC6b8tfjU56JY/ErcvrhhYaUVW7WZ0zd5AupJJMjY6ecVigBhECzCkCTOpEjSdxpuNK4bt+qT9vd6Xp51jds7ydldvYllYgGDlMaeMH5H4TWBsfcgB3ZlAcKASMrFdIGbQTlJ91XP0b9IMHbRrOIsgzJzwp5zBkjfbnoAPdocb4rhsRbAt4dMOy3GOhkZCXgALIBIKz+6OVd3hVJb7nZnPuk/bX6qXG5OfeB+FTvDLNu5eS2bgtIzAM5GYII9og5fnG9WizwvBoW/pbXOX6tGbrGi23C9d6Dm72WBjKZHlX6uGcqWCEqN2kkD3mIFWTjuGttiuytXGCPctIruuVgHVASywuzE8hIHjXZsBg0tW0tW1hEUKBv3QOnMnmTuSaD56s23UhgII66jaKz4C4AGD21zZgVcDUGDIknQaDYdasnpZw+3YvMltwwzEhdO4pCkLoTopldYOmu0mAigxcMxfZXXcLIIylRodwSR5r4b71ZMPj0uiVaY3GxHvH37VU3zozHLmBM/nkaJiFJBko3U6H4/fQT3HFRrct7QPdIiZPLXw+yq87tly5jl10/h/wAM+/WtzEXXdQGMgcwN9BqR8dq1FsknX8/n89KDCEJk8oM8hsamPR/H3LTWWR2XLcmF5lWV/MTv4VjS2AIrHwjGdkhPZWbnf1N1WcKCF5BgI010J+yg+rqVr4S9nto40zqrfEA/fWxUClKUClKUClKUClKUClKUClKUCuCeldzJicSeYu3Y95dgPtJrvdfPXpwT+mX0GpN5zA11JIAH551YI3hK2yW7SxcvabpmzLPuYbiRvUjiBmwqhRuSEUDWM7ALzzNsNKjeCYq7bujs2ZTDSBGsAmDmVhy6VK3EKYV2VWQm5bYElyQ0O27bGWDd0fSB6Vw6k7y/uPd6XqTOdZ/MsVjF4V0IJQqGDgEgiYOVgNNYMg9DpvWr2DDZU+HI79NOVTWOxFxSgvIHAzkDMQxJZi+Y/WLkkkdPfWgnEF9nst+bNrO++VTHuFd3hZuE4aTqBG0KImdB19/lUo9sJKguuYk6BW7slRrlmd9hvr0iN4XjGNzVYhWj6Ud2F0LEEAwYPhW2GZ2nuKfrd6dgeZjny/aoNDiw7Qd0zvqY11J5KBz/ACIq18B9OMYbYs9kly4iGLjOR3VBMusd8gftCffVZNoRMyAATl5Ann051mt4PM8AgarvmjaSZgwJ6maDLjrdx7hd7md2CPm01Lw0AbLq3u3rWxzhyHFs28wmCS0+MkD5AVJcXxFlnz2rhZTkXvQCQNwZjLB201nps4u+DuW0uWrrqzFu0RxIRu7Op1MnWQSCAdjNBDZZ0AmsD4QNpGtTXCcZas3UY5boY5CjZQDMa77CZ9pDOWSFLCsWKt9ndPaK63GLnsyp7pLEe0MoYb6gAUEPZ4ZcBOXMNOWsGRqROo3+Ne0tXJjsyTp9HL1AkE9Z6VJ4m+1uTldA2Ud0idzuczcj8hpS7xENl0CjUOW10ys3dG890+8kbbUGpicFcNv6rGNJHVI121FxecDrVi9EfQJ8Rdu4e7dOHa0tm5KqHzBwSsEkZY0Ox35RUPbS1kdWxAVh3lMAoVMGImc4I2q6+qTGO+Pv9/tV7AS4QqoYMgUHoSM0SdcpoOuYDDi1aS2CSLaKoJ3IUBZPwrZpSoFKUoFKUoFKUoFKUoFKUoFKUoFcJ49ibdnit+5dTOgumRA10ttvBK/vKJ3jc13auO+mXofjruOu3LNjtbdwgq2e2AJRVaQ7Aggr06RrsFPx/EbTX3uAFEJKoBrCHOCBCqTKke1J1Msdz5xHEwbbJleHYNJ2LQT9In6JmKnbXqu4ixB/U2yCCC1wyD/UVqlF9U2Lf/XY1FHRVdx02LKKWS+Vzq58Ob3i9xnzuxy58skndgYHPafMigwdsp7RLSJkwBzjxPKuu4X1R2h/rcU7n9m2q/DMWqUw3qwwSHMzXrhP1nUD4Iq1Uch4KuHRgt0siMHzMiB7mbQpAYEKpJjMNd9txGi5E5lBJjckQeo/zr6Cw/oFw9NsPm/fuXH+TMRUhh/RnBWzKYPDqeotJPxiaD5ltYu42iEzrooUnUQdNSdKlMDwzFMjAYHEXSx7rdncOXpByED3z79q+mrVpVEKoUdAAPsrJUHzrw/0P4qAcmBJzDXtDbU/S+s4j2jUjgfVpxTMHyWLRge24aOf0VfqRua7zSg40fVRjLut7FWBv7KO+++pyTUxf9Vr3nV8TxC5ddVCgrbS33ddNz1Mnc866bSg55Z9UmBBl7mIun9p1A/soD86k7Pq24Yupw2cj61y6w/hLZflVwpQQWH9EsAkFcFhwRsTaQkeZBNS9jDoghFVB0UBR8BWalApSlApSlApSlApSlB//9k=',
                        price: "454 $",
                    },

                    {
                        id: 4,
                        name: 'ASUS ROG Crosshair VIII Hero',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.jib.co.th/img_master/product/original/2019071117315134467_1.jpg',
                        price: "454 $",
                    },

                    {
                        id: 5,
                        name: 'MSI MAG B550 Tomahawk',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://media-cdn.bnn.in.th/29747/MSI-Mainboard-MAG-B550-Tomahawk-AM4-2-square_medium.jpg',
                        price: "454 $",
                    },

                    {
                        id: 6,
                        name: 'ASRock B550M Steel Legend',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://admin.ihavecpu.com//data/img/shop1/product/product7298_800.jpg',
                        price: "454 $",
                    },

                    {
                        id: 7,
                        name: 'ASUS Prime B450M-A/CSM',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://www.asus.com/media/global/gallery/rwsyrd6lvstqh0yy_setting_xxx_0_90_end_2000.png',
                        price: "454 $",
                    },

                    {
                        id: 8,
                        name: 'GIGABYTE B450 AORUS Elite',
                        description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
                        image: 'https://img.advice.co.th/images_nas/pic_product4/A0136639/A0136639OK_BIG_5.jpg',
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