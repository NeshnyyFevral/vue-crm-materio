import { ButtonMapColor } from '@/model/components/basic/VButton';
import { ChipMapColorLight } from '@/model/components/basic/VChip';

export enum AlertVariant {
  FILLED = 'filled',
  LIGHT = 'light',
  OUTLINED = 'outlined',
}

export const AlertMapColor: { [index: string]: string } = ButtonMapColor;
export const AlertMapColorLight: { [index: string]: string } = ChipMapColorLight;
