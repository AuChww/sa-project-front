<template>
    <Navbar />
    <!-- customer , admin -->
    <section
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
                MY ORDER
            </h1>
        </div>
    </section>

    <section>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 px-10">
            <div v-for="order in orders" :key="order.id"
                class="mx-auto relative my-4 flex w-80 h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
                <div class="border-b p-6">
                    <h4 class=" text-base font-semibold">Order #{{ order.id }}</h4>
                    <p class=" text-sm font-light">
                        <i class="inline-block font-black not-italic text-green-600" aria-hidden="true"></i>Status : {{
                            order.status }}
                    </p>

                </div>
                <div class="flex-auto p-5">
                    <div class="relative flex flex-col justify-center" v-if="order.status === 'ReportPending'">
                        <div class="absolute left-4 h-full mt-0 border-r-4"></div>
                        <div class="relative mb-6">
                            <div>
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-gray-300 text-base font-semibold text-white">1</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Your Request is Pending</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div>
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Checking your Order</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>
                    </div>
                    <div class="relative flex flex-col justify-center"
                        v-if="order.status === 'Pending' || order.status === 'ResentPending' || order.status == 'Preparing' || order.status == 'Packing' || order.status == 'Delivering' || order.status == 'CompleteDelivery'">
                        <div class="absolute left-4 h-full mt-0 border-r-4"></div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'Pending'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div
                                v-if="order.status == 'Preparing' || order.status == 'Packing' || order.status == 'Delivering' || order.status == 'CompleteDelivery'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">1</span>
                            </div>
                            <div
                                v-if="order.status == 'ResentPending'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">1</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Ordered</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'ResentPending'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div v-if="order.status == 'Preparing'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div
                                v-if="order.status == 'Packing' || order.status == 'Delivering' || order.status == 'CompleteDelivery'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">2</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Preparing Your Order</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'Packing'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div v-if="order.status == 'Delivering' || order.status == 'CompleteDelivery'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">3</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">In the Sending Process</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'Delivering'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div v-if="order.status == 'CompleteDelivery'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">4</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Your Order on the way</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'CompleteDelivery'">
                                <span
                                    class="absolute animate-bounce inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">5</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Completed</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>

                        <p class=" text-sm font-light">
                        <div class="inline-flex hover:scale-125 transition-all duration-500 mx-52 items-center gap-x-2">
                            <router-link to="/report"
                                class="inline-flex text-gray-600 dark:hover:text-black rounded-lg group ">
                                Report
                                <svg class="flex-shrink-0 mx-1 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path
                                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path
                                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                            </router-link>
                        </div>
                        </p>

                    </div>

                    <div class="relative flex flex-col justify-center"
                        v-if="order.status === 'RefundPending' || order.status == 'Refunding' || order.status == 'CompleteRefund'">
                        <div class="absolute left-4 h-full mt-0 border-r-4"></div>
                        <div class="relative mb-6">
                            <div>
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-gray-300 text-base font-semibold text-white">1</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Cancel Order</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'RefundPending'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div v-if="order.status == 'Refunding' || order.status == 'CompleteRefund'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-gray-300 text-base font-semibold text-white">2</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Sending Your Request</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'Refunding'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                                    <span class="absolute flex h-5 w-5 animate-spin">
                                        <span class="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                </span>
                            </div>
                            <div v-if="order.status == 'CompleteRefund'">
                                <span
                                    class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-gray-300 text-base font-semibold text-white">3</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">In the Refunding Process</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6">
                            <div v-if="order.status == 'CompleteRefund'">
                                <span
                                    class="absolute animate-bounce inline-flex h-6 w-6 items-center justify-center rounded-full p-4 text-center bg-emerald-200 text-base font-semibold text-white">4</span>
                            </div>
                            <div class="ml-12 w-auto pt-1">
                                <h6 class="text-sm font-semibold text-blue-900">Refund Completed</h6>
                                <p class="mt-1 text-xs text-gray-500"></p>
                            </div>
                        </div>
                        <div class="relative mb-6"></div>
                        <div class="relative mb-6"></div>

                        <p class=" text-sm font-light">
                        <div class="inline-flex hover:scale-125 transition-all duration-500 mx-52 items-center gap-x-2">
                            <router-link to="/report"
                                class="inline-flex text-gray-600 dark:hover:text-black rounded-lg group ">
                                Report
                                <svg class="flex-shrink-0 mx-1 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path
                                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path
                                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                            </router-link>
                        </div>
                        </p>

                    </div>
                    <div class="mt-4 mx-auto items-center">
                        <div v-if="order.status == 'Pending' || order.status == 'Preparing' || order.status == 'Packing'">
                            <button @click="cancelOrder(order.id)" type="button"
                                class="w-full z-4 items-center py-4 border-2 bg-red-400 border-white lg:rounded-2xl text-white hover:text-white hover:border-white hover:bg-red-500">
                                <div class="">
                                    Cancel
                                </div>
                            </button>
                        </div>
                        <div v-if="order.status == 'Delivering'">
                            <button @click="completeDelivery(order.id)" type="button"
                                class="w-full z-4 items-center py-4 border-2 bg-emerald-400 border-white lg:rounded-2xl text-white hover:text-white hover:border-white hover:bg-emerald-500">
                                <div class="">
                                    Confirm
                                </div>
                            </button>
                        </div>
                        <div v-if="order.status == 'CompleteDelivery' || order.status == 'CompleteRefund'">
                            <button @click="deleteOrder(order.id)" type="button"
                                class="w-full z-4 items-center py-4 border-2 bg-white border-gray-700 lg:rounded-2xl text-gray-700 hover:text-white hover:border-white hover:bg-gray-700">
                                <div class="">
                                    Remove
                                </div>
                            </button>
                        </div>
                        <div v-if="order.status == 'RefundPending' || order.status == 'Refunding'">
                            <button
                                class="w-full z-4 items-center animate-pulse transition duration-700 py-4 border-2 bg-white border-gray-400 lg:rounded-2xl text-gray-400">
                                <div class="">
                                    Refunding
                                </div>
                            </button>
                        </div>
                        <div v-if="order.status == 'ResentPending'">
                            <button
                                class="w-full inline z-4 items-center animate-pulse transition duration-700 py-4 border-2 bg-white border-gray-400 lg:rounded-2xl text-gray-400">
                                <div class="">
                                    Preparing for Repacking
                                </div>
                            </button>
                        </div>
                        <div v-if="order.status == 'ReportPending'">
                            <button
                                class="w-full inline z-4 items-center animate-pulse transition duration-700 py-4 border-2 bg-white border-gray-400 lg:rounded-2xl text-gray-400">
                                <div class="">
                                    Checking
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Add your CSS styling for the bill here */
#bill {
    border: 2px solid #ccc;
    padding: 40px;
}

* {
    box-sizing: border-box;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    padding: 20px;

}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    float: right;
    width: 70%;
    padding: 4px;
    border: 1px solid #000000;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 6px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: rgb(0, 0, 0);
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}
</style>

<script setup lang="ts">
import { useOrderStore } from '~/stores/useOrderStore';
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
const orderStore = useOrderStore();
const orders = ref<Order[]>([]); // Initialize as an empty array

const fetchOrders = async () => {
    try {
        await orderStore.fetchOrders();
        // Filter orders associated with the authenticated user
        orders.value = orderStore.allOrders.orders.filter(order => order.user_id === auth.user.id);
    } catch (error) {
        console.error('Failed to fetch orders', error);
    }
};

const cancelOrder = async (orderId: number) => {
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
            console.log('Order status updated to Refund Pending successfully');
        } else {
            console.error('Failed to update order status to Refund Pending');
        }
    } catch (error) {
        console.error('Failed to update order status to Refund Pending', error);
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
            console.log('Order status updated to Complete Delivery successfully');
        } else {
            console.error('Failed to update order status to Complete Delivery');
        }
    } catch (error) {
        console.error('Failed to update order status to Complete Delivery', error);
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
</script>
