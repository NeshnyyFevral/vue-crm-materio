import CardsIcon from '@/assets/icons/sidebar/cards.svg';
import ComponentsIcon from '@/assets/icons/sidebar/components.svg';
import DashboardsIcon from '@/assets/icons/sidebar/dashboards.svg';
import InvoiceIcon from '@/assets/icons/sidebar/invoice.svg';
import PagesIcon from '@/assets/icons/sidebar/pages.svg';
import TypographyIcon from '@/assets/icons/sidebar/typography.svg';
import UserIcon from '@/assets/icons/sidebar/user.svg';
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
          { title: 'Button', route: { name: Routes.COMPONENTS_BUTTON } },
          { title: 'Chip', route: { name: Routes.COMPONENTS_CHIP } },
          { title: 'Avatar', route: { name: Routes.COMPONENTS_AVATAR } },
          { title: 'Alert', route: { name: Routes.COMPONENTS_ALERT } },
        ],
      },
    ],
  },
] as Sidebar[];
