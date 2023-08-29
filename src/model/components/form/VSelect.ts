import { ButtonMapColor } from '@/model/components/basic/VButton';
import { TextFieldSize, TextFieldVariant } from '@/model/components/form/VTextField';

export const SelectVariant = {
  ...TextFieldVariant,
};
export const SelectSize = {
  ...TextFieldSize,
};

export interface SelectOptions<T> {
  name: string;
  value: T;
}

export const SelectMapColor: { [index: string]: string } = ButtonMapColor;
