<template>
    <nav class="dark:bg-blue-800 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-semibold hover:scale-125 transition-all duration-500">Wait4Stats</router-link>
        <!-- Hamburger Menu Icon -->
        <div class="lg:hidden">
          <button @click="toggleMobileMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <!-- Navigation Links (Desktop) -->
        <!-- customer -->
        <div class="hidden lg:flex space-x-4">
          <!-- admin -->
          <router-link to="/admin/create-staff" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group">Create Staff (ad)</router-link>
          <router-link to="/product/product-add" class="text-white rounded-lg  hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Product Add (ad)</router-link>

          <!-- delivery -->
          <router-link to="/product/product-check" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Check Product (d)</router-link>

          <!-- audit -->
          <router-link to="/order" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Order Check (a)</router-link>
          <router-link to="/order/refund" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">Refund Check (a)</router-link>

          <!-- customer -->
          <router-link to="/order/order-status" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">
            My Order (c)
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
              <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
              <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
            </svg>
          </router-link>

          <router-link to="/customer/shopping-cart" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group mx-8">
            My Cart (c)
            <span class="inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-300 bg-red-100 rounded-full dark:bg-blue-300 dark:text-blue-800">0</span>
            <svg class="flex-shrink-0 w-5 h-5 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor">
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            </router-link>

          <!-- all -->
          <router-link to="/report" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group ml-8">
            Notify
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
            </svg>
          </router-link>
          
          <router-link to="/report" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group ml-8">
            Message
            <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">3</span>
          </router-link>

          <router-link to="/profile" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group ml-8">
            Profile
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
            </svg>
          </router-link>

          <router-link to="/" class="text-white rounded-lg hover:bg-green-100 dark:hover:bg-blue-500 group ml-8">
            Log out
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
            </svg>
          </router-link>
          
          <!-- Add more navigation links here -->
        </div>
      </div>
      <!-- Mobile Menu (Hidden by Default) -->
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-indigo-800">
        <!-- admin -->
          <router-link to="/admin/create-staff" class="text-white hover:text-indigo-200">Create Staff (ad)</router-link>
          <router-link to="/product/product-add" class="text-white hover:text-indigo-200 mx-8">Product Add (ad)</router-link>

          <!-- delivery -->
          <router-link to="/product/product-check" class="text-white hover:text-indigo-200 mx-8">Check Product (d)</router-link>

          <!-- audit -->
          <router-link to="/order" class="text-white hover:text-indigo-200 mx-8">Order Check (a)</router-link>
          <router-link to="/order/refund" class="text-white hover:text-indigo-200 mx-8">Refund Check (a)</router-link>

          <!-- customer -->
          <router-link to="/order/order-status" class="text-white hover:text-indigo-200 mx-8">My Order (c)</router-link>
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
          </svg>
          <router-link to="/customer/shopping-cart" class="text-white hover:text-indigo-200 mx-8">My Cart (c)</router-link>
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
          </svg>

          <!-- all -->
          <router-link to="/report" class="text-white hover:text-indigo-200 ml-8">Notify</router-link>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
          </svg>
          <router-link to="/report" class="text-white hover:text-indigo-200 ml-8">Message</router-link>
          <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">3</span>
          <router-link to="/profile" class="text-white hover:text-indigo-200 ml-8">Profile</router-link>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
          </svg>
          <router-link to="/" class="text-white hover:text-indigo-200 ml-8">Log out</router-link>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
          </svg>
        <!-- Add more mobile menu links here -->
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for the navigation bar and mobile menu */
  </style>
  