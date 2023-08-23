import {
  generateCssVarName100,
  generateCssVarName400,
  GlobalColors,
} from '@/model/Colors';
import { ButtonMapColor } from '@/model/components/basic/VButton';
import { getCssVarValue } from '@/model/tools/CssTools';

export enum ChipVariant {
  BASIC = 'basic',
  OUTLINED = 'outlined',
  LIGHT = 'light',
}

export enum ChipSize {
  SMALL = 'small',
  DEFAULT = 'default',
}

export const ChipMapColor: { [index: string]: string } = ButtonMapColor;
export const ChipMapColorHover: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName400(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName400(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName400(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName400(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName400(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName400(GlobalColors.DEFAULT)),
};

export const ChipMapColorLight: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName100(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName100(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName100(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName100(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName100(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName100(GlobalColors.DEFAULT)),
};
