import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLogin) {

    if (to.name !== 'login') {
      return navigateTo('/login');
    }
  }


  function isAllowedAccess(checkRole, routeName) {
    if (routeName === 'admin-create-staff' && (checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'admin-product' && (checkRole === 'Admin')) {
      return true;      
    } else if (routeName === 'admin-report-check' && (checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'product-product-add' && (checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'product-product-check' && (checkRole === 'Delivery')) {
      return true;
    } else if (routeName === 'order' && (checkRole === 'Audit' || checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'order-refund' && (checkRole === 'Audit' || checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'order-order-status' && (checkRole === 'Customer' || checkRole === 'Admin')) {
      return true;
    } else if (routeName === 'order-refund-check' && (checkRole === 'Audit' || checkRole === 'Admin')) {
      return true;
    return false;
  }

  console.log(to.name, authStore.checkRole, authStore.isLogin);

  if (process.client) {
    if (!authStore.isLogin) {
      sessionStorage.setItem('preLoginRoute', to.fullPath);

      if (to.name !== 'login') {
        console.log(to.name);
        return navigateTo('/auth/login');
      }
    } else {
      if (!isAllowedAccess(authStore.checkRole, to.name)) {
        console.log(to.name, authStore.checkRole, authStore.isLogin)
        return navigateTo('/404Page');

      }
    }

    console.log(to.name, authStore.checkRole, authStore.isLogin);
  }

}

});