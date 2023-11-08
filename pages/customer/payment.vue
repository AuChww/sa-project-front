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
                                stroke="currentColor" stroke-width="z2">
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
                        <span class="font-semibold text-gray-900">Payment</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <!-- Order Summary -->
        <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
            <div class="max-h-96 overflow-y-auto mt-8 space-y-3 rounded-lg border bg-white px-2 py-2 sm:px-6">
                <!-- Display Cart Items -->
                <div v-if="Cart.length === 0"
                    class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <p>Your cart is empty.</p>
                </div>
                <div v-else v-for="product in Cart" :key="product.product_id"
                    class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <!-- Display Cart Product Information -->
                    <img :src="`http://localhost:80/storage/${product.image}`" alt="product image"
                        class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ product.name }}</h2>
                            <p class="mt-1 text-xs text-gray-700 line-clamp-2">{{ product.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--UPLOAD IMAGE-->
            <div class="mt-8">Put Your Slip Here </div>
            <div
                class=" bg-gray-50 w-full border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input type="file" accept="image/*" @change="previewImage" />
            </div>

            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            <form class="mt-5 grid gap-6 mb-8">
                <div class="relative">
                    <input class="peer hidden" id="radio_1" type="radio" name="shipment" v-model="selectedShipmentMethod"
                        value="normal" />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1">
                        <div class="w-24 object-contain rounded-md" :style="{ 'background-image': 'url(https://stocklittle.com/wp-content/uploads/2017/09/KERRY-express-logo.jpg)', 'backgroundPosition': 'center', 'backgroundSize': '105%'}">
                            </div>
                        <div class="ml-5">
                            <div class="inline-flex">
                                <span class="font-semibold">Kerry Express</span>
                                <div class="ml-2 text-slate-500 text-sm leading-6">฿35</div>
                            </div>
                            <p class="text-slate-500 text-sm leading-6">Delivery: 1-3 Days</p>
                        </div>
                    </label>
                </div>
                <div class="relative">
                    <input class="peer hidden" id="radio_2" type="radio" name="shipment" v-model="selectedShipmentMethod"
                        value="fast" />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2">
                        <div class="w-24 object-contain rounded-md" :style="{ 'background-image': 'url(https://s3.amazonaws.com/beamstart/2021/Jun/01/960w_73b0b2b9128e942adc9a8314f9d880c4.jpeg)', 'backgroundPosition': 'center 55%', 'backgroundSize': '120%'}">
                            </div>
                        <div class="ml-5">
                            <div class="inline-flex">
                                <span class="font-semibold">Flash Delivery</span>
                                <div class="ml-2 text-slate-500 text-sm leading-6">฿20</div>
                            </div>
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
                        <p class="font-semibold text-gray-900">฿{{ subtotal.toFixed(2) }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Shipping</p>
                        <p class="font-semibold text-gray-900">฿{{ shippingCost.toFixed(2) }}</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="font-semibold text-gray-900">฿{{ total.toFixed(2) }}</p>
                </div>
            </div>
            <!-- Place Order Button -->
            <button @click="placeOrder" :disabled="isCartEmpty"
                :class="{ 'bg-blue-500': !isCartEmpty, 'bg-gray-300': isCartEmpty }"
                class="mt-4 mb-2 w-full rounded-md px-6 py-3 font-medium text-white">
                Place Order
            </button>
            <RouterLink to="/customer/shopping-cart">
                <button class="w-full rounded-md bg-gray-700 px-6 py-3 font-medium text-white">Back</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '~/stores/useCartStore';
import { useAuthStore } from '~/stores/useAuthStore';
import image from '@/assets/image/qr-payment.jpg';

const cartStore = useCartStore();
const Cart = cartStore.cart;
const selectedShipmentMethod = ref('normal'); // Default to 'normal'
const previewUrl = ref(null);
const selectedFile = ref(null);

const orderData = ref({
    user_id: '',
    user_name: '',
    address: '',
    products: Cart,
    total_price: 0,
    payment_receipt: null,
    shipment_method: 'normal',
    user_role: '',
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

const isCartEmpty = computed(() => Cart.length === 0); // check cart is empty or not

// Access the authenticated user data
const auth = useAuthStore();
const authenticatedUser = computed(() => auth.user);

const subtotal = computed(() => {
    let total = 0;
    for (const product of Cart) {
        total += parseFloat(product.price) * product.quantity;
    }
    return total;
});

const shippingCost = computed(() => {
    return selectedShipmentMethod.value === 'fast' ? 20.0 : 35.0;
});

const additionalCharges = computed(() => {
    return 0.0;
});

const router = useRouter();

const total = computed(() => subtotal.value + shippingCost.value + additionalCharges.value);

// Function to handle placing an order
const placeOrder = async () => {
    if (!selectedFile.value) {
        // Check if a payment receipt has been uploaded
        alert('Please upload a payment receipt before placing the order.');
        return; // Prevent placing the order without a receipt
    }

    const formData = new FormData();
    formData.append('user_id', auth.user.id);
    formData.append('user_name', auth.user.name);
    formData.append('address', auth.user.address);
    formData.append('total_price', total.value);
    formData.append('payment_receipt', selectedFile.value);
    formData.append('shipment_method', selectedShipmentMethod.value);
    formData.append('user_role', auth.user.role);

    // Append each product separately
    for (const product of Cart) {
        formData.append('products[]', JSON.stringify(product));
    }

    console.log('Sending orderData:', Object.fromEntries(formData.entries()));

    try {
        const response = await useMyFetch<{ order_id: number }>('place-order', {
            method: 'POST',
            body: formData,
        });

        if (response) {
            // Order placed successfully
            console.log('Order placed successfully. Order ID:', response.order_id);
            router.push('/order/order-status');
            cartStore.clearCart();
            // You can perform any additional actions here, like redirecting or showing a success message
        } else {
            // Handle error
            console.error('Failed to place the order');
        }
    } catch (error) {
        // Log the error response from the server
        console.error('Error placing the order:', error);

        if (error.response && error.response.data) {
            console.error('Validation Errors:', error.response.data);
        }
    }
};
</script>