<template>
    <Navbar />
    <div class="flex items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">

        <div class="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
            <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-8">

                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        <a
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </a>
                        <span class="font-semibold text-gray-900">Shop</span>
                    </li>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4 animate-bounce">
                        <a
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">2</a>
                        <span class="font-semibold text-gray-900">Shipping</span>
                    </li>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        <a
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">3</a>
                        <span class="font-semibold text-gray-500">Payment</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">

        <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    v-if="Cart.length === 0">
                    <p>Your cart is empty.</p>
                </div>

                <div v-else v-for="product in Cart" :key="product.productId"
                    class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img :src="product.image" alt="product image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ product.name }}</h2>
                            <p class="mt-1 text-xs text-gray-700 line-clamp-2">{{ product.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 bg-gray-50 w-full border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input type="file" id="image" ref="imageInput" accept="image/*" />
            </div>

            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            <form class="mt-5 grid gap-6">
                <div class="relative">
                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1">
                        <img class="w-14 object-contain" src="" alt="" />
                        <div class="ml-5">
                            <span class="mt-2 font-semibold">Kerry Express</span>
                            <p class="text-slate-500 text-sm leading-6">Delivery: 1-3 Days</p>
                        </div>
                    </label>
                </div>
                <div class="relative">
                    <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2">
                        <img class="w-14 object-contain" src="" alt="" />
                        <div class="ml-5">
                            <span class="mt-2 font-semibold">Flash Delivery</span>
                            <p class="text-slate-500 text-sm leading-6">Delivery: 3-7 Days</p>
                        </div>
                    </label>
                </div>
            </form>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400">Complete your order by providing your payment details.</p>
            <div class="">
                <div class="mx-48 items-center">
                    <img :src="image" />
                </div>
                <!-- Total -->
                <div class="mt-6 border-t border-b py-2">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Subtotal</p>
                        <p class="font-semibold text-gray-900">${{ subtotal.toFixed(2) }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Shipping</p>
                        <p class="font-semibold text-gray-900">${{ shippingCost.toFixed(2) }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Additional Charges</p>
                        <p class="font-semibold text-gray-900">${{ additionalCharges.toFixed(2) }}</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="font-semibold text-gray-900">${{ total.toFixed(2) }}</p>
                </div>
            </div>
            <RouterLink to="/customer/payment">
                <button class="mt-4 mb-2 w-full rounded-md bg-blue-500 px-6 py-3 font-medium text-white">Place
                    Order</button>
            </RouterLink>
            <RouterLink to="/customer/shopping-cart">
                <button class="w-full rounded-md bg-gray-700 px-6 py-3 font-medium text-white">Back</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '~/stores/useCartStore';
import image from '@/assets/image/qr-payment.jpg'; // Use @ for the root directory, adjust as needed


const cartStore = useCartStore(); // Use the Cart store

const Cart = cartStore.cart;

// Compute the subtotal
const subtotal = computed(() => {
    let total = 0;
    for (const product of Cart) {
        total += parseFloat(product.price) * product.quantity; // Multiply by quantity
    }
    return total;
});

// Define shipping cost and other additional charges
const shippingCost = computed(() => {
    // Calculate the shipping cost based on your logic
    return 0.00; // You can replace this with your actual shipping cost calculation
});

const additionalCharges = computed(() => {
    // Calculate any additional charges based on your logic
    return 0.00; // You can replace this with your actual additional charges calculation
});

// Calculate the total
const total = computed(() => (subtotal.value + shippingCost.value + additionalCharges.value));
</script>
