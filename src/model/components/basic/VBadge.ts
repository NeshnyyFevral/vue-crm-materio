import { ButtonMapColor, ButtonMapColorHover } from '@/model/components/basic/VButton';
import { ChipMapColorLight } from '@/model/components/basic/VChip';

export enum BadgePosition {
  RIGHT_TOP = 'right-top',
  LEFT_BOTTOM = 'left-bottom',
  RIGHT_BOTTOM = 'right-bottom',
  LEFT_TOP = 'left-top',
}

export enum BadgeVariant {
  DEFAULT = 'content',
  LIGHT = 'light',
  DOT = 'dot',
}

export enum BadgeSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

export const BadgeMapColor: { [index: string]: string } = ButtonMapColor;
export const BadgeMapColorLight: { [index: string]: string } = ButtonMapColorHover;
