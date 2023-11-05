
<template>
    <Navbar />
    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
        <div class="mx-40 my-4 bg-white shadow-xl rounded-3xl p-8">
            <h2 class="mx-auto font-semibold text-3xl">
                Edit Profile
            </h2>

            <form @submit="submitForm">
                <div class="grid gap-6 mb-6 mt-4 md:grid-cols-2 mx-auto">
                    <!-- change picture -->
                    <div class="col-span-full">
                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-700"></label>
                        <div class="mt-2 flex items-center gap-x-3">
                            <svg class="h-20 w-20 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    clip-rule="evenodd" />
                            </svg>

                            <button for="upload" type="button">
                                <label for="upload"
                                    class="bg-gray-700 hover:bg-gray-500 text-gray-300 py-1 px-2 rounded cursor-pointer">
                                    Upload Picture
                                </label>
                                <input type="file" id="upload" class="hidden">
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <label for="first_name"
                        class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">First name</label>
                    <input type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required :value="auth.user.name">
                </div>
                <div>
                    <label for="address"
                        class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Address</label>
                    <input type="address" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="SCB" required :value="auth.user.address">
                </div>
                <div>
                    <label for="bank"
                        class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Bank</label>
                    <input type="text" id="bank"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="SCB" required :value="auth.user.bank">
                </div>
                <div>
                    <label for="bank_number"
                        class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Bank number</label>
                    <input type="text" id="bank_number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0661105208" required :value="auth.user.bank_number">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Email
                        address</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com" required :value="auth.user.email">
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">Save</button>
                    <router-link to="profile"
                        class="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark-bg-gray-600 dark-hover-bg-gray-700 dark-focus-ring-blue-800">Cancel</router-link>
                </div>

            </form>

        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const auth = useAuthStore();

const imageInputRef = ref(null);
const selectedImage = ref(null);

const submitForm = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data, including the image
    const formData = new FormData();
    formData.append("first_name", auth.user.name);
    formData.append("address",  auth.user.address);
    formData.append("bank", auth.user.bank);
    formData.append("bank_number", auth.user.bank_number);
    formData.append("email", auth.user.email);

    // If an image is selected, append it to the FormData
    if (selectedImage.value) {
        formData.append("profile_image", selectedImage.value);
    }

    // Call your API with useMyFetch and send the formData
    try {
        const response = await useMyFetch("your-api-endpoint", {
            method: "POST", // Change the method to the appropriate HTTP method
            body: formData,
        });

        // Handle the response as needed
        console.log("Response from the server", response);
    } catch (error) {
        console.error("Failed to submit form", error);
    }
};

const handleImageChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];

    // Store the selected image in the ref
    selectedImage.value = file;
};

definePageMeta({
    middleware: "authenticated"
});
</script>
