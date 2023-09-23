<template>
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <div class="h-full px-14 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
              <li>
                  <a href="#Best Seller" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">Best Seller</span>
                  </a>
              </li>
              <li>
                  <a href="#CPU" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span>CPU</span>
                  </a>
              </li>
              <li>
                  <a href="#Main Board" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">Main Board</span>
                  <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                  </a>
              </li>
              <li>
                  <a href="#GPU" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">GPU</span>
                  </a>
              </li>
              <li>
                  <a href="#RAM" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">RAM</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">Harddisk/SSD</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap"></span>
                  </a>
              </li>
          </ul>
      </div>
    </div>
    <aside class="fixed top-80 left-0 z-40 w-30 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <button class="bg-blue-900" @click="toggleSidebar">Toggle Sidebar</button>
    </aside>
</template>
  
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Add CSS for the sidebar */
.sidebar {
  width: 0;
  height: 100%;
  position: fixed;
  top: 15;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: #333;
}

.sidebar-open {
  width: 200px; /* Width of the open sidebar */
}

/* Add styling for the button to toggle the sidebar */
button {
  position: absolute;
  top: 10px;
  left: 0px;
  z-index: 999;
}
</style>
