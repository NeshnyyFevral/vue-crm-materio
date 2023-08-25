import { ButtonMapColor } from '@/model/components/basic/VButton';
import { ChipMapColorHover } from '@/model/components/basic/VChip';

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

export const SwitchMapColor: { [index: string]: string } = ButtonMapColor;
export const SwitchMapColorLight: { [index: string]: string } = ChipMapColorHover;
