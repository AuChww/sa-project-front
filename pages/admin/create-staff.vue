<template>
    <!-- admin -->
    <Navbar />
    <section :style="{'background-image':'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)'}" class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
                CREATE STAFF
            </h1>
        </div>
    </section>

    <div class="sm:mx-center mt-4">
        
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mx-12 mt-6 grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Staff Name" required>
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Category</label>
                    <select id="country" name="country" autocomplete="country-name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Audit</option>
                        <option>Delivery</option>
                    </select>
                </div>
            </div>
            <div class="mx-12 mb-6">
                <label for="description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Username</label>
                <input type="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Staff Username" required>
            </div> 
            <div class="mx-12 grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="password" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                </div> 
                <div>
                    <label for="confirm_password" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Confirm password</label>
                    <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                </div>
            </div>
            <div class="mx-12 mb-6">
                <label for="description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Description</label>
                <input type="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Staff info" required>
            </div> 
            
            <div class="text-center items-center text-xm mx-12 mt-10">
                
                <button type="submit" class="mt-2 w-40 text-xl rounded-md bg-blue-500 px-2 py-3 font-medium text-white">Create</button>
            </div>
            
        </form>

    </div>
</template>

<script>

export default {
    
    methods: {
    submitForm() {
      const imageInput = this.$refs.imageInput;
      const selectedFile = imageInput.files[0];

      if (selectedFile) {
        // You can now work with the selectedFile, e.g., upload it to a server or display it.
        console.log('Selected file:', selectedFile);

        // Reset the file input if needed
        imageInput.value = '';
      }
    },
    }
  
}

</script>