import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  /* PROTECTED PAGES */
  CRM: 'crm',
  /* PUBLIC PAGES */
  LOGIN: 'login',
  REGISTRATION: 'registration',
  NOT_FOUND: '404',
  RESET_PASSWORD: 'reset-password',
  COMPONENTS: 'components',
  COMPONENTS_BUTTON: 'components/button',
};

export default function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [{
      path: `/${Routes.LOGIN}`,
      name: Routes.LOGIN,
      component: () => import('@/views/public/LoginPage.vue'),
    }, {
      path: '/',
      name: 'default',
      component: () => import('@/components/layout/Layout.vue'),
      redirect: { name: Routes.CRM },
      children: [{
        path: `/${Routes.CRM}`,
        name: Routes.CRM,
        component: () => import('@/views/protected/CRMPage.vue'),
      }, {
        path: `/${Routes.COMPONENTS}`,
        name: Routes.COMPONENTS,
        component: () => import('@/views/protected/components/ComponentsPage.vue'),
        redirect: { name: Routes.COMPONENTS_BUTTON },
        children: [{
          path: `/${Routes.COMPONENTS_BUTTON}`,
          name: Routes.COMPONENTS_BUTTON,
          component: () => import('@/views/protected/components/ComponentsButtonPage.vue'),
        }],
      }],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    }],
  });
}
