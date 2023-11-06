<template>
    <Navbar />
    <Sidebar />
    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
        <div style="border"
            class="py-8 mx-20 mb-24 px-12 mt-8 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="rounded-lg mt-4 mb-4 px-2">
                        <img :src="`http://localhost:80/storage/${products.image}`" alt="Product Image" style="height: 450px; border"
                        class="mx-auto">
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-3xl mt-8 font-bold mb-2">{{ products.name }}</h2>
                    <p class="text-gray-600 text-lg mt-4 mb-4 w-96">{{ products.description }}</p>
                    <div class="text-lg mt-8 py-2">
                        <span class="font-bold text-gray-700">Price : </span>
                        <span class="text-gray-600">{{ products.price }}</span>
                    </div>
                    <div class="text-lg py-2">
                        <span class="font-bold text-gray-700">Available : </span>
                        <span class="text-gray-600">{{ products.quantity }}</span>
                    </div>
                    <div class="flex mt-8 -mx-2 mb-4">
                        <div class="mx-0 px-4 w-80">
                            <button @click="addToCart" class="w-full bg-blue-800 text-white text-lg py-2 px-4 rounded-full font-bold hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup type="ts">

import { useCartStore } from '~/stores/useCartStore';

const route = useRoute();
const cartStore = useCartStore(); // Use the Cart store
const { data: products, error } = await useMyFetch(`products/${route.params.id}`, {});

if (products.value === null) {
    const { statusCode, statusMessage } = error.value;
    console.log(statusCode, statusMessage);
    if (statusCode === 404) {
        await navigateTo("/");
    }
} else {
    console.log(products.value);
}

const addToCart = () => {
            // Log a message when the addToCart function is called
            console.log('Adding product to the cart:', products.value);

            // Use the addToCart method from the Cart store
            cartStore.addToCart(products.value);

            // Log a message to confirm that the product was added to the cart
            console.log('Product added to the cart:', products.value);

            // Optionally, show a notification or feedback to the user that the product was added to the cart
        };
</script>