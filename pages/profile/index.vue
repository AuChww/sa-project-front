<template>
    <!-- all roles -->
    <Navbar />
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div style="height: 600px; border"
            class="mx-4 mb-28 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="rounded-t-lg h-40 overflow-hidden">
                <img class="object-cover object-top w-full"
                    src='https://t3.ftcdn.net/jpg/05/11/25/36/360_F_511253627_zuzpapnIVQueMx4eSL1ilAoH61OBgj0C.jpg'
                    alt='Mountain'>
            </div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img class="object-cover object-center h-32"
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                    alt='Woman looking front'>
            </div>
            <div class="text-center">
                <div class="font-semibold text-3xl">{{ auth.user.name }}</div>
                <div class="font-semibold text-sm text-gray-600">{{ auth.user.username }}</div>

                <div class="font-semibold mt-4 text-m">{{ auth.user.role }}</div>
                <div class="font-semibold mt-2 text-m">{{ auth.user.address }}</div>

                <div class="p-2 my-4 mt-4 mx-4 bg-red-500 animate-pulse items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert">
                    <span
                        class="flex rounded-full animate-pulse mx-2 bg-white text-red-500 duration-100 uppercase px-3 text-xl font-bold mr-3">!</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Please , Add Your Bank
                    </span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </div>
            </div>

            <div class="p-4 border-t mx-8 mt-2 flex justify-center">
                <router-link to="profile-edit"
                    class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                    <span
                        class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative">Edit Profile</span>
                </router-link>
            </div>

        </div>
        <div style="height: 600px; border"
            class="px-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="mt-4">
                <div class="px-20 text-2xl mb-4 text-gray-700 font-semibold">
                    Payment History
                </div>
            </div>
            <div
                class="overflow-y-auto px-4 py-2 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-700 shadow-xl rounded-lg text-black">
                <div>
                    <div class="px-8 py-6 justify-between my-2 bg-white w-72 mx-auto">
                        <div class="font-semibold text-lg">Order Id : </div>
                        <div class="text-gray-600 text-xs">Date : </div>
                        <div class="text-gray-600 text-xs">Customer : </div>
                        <div class="mt-4 mb-2 font-semibold text-md">
                            Products :
                        </div>
                        <div class="font-semi text-right grid grid-cols-3">
                            <div class="text-right text-sm font-semi">
                                name
                            </div>
                            <div class="text-right text-sm font-semi">
                                amount
                            </div>
                            <div class="text-right text-sm font-semi">
                                price
                            </div>
                        </div>
                        <div class="font-semi mt-2 text-right grid grid-cols-3">
                            <div class="text-right text-sm font-semi">
                            </div>
                            <div class="text-right text-sm font-semibold underline">
                                Total
                            </div>
                            <div class="text-right text-sm font-semi">
                                price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore()

definePageMeta({
    middleware: 'authenticated'
})

</script>

<style scoped>
.border {
    width: 200px;
    height: 1000px;
}
</style>
