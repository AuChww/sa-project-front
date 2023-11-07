<template>
  <nav class="dark:bg-blue-800 p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center"> <!-- Move the logo to the left -->
        <div class="relative mx-auto h-10 w-10 animate-bounce">
          <div class="mx-auto h-8 w-8 animate-pulse rounded-full bg-white"></div>
          <span class="absolute flex h-5 w-5 animate-spin">
            <span class="h-4 w-4 rounded-full bg-green-400"></span>
          </span>
        </div>
        <router-link to="/"
          class="text-white text-2xl font-semibold hover:scale-125 transition-all duration-500">Wait4Stats</router-link>
      </div>
      <!-- Hamburger Menu Icon -->
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Navigation Links (Desktop) -->

      <div class="hidden lg:flex space-x-4">
        <!-- admin -->
        <router-link to="/admin/product" v-if="auth.checkRole('Admin')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group">All Product</router-link>
        <router-link to="/admin/create-staff" v-if="auth.checkRole('Admin')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group">Create
          Staff</router-link>
        <router-link to="/product/product-add" v-if="auth.checkRole('Admin')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Product
          Add</router-link>
        <router-link to="/admin/report-check" v-if="auth.checkRole('Admin')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Report
          Check</router-link>

        <!-- delivery -->
        <router-link to="/product/product-check" v-if="auth.checkRole('Delivery')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Check
          Product</router-link>

        <!-- audit -->
        <router-link to="/order/" v-if="auth.checkRole('Audit')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Order
          Check</router-link>
        <router-link to="/order/refund-check" v-if="auth.checkRole('Audit')"
          class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Refund
          Check</router-link>

        <!-- customer -->
        <div class="inline-flex hover:animate-bounce items-center gap-x-2">
          <router-link to="/order/order-status" v-if="auth.checkRole('Customer')"
            class="p-1.5 inline-flex text-white rounded-lg  hover:bg-green-100 dark:hover:bg-blue-500 group">
            My Order
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
          </router-link>
        </div>

        <div class="inline-flex hover:animate-bounce items-center gap-x-2">
          <router-link to="/customer/shopping-cart" v-if="auth.checkRole('Customer')"
            class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group">
            My Cart
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-blue-300 dark:text-blue-800">{{
                cartCount }}</span>
          </router-link>
        </div>

        <!-- all -->
        <div v-if="auth.isLogin" class="inline-flex items-center">
          <div class="relative inline-block text-left">

            <div v-if="notifyOpen"
              class=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 inline-flex" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                  id="menu-item-0">Notification</a>
                <span
                  class="inline-flex items-center justify-center animate-pulse w-3 h-3 p-3 mt-1 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">1</span>
              </div>
              <div class="py-1" role="none">
                <div class="text-gray-700 block px-4 py-2 text-sm">
                  <span
                    class="inline-flex items-center justify-center animate-pulse w-3 h-3 p-3 mt-1 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">new</span>
                  Your Report was rejected.
                </div>
              </div>
              <div class="py-1" role="none">
                <div class="text-gray-700 block px-4 py-2 text-sm">
                  Your Order have been prepare.
                </div>
              </div>
              <div class="py-1" role="none">
                <div class="text-gray-700 block px-4 py-2 text-sm">
                  welcome to Wait4Stats shopping online.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="auth.isLogin" class="inline-flex items-center gap-x-2">
          <router-link to="/profile"
            class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group">
            Profile
            <svg
              class="w-5 h-5 mx-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path
                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
          </router-link>
        </div>

        <div class="inline-flex items-center">
          <button v-if="!auth.isLogin"
            class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
            @click="navigateTo('/register')">
            Sign Up
          </button>
        </div>

        <div class="inline-flex items-center">
          <button v-if="!auth.isLogin"
            class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
            @click="navigateTo('/login')">
            Log In
          </button>
        </div>

        <div class="inline-flex items-center">
          <button v-if="auth.isLogin"
            class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
            @click="onLogout()">
            Logout
            <svg
              class="w-5 h-5 mx-1 mt-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            </svg>
          </button>
        </div>

        <!-- Add more navigation links here -->
      </div>
    </div>
    <!-- Mobile Menu (Hidden by Default) -->
    <div v-if="isMobileMenuOpen" class="lg:hidden space-x-4">
      <!-- admin -->
      <router-link to="/admin/create-staff" v-if="auth.checkRole('Admin')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group">Create
        Staff (ad)</router-link>
      <router-link to="/product/product-add" v-if="auth.checkRole('Admin')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Product
        Add (ad)</router-link>
      <router-link to="/admin/report-check" v-if="auth.checkRole('Admin')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Report
        Check (ad)</router-link>

      <!-- delivery -->
      <router-link to="/product/product-check" v-if="auth.checkRole('Delivery')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Check
        Product</router-link>

      <!-- audit -->
      <router-link to="/order/" v-if="auth.checkRole('Audit')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Order
        Check</router-link>
      <router-link to="/order/refund-check" v-if="auth.checkRole('Audit')"
        class="p-1.5 text-white rounded-lg hover:animate-bounce hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Refund
        Check</router-link>

      <!-- customer -->
      <div class="inline-flex hover:animate-bounce items-center gap-x-2">
        <router-link to="/order/order-status" v-if="auth.checkRole('Customer')"
          class="p-1.5 inline-flex text-white rounded-lg  hover:bg-green-100 dark:hover:bg-blue-500 group">
          My Order
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path
              d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>
        </router-link>
      </div>

      <div class="inline-flex hover:animate-bounce items-center gap-x-2">
        <router-link to="/customer/shopping-cart" v-if="auth.checkRole('Customer')"
          class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group">
          My Cart
          <span
            class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-blue-300 dark:text-blue-800">{{
              cartCount }}</span>
        </router-link>
      </div>

      <!-- all -->
      <div v-if="auth.isLogin" class="inline-flex items-center">
        <div class="relative inline-block text-left">
          <div>
            <button @click="toggleNotify" type="button"
              class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              Notify
              <svg
                class="ml-1 w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span
                class="animate-ping inline-flex items-center justify-center ml-1 w-3 h-3 p-3 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">1</span>
            </button>
          </div>

          <div v-if="notifyOpen"
            class=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1 inline-flex" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-0">Notification</a>
              <span
                class="inline-flex items-center justify-center animate-pulse w-3 h-3 p-3 mt-1 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">1</span>
            </div>
            <div class="py-1" role="none">
              <div class="text-gray-700 block px-4 py-2 text-sm">
                <span
                  class="inline-flex items-center justify-center animate-pulse w-3 h-3 p-3 mt-1 text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">new</span>
                Your Report was rejected.
              </div>
            </div>
            <div class="py-1" role="none">
              <div class="text-gray-700 block px-4 py-2 text-sm">
                Your Order have been prepare.
              </div>
            </div>
            <div class="py-1" role="none">
              <div class="text-gray-700 block px-4 py-2 text-sm">
                welcome to Wait4Stats shopping online.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="auth.isLogin" class="flex items-center gap-x-2">
        <router-link to="/profile"
          class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group">
          Profile
          <svg class="w-5 h-5 mx-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path
              d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </router-link>
      </div>

      <div class="flex items-center">
      <button v-if="!auth.isLogin"
        class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
        @click="navigateTo('/register')">
        Register
      </button>
    </div>

    <div class="flex items-center">
      <button v-if="!auth.isLogin"
        class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
        @click="navigateTo('/login')">
        Login
      </button>
    </div>

    <div class="inline-flex items-center">
      <button v-if="auth.isLogin"
        class="p-1.5 inline-flex text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group8"
        @click="onLogout()">
        Logout
        <svg
          class="w-5 h-5 mx-1 mt-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
        </svg>
      </button>
    </div>

    <!-- Add more navigation links here -->
  </div>
</nav></template>

<script lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import { computed } from 'vue';
import { useCartStore } from '~/stores/useCartStore';

export default {
  data() {
    return {
      isMobileMenuOpen: false,
      notifyOpen: false,
      auth: useAuthStore(), // Initialize auth property
    };
  },
  name: 'Navbar',
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleNotify() {
      this.notifyOpen = !this.notifyOpen;
    },
    async onLogout() {
      const { data: response, error } = await useMyFetch<any>('auth/logout', {
        method: 'POST',
      });

      if (response.value !== null) {
        this.auth.clear(); // Access auth via this
        await navigateTo('/');
      }
    },
  },
  setup() {
    const auth = useAuthStore();
    const cartStore = useCartStore();

    const cartCount = computed(() => {
      // Calculate the total number of items in the cart
      return cartStore.cart.reduce((total, product) => total + product.quantity, 0);
    });

    return {
      auth,
      cartCount,
    };
  },
};
</script>


<style scoped>/* Styling for the navigation bar and mobile menu */</style>
  