<template>
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <div class="h-full px-12 py-4 overflow-y-auto bg-gray-50 dark:bg-blue-800">
          <ul class="space-y-2 font-medium">
              <li>
                  <a href="#Best Seller" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                    <span class="flex-1 whitespace-nowrap">Best Seller </span>
                    <svg class="flex-shrink-0 mx-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-red-500 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                        <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
                    </svg>
                  </a>
              </li>
              <li>
                  <a href="#CPU" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span>CPU</span>
                  </a>
              </li>
              <li>
                  <a href="#Main Board" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">Main Board</span>
                  </a>
              </li>
              <li>
                  <a href="#GPU" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">GPU</span>
                  </a>
              </li>
              <li>
                  <a href="#RAM" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">RAM</span>
                  </a>
              </li>
              <li>
                  <a href="#Harddisk" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">Harddisk/SSD</span>
                  </a>
              </li>
              <li>
                  <a href="#Accessary" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">Accessary</span>
                  </a>
              </li>
              <li>
                  <a href="#Gaming Gear" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-500 group">
                  <span class="flex-1 whitespace-nowrap">Gaming Gear</span>
                  </a>
              </li>
          </ul>
      </div>
    </div>
    <aside class="fixed top-80 left-1 z-40 w-30 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <button class="bg-blue-800 rounded-lg hover:bg-green-100 dark:hover:bg-blue-400 group" @click="toggleSidebar">
        <svg class="flex-shrink-0 w-10 h-10 text-blue-500 dark:text-blue-300 dark:group-hover:text-blue-900 hover:scale-125 transition-all duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
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
