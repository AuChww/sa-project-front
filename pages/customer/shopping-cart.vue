<template>
  <Navbar />
  <div class="flex items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
      <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-8">
          
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">1</a>
          <span class="font-semibold text-gray-900">Shop</span>
          </li>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">2</a>
          <span class="font-semibold text-gray-900">Shipping</span>
          </li>
          
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">3</a>
          <span class="font-semibold text-gray-500">Payment</span>
          </li>
      </ul>
      </div>
  </div>
  </div>
    <!-- customer -->
  <div class="h-screen bg-gray-100 pt-10">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">

        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" v-for="product in Cart" :key="product.id">
          <img :src="product.image" alt="product image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ product.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">{{ product.description }}</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-2">
                <p class="text-xl">{{ product.price }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700" v-for="product in Cart" :key="product.id">{{ product.price }}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$0.00</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <RouterLink to="/customer/shipping">
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </RouterLink>
      </div>
    </div>
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
                Cart: [
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
                    }
                    
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
                        delay: 3000,
                      },
                });

            });
        },
    };
    
</script>