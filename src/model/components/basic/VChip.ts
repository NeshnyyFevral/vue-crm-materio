import { GlobalColorMap } from '@/model/Colors';

export enum ChipVariant {
  BASIC = 'basic',
  OUTLINED = 'outlined',
  LIGHT = 'light',
}

export enum ChipSize {
  SMALL = 'small',
  DEFAULT = 'default',
}

export const ChipMapColor: { [index: string]: string } = GlobalColorMap['700'];
export const ChipMapColorHover: { [index: string]: string } = GlobalColorMap['400'];
export const ChipMapColorLight: { [index: string]: string } = GlobalColorMap['100'];
