<template>
    <Navbar />
    <section
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
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
                                        Shipment Method
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Total Amount
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="order in filteredOrders" :key="order.id">
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
                                    <td class="px-4 py-4">
                                        <button v-if="order.status === 'RefundPending'"
                                            @click="acceptRefund(order.id)">Accept</button>
                                    </td>

                                    <td class="px-4 py-4">
                                        <button v-if="order.status === 'Refunding'"
                                            @click="completeRefund(order.id)">Confirm</button>
                                    </td>

                                    <td class="px-4 py-4">
                                        <button v-if="order.status === 'CompleteRefund'"
                                            @click="deleteOrder(order.id)">Delete</button>
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

const filteredOrders = computed(() => {
    const allowedStatuses = ['RefundPending', 'Refunding', 'CompleteRefund'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const acceptRefund = async (orderId: number) => {
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

const completeRefund = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "CompleteRefund" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'CompleteRefund';
            }
            console.log('Order status updated to CompleteRefund successfully');
        } else {
            console.error('Failed to update order status to CompleteRefund');
        }
    } catch (error) {
        console.error('Failed to update order status to CompleteRefund', error);
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
}
</style>
