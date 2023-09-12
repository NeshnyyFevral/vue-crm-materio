import { ButtonMapColor } from '@/model/components/basic/VButton';

export enum TooltipPosition {
  TOP_START = 'top-start',
  TOP = 'top',
  TOP_END = 'top-end',

  RIGHT_START = 'right-start',
  RIGHT = 'right',
  RIGHT_END = 'right-end',

  BOTTOM_START = 'bottom-start',
  BOTTOM = 'bottom',
  BOTTOM_END = 'bottom-end',

  LEFT_START = 'left-start',
  LEFT = 'left',
  LEFT_END = 'left-end',
}

export const TooltipMapColor: { [index: string]: string } = ButtonMapColor;
