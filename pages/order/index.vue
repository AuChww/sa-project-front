<template>
    <div>
        <Navbar />
        <!-- customer, audit, admin-->

        <section
            :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
            class="bg-blue-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                    ORDER CHECK
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
                                            Order Info
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
                                            Payment
                                        </th>

                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        </th>
                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="bg-gray-50 dark:bg-gray-700">
                                    <tr v-for="order in pendingOrders" :key="order.id">
                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.id }}
                                        </td>

                                        <td
                                            class="px-4 py-4 text-sm hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                            <NuxtLink :to="`/order/${order.id}`">
                                                <div class="underline">Check Order</div>
                                            </NuxtLink>
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            <div v-if="order.status === 'Pending'">
                                                <div
                                                    class="inline-flex items-center px-3 py-1 text-yellow-400 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
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
                                                    <h2 class="text-sm font-semibold">{{ order.status }}</h2>
                                                </div>
                                            </div>
                                            <div v-if="order.status === 'Preparing'">
                                                <div
                                                    class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h2 class="text-sm font-semibold">Ordered</h2>
                                                </div>
                                            </div>
                                            <div v-if="order.status === 'RefundPending'">
                                                <div
                                                    class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                                                        <circle cx="10" cy="5" r="4" fill="red">
                                                            <animate attributeName="opacity" dur="1s" values="0;1;0"
                                                                repeatCount="indefinite" />
                                                        </circle>
                                                        <circle cx="25" cy="5" r="4" fill="red">
                                                            <animate attributeName="opacity" dur="1s" begin="0.1s"
                                                                values="0;1;0" repeatCount="indefinite" />
                                                        </circle>
                                                        <circle cx="40" cy="5" r="4" fill="red">
                                                            <animate attributeName="opacity" dur="1s" begin="0.2s"
                                                                values="0;1;0" repeatCount="indefinite" />
                                                        </circle>
                                                    </svg>
                                                    <h2 class="text-sm font-semibold">Refund</h2>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-4 py-4 text-md text-gray-500 dark:text-gray-300">
                                            {{ order.user_id }}
                                        </td>

                                        <td
                                            class="px-4 py-4 text-md hover:text-yellow-500 duration-200 text-gray-500 dark:text-gray-300">
                                            <NuxtLink :to="`/profile/${order.user_id}`">
                                                {{ order.user_name }}
                                            </NuxtLink>
                                        </td>

                                        <td class="px-4 py-4 text-md text-gray-500 dark:text-gray-300">
                                            {{ formatCreatedAt(order.created_at) }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.total_price }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            <img :src="`http://localhost:80/storage/${order.payment_receipt}`"
                                                alt="Product Image" class="h-40 mx-auto object-cover mb-4">
                                        </td>

                                        <!-- Add a button to change order status -->
                                        <td class="py-2">
                                            <button type="button" @click="approveOrder(order.id)"
                                                class="border border-emerald-500 bg-emerald-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-emerald-700 focus:outline-none focus:shadow-outline">
                                                Accept
                                            </button>
                                        </td>

                                        <td class="py-2">
                                            <button type="button" @click="refundOrder(order.id)"
                                                class="border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                                Reject
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
                                        </th>
                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="bg-gray-50 dark:bg-gray-700">
                                    <tr v-for="order in preparingOrders" :key="order.id">
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
                                            <div v-if="order.status === 'Preparing'">
                                                <div
                                                    class="inline-flex items-center px-3 py-1 text-gray-400 rounded-full gap-x-2 bg-gray-600 dark:bg-gray-600">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#667085" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h2 class="text-sm font-semibold">Ordered</h2>
                                                </div>
                                            </div>
                                            <div v-if="order.status === 'RefundPending'">
                                                <div
                                                    class="inline-flex items-center px-3 py-1 text-gray-100 rounded-full gap-x-2 bg-gray-100 dark:bg-red-500">
                                                    <h2 class="text-sm font-semibold mx-2">Rejected</h2>
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

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            <!-- Add the image display code here -->
                                        </td>

                                        <td class="py-2">
                                            <button v-if="order.status === 'Preparing'"
                                                class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                                Ordered
                                            </button>
                                            <button v-if="order.status === 'RefundPending'"
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
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/useOrderStore';

const orderStore = useOrderStore();
const orders = ref<Order[]>([]); // Initialize as an empty array
const route = useRoute();
const { data: order, error } = await useMyFetch<any>(`order/${route.params.id}`, {});
const { data: specificOrder } = await useMyFetch<any>(`showOrderSpecific/${route.params.id}`, {});

if (order.value !== null) {
    console.log(order.value);
    console.log(specificOrder.value);
}

const pendingOrders = computed(() => {
    const allowedStatuses = ['Pending'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const preparingOrders = computed(() => {
    const allowedStatuses = ['Preparing', 'RefundPending'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

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

const approveOrder = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "Preparing" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'Preparing';
            }
            console.log('Order status updated to Preparing successfully');
        } else {
            console.error('Failed to update order status to Preparing');
        }
    } catch (error) {
        console.error('Failed to update order status to Preparing', error);
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