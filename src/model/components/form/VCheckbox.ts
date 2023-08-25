import { ButtonMapColor } from '@/model/components/basic/VButton';

export enum CheckboxSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

export enum CheckboxLabelPlacement {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const CheckboxMapColor: { [index: string]: string } = ButtonMapColor;
