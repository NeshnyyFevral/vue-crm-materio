import { generateCssVarName300, GlobalColors } from '@/model/Colors';
import { ButtonMapColor, ButtonMapColorHover } from '@/model/components/basic/VButton';
import { TextFieldSize, TextFieldVariant } from '@/model/components/form/VTextField';
import { getCssVarValue } from '@/model/tools/CssTools';

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

export const SelectMapColorActive: { [index: string]: string } = ButtonMapColorHover;
export const SelectMapColorActiveHover: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName300(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName300(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName300(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName300(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName300(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName300(GlobalColors.DEFAULT)),
};
