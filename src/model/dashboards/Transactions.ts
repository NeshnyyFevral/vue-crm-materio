import type { GlobalColors } from '@/model/Colors';
import type { StatisticBasicType } from '@/model/components/StatisticBasic';

export interface Transactions {
  id: string;
  title: string;
  value: string;
  icon: any;
  color: GlobalColors;
}

export interface TransactionDepositWithdraw {
  id: string;
  imgSrc: string;
  title: string;
  desc: string;
  value: string;
  type: StatisticBasicType;
}
