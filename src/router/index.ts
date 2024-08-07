import { createRouter as _createRouter, createWebHistory } from 'vue-router';

const BASE = '/vue-crm-materio';
export const Routes = {
  /* PROTECTED PAGES */
  CRM: 'crm',
  ANALYTICS: 'analytics',

  COMPONENTS: 'components',
  COMPONENTS_BUTTON: 'components/button',
  COMPONENTS_CHIP: 'components/chip',
  COMPONENTS_AVATAR: 'components/avatar',
  COMPONENTS_ALERT: 'components/alert',
  COMPONENTS_ICON_BUTTON: 'components/icon-button',
  COMPONENTS_DIALOG: 'components/dialog',
  COMPONENTS_ACCORDION: 'components/accordion',
  COMPONENTS_TABLE: 'components/table',
  COMPONENTS_BADGE: 'components/badge',
  COMPONENTS_PAGINATION: 'components/pagination',
  COMPONENTS_MENU: 'components/menu',
  COMPONENTS_TOOLTIP: 'components/tooltip',
  COMPONENTS_TIMELINE: 'components/timeline',
  COMPONENTS_SKELETON: 'components/skeleton',

  FORM_COMPONENTS: 'form-components',
  FORM_COMPONENTS_TEXT_FIELD: 'form-components/text-field',
  FORM_COMPONENTS_TEXTAREA: 'form-components/textarea',
  FORM_COMPONENTS_CHECKBOX: 'form-components/checkbox',
  FORM_COMPONENTS_SWITCH: 'form-components/switch',
  FORM_COMPONENTS_SELECT: 'form-components/select',
  FORM_COMPONENTS_RADIO: 'form-components/radio',
  FORM_COMPONENTS_FILE_UPLOADER: 'form-components/file-uploader',

  TYPOGRAPHY: 'typography',
  TYPOGRAPHY_HEADERS: 'typography/headers',
  TYPOGRAPHY_TEXTS: 'typography/texts',

  USER_PROFILE: 'user-profile',
  USER_PROFILE_PROFILE: 'user-profile/profile',
  USER_PROFILE_TEAMS: 'user-profile/teams',
  USER_PROFILE_PROJECTS: 'user-profile/projects',
  USER_PROFILE_CONNECTIONS: 'user-profile/connections',

  OTHER_PRICING: 'pricing',

  OTHER_FAQ: 'faq',
  OTHER_FAQ_DELIVERY: 'faq/delivery',
  OTHER_FAQ_ORDERS: 'faq/orders',
  OTHER_FAQ_PAYMENT: 'faq/payment',
  OTHER_FAQ_RETURN: 'faq/return',
  OTHER_FAQ_SERVICES: 'faq/services',

  /* PUBLIC PAGES */
  LOGIN: 'login',
  NOT_FOUND: '404',
};

export default function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [{
      path: `${BASE}/${Routes.LOGIN}`,
      name: Routes.LOGIN,
      component: () => import('@/views/public/LoginPage.vue'),
    }, {
      path: `${BASE}/`,
      name: 'default',
      component: () => import('@/components/layout/Layout.vue'),
      redirect: { name: Routes.CRM },
      children: [{
        path: `${BASE}/${Routes.CRM}`,
        name: Routes.CRM,
        component: () => import('@/views/protected/dashboards/CrmPage.vue'),
      }, {
        path: `${BASE}/${Routes.ANALYTICS}`,
        name: Routes.ANALYTICS,
        component: () => import('@/views/protected/dashboards/AnalyticsPage.vue'),
      }, {
        path: `${BASE}/${Routes.OTHER_PRICING}`,
        name: Routes.OTHER_PRICING,
        component: () => import('@/views/protected/other/OtherPricingPage.vue'),
      }, {
        path: `${BASE}/${Routes.OTHER_FAQ}`,
        name: Routes.OTHER_FAQ,
        component: () => import('@/views/protected/other/faq/OtherFAQPage.vue'),
        redirect: { name: Routes.OTHER_FAQ_PAYMENT },
        children: [{
          path: `${BASE}/${Routes.OTHER_FAQ_PAYMENT}`,
          name: Routes.OTHER_FAQ_PAYMENT,
          component: () => import('@/views/protected/other/faq/OtherFAQPayment.vue'),
        }, {
          path: `${BASE}/${Routes.OTHER_FAQ_DELIVERY}`,
          name: Routes.OTHER_FAQ_DELIVERY,
          component: () => import('@/views/protected/other/faq/OtherFAQDelivery.vue'),
        }, {
          path: `${BASE}/${Routes.OTHER_FAQ_RETURN}`,
          name: Routes.OTHER_FAQ_RETURN,
          component: () => import('@/views/protected/other/faq/OtherFAQReturn.vue'),
        }, {
          path: `${BASE}/${Routes.OTHER_FAQ_ORDERS}`,
          name: Routes.OTHER_FAQ_ORDERS,
          component: () => import('@/views/protected/other/faq/OtherFAQOrders.vue'),
        }, {
          path: `${BASE}/${Routes.OTHER_FAQ_SERVICES}`,
          name: Routes.OTHER_FAQ_SERVICES,
          component: () => import('@/views/protected/other/faq/OtherFAQServices.vue'),
        }],
      }, {
        path: `${BASE}/${Routes.COMPONENTS}`,
        name: Routes.COMPONENTS,
        component: () => import('@/views/protected/components/ComponentsPage.vue'),
        redirect: { name: Routes.COMPONENTS_BUTTON },
        children: [{
          path: `${BASE}/${Routes.COMPONENTS_BUTTON}`,
          name: Routes.COMPONENTS_BUTTON,
          component: () => import('@/views/protected/components/ComponentsButtonPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_CHIP}`,
          name: Routes.COMPONENTS_CHIP,
          component: () => import('@/views/protected/components/ComponentsChipPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_AVATAR}`,
          name: Routes.COMPONENTS_AVATAR,
          component: () => import('@/views/protected/components/ComponentsAvatarPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_ALERT}`,
          name: Routes.COMPONENTS_ALERT,
          component: () => import('@/views/protected/components/ComponentsAlertPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_ICON_BUTTON}`,
          name: Routes.COMPONENTS_ICON_BUTTON,
          component: () => import('@/views/protected/components/ComponentsIconButtonPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_DIALOG}`,
          name: Routes.COMPONENTS_DIALOG,
          component: () => import('@/views/protected/components/ComponentsDialogPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_ACCORDION}`,
          name: Routes.COMPONENTS_ACCORDION,
          component: () => import('@/views/protected/components/ComponentsAccordionPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_TABLE}`,
          name: Routes.COMPONENTS_TABLE,
          component: () => import('@/views/protected/components/ComponentsTablePage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_BADGE}`,
          name: Routes.COMPONENTS_BADGE,
          component: () => import('@/views/protected/components/ComponentsBadgePage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_PAGINATION}`,
          name: Routes.COMPONENTS_PAGINATION,
          component: () => import('@/views/protected/components/ComponentsPaginationPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_MENU}`,
          name: Routes.COMPONENTS_MENU,
          component: () => import('@/views/protected/components/ComponentsMenuPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_TOOLTIP}`,
          name: Routes.COMPONENTS_TOOLTIP,
          component: () => import('@/views/protected/components/ComponentsTooltipPage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_TIMELINE}`,
          name: Routes.COMPONENTS_TIMELINE,
          component: () => import('@/views/protected/components/ComponentsTimelinePage.vue'),
        }, {
          path: `${BASE}/${Routes.COMPONENTS_SKELETON}`,
          name: Routes.COMPONENTS_SKELETON,
          component: () => import('@/views/protected/components/ComponentsSkeletonPage.vue'),
        }],
      }, {
        path: `${BASE}/${Routes.TYPOGRAPHY}`,
        name: Routes.TYPOGRAPHY,
        component: () => import('@/views/protected/typography/TypographyPage.vue'),
        redirect: { name: Routes.TYPOGRAPHY_HEADERS },
        children: [{
          path: `${BASE}/${Routes.TYPOGRAPHY_HEADERS}`,
          name: Routes.TYPOGRAPHY_HEADERS,
          component: () => import('@/views/protected/typography/TypographyHeadersPage.vue'),
        }, {
          path: `${BASE}/${Routes.TYPOGRAPHY_TEXTS}`,
          name: Routes.TYPOGRAPHY_TEXTS,
          component: () => import('@/views/protected/typography/TypographyTextsPage.vue'),
        }],
      }, {
        path: `${BASE}/${Routes.USER_PROFILE}`,
        name: Routes.USER_PROFILE,
        component: () => import('@/views/protected/user-profile/UserProfilePage.vue'),
        redirect: { name: Routes.USER_PROFILE_PROFILE },
        children: [{
          path: `${BASE}/${Routes.USER_PROFILE_PROFILE}`,
          name: Routes.USER_PROFILE_PROFILE,
          component: () => import('@/views/protected/user-profile/UserProfileProfilePage.vue'),
        }, {
          path: `${BASE}/${Routes.USER_PROFILE_TEAMS}`,
          name: Routes.USER_PROFILE_TEAMS,
          component: () => import('@/views/protected/user-profile/UserProfileTeamsPage.vue'),
        }, {
          path: `${BASE}/${Routes.USER_PROFILE_PROJECTS}`,
          name: Routes.USER_PROFILE_PROJECTS,
          component: () => import('@/views/protected/user-profile/UserProfileProjectsPage.vue'),
        }, {
          path: `${BASE}/${Routes.USER_PROFILE_CONNECTIONS}`,
          name: Routes.USER_PROFILE_CONNECTIONS,
          component: () => import('@/views/protected/user-profile/UserProfileConnectionsPage.vue'),
        }],
      }, {
        path: `${BASE}/${Routes.FORM_COMPONENTS}`,
        name: Routes.FORM_COMPONENTS,
        component: () => import('@/views/protected/form-components/FormComponentsPage.vue'),
        redirect: { name: Routes.FORM_COMPONENTS_TEXT_FIELD },
        children: [{
          path: `${BASE}/${Routes.FORM_COMPONENTS_TEXT_FIELD}`,
          name: Routes.FORM_COMPONENTS_TEXT_FIELD,
          component: () => import('@/views/protected/form-components/FormComponentsTextFieldPage.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_CHECKBOX}`,
          name: Routes.FORM_COMPONENTS_CHECKBOX,
          component: () => import('@/views/protected/form-components/FormComponentsCheckbox.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_SWITCH}`,
          name: Routes.FORM_COMPONENTS_SWITCH,
          component: () => import('@/views/protected/form-components/FormComponentsSwitchPage.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_SELECT}`,
          name: Routes.FORM_COMPONENTS_SELECT,
          component: () => import('@/views/protected/form-components/FormComponentsSelectPage.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_RADIO}`,
          name: Routes.FORM_COMPONENTS_RADIO,
          component: () => import('@/views/protected/form-components/FormComponentsRadioPage.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_TEXTAREA}`,
          name: Routes.FORM_COMPONENTS_TEXTAREA,
          component: () => import('@/views/protected/form-components/FormComponentsTextareaPage.vue'),
        }, {
          path: `${BASE}/${Routes.FORM_COMPONENTS_FILE_UPLOADER}`,
          name: Routes.FORM_COMPONENTS_FILE_UPLOADER,
          component: () => import('@/views/protected/form-components/FormComponentsFileUploaderPage.vue'),
        }],
      }],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    }],
  });
}
