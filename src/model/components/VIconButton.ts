import { ButtonMapColor, ButtonMapColorHover } from '@/model/components/VButton';

export enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum IconButtonVariant{
  FILLED = 'filled',
  LIGHT = 'light',
  TRANSPARENT = 'transparent',
}

export const IconButtonMapColor: {[index: string]: string} = ButtonMapColor;
export const IconButtonMapColorLight: {[index: string]: string} = ButtonMapColorHover;
