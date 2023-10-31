<template>
  <Navbar />
  <div class="flex items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
      <div class="relative">
        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-8">

          <li class="flex items-center space-x-3 text-left sm:space-x-4 animate-bounce">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">1</a>
            <span class="font-semibold text-gray-900">Shop</span>
          </li>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">2</a>
            <span class="font-semibold text-gray-900">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Cart Items -->
  <div class="h-screen bg-gray-100 pt-10">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
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
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span
                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  @click="decrementQuantity(product)"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" v-model="product.quantity"
                  type="number" min="1" />
                <span
                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  @click="incrementQuantity(product)"> + </span>
              </div>
              <div class="flex items-center space-x-2">
                <p class="text-xl">{{ product.price }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  @click="removeFromCart(product.productId)">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Subtotal -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">{{ calculateSubtotal() }}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$0.00</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{{ calculateTotal() }}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <RouterLink to="/customer/payment">
          <button class="mt-6 w-full rounded-md py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            :class="{ 'bg-blue-500': !isCartEmpty, 'bg-gray-300 hover:bg-gray-300': isCartEmpty }" :disabled="isCartEmpty">
            Check out
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '~/stores/useCartStore';

const cartStore = useCartStore(); // Use the Cart store

const isCartEmpty = computed(() => Cart.length === 0);

const Cart = cartStore.cart;

// Function to decrement the quantity of a product in the cart
const decrementQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity--;
    cartStore.updateCartItemQuantity(product.productId, product.quantity);
  }
};

// Function to increment the quantity of a product in the cart
const incrementQuantity = (product) => {
  product.quantity++;
  cartStore.updateCartItemQuantity(product.productId, product.quantity);
};

// Function to remove a product from the cart
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

// Function to calculate the subtotal
const calculateSubtotal = () => {
  return Cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

// Function to calculate the total
const calculateTotal = () => {
  const subtotal = calculateSubtotal();
  // Include shipping costs or other charges as needed
  return `$${(subtotal).toFixed(2)} USD`;
};

</script>