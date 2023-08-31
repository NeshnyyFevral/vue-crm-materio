import { ButtonMapColor } from '@/model/components/basic/VButton';

export enum RadioSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

export enum RadioLabelPlacement {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const RadioMapColor: { [index: string]: string } = ButtonMapColor;
