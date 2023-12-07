import type { GlobalColors } from '@/model/Colors';

export enum ChipVariant {
  BASIC = 'basic',
  OUTLINED = 'outlined',
  LIGHT = 'light',
}

export enum ChipSize {
  SMALL = 'small',
  DEFAULT = 'default',
}
export interface Chip {
  id: string;
  color: GlobalColors;
  title: string;
}
