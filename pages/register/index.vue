<template>
  <Navbar />
  <!-- register only customer -->
  <div class="flex w-full h-full flex-col justify-center px-6 py-16 lg:px-8 z-10 bg-gradient-to-r
        from-green-500
        via-blue-500
        to-purple-500
        background-animate">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="relative mx-auto h-10 w-10 animate-bounce">
                <div class="mx-auto h-12 w-12 rounded-full bg-white"></div>
                <span class="absolute flex h-7 w-7 animate-spin">
                    <span class="h-6 w-6 rounded-full bg-green-400"></span>
                </span>
            </div>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Let's get your Wait4Stats account
        !
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md"> <!-- Increased max-w for a wider form -->

      <form @submit.prevent="onSubmit()" class="space-y-6" action="#" method="POST">

        <!-- First Column -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

          <!-- Column 1 -->
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-white">Email</label>
            <input v-model="formData.email" id="email" name="email" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>

          <!-- Column 2 -->
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
            <input v-model="formData.username" id="username" name="username" type="text" autocomplete="username" required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <!-- Second Column -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Column 1 -->
          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-white">Full Name</label>
            <input v-model="formData.name" id="name" name="name" type="text" autocomplete="name" required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>

          <!-- Column 2 -->
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-white">Address</label>
            <input v-model="formData.address" id="address" name="address" type="text" autocomplete="address" required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <!-- Third Column: Password and Confirm Password -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Column 1 -->
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
            <input v-model="formData.password" id="password" name="password" type="password" autocomplete="new-password"
              required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>

          <!-- Column 2 -->
          <div>
            <label for="password_confirmation" class="block text-sm font-medium leading-6 text-white">Password
              Confirm</label>
            <input v-model="formData.password_confirmation" id="password_confirmation" name="password_confirmation"
              type="password" autocomplete="new-password" required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <p class="text-red-600" v-if="formErrors.errors">{{ formErrors.errors }}</p>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-blue-400 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
        </div>

      </form>

      <p class="mt-8 mb-32 text-center text-sm text-white">
        Already had an account?
        <router-link to="/login" class="font-semibold leading-6 text-blue-200 hover:text-blue-100">Sign
          in</router-link>
        or
        <router-link to="/" class="font-semibold leading-6 text-blue-200 hover:text-blue-100">Back</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const formData = reactive({
  email: '',
  name: '',
  username: '',
  address: '',
  password: '',
  password_confirmation: ''
})

const formErrors = ref({
  errors: null
})

async function onSubmit() {
  // Reset form errors
  formErrors.value.errors = null

  // Validate email
  if (!formData.email || !formData.email.trim()) {
    formErrors.value.errors = 'Email is required'
    return
  }

  // Validate username
  if (!formData.username || !formData.username.trim()) {
    formErrors.value.errors = 'Username is required'
    return
  }

  // Validate password
  if (!formData.password || formData.password.length < 6) {
    formErrors.value.errors = 'Password must be at least 6 characters long'
    return
  }

  // Validate password confirmation
  if (formData.password !== formData.password_confirmation) {
    formErrors.value.errors = 'Password and password confirmation do not match'
    return
  }

  // Other validations as needed

  const { data: response, error } = await useMyFetch<any>(
    'register',
    {
      method: 'POST',
      body: formData
    }
  )

  if (response.value !== null) {
    await navigateTo(`/login`)
  } else {
    console.log(error)
    const { message } = error.value!.data
    formErrors.value.errors = message
  }
}
</script>