import { GlobalColorMap } from '@/model/Colors';
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

export const SelectMapColorActive: { [index: string]: string } = GlobalColorMap['200'];
export const SelectMapColorActiveHover: { [index: string]: string } = GlobalColorMap['300'];
