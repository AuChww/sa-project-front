// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseURL: "http://localhost/api/"
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt','@vueuse/nuxt','@pinia/nuxt','@pinia-plugin-persistedstate/nuxt',
  ],
  devtools: { enabled: true }
})
