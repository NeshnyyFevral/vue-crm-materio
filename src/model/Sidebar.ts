import CardsIcon from '@/assets/icons/sidebarr/cards.svg';
import ComponentsIcon from '@/assets/icons/sidebarr/components.svg';
import DashboardsIcon from '@/assets/icons/sidebarr/dashboards.svg';
import InvoiceIcon from '@/assets/icons/sidebarr/invoice.svg';
import PagesIcon from '@/assets/icons/sidebarr/pages.svg';
import TypographyIcon from '@/assets/icons/sidebarr/typography.svg';
import UserIcon from '@/assets/icons/sidebarr/user.svg';
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
          /* { title: 'Analytics', route: {} },
          { title: 'eCommerce', route: {} }, */
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
          /*  { title: 'Alert', route: {} },
          { title: 'Avatar', route: {} },
          { title: 'Badge', route: {} }, */
          { title: 'Button', route: { name: Routes.COMPONENTS_BUTTON } },
          /* { title: 'Chip', route: {} },
          { title: 'Dialog', route: {} },
          { title: 'Expansion Panel  ', route: {} },
          { title: 'List', route: {} },
          { title: 'Menu', route: {} },
          { title: 'Pagination', route: {} },
          { title: 'Snackbar', route: {} },
          { title: 'Stepper', route: {} },
          { title: 'Tabs', route: {} },
          { title: 'Timeline', route: {} },
          { title: 'Tooltip', route: {} },
          { title: 'Treeview', route: {} }, */
        ],
      },
    ],
  },
] as Sidebar[];
