import { GlobalColorMap } from '@/model/Colors';

export interface CustomInputEvent {
  name: string;
  value: string;
}

export enum TextFieldVariant {
  OUTLINED = 'outlined',
  STANDARD = 'standard'
}

export enum TextFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
  SEARCH = 'search',
}

export enum TextFieldSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

export const TextFieldMapColor: { [index: string]: string } = GlobalColorMap['700'];
