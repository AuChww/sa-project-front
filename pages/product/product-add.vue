<template>
    <!-- admin -->
    <Navbar />
    <section
        :style="{ 'background-image': 'url(https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg)' }"
        class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all animate-pulse">
                ADD PRODUCT
            </h1>
        </div>
    </section>

    <div class="sm:mx-center mt-4">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mx-12 mt-6 grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Name</label>
                    <input v-model="formData.name" type="text" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Product Name" required>
                </div>
                <div>
                    <label for="category"
                        class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Category</label>
                    <select v-model="formData.category" id="category" name="category" autocomplete="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="CPU">CPU</option>
                        <option value="Main Board">Main Board</option>
                        <option value="GPU">GPU</option>
                        <option value="RAM">RAM</option>
                        <option value="Harddisk">Harddisk</option>
                        <option value="Accessary">Accessary</option>
                        <option value="Gaming Gear">Gaming Gear</option>
                    </select>
                </div>
                <div>
                    <label for="price" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Price</label>
                    <input v-model="formData.price" type="number" id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="$" required>
                </div>
                <div>
                    <label for="quantity" class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Quantity</label>
                    <input v-model="formData.quantity" type="number" id="quantity"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required>
                </div>
            </div>
            <div class="mx-12 mb-6">
                <label for="description"
                    class="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Description</label>
                <input v-model="formData.description" type="description" id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="about this product details" required>
            </div>

            <div class="text-center items-center text-xm mx-12 mt-10">
                <button type="submit"
                    class="mt-2 w-40 text-xl rounded-md bg-blue-500 px-2 py-3 font-medium text-white">Submit</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const formData = reactive({
    name: '',
    category: 'CPU',
    price: 0,
    quantity: 0,
    description: '',
});

const formErrors = ref({
    errors: null,
});

const submitForm = async () => {
    // Create a new FormData object for the form data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('category', formData.category);
    form.append('price', formData.price);
    form.append('quantity', formData.quantity); // Updated to "quantity"
    form.append('description', formData.description);

    try {
        // Send the form data to the server using fetch or your preferred HTTP library
        const response = await fetch('products', {
            method: 'POST',
            body: form,
        });

        if (response.ok) {
            // The request was successful, you can handle the success case here
            await navigateTo(`/login`);
        } else {
            // Handle errors (e.g., display error messages)
            const errorData = await response.json();
            formErrors.errors = errorData.message;
        }

        // Reset the form after submission
        formData.name = '';
        formData.category = 'CPU';
        formData.price = 0;
        formData.quantity = 0; // Updated to "quantity"
        formData.description = '';
    } catch (error) {
        console.error(error);
        formErrors.errors = error.message;
    }
};
</script>
