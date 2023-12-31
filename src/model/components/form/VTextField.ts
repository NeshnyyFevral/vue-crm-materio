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
