<template>
    <div class="dropdown break-words" @mouseover="showDropdown" @mouseleave="hideDropdown">
      <button class="dropbtn">Notify</button>
      <div class="dropdown-content" v-if="isDropdownOpen">
        <a href="#">Service 1</a>
        <a href="#">Service 2</a>
        <a href="#">Service 3</a>
      </div>
      <div class="dropdown-content" v-else>
        <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-500 dark:text-white">3</span>
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dropdown',
    data() {
      return {
        isDropdownOpen: false
      };
    },
    methods: {
      showDropdown() {
        this.isDropdownOpen = true;
      },
      hideDropdown() {
        this.isDropdownOpen = false;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add CSS styles for your dropdown here */
  </style>
  