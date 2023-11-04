<template>
    <div>
        <Navbar />
        <!-- customer, audit, admin-->

        <section
            :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
            class="bg-blue-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all">
                    REFUND
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
                                            Payment
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
                                            Shipment Method
                                        </th>

                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Total Amount
                                        </th>

                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Receipt Small Image
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
                                    <tr v-for="order in orders" :key="order.id">
                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.id }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.payment_receipt }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.status }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.user_id }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.user_name }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ formatCreatedAt(order.created_at) }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.shipment_method }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            {{ order.total_price }}
                                        </td>

                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            <!-- Add the image display code here -->
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
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/useOrderStore';

const orderStore = useOrderStore();

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
                status: "Refunding" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'Refunding';
            }
            console.log('Order status updated to Refunding successfully');
        } else {
            console.error('Failed to update order status to Refunding');
        }
    } catch (error) {
        console.error('Failed to update order status to Refunding', error);
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