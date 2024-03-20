export const enum PricingVariant {
  POPULAR = 'popular',
  DEFAULT = 'default',
}

export interface IPricingItem {
  id: string;
  variant: PricingVariant;
  icon: any;
  title: string;
  subtitle: string;
  price: number;
  priceDesc?: string;
  abilities: string[];
  isPurchased: boolean,
}
