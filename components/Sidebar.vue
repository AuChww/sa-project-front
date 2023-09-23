<template>
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <div class="h-full px-12 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
              <li>
                  <a href="#Best Seller" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">Best Seller </span>
                  <svg class="flex-shrink-0 mx-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                      <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
                  </svg>
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
                  <span class="flex-1 whitespace-nowrap">Accessary</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 whitespace-nowrap">Gaming Gear</span>
                  </a>
              </li>
          </ul>
      </div>
    </div>
    <aside class="fixed top-80 left-0 z-40 w-30 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <button class="bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 group" @click="toggleSidebar">
        <svg class="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
        </svg>
      </button>
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
  width: 180px; /* Width of the open sidebar */
}

/* Add styling for the button to toggle the sidebar */
button {
  position: absolute;
  top: 10px;
  left: 0px;
  z-index: 999;
}
</style>
