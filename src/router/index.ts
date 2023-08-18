import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  /* PROTECTED PAGES */
  CRM: 'crm',

  COMPONENTS: 'components',
  COMPONENTS_BUTTON: 'components/button',
  COMPONENTS_CHIP: 'components/chip',
  COMPONENTS_AVATAR: 'components/avatar',
  COMPONENTS_ALERT: 'components/alert',

  TYPOGRAPHY: 'typography',
  TYPOGRAPHY_HEADERS: 'typography/headers',
  TYPOGRAPHY_TEXTS: 'typography/texts',
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
        }, {
          path: `/${Routes.COMPONENTS_CHIP}`,
          name: Routes.COMPONENTS_CHIP,
          component: () => import('@/views/protected/components/ComponentsChipPage.vue'),
        }, {
          path: `/${Routes.COMPONENTS_AVATAR}`,
          name: Routes.COMPONENTS_AVATAR,
          component: () => import('@/views/protected/components/ComponentsAvatarPage.vue'),
        }, {
          path: `/${Routes.COMPONENTS_ALERT}`,
          name: Routes.COMPONENTS_ALERT,
          component: () => import('@/views/protected/components/ComponentsAlertPage.vue'),
        }],
      }, {
        path: `/${Routes.TYPOGRAPHY}`,
        name: Routes.TYPOGRAPHY,
        component: () => import('@/views/protected/typography/TypographyPage.vue'),
        redirect: { name: Routes.TYPOGRAPHY_HEADERS },
        children: [{
          path: `/${Routes.TYPOGRAPHY_HEADERS}`,
          name: Routes.TYPOGRAPHY_HEADERS,
          component: () => import('@/views/protected/typography/TypographyHeadersPage.vue'),
        }, {
          path: `/${Routes.TYPOGRAPHY_TEXTS}`,
          name: Routes.TYPOGRAPHY_TEXTS,
          component: () => import('@/views/protected/typography/TypographyTextsPage.vue'),
        }],
      }],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    }],
  });
}
