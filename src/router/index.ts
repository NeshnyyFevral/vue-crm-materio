import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  /* PROTECTED PAGES */
  CRM: 'crm',
  /* PUBLIC PAGES */
  LOGIN: 'login',
  REGISTRATION: 'registration',
  NOT_FOUND: '404',
  RESET_PASSWORD: 'reset-password',
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
      children: [
        {
          path: Routes.CRM,
          name: Routes.CRM,
          component: () => import('@/views/protected/CRMPage.vue'),
        },
      ],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    },
    ],
  });
}
