<template>
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
    <div class="flex w-full h-full flex-col justify-center px-6 py-8 lg:px-8 z-10 bg-gradient-to-r
          from-green-500
          via-blue-500
          to-purple-500
          background-animate">
        <div class=" mb-28  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
            style="width: 1200px; height: 650px; border">
            <div :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
                class="bg-blue-900 text-white py-2">
                <div class="mx-auto text-center">
                    <h1 class="text-xl md:text-5xl lg:text-6xl font-semibold transition-all">
                        REPORT
                    </h1>
                </div>
            </div>
            <div class="grid grid-cols-2 ">
                <div class="h-[460px] rounded-lg ml-2 my-4 px-4">
                    <div class="font-semibold text-2xl">Order Id : {{ order.id }} </div>
                    <div class="text-gray-600 text-md">Status : {{ order.status }} </div>
                    <div class="text-gray-600 text-md">Date: {{ formatDateTime(order.created_at) }}</div>
                    <div class="text-gray-600 text-md">Price : {{ order.total_price }} </div>
                    <div class="text-gray-600 text-md">Customer : {{ order.user_name }} </div>
                    <div class="font-semibold grid grid-cols-5 mt-6">
                        <div class="text-sm font-semi">
                            ID
                        </div>
                        <div class="text-sm font-semi">
                            Product
                        </div>
                        <div class="text-sm font-semi">
                            Name
                        </div>
                        <div class="text-sm text-center font-semi">
                            Quantity
                        </div>
                        <div class="text-sm text-center font-semi">
                            Price
                        </div>
                    </div>
                    <div class="overflow-y-auto h-72">
                        <div v-for="product in specificOrder.products" :key="product.id"
                            class="font-semi my-4 grid grid-cols-5">
                            <div class="text-sm font-semi">
                                {{ product.id }}
                            </div>
                            <div class="w-24">
                                <img :src="`http://localhost:80/storage/${product.image}`" alt="product image">
                            </div>
                            <div class="text-sm font-semi">
                                {{ product.name }}
                            </div>
                            <div class="text-center">
                                {{ product.pivot.quantity }}
                            </div>
                            <div class="text-sm text-center font-semi">
                                {{ product.price }}
                            </div>

                        </div>
                    </div>
                    <div class="font-semi mt-8 text-right grid grid-cols-5">
                        <div class="text-right text-sm font-semi">
                        </div>
                        <div class="text-right text-sm font-semi">
                        </div>
                        <div class="text-right text-sm font-semi">
                        </div>
                        <div class="text-center mr-4 text-lg font-semibold underline">
                            Total
                        </div>
                        <div class="text-left text-lg font-semi">
                            {{ order.total_price }}
                        </div>
                    </div>
                </div>
                <div>
                    <form v-if="auth.user.role !== 'Delivery'" class="" @submit.prevent="onSubmit()" enctype="multipart/form-data">
                        <div
                            class="w-full mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600">
                            <div class="px-4 mt-2 bg-white rounded-t-lg dark:bg-gray-700">
                                <label for="reason" class="sr-only">Your comment</label>
                                <textarea v-model="formData.reason" id="reason" rows="3"
                                    class="w-full px-0 text-md text-gray-900 bg-white border-0 dark:bg-gray-100 focus:ring-0 dark:text-black dark:placeholder-gray-800"
                                    placeholder="Write a reason..." required></textarea>
                            </div>
                            <div class="text-red-600">
                                {{ statusMessage }}
                            </div>
                            <div 
                                class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit"
                                    class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-gray-800 bg-gray-100 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-900 hover:text-white hover:bg-red-500">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>

                    <form v-if="auth.user.role === 'Delivery'" class="" @submit.prevent="onSubmit2(auth.user.id, order.id)" enctype="multipart/form-data">
                        <div
                            class="w-full mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600">
                            <div class="px-4 mt-2 bg-white rounded-t-lg dark:bg-gray-700">
                                <label for="reason" class="sr-only">Your comment</label>
                                <textarea v-model="formData2.reason" id="reason" rows="3"
                                    class="w-full px-0 text-md text-gray-900 bg-white border-0 dark:bg-gray-100 focus:ring-0 dark:text-black dark:placeholder-gray-800"
                                    placeholder="Write a reason..." required></textarea>
                            </div>
                            <input hidden type="text" v-model="formData2.user_id">
                            <input hidden type="text" v-model="formData2.order_id">
                            <div v-if="auth.user.role === 'Delivery'">
                                <button type="submit"
                                    class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-gray-800 bg-red-100 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-900 hover:text-white hover:bg-red-500">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">

import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();

const route = useRoute();
const previewUrl = ref(null);
const { data: order, error } = await useMyFetch<any>(`order/${route.params.id}`, {});
const { data: specificOrder } = await useMyFetch<any>(`showOrderSpecific/${route.params.id}`, {});



const formData = ref({
    reason: ""
})

const formData2 = ref({
    reason: "",
    user_id: "",
    order_id: "",
})

const formErrors = ref({
    errors: null
})

async function onSubmit() {
    const { reason } = formData.value;
    const data = { reason }
    const { data: reponse, error } = await useMyFetch<any>(`report/${route.params.id}`, {
        method: "POST",
        body: data,
    });

    if (error.value !== null) {
        if ('statusCode' in error.value) {
            const { statusCode, statusMessage } = error.value;
            console.log(statusCode, statusMessage);
            if (statusCode === 404) {
                await navigateTo("/");
            }
        }
    }

    if (order.value !== null) {
        console.log(order.value);
        console.log(specificOrder.value);
    }

    const response = await useMyFetch(`orders/${route.params.id}/update_status`, {
        method: "PUT",
        body: JSON.stringify({
            status: "ReportPending" // Set the new status here
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(data)
    await navigateTo("/order/order-status")
}

async function onSubmit2(staff_id: string, staff_order_id: number) {
    const { reason, user_id = staff_id, order_id = staff_order_id } = formData2.value;
    const data = { reason, user_id, order_id }
    const { data: reponse, error } = await useMyFetch<any>(`report/${route.params.id}/byStaff`, {
        method: "POST",
        body: data,
    });

    if (error.value !== null) {
        if ('statusCode' in error.value) {
            const { statusCode, statusMessage } = error.value;
            console.log(statusCode, statusMessage);
            if (statusCode === 404) {
                await navigateTo("/");
            }
        }
    }

    if (order.value !== null) {
        console.log(order.value);
        console.log(specificOrder.value);
    }

    const response = await useMyFetch(`orders/${route.params.id}/update_status`, {
        method: "PUT",
        body: JSON.stringify({
            status: "ReportPending" // Set the new status here
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    console.log(data)
    await navigateTo("/product/product-check")
}

onMounted(() => {
    formData2.value.user_id = auth.user.id;
    formData2.value.order_id = order.value.id;
});

const formatDateTime = (dateTime: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Date(dateTime).toLocaleString('en-US', options);
};
</script>
  
<style scoped>
* {
    box-sizing: border-box;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}
</style>