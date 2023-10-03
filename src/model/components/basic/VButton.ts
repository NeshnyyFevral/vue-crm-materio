import { GlobalColorMap } from '@/model/Colors';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const ButtonMapColor: { [index: string]: string } = GlobalColorMap['700'];

export const ButtonMapColorHover: { [index: string]: string } = GlobalColorMap['200'];
