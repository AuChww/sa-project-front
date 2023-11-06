
<template>
    <Navbar />
    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
        <div class="mx-40 my-4 mb-36 bg-white shadow-xl rounded-3xl p-8">
            <h2 class="mx-auto font-semibold text-3xl">
                Edit Profile
            </h2>

            <form @submit.prevent="onSubmit()">
                <!-- Upload Picture -->
                <div class="col-span-full">
                    <label for="photo" class="block text-sm font-medium leading-6 text-gray-700"></label>
                    <div class="mt-2 inline-flex items-center gap-x-3">
                        <!-- Conditionally show the SVG or the image preview -->
                        <template v-if="!selectedImage">
                            <svg class="h-32 w-32 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </template>
                        <template v-else>
                            <img :src="profileImagePreview" alt="Profile Image Preview"
                                class="h-20 w-20 object-cover rounded-full">
                        </template>
                    </div>

                    <button for="upload" type="button">
                        <label for="upload"
                            class="bg-gray-700 hover:bg-gray-500 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1">
                            Upload Picture
                        </label>
                        <input type="file" id="upload" class="hidden" @change="handleProfileImageUpload">
                    </button>
                </div>


                <div class="grid grid-cols-3">
                    <div>
                        <!-- Full Name -->
                        <div class="mt-4">
                            <label for="name" class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">
                                Full name
                            </label>
                            <input type="text" id="fullname" class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1" :placeholder="auth.user.name"
                                v-model="formData.name">
                        </div>

                        <!-- Username -->
                        <div>
                            <label for="name" class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">
                                Username
                            </label>
                            <input type="text" id="username" class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1" :placeholder="auth.user.username"
                                v-model="formData.username">
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1" :placeholder="auth.user.email"
                                v-model="formData.email">
                        </div>
                    </div>

                    <div>
                        <!-- Address -->
                        <div>
                            <label for="address"
                                class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-700">
                                Address
                            </label>
                            <input type="text" id="address"
                                class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1  my-0"
                                :placeholder="auth.user.address" v-model="formData.address">
                        </div>
                    </div>

                    <div>
                        <!-- Bank -->
                        <div>
                            <label for="bank"
                                class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-700">Bank
                            </label>
                            <input type="text" id="bank"
                                class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1"
                                :placeholder="auth.user.bank" v-model="formData.bank">
                        </div>

                        <!-- Bank Number -->
                        <div>
                            <label for="bank_number"
                                class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-700">
                                Bank number
                            </label>
                            <input type="text" id="bank_number"
                                class="input-field bg-gray-700 text-white text-lg border border-gray-600 rounded-md rounded px-4 py-1"
                                :placeholder="auth.user.bank_number" v-model="formData.bank_number">
                        </div>

                        <!-- Save and Cancel Buttons -->
                        <div class="mt-20 flex items-center justify-end gap-x-2">
                            <button type="submit"
                                class="submit-button border border-emerald-500 bg-emerald-500 hover:bg-emerald-700 duration-200 text-white text-lg rounded-lg py-2 px-6">Save</button>
                            <router-link to="profile"
                                class="cancel-button border border-red-500 bg-red-500 hover:bg-red-700 duration-200 text-white text-lg rounded-lg py-2 px-4">Cancel</router-link>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

const selectedImage = ref(null);

const profileImagePreview = computed(() => {
    if (selectedImage.value) {
        return URL.createObjectURL(selectedImage.value);
    }
});

function handleProfileImageUpload(event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        selectedImage.value = input.files[0];
    }
}

const auth = useAuthStore();

const formData = ref({
    username: "",
    name: "",
    address: "",
    bank: "",
    bank_number: "",
    email: "",
});

const formErrors = ref({
    errors: null
});

async function onSubmit() {
    const { username, name, address, bank, bank_number, email } = formData.value;
    const data = {
        username,
        name,
        address,
        bank,
        bank_number,
        email,
    };

    // Log the data before sending
    console.log("Data before sending:", data);

    const { data: response, error } = await useMyFetch<any>(
        `user/${auth.user.id}`,
        {
            method: "PUT",
            body: data,
        }
    );

    if (response.value !== null) {
        await navigateTo(`/profile`);
        auth.updateUser(data.name, data.email, data.username, data.address, data.bank, data.bank_number);
    } else {
        console.log(error);
        console.log(data);
        const { message } = error.value!.data;
        formErrors.value.errors = message;
    }
}

onMounted(() => {
    formData.value.username = auth.user.username;
    formData.value.name = auth.user.name;
    formData.value.address = auth.user.address;
    formData.value.bank = auth.user.bank;
    formData.value.bank_number = auth.user.bank_number;
    formData.value.email = auth.user.email;
});

definePageMeta({
    middleware: "authenticated",
});
</script>

