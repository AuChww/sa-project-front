<template>
    <nav class="bg-indigo-800 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-semibold">E-Commerce Store</router-link>
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
          <router-link to="/about" class="text-white hover:text-indigo-200">About</router-link>
          <router-link to="/contact" class="text-white hover:text-indigo-200">Contact</router-link>
          <!-- Add more navigation links here -->
        </div>
      </div>
      <!-- Mobile Menu (Hidden by Default) -->
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-indigo-800">
        <router-link to="/about" class="block py-2 px-4 text-white hover:text-indigo-200">About</router-link>
        <router-link to="/contact" class="block py-2 px-4 text-white hover:text-indigo-200">Contact</router-link>
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
  