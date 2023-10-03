import { GlobalColorMap } from '@/model/Colors';

export enum AlertVariant {
  FILLED = 'filled',
  LIGHT = 'light',
  OUTLINED = 'outlined',
}

export const AlertMapColor: { [index: string]: string } = GlobalColorMap['700'];
export const AlertMapColorLight: { [index: string]: string } = GlobalColorMap['100'];
