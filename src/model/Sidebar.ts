// import CardsIcon from '@public/assets/icons/sidebar/cards.svg';
// import UserIcon from '@public/assets/icons/sidebar/user.svg';
import ComponentsIcon from '@public/assets/icons/sidebar/components.svg';
import DashboardsIcon from '@public/assets/icons/sidebar/dashboards.svg';
// import InvoiceIcon from '@public/assets/icons/sidebar/invoice.svg';
// import PagesIcon from '@public/assets/icons/sidebar/pages.svg';
import TypographyIcon from '@public/assets/icons/sidebar/typography.svg';

import { Routes } from '@/router';

export interface SidebarList {
  title: string;
  route: any;
}

export interface SidebarGroup {
  title: string;
  icon: any;
  list: SidebarList[];
}

export interface Sidebar {
  title: string;
  group: SidebarGroup[];
}

export default [
  {
    title: '',
    group: [
      {
        title: 'Dashboards',
        icon: DashboardsIcon,
        list: [
          { title: 'CRM', route: { name: Routes.CRM } },
          { title: 'Analytics', route: { name: Routes.ANALYTICS } },
          /* { title: 'eCommerce', route: {} }, */
        ],
      },
    ],
  },
  /* {
    title: 'apps and pages',
    group: [
      {
        title: 'Pages',
        icon: PagesIcon,
        list: [
          { title: 'Preview', route: { } },
          { title: 'Knowledge Base', route: {} },
          { title: 'Account Setting', route: {} },
          { title: 'Pricing', route: {} },
          { title: 'FAQ', route: {} },
        ],
      },
      {
        title: 'Invoice',
        icon: InvoiceIcon,
        list: [
          { title: 'List', route: {} },
          { title: 'Edit', route: {} },
          { title: 'Add', route: {} },
        ],
      },
      {
        title: 'User',
        icon: UserIcon,
        list: [
          { title: 'User list', route: {} },
          { title: 'User view', route: {} },
          { title: 'Email', route: {} },
        ],
      },
    ],
  }, */
  {
    title: 'user interface',
    group: [
      {
        title: 'Typography',
        icon: TypographyIcon,
        list: [
          { title: 'Headers', route: { name: Routes.TYPOGRAPHY_HEADERS } },
          { title: 'Texts', route: { name: Routes.TYPOGRAPHY_TEXTS } },
        ],
      },
      {
        title: 'Components',
        icon: ComponentsIcon,
        list: [
          { title: 'Accordion', route: { name: Routes.COMPONENTS_ACCORDION } },
          { title: 'Alert', route: { name: Routes.COMPONENTS_ALERT } },
          { title: 'Avatar', route: { name: Routes.COMPONENTS_AVATAR } },
          { title: 'Badge', route: { name: Routes.COMPONENTS_BADGE } },
          { title: 'Button', route: { name: Routes.COMPONENTS_BUTTON } },
          { title: 'Chip', route: { name: Routes.COMPONENTS_CHIP } },
          { title: 'Dialog', route: { name: Routes.COMPONENTS_DIALOG } },
          { title: 'Icon button', route: { name: Routes.COMPONENTS_ICON_BUTTON } },
          { title: 'Menu', route: { name: Routes.COMPONENTS_MENU } },
          { title: 'Pagination', route: { name: Routes.COMPONENTS_PAGINATION } },
          { title: 'Table', route: { name: Routes.COMPONENTS_TABLE } },
          { title: 'Timeline', route: { name: Routes.COMPONENTS_TIMELINE } },
          { title: 'Tooltip', route: { name: Routes.COMPONENTS_TOOLTIP } },
        ],
      },
      {
        title: 'Form components',
        icon: ComponentsIcon,
        list: [
          { title: 'Checkbox', route: { name: Routes.FORM_COMPONENTS_CHECKBOX } },
          { title: 'File uploader', route: { name: Routes.FORM_COMPONENTS_FILE_UPLOADER } },
          { title: 'Radio', route: { name: Routes.FORM_COMPONENTS_RADIO } },
          { title: 'Select', route: { name: Routes.FORM_COMPONENTS_SELECT } },
          { title: 'Switch', route: { name: Routes.FORM_COMPONENTS_SWITCH } },
          { title: 'Textarea', route: { name: Routes.FORM_COMPONENTS_TEXTAREA } },
          { title: 'Text field', route: { name: Routes.FORM_COMPONENTS_TEXT_FIELD } },
        ],
      },
    ],
  },
] as Sidebar[];
