import { GlobalColorMap } from '@/model/Colors';

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

export const CheckboxMapColor: { [index: string]: string } = GlobalColorMap['700'];
