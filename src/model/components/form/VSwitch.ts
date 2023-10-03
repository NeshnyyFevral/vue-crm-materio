import { GlobalColorMap } from '@/model/Colors';

export enum SwitchSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

export enum SwitchLabelPlacement {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const SwitchMapColor: { [index: string]: string } = GlobalColorMap['700'];
export const SwitchMapColorLight: { [index: string]: string } = GlobalColorMap['200'];
