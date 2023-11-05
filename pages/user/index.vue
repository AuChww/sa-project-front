<template>
    <h1>Users</h1>

    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <div class="mx-8 my-2 border p-4 rounded-xl hover:bg-green-200" v-for="user in users" :key="user.id">
            <NuxtLink class="hover:text-blue-500 hover:font-bold" :to="`/user/${user.id}`">
                {{ user.name }}
                {{ user.email }}
            </NuxtLink>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const { data: users, pending } = await useMyFetch<any>("user", {})
</script>