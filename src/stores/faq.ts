import PaymentIcon from '@public/assets/icons/faq/card.svg';
import DeliveryIcon from '@public/assets/icons/faq/delivery.svg';
import OrderIcon from '@public/assets/icons/faq/order.svg';
import ReturnIcon from '@public/assets/icons/faq/return.svg';
import ServiceIcon from '@public/assets/icons/faq/service.svg';
import { defineStore } from 'pinia';
import { shallowRef } from 'vue';

import type { IAccordion } from '@/model/components/basic/VAccordion';
import type { TabsData } from '@/model/components/basic/VTabs';
import { getRandomId } from '@/model/tools/RandomTools';
import { Routes } from '@/router';

enum TabsName {
  PAYMENT = 'Payment',
  DELIVERY = 'Delivery',
  RETURN = 'Return',
  ORDERS = 'Orders',
  SERVICES = 'Services',
}

enum TabsTitle {
  PAYMENT = 'Payment',
  DELIVERY = 'Delivery',
  RETURN = 'Cancellation & Return',
  ORDERS = 'My Orders',
  SERVICES = 'Product & Services',
}

enum TabsDesc {
  PAYMENT = 'Get help with payment',
  DELIVERY = 'Get help with delivery',
  RETURN = 'Get help with cancellation & return',
  ORDERS = 'Order details',
  SERVICES = 'Get help with product & services',
}

export interface IFAQInner {
  icon: any;
  title: string;
  description: string;
  questions: IAccordion[];
}

