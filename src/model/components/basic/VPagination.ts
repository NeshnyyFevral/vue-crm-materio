import { ButtonMapColor } from '@/model/components/basic/VButton';

export enum PaginationVariant {
  OUTLINED = 'outlined',
  LIGHT = 'light',
  DEFAULT = 'default',
}

export enum PaginationSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const PaginationMapColor: { [index: string]: string } = ButtonMapColor;
