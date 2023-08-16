import { ButtonMapColor, ButtonMapColorHover } from '@/model/components/VButton';

export enum AvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum AvatarVariant {
  CYCLE = 'cycle',
  ROUNDED = 'rounded',
  SQUARE = 'square',
}

export const AvatarMapColor: { [index: string]: string } = ButtonMapColor;
export const AvatarMapColorLight: { [index: string]: string } = ButtonMapColorHover;
