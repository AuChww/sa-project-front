<template>
    <Navbar />
    <section
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
                PRODUCT CHECK
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
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="max-h-96 overflow-y-auto bg-gray-50 dark:bg-gray-700">
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

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                        <div v-if="order.status === 'Preparing' || order.status === 'ResentPending'">
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
                                                <h2 class="text-sm font-semibold">{{ order.status }}</h2>
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
                                        <button v-if="order.status === 'Preparing' || order.status === 'ResentPending'"
                                            type="button" @click="acceptPacking(order.id)"
                                            class="border-red-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                            Accept
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
                                <tr v-for="order in packingOrders" :key="order.id">
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
                                        <div v-if="order.status === 'Packing'">
                                            <div
                                                class="inline-flex items-center px-3 py-1 text-blue-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-600">
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
                                        <div v-if="order.status === 'ReportPending'">
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
                                                <h2 class="text-sm font-semibold">Report</h2>
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
                                        <button v-if="order.status === 'Packing'" type="button"
                                            @click="Delivering(order.id)"
                                            class="border-emerald-500 border bg-emerald-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-emerald-700 focus:outline-none focus:shadow-outline">
                                            Confirm
                                        </button>
                                        <div v-if="order.status === 'Delivering'">
                                            <label class="block text-sm font-medium leading-6 text-gray-400">Order Track
                                                : {{ order.track_num }}</label>
                                            <div v-if="order.track_num == ''" class="inline-flex">
                                                <input id="track_num" name="track_num" type="text" autocomplete=""
                                                    v-model="formData.track_num"
                                                    class="block h-10 w-40 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <button type="button" @click="onUpdateTrack(order.id)"
                                                    class="border-blue-500 border bg-blue-500 text-white rounded-md px-4 py-2 mx-1 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                                    Update
                                                </button>
                                            </div>
                                            <div v-if="order.track_num != ''" class="inline-flex">
                                                <button type="button" @click="completeOrder(order.id)"
                                                    class="border-emerald-500 border bg-emerald-500 text-white rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:bg-emerald-700 focus:outline-none focus:shadow-outline">
                                                    Confirm
                                                </button>
                                            </div>
                                        </div>
                                        <NuxtLink :to="`/report/${order.id}`">
                                            <button v-if="order.status === 'Packing'" type="button"
                                                class="border-red-500 border bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                                Report
                                            </button>
                                        </NuxtLink>
                                        <button v-if="order.status === 'CompleteDelivery'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            Done
                                        </button>
                                        <button v-if="order.status === 'ReportPending'"
                                            class="border-gray-500 border bg-gray-700 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
                                            Report Sented
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

const orderStore = useOrderStore();

const orders = ref<Order[]>([]); // Initialize as an empty array

definePageMeta({
    middleware: "authenticated", //Auth checker
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

const formData = ref({
    track_num: ""
})

const formErrors = ref({
    errors: null
})

async function onUpdateTrack(orderId: number) {
    const { track_num } = formData.value
    const { data: response, error } = await useMyFetch<any>(
        `orders/updateTrack/${orderId}`,
        {
            method: "PUT",
            body: { track_num }
        }
    )

    if (response.value !== null) {
        await navigateTo(`/product/product-check`)
    } else {
        console.log(error)
        const { message } = error.value!.data
        formErrors.value.errors = message
    }
}

const preparingOrders = computed(() => {
    const allowedStatuses = ['Preparing', 'ResentPending'];
    return orders.value.filter(order => allowedStatuses.includes(order.status));
});

const packingOrders = computed(() => {
    const allowedStatuses = ['Packing', 'Delivering', 'CompleteDelivery', 'ReportPending'];
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

const Delivering = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "Delivering" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'Delivering';
            }
            console.log('Order status updated to CompleteRefund successfully');
        } else {
            console.error('Failed to update order status to CompleteRefund');
        }
    } catch (error) {
        console.error('Failed to update order status to CompleteRefund', error);
    }
};

const completeDelivery = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "CompleteDelivery" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'CompleteDelivery';
            }
            console.log('Order status updated to CompleteRefund successfully');
        } else {
            console.error('Failed to update order status to CompleteRefund');
        }
    } catch (error) {
        console.error('Failed to update order status to CompleteRefund', error);
    }
};

const completeOrder = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "CompleteDelivery" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'CompleteDelivery';
            }
            console.log('Order status updated to CompleteDelivery successfully');
        } else {
            console.error('Failed to update order status to CompleteDelivery');
        }
    } catch (error) {
        console.error('Failed to update order status to CompleteDelivery', error);
    }
};

const reportOrder = async (orderId: number) => {
    try {
        const response = await useMyFetch<Order>(`orders/${orderId}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "ReportPending" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response) {
            const updatedOrderIndex = orders.value.findIndex(order => order.id === orderId);
            if (updatedOrderIndex !== -1) {
                orders.value[updatedOrderIndex].status = 'ReportPending';
            }
            console.log('Order status updated to ReportPending successfully');
        } else {
            console.error('Failed to update order status to ReportPending');
        }
    } catch (error) {
        console.error('Failed to update order status to ReportPending', error);
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