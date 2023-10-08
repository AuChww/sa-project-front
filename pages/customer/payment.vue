<template>
    <Navbar />
    <div class="flex items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">

    <div class="mt-4 py-2 text-xs sm:mt-0 sm:mx-auto sm:text-base">
        <div class="relative">
        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-8">     

            <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            </a>
            <span class="font-semibold text-gray-900">Shop</span>
            </li>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            </a>
            <span class="font-semibold text-gray-900">Shipping</span>
            </li>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4 animate-bounce">
                <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">3</a>
            <span class="font-semibold text-gray-500">Payment</span>
            </li>

        </ul>
        </div>
    </div>
    </div>

    <div class="mt-4 text-center">
        <div class="mx-auto items-center">
            <img :src="image" />
        </div>

        <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mx-20 bg-gray-50 w-80 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input type="file" id="image" ref="imageInput" accept="image/*" />
            </div>
            <!-- Add other form fields if needed -->
            <div>
                <button type="submit" class="mt-2 w-40 rounded-md bg-blue-500 px-6 py-3 font-medium text-white">Submit</button>
            </div>
        </form>

    </div>

</template>

<script>
import image from "/assets/image/qr-payment.jpg"

export default {
    data: function () {
        return {
        image: image
        }
    },
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