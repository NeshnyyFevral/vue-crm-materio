import { createRouter as _createRouter, createWebHistory } from 'vue-router';

const BASE = '/vue-crm-materio';
export const Routes = {
  /* PROTECTED PAGES */
  CRM: 'crm',

  COMPONENTS: 'components',
  COMPONENTS_BUTTON: 'components/button',
  COMPONENTS_CHIP: 'components/chip',
  COMPONENTS_AVATAR: 'components/avatar',
  COMPONENTS_ALERT: 'components/alert',
  COMPONENTS_ICON_BUTTON: 'components/icon-button',
  COMPONENTS_DIALOG: 'components/dialog',
  COMPONENTS_ACCORDION: 'components/accordion',
  COMPONENTS_TABLE: 'components/table',

  FORM_COMPONENTS: 'form-components',
  FORM_COMPONENTS_TEXT_FIELD: 'form-components/text-field',
  FORM_COMPONENTS_CHECKBOX: 'form-components/checkbox',
  FORM_COMPONENTS_SWITCH: 'form-components/switch',
  FORM_COMPONENTS_SELECT: 'form-components/select',
  FORM_COMPONENTS_RADIO: 'form-components/radio',

  TYPOGRAPHY: 'typography',
  TYPOGRAPHY_HEADERS: 'typography/headers',
  TYPOGRAPHY_TEXTS: 'typography/texts',

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
        component: () => import('@/views/protected/CRMPage.vue'),
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
        }],
      }],
    }, {
      path: '/:pathMatch(.*)*',
      name: Routes.NOT_FOUND,
      component: () => import('@/views/public/NotFoundPage.vue'),
    }],
  });
}
