<template>
    <!-- all roles -->
    <Navbar />
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div style="height: 600px; border"
            class="mx-4 mb-28 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="rounded-t-lg h-40 overflow-hidden">
                <img class="object-cover object-top w-full"
                    src='https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg'
                    alt='Mountain'>
            </div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img class="object-cover object-center h-32"
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                    alt='Woman looking front'>
            </div>
            <div class="text-center">
                <div class="font-semibold text-3xl">{{ auth.user.name }}</div>
                <div class="font-semibold text-sm text-gray-600">{{ auth.user.username }}</div>

                <div class="font-semibold mt-4 text-m">{{ auth.user.role }}</div>
                <div class="font-semibold text-m">{{ auth.user.role }}</div>
                <div class="font-semibold text-m">{{ auth.user.role }}</div>

                <div class="font-semibold mt-4 text-m">{{ auth.user.address }}</div>

            </div>
            <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li class="flex flex-col items-center justify-around">
                    <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div>2k</div>
                </li>
                <li class="flex flex-col items-center justify-between">
                    <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div>10k</div>
                </li>
                <li class="flex flex-col items-center justify-around">
                    <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div>15</div>
                </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2 flex justify-center">
                <router-link to="profile-edit"
                    class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                    <span
                        class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative">Edit Profile</span>
                </router-link>
            </div>

        </div>
        <div style="height: 600px; border"
            class="px-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="mt-4">
                <div class="px-20 text-2xl mb-4 text-gray-700 font-semibold">
                    Payment History
                </div>
            </div>
            <div style="height: 500px; border"
                class="overflow-y-auto px-4 py-2 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-700 shadow-xl rounded-lg text-black">
                <div>
                    <div v-for="order in orders" :key="order.id" class=" px-8 py-6 justify-between my-4 bg-white w-72 mx-auto">
                        <div class="font-semibold text-lg">Order Id : {{ order.id }}</div>
                        <div class="text-gray-600 text-xs">Date : {{ order.created_at }}</div>
                        <div class="text-gray-600 text-xs">Customer : {{ order.user_name }}</div>
                        <div class="mt-4 mb-2 font-semibold text-md">
                            Products :
                        </div>
                        <div class="font-semi text-right grid grid-cols-3">
                            <div class="text-right text-sm font-semi">
                                Id
                            </div>
                            <div class="text-right text-sm font-semi">
                                Name
                            </div>
                            <div class="text-right text-sm font-semi">
                                Price
                            </div>
                        </div>
                        <div v-for="product in products" :key="product.id" class="font-semi text-right grid grid-cols-3">
                            <div class="text-right text-sm font-semi">
                                {{ product.id }}
                            </div>
                            <div class="text-right text-sm font-semi">
                                {{ product.name }}
                            </div>
                            <div class="text-right text-sm font-semi">
                                {{ product.price }}
                            </div>
                        </div>
                        <div class="font-semi mt-2 text-right grid grid-cols-3">
                            <div class="text-right text-sm font-semi">
                            </div>
                            <div class="text-right text-sm font-semibold underline">
                                Total
                            </div>
                            <div class="text-right text-sm font-semi">
                                {{ order.total_price }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import { useOrderStore } from '~/stores/useOrderStore';
import { useProductStore } from '~/stores/useProductStore';


const orderStore = useOrderStore();
const orders = ref<Order[]>([]); // Initialize as an empty array
const productStore = useProductStore();
const products = ref<Product[]>([]);

const fetchOrders = async () => {
    try {
        // Fetch all orders
        await orderStore.fetchOrders();

        // Get all orders without filtering
        orders.value = orderStore.allOrders.orders;

    } catch (error) {
        console.error('Failed to fetch orders', error);
    }
};

const fetchProducts = async () => {
    try {
        // Fetch all orders
        await orderStore.fetchProducts();

        // Get all orders without filtering
        products.value = productStore.allProducts.products;

    } catch (error) {
        console.error('Failed to fetch orders', error);
    }
};

const auth = useAuthStore()

definePageMeta({
    middleware: 'authenticated'
})

onMounted(() => {
    fetchOrders();
    fetchProducts();
});

// Define the Order type here to match the structure of your order data
type Order = {
    id: number;
    user_id: number;
    user_name: string;
    product_id: number;
    product_name: string;
    product_price: number;
    address: string;
    total_price: string;
    payment_receipt: string;
    shipment_method: string;
    status: string;
    created_at: string;
    updated_at: string;
};

</script>

<style scoped>
.border {
    width: 200px;
    height: 1000px;
}
</style>
