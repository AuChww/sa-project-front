<template>
    <Navbar />
    <section
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
                REPORT CHECK
            </h1>
        </div>
    </section>

    <section class="container mt-4 px-4 mx-auto">
        <div class="flex flex-col">
            <div class="-mx-4 -my- overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div
                        class="max-h-96 overflow-y-auto overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order Information
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Status
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User Name
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Purchased
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Total Amount
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Report
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-gray-50 dark:bg-gray-700">
                                <tr v-for="order in reportOrders" :key="order.id">
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-sm hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/order/${order.id}`">
                                            <div class="underline">Check Order</div>
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm">
                                        <div v-if="order.status === 'ReportPending'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                    <circle cx="10" cy="5" r="4" fill="yellow">
                                                        <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                            repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="25" cy="5" r="4" fill="yellow">
                                                        <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="40" cy="5" r="4" fill="yellow">
                                                        <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                                <h2 class="text-sm font-semibold">Waiting</h2>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.user_id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/profile/${order.user_id}`">
                                            {{ order.user_name }}
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ formatCreatedAt(order.created_at) }}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.total_price }}
                                    </td>

                                    <NuxtLink :to="`/reason/${order.id}`">
                                        <td class="px-4 py-6 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                            click here
                                        </td>
                                    </NuxtLink>


                                    <td class="py-2">
                                        <button v-if="order.status === 'ReportPending'" type="button"
                                            @click="resentOrder(order.id)"
                                            class="border-blue-500 border bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                                            Resent
                                        </button>
                                        <button v-if="order.status === 'ReportPending'" type="button"
                                            @click="refundOrder(order.id)"
                                            class="border-blue-500 border bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                                            Refund
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mt-4 px-4 mx-auto">
        <div class="flex flex-col">
            <div class="-mx-4 -my- overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div
                        class="max-h-96 overflow-y-auto overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order Information
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Status
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User Name
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Purchased
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Total Amount
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Report
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-gray-50 dark:bg-gray-700">
                                <tr v-for="order in refundOrders" :key="order.id">
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-sm hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/order/${order.id}`">
                                            <div class="underline">Check Order</div>
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm">
                                        <div v-if="order.status === 'RefundPending'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                    <circle cx="10" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                            repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="25" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="40" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                                <h2 class="text-sm font-semibold">{{ order.status }}</h2>
                                            </div>
                                        </div>
                                        <div v-if="order.status === 'Refunding'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                    <circle cx="10" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                            repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="25" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="40" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                                <h2 class="text-sm font-semibold">{{ order.status }}</h2>
                                            </div>
                                        </div>
                                        <div v-if="order.status === 'CompleteRefund'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-emerald-400 rounded-full gap-x-2 bg-gray-600 dark:bg-gray-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <h2 class="text-sm font-semibold">Complete</h2>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.user_id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/profile/${order.user_id}`">
                                            {{ order.user_name }}
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ formatCreatedAt(order.created_at) }}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.total_price }}
                                    </td>

                                    <NuxtLink :to="`/reason/${order.id}`">
                                        <td class="px-4 py-6 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                            click here
                                        </td>
                                    </NuxtLink>


                                    <td class="py-2">
                                        <button v-if="order.status === 'CompleteRefund'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            Done
                                        </button>
                                        <button v-if="order.status === 'RefundPending' || order.status === 'Refunding'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            In the Process
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mt-4 px-4 mx-auto">
        <div class="flex flex-col">
            <div class="-mx-4 -my- overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div
                        class="max-h-96 overflow-y-auto overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Order Information
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Status
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        User Name
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Purchased
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Total Amount
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Report
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-gray-50 dark:bg-gray-700">
                                <tr v-for="order in resentOrders" :key="order.id">
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-sm hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/order/${order.id}`">
                                            <div class="underline">Check Order</div>
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm">
                                        <div v-if="order.status === 'ResentPending'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                    <circle cx="10" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                            repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="25" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="40" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                                <h2 class="text-sm font-semibold">{{ order.status }}</h2>
                                            </div>
                                        </div>
                                        <div v-if="order.status === 'Delivering'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                    <circle cx="10" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                            repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="25" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="40" cy="5" r="4" fill="white">
                                                        <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                            values="0;1;0" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                                <h2 class="text-sm font-semibold">{{ order.status }}</h2>
                                            </div>
                                        </div>
                                        <div v-if="order.status === 'CompleteDelivery'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-emerald-400 rounded-full gap-x-2 bg-gray-600 dark:bg-gray-600">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <h2 class="text-sm font-semibold">Complete</h2>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.user_id }}
                                    </td>

                                    <td
                                        class="px-4 py-4 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                        <NuxtLink :to="`/profile/${order.user_id}`">
                                            {{ order.user_name }}
                                        </NuxtLink>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ formatCreatedAt(order.created_at) }}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        {{ order.total_price }}
                                    </td>

                                    <NuxtLink :to="`/reason/${order.id}`">
                                        <td class="px-4 py-6 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                            click here
                                        </td>
                                    </NuxtLink>


                                    <td class="py-2">
                                        <button v-if="order.status === 'CompleteDelivery'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            Done
                                        </button>
                                        <button v-if="order.status === 'ResentPending' || order.status === 'Delivering'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            In the Process
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { useOrderStore } from '~/stores/useOrderStore';

definePageMeta({
    middleware: "authenticated", //Auth checker
  });
  
const orderStore = useOrderStore();

const { data: reports } = await useMyFetch<any>(`report`, {});
const orders = ref<Order[]>([]); // Initialize as an empty array

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

const reportOrders = computed(() => {
    const allowedStatuses = ['ReportPending'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const refundOrders = computed(() => {
    const allowedStatuses = ['RefundPending', 'Refunding', 'CompleteRefund'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const resentOrders = computed(() => {
    const allowedStatuses = ['ResentPending', 'Delivering', 'CompleteDelivery'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const acceptPacking = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "Packing" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'Packing';
            }
            console.log('Order status updated to Refunding successfully');
        } else {
            console.error('Failed to update order status to Refunding');
        }
    } catch (error) {
        console.error('Failed to update order status to Refunding', error);
    }
};

const refundOrder = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "RefundPending" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'RefundPending';
            }
            console.log('Order status updated to RefundPending successfully');
        } else {
            console.error('Failed to update order status to RefundPending');
        }
    } catch (error) {
        console.error('Failed to update order status to RefundPending', error);
    }
};

const resentOrder = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "ResentPending" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'ResentPending';
            }
            console.log('Order status updated to ResentPending successfully');
        } else {
            console.error('Failed to update order status to ResentPending');
        }
    } catch (error) {
        console.error('Failed to update order status to ResentPending', error);
    }
};

const deleteOrder = async (orderId: number) => {
    try {
        // Use your API route for deleting an order
        const response = await useMyFetch<Order>(`orders/${orderId}/delete_order`, {
            method: "DELETE",
            body: JSON.stringify({
                status: "Refunded" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            // Remove the deleted order from the list
            const deletedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (deletedOrderIndex !== -1) {
                orders.value.splice(deletedOrderIndex, 1);
            }
            console.log('Order deleted successfully');
        } else {
            console.error('Failed to delete order');
        }
    } catch (error) {
        console.error('Failed to delete order', error);
    }
};

onMounted(() => {
    fetchOrders();
});

// Define the Order type here to match the structure of your order data
type Order = {
    id: number;
    user_id: number;
    user_name: string;
    address: string;
    total_price: string;
    payment_receipt: string;
    shipment_method: string;
    status: string;
    created_at: string;
    updated_at: string;
};

const formatCreatedAt = (timestamp: string) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(timestamp));
};
</script>

<style scoped>
.swipe-in-enter-active,
.swipe-in-leave-active {
    transition: transform 0.5s ease-in-out;
}

.swipe-in-enter,
.swipe-in-leave-to {
    transform: translateY(-20%);
}</style>
