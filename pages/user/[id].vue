<template>
    <div class="p-4">
        <h1 class="text-3xl mb-8">{{ pageTitle }}</h1>

        <div class="bg-blue-100 p-4 rounded-xl mb-6">
            <div class="font-semibold">User Name:</div>
            <div class="text-lg">{{ user.name }}</div>
        </div>

        <div class="grid grid-cols-8 gap-2 border-b border-gray-200 text-lg font-semibold py-2">
            <div>Order ID</div>
            <div>User ID</div>
            <div>Customer Name</div>
            <div>Shipping Address</div>
            <div>Total Price</div>
            <div>Payment Receipt</div>
            <div>Shipment Method</div>
            <div>Status</div>
        </div>

        <div v-for="order in user.orders" :key="order.id" class="grid grid-cols-8 gap-2 border-b border-gray-200 py-2">
            <div>{{ order.id }}</div>
            <div>{{ order.user_id }}</div>
            <div>{{ order.user_name }}</div>
            <div>{{ order.address }}</div>
            <div>${{ order.total_price }}</div>
            <div>
                <a :href="`http://localhost:80/storage/${order.payment_receipt}`" target="_blank" class="text-blue-500 hover:underline">View Receipt</a>
            </div>
            <div>{{ order.shipment_method }}</div>
            <div>{{ order.status }}</div>
        </div>
    </div>
</template>
  
<script setup type="ts">

const route = useRoute();
const pageTitle = `User ID: ${route.params.id}`;
const { data: user, error } = await useMyFetch(`user/${route.params.id}`, {});

if (user.value === null) {
    const { statusCode, statusMessage } = error.value;
    console.log(statusCode, statusMessage);
    if (statusCode === 404) {
        await navigateTo("/users");
    }
} else {
    console.log(user.value);
}
</script>
  