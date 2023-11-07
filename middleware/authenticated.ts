import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLogin) {

    if (to.name !== 'login') {
      return navigateTo('/login');
    }
  }


  function isAllowedAccess(userRole, routeName) {
    if (routeName === 'admin-create-staff' && (userRole === 'Admin')) {
      return true;
    } else if (routeName === 'admin-product' && (userRole === 'Admin')) {
      return true;      
    } else if (routeName === 'admin-report-check' && (userRole === 'Admin')) {
      return true;
    } else if (routeName === 'product-product-add' && (userRole === 'Admin')) {
      return true;
    } else if (routeName === 'product-product-check' && (userRole === 'Delivery')) {
      return true;
    } else if (routeName === 'order' && (userRole === 'Audit' || userRole === 'Admin')) {
      return true;
    } else if (routeName === 'order-refund-check' && (userRole === 'Audit' || userRole === 'Admin')) {
      return true;}
    return false;
  }

  console.log(to.name, authStore.userRole, authStore.isLogin);

  if (process.client) {
    if (!authStore.isLogin) {
      sessionStorage.setItem('preLoginRoute', to.fullPath);

      if (to.name !== 'login') {
        console.log(to.name);
        return navigateTo('/auth/login');
      }
    } else {
      if (!isAllowedAccess(authStore.userRole, to.name)) {
        console.log(to.name, authStore.userRole, authStore.isLogin)
        return navigateTo('/404Page');

      }
    }

    console.log(to.name, authStore.userRole, authStore.isLogin);
  }

}

);