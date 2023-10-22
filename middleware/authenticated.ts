import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // Check if the user is authenticated
  if (!authStore.isLogin) {
    // Check if the route the user is trying to access is not the login route to prevent infinite redirection
    if (to.name !== 'login') {
      return navigateTo('/login'); // Redirect to the login page
    }
  }
});
