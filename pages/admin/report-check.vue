<template>
    <Navbar />
    <h1 class="text-center text-3xl mt-8 mb-4">
        REPORT
    </h1>
    <section class="container px-4 mx-auto">
    <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-x-3">
                                        <button class="flex items-center gap-x-2">
                                            <span>Order</span>
                                            <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Product
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Status
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Customer
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Report Reason
                                </th>

                                <th scope="col" class="relative py-3.5 px-4">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="report in CustomerReport" :key="report.id" class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ report.id }}</td>
                                <div class="py-5 whitespace-nowrap">
                                    <button @click="toggleInfo" class="rounded-md mb-2 mt-2 px-2 py-1 text-sm font-medium text-gray-800 dark:text-white border-indigo-500 bg-gray-500">Show Information</button>
                                    <transition name="swipe-in" mode="out-in">
                                        <div v-if="showInfo">
                                            <tbody v-for="order in Order" :key="order.id" class="px-4 py-4 text-sm text-gray-700 dark:text-gray-200 ">
                                                <div class="border-indigo-500 bg-white rounded-md">
                                                    <div class="inline-flex items-center gap-x-3">
                                                        <div class="ml-4 text-sm text-gray-500 font-medium">{{ order.id }}</div>
                                                        <img :src="order.image" alt="Product Image" class="px-2 mt-2 w-full h-20 object-cover mb-2">
                                                        <td class="font-medium text-sm text-gray-500 dark:text-gray-800 whitespace-nowrap">{{ order.price }}</td>
                                                    </div>
                                                    <div class="font-medium mb-2 py-1 px-2 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">{{ order.name }}</div>
                                                </div>
                                            </tbody>
                                        </div>
                                    </transition>
                                </div>
                                
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div v-if="report.status == 'waiting'">
                                        <div class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                <circle cx="10" cy="5" r="4" fill="yellow">
                                                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="25" cy="5" r="4" fill="yellow">
                                                    <animate attributeName="opacity" dur="1s" begin="0.1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="40" cy="5" r="4" fill="yellow">
                                                    <animate attributeName="opacity" dur="1s" begin="0.2s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                            </svg>
                                            <h2 class="text-sm font-normal">Waiting for Your Respond...</h2>
                                        </div>
                                    </div>
                                    
                                    <div v-if="report.status == 'audit waiting'">
                                        <div class="inline-flex items-center px-3 py-1 text-white rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                <circle cx="10" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="25" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" begin="0.1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="40" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" begin="0.2s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                            </svg>
                                            <h2 class="text-sm font-normal">Waiting for Audit Respond...</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'delivery waiting'">
                                        <div class="inline-flex items-center px-3 py-1 text-white rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                <circle cx="10" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="25" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" begin="0.1s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="40" cy="5" r="4" fill="white">
                                                    <animate attributeName="opacity" dur="1s" begin="0.2s" values="0;1;0" repeatCount="indefinite" />
                                                </circle>
                                            </svg>
                                            <h2 class="text-sm font-normal">Waiting for Delivery Respond...</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'sending'">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 class="text-sm font-normal">In the Sending Process</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'refunding'">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 class="text-sm font-normal">In the Refunding Process</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'complete refund'">
                                        <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                            <h2 class="text-sm font-normal">Complete Refund</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'complete send'">
                                        <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                            <h2 class="text-sm font-normal">Complete New Delivery</h2>
                                        </div>
                                    </div>

                                    <div v-if="report.status == 'rejected'">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-emerald-100/60 dark:bg-gray-800">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 class="text-sm font-normal">Rejected</h2>
                                        </div>
                                    </div>

                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div class="flex items-center gap-x-2">
                                        <img class="object-cover w-8 h-8 rounded-full" src="" alt="">
                                        <div>
                                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{{ report.name }}</h2>
                                            <p class="text-xs font-normal text-gray-600 dark:text-gray-400">{{ report.email }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ report.reason }}</td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">

                                <div v-if="report.status == 'waiting'">
                                    <div class="flex items-center gap-x">
                                        <!-- send to delivery -->
                                        <button type="button"
                                            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                            Resend
                                        </button>
                                        <!-- send to audit -->
                                        <button type="button"
                                            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                            Refund
                                        </button>
                                        <button type="button"
                                            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            Reject
                                        </button>
                                    </div>
                                </div>

                                <div v-if="report.status == 'audit waiting' || report.status == 'delivery waiting'">
                                    <div class="flex items-center gap-x">
                                        <button type="button"
                                            class="border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                                <div v-if="report.status == 'complete refund' || report.status == 'complete send'">
                                    <div class="flex items-center w-16 border border-gray-700 bg-gray-900 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                        Done
                                    </div>
                                </div>

                                <div v-if="report.status == 'refunding' || report.status == 'sending'">
                                    <div class="flex items-center w-36 border border-gray-700 bg-gray-900 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                        In the Processing
                                    </div>
                                </div>

                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between mt-6">
        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

        <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div>

        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section>
</template>

<script>
export default {
    data() {
      return {
        showInfo: false ,
        CustomerReport: [
        {
            id: 1,
            order: 1,
            name: 'Chanawut',
            email: 'chanawut@example.com',
            status: 'waiting',
            reason: 'My glass broke',
            image: '',
        },
        {
            id: 2,
            order_id: 2,
            name: 'Chayapol',
            email: 'chayapol@example.com',
            status: 'sending',
            reason: 'The product is not complete.',
            image: '',
        },
        {
            id: 3,
            order_id: 3,
            name: 'Mana',
            email: 'mana@example.com',
            status: 'rejected',
            reason: 'The product is not beautiful.',
            image: '',
        },
        {
            id: 4,
            order_id: 4 ,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'complete refund',
            reason: '',
            image: '',
        },
        {
            id: 5,
            order_id: 5,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'refunding',
            reason: '',
            image: '',
        },
        {
            id: 6,
            order_id: 6,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'complete send',
            reason: '',
            image: '',
        },
        {
            id: 7,
            order_id: 7,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'audit waiting',
            reason: '',
            image: '',
        },
        {
            id: 8,
            order_id: 8,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'delivery waiting',
            reason: '',
            image: '',
        },
        {
            id: 9,
            order_id: 9,
            name: 'Earth',
            email: 'earth@example.com',
            status: 'complete send',
            reason: '',
            image: '',
        },
        ],
        Order: [
        {
            id: 1,
            name: 'Intel Core I5 12600K',
            description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
            image: 'https://www.jib.co.th/img_master/product/original/2021102715152349469_1.png',
            price: "454 $",
        },
        {
            id: 2,
            name: 'MSI MPG B550 Gaming Carbon WiFi',
            description: '10 (6P+4E) Cores 16 Threads Intel UHD Graphics 770 CPU Cooler Not Included PCIe 5.0 and 4.0',
            image: 'https://www.ascenti.co.th/wp-content/uploads/2020/07/msi-MPG-B550-GAMING-CARBON-WIFI-2.jpg',
            price: "454 $",
        },
        
        ]
      };
    },
    methods: {
      toggleInfo() {
        this.showInfo = !this.showInfo;
      }
    }
}
</script>

<style scoped>
.swipe-in-enter-active, .swipe-in-leave-active {
  transition: transform 0.5s ease-in-out;
}

.swipe-in-enter, .swipe-in-leave-to {
  transform: translateY(-20%);
}

</style>