export const useFAQStore = defineStore('faq', () => {
  const tabs = shallowRef<TabsData[]>([{
    id: getRandomId(),
    name: TabsName.PAYMENT,
    title: TabsTitle.PAYMENT,
    icon: PaymentIcon,
    disabled: false,
    route: Routes.OTHER_FAQ_PAYMENT,
  }, {
    id: getRandomId(),
    name: TabsName.DELIVERY,
    title: TabsTitle.DELIVERY,
    icon: DeliveryIcon,
    disabled: false,
    route: Routes.OTHER_FAQ_DELIVERY,
  }, {
    id: getRandomId(),
    name: TabsName.RETURN,
    title: TabsTitle.RETURN,
    icon: ReturnIcon,
    disabled: false,
    route: Routes.OTHER_FAQ_RETURN,
  }, {
    id: getRandomId(),
    name: TabsName.ORDERS,
    title: TabsTitle.ORDERS,
    icon: OrderIcon,
    disabled: false,
    route: Routes.OTHER_FAQ_ORDERS,
  }, {
    id: getRandomId(),
    name: TabsName.SERVICES,
    title: TabsTitle.SERVICES,
    icon: ServiceIcon,
    disabled: false,
    route: Routes.OTHER_FAQ_SERVICES,
  }]);

  const paymentInner = shallowRef<IFAQInner>({
    icon: PaymentIcon,
    title: TabsTitle.PAYMENT,
    description: TabsDesc.PAYMENT,
    questions: [{
      id: getRandomId(),
      title: 'When is payment taken for my order?',
      inner: 'Payment is taken during the checkout process when you pay for your order. The order number '
        + 'that appears on the confirmation screen indicates payment has been successfully processed.',
    }, {
      id: getRandomId(),
      title: 'How do I pay for my order?',
      inner: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. Our servers encrypt all information submitted to them, '
        + 'so you can be confident that your credit card information will be kept safe and secure.',
    }, {
      id: getRandomId(),
      title: 'What should I do if I\'m having trouble placing an order?',
      inner: 'For any technical difficulties you are experiencing with our website, please contact us at our '
        + 'support portal, or you can call us toll-free at 1-000-000-000, or email us at order@companymail.com',
    }, {
      id: getRandomId(),
      title: 'Which license do I need for an end product that is only accessible to paying users?',
      inner: 'If you have paying users or you are developing any SaaS products then you need an Extended License. '
        + 'For each products, you need a license. You can get free lifetime updates as well.',
    }, {
      id: getRandomId(),
      title: 'Does my subscription automatically renew?',
      inner: 'No, This is not subscription based item.Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. '
        + 'Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps.',
    }],
  });

  const deliveryInner = shallowRef<IFAQInner>({
    icon: DeliveryIcon,
    title: TabsTitle.DELIVERY,
    description: TabsDesc.DELIVERY,
    questions: [{
      id: getRandomId(),
      title: 'How would you ship my order?',
      inner: 'For large products, we deliver your product via a third party logistics company offering you the “room of choice” '
        + 'scheduled delivery service. For small products, we offer free parcel delivery.',
    }, {
      id: getRandomId(),
      title: 'What is the delivery cost of my order?',
      inner: 'The cost of scheduled delivery is $69 or $99 per order, depending on the destination postal code. The parcel delivery is free.',
    }, {
      id: getRandomId(),
      title: 'What to do if my product arrives damaged?',
      inner: 'We will promptly replace any product that is damaged in transit. '
        + 'Just contact our support team, to notify us of the situation within 48 hours of product arrival.',
    }],
  });

  const returnInner = shallowRef<IFAQInner>({
    icon: ReturnIcon,
    title: TabsTitle.RETURN,
    description: TabsDesc.RETURN,
    questions: [{
      id: getRandomId(),
      title: 'Can I cancel my order?',
      inner: 'Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund. '
        + 'Parcel delivery orders cannot be cancelled, however a free return label can be provided upon request.',
    }, {
      id: getRandomId(),
      title: 'Can I return my product?',
      inner: 'You can return your product within 15 days of delivery, by contacting our support team, '
        + 'All merchandise returned must be in the original packaging with all original items.',
    }, {
      id: getRandomId(),
      title: 'Where can I view status of return?',
      inner: 'Locate the item from Your Orders. Select Return/Refund status',
    }],
  });

  const ordersInner = shallowRef<IFAQInner>({
    icon: OrderIcon,
    title: TabsTitle.ORDERS,
    description: TabsDesc.ORDERS,
    questions: [{
      id: getRandomId(),
      title: 'Has my order been successful?',
      inner: 'All successful order transactions will receive an order confirmation email once the order has been processed. '
        + 'If you have not received your order confirmation email within 24 hours, check your junk email or spam folder. '
        + 'Alternatively, log in to your account to check your order summary. If you do not have a account, you can contact '
        + 'our Customer Care Team on 1-000-000-000.',
    }, {
      id: getRandomId(),
      title: 'My Promotion Code is not working, what can I do?',
      inner: 'If you are having issues with a promotion code, please contact us at 1 000 000 000 for assistance.',
    }, {
      id: getRandomId(),
      title: 'How do I track my Orders?',
      inner: 'If you have an account just sign into your account from here and select “My Orders”. If you have a '
        + 'a guest account track your order from here using the order number and the email address.',
    }],
  });

  const servicesInner = shallowRef<IFAQInner>({
    icon: ServiceIcon,
    title: TabsTitle.SERVICES,
    description: TabsDesc.SERVICES,
    questions: [{
      id: getRandomId(),
      title: 'Will I be notified once my order has shipped?',
      inner: 'Yes, We will send you an email once your order has been shipped. This email will contain tracking and order information.',
    }, {
      id: getRandomId(),
      title: 'Where can I find warranty information?',
      inner: 'We are committed to quality products. For information on warranty period and warranty services, visit our Warranty section here.',
    }, {
      id: getRandomId(),
      title: 'How can I purchase additional warranty coverage?',
      inner: 'For the peace of your mind, we offer extended warranty plans that add additional '
        + 'year(s) of protection to the standard manufacturer’s warranty provided by us. '
        + 'To purchase or find out more about the extended warranty program, visit Extended Warranty section here.',
    }],
  });

  return {
    tabs,
    paymentInner,
    deliveryInner,
    returnInner,
    ordersInner,
    servicesInner,
  };
});
