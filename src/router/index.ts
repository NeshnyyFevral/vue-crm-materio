import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  /* PROTECTED PAGES */

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
      ],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    },
    ],
  });
}
