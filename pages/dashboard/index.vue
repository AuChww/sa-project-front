<template>
    <div>
        <div v-if="!auth.isLogin">
            <Nuxt-Link to="/login">Login</Nuxt-Link>
        </div>
        <div class="flex" v-else>
            <div class="px-4 py-2">Welcome, {{ auth.user.name }} {{ auth.user.email }}</div>
            <button class="inline-block px-4 py-2 bg-blue-300 hover:bg-blue-400" @click="onLogout">
                Logout
            </button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore()

async function onLogout() {
  const { data: response, error } = await useMyFetch<any>('auth/logout', {
    method: 'POST'
  })
  if (response.value !== null) {
    auth.clear()
    await navigateTo('/login')
  }
}
</script>
  