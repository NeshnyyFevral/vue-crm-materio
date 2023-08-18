import { ButtonMapColor } from '@/model/components/VButton';
import { ChipMapColorLight } from '@/model/components/VChip';

export enum AlertVariant {
  FILLED = 'filled',
  LIGHT = 'light',
  OUTLINED = 'outlined',
}

export const AlertMapColor: { [index: string]: string } = ButtonMapColor;
export const AlertMapColorLight: { [index: string]: string } = ChipMapColorLight;
