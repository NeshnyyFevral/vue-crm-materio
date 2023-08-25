import {
  generateCssVarName400,
  generateCssVarName700,
  GlobalColors,
} from '@/model/Colors';
import { ChipMapColorLight } from '@/model/components/basic/VChip';
import { getCssVarValue } from '@/model/tools/CssTools';

export enum AlertVariant {
  FILLED = 'filled',
  LIGHT = 'light',
  OUTLINED = 'outlined',
}

export const AlertMapColor: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName700(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName700(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName700(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName700(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName700(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName400(GlobalColors.DEFAULT)),
};
export const AlertMapColorLight: { [index: string]: string } = ChipMapColorLight;
