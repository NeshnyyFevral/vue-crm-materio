import type { GlobalColors } from '@/model/Colors';

export interface Transactions {
  id: string;
  title: string;
  value: string;
  icon: any;
  color: GlobalColors;
}
