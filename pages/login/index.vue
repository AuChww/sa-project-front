<template>
    <Navbar />

    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
        <div
            class="mx-auto relative my-4 flex px-80 h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
            <div class="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="relative mx-auto h-10 w-10 animate-bounce">
                    <div class="mx-auto h-12 w-12 rounded-full bg-blue-500"></div>
                    <span class="absolute flex h-7 w-7 animate-spin">
                        <span class="h-6 w-6 rounded-full bg-green-400"></span>
                    </span>
                </div>
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Sign in to your
                    account
                </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" @submit.prevent="onSubmit()">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-black">Email</label>
                        <div class="mt-2">
                            <input id="email" v-model="formData.email" name="email" type="email" autocomplete="email"
                                class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-blue-500 hover:text-blue-400">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input id="password" v-model="formData.password" name="password" type="password"
                                autocomplete="current-password"
                                class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="text-red-600" v-if="errorMessage">{{ errorMessage }}</div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                    </div>
                </form>


                <p class="mt-10 mb-28 text-center text-sm text-black">
                    Don't have an account?
                    <router-link to="/register" class="font-semibold leading-6 text-blue-500 hover:text-blue-100">Sign
                        up</router-link>
                        or
                    <router-link to="/" class="font-semibold leading-6 text-blue-500 hover:text-blue-100">Back</router-link>
                </p>

            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

import { useAuthStore } from "~/stores/useAuthStore"

const auth = await useAuthStore()
const errorMessage = ref<string | undefined>("")
const formData = reactive({ email: "", password: "" })

async function onSubmit() {
    const { data: response, error } = await useMyFetch<any>('auth/login', {
        method: 'POST',
        body: formData
    })
    if (response.value !== null) {
        const { access_token, token_type } = response.value
        if (access_token !== "") {
            auth.setNewToken(access_token)
            const { data: user, error } = await useMyFetch<any>('auth/me', {
                method: 'POST'
            })
            if (user.value !== null) {
                auth.setUser(user.value.name, user.value.email, user.value.role, user.value.username, user.value.address, user.value.id, user.value.bank, user.value.bank_number, user.value.phone)
                await navigateTo('/profile')
            } else {
                auth.clear()
                errorMessage.value = "Please try again."
            }
        }

    } else {
        if (error.value?.response?.status === 401) {
            // Unauthorized (username and password don't match)
            errorMessage.value = "Username and password do not match our records."
        } else if (error.value?.response?.status === 422) {
            // Unprocessable Entity (e.g., validation error)
            errorMessage.value = "There was an issue with your submission. Please check your input and try again."
        } else {
            errorMessage.value = error.value?.data.message
        }
    }
}
</script>

<style>
.background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;
}

@keyframes AnimationName {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}
</style>

