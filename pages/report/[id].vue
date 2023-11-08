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
                <form class="" @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <div class="mx-2 px-4 my-2">
                        <div>
                            <label for="telephone" class="block mt-2 text-xl font-medium text-gray-900 dark:text-gray-700">
                                Order Id
                            </label>
                            <input v-model="formData.order_id" type="text" name="order_id" id="order_id"
                                :placeholder="order.id" class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-xl rounded px-4 py-1">
                            <label for="telephone" class="block text-xl font-medium text-gray-900 dark:text-gray-700">
                                User Id
                            </label>
                            <input v-model="formData.user_id" type="text" name="user_id" id="user_id"
                                :placeholder="order.user_id"
                                class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-xl rounded px-4 py-1">
                        </div>
                        <div>
                            <label for="telephone" class="block text-xl font-medium text-gray-900 dark:text-gray-700">
                                Your Telephone
                            </label>
                            <input v-model="formData.telephone" type="text" id="tel"
                                class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-xl rounded px-4 py-1"
                                :placeholder="order.user.phone">
                        </div>
                        <div
                            class="w-full mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600">
                            <div class="px-4 mt-2 bg-white rounded-t-lg dark:bg-gray-700">
                                <label for="reason" class="sr-only">Your comment</label>
                                <textarea v-model="formData.reason" id="reason" rows="3"
                                    class="w-full px-0 text-md text-gray-900 bg-white border-0 dark:bg-gray-100 focus:ring-0 dark:text-black dark:placeholder-gray-800"
                                    placeholder="Write a reason..." required></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit"
                                    class="inline-flex items-center py-2.5 px-8 text-xm font-medium text-center text-gray-800 bg-gray-100 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-900 hover:text-white hover:bg-red-500">
                                    Submit
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </form>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();
const previewUrl = ref(null);
const { data: order, error } = await useMyFetch<any>(`order/${route.params.id}`, {});
const { data: specificOrder } = await useMyFetch<any>(`showOrderSpecific/${route.params.id}`, {});

const formData = ref({
    telephone: "",
    reason: "",
    order_id: "",
    user_id: "",
})

const formErrors = ref({
    errors: null
})

formData.value.order_id = order.id;
formData.value.user_id = order.user_id;

async function onSubmit() {
    const { telephone, reason, order_id, user_id } = formData.value;
    const data = {
        telephone, 
        reason, 
        order_id, 
        user_id,
    };

    // Log the data before sending
    console.log("Data before sending:", data);

    const { data: response, error } = await useMyFetch<any>(
        "report",
        {
            method: "POST",
            body: data,
        }
    );

    if (response.value !== null) {
        await navigateTo(`/`);
        const response = await useMyFetch(`orders/${route.params.id}/update_status`, {
            method: "PUT",
            body: JSON.stringify({
                status: "ReportPending" // Set the new status here
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } else {
        console.log(error);
        console.log(data);
        const { message } = error.value!.data;
        formErrors.value.errors = message;
    }
}
onMounted(() => {
    formData.value.order_id = order.id;
    formData.value.user_id = order.user_id;
});


const previewImage = (event) => {
    const file = event.target.files ? event.target.files[0] : null; // Check if there are files

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            previewUrl.value = reader.result; // Store the data URL for preview
            selectedFile.value = file; // Store the selected file

            // Optionally, you can encode the image to base64
            const base64String = reader.result.split(',')[1]; // Get the base64 part of the data URL
            orderData.payment_receipt = base64String; // Store the base64-encoded image in orderData
        };

        reader.readAsDataURL(file);
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
            await navigateTo('/order/order-status')
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