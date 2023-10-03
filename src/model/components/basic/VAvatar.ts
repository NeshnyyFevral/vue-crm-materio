import { GlobalColorMap } from '@/model/Colors';

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

export const AvatarMapColor: { [index: string]: string } = GlobalColorMap['700'];
export const AvatarMapColorLight: { [index: string]: string } = GlobalColorMap['200'];
