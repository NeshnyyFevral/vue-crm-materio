import { GlobalColorMap } from '@/model/Colors';

export enum RadioSize {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large',
}

export enum RadioLabelPlacement {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const RadioMapColor: { [index: string]: string } = GlobalColorMap['700'];
