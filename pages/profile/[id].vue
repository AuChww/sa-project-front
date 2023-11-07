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
                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    alt='Woman looking front'>
            </div>
            <div class="text-center">
                <div class="font-semibold text-3xl">{{ user.name }}</div>
                <div class="font-semibold text-sm text-gray-600">{{ user.username }}</div>

                <div class="font-semibold mt-4 text-m">{{ user.role }}</div>
                <div class="font-semibold text-m">{{ auth.user.bank }}</div>
                <div class="font-semibold text-m">{{ auth.user.bank_number }}</div>

                <div class="font-semibold mt-2 text-m">{{ user.address }}</div>

            </div>
            
            <div class="p-4 border-t mx-8 mt-20 flex justify-center">
                
            </div>

        </div>
        <div style="height: 600px; border"
            class="px-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900">
            <div class="mt-4">
                <div class="px-20 text-2xl mb-4 text-gray-700 font-semibold">
                    Payment History
                </div>
            </div>
            <div style="height: 520px; border"
                class="overflow-y-auto px-4 py-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-700 shadow-xl rounded-lg text-black">
                <div>
                    <div v-for="order in user.orders" :key="order.id">
                        <div v-if="order.status === 'Preparing' || order.status === 'Packing' || order.status === 'resentPending' || order.status === 'Delivering' || order.status === 'CompleteDelivery'"
                            class="px-8 py-2 justify-between my-2 bg-white w-72 mx-auto">
                            <div class="font-semibold text-lg">Order ID : {{ order.id }}</div>
                            <div
                                class="text-sm mt-2 hover:text-yellow-500 duration-200 text-gray-800 dark:text-blue-800">
                                <NuxtLink :to="`/bill/${order.id}`">
                                    <div class="underline">Show more</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup type="ts">

const route = useRoute();
const { data: user, error } = await useMyFetch(`user/${route.params.id}`, {});
const { data: specificOrder } = await useMyFetch(`showOrderSpecific/${route.params.id}`, {});
// const { data: specificOrder } = await useMyFetch(`showOrderSpecific/${auth.user.id}`, {});

if (user.value === null) {
    const { statusCode, statusMessage } = error.value;
    console.log(statusCode, statusMessage);
    if (statusCode === 404) {
        await navigateTo("/users");
    }
} else {
    console.log(user.value);
}
</script>
  