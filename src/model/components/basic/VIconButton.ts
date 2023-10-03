import { GlobalColorMap } from '@/model/Colors';

export enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum IconButtonVariant {
  FILLED = 'filled',
  LIGHT = 'light',
  TRANSPARENT = 'transparent',
}

export const IconButtonMapColor: { [index: string]: string } = GlobalColorMap['700'];
export const IconButtonMapColorLight: { [index: string]: string } = GlobalColorMap['200'];
