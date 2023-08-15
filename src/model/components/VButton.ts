import {
  generateCssVarName200,
  generateCssVarName700,
  GlobalColors,
} from '@/model/Colors';
import { getCssVarValue } from '@/model/tools/CssTools';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const ButtonMapColor: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName700(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName700(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName700(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName700(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName700(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName700(GlobalColors.DEFAULT)),
};

export const ButtonMapColorHover: { [index: string]: string } = {
  [GlobalColors.PRIMARY]: getCssVarValue(generateCssVarName200(GlobalColors.PRIMARY)),
  [GlobalColors.SUCCESS]: getCssVarValue(generateCssVarName200(GlobalColors.SUCCESS)),
  [GlobalColors.ERROR]: getCssVarValue(generateCssVarName200(GlobalColors.ERROR)),
  [GlobalColors.WARNING]: getCssVarValue(generateCssVarName200(GlobalColors.WARNING)),
  [GlobalColors.INFO]: getCssVarValue(generateCssVarName200(GlobalColors.INFO)),
  [GlobalColors.DEFAULT]: getCssVarValue(generateCssVarName200(GlobalColors.DEFAULT)),
};
