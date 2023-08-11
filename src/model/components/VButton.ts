import { getCssVarValue } from '@/model/tools/CssTools';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const generateCssVarName700 = (variant: string) => `--color-${variant}-700`;
const generateCssVarName200 = (variant: string) => `--color-${variant}-200`;

export const ButtonMapColor: { [index: string]: string } = {
  [ButtonColor.PRIMARY]: getCssVarValue(generateCssVarName700(ButtonColor.PRIMARY)),
  [ButtonColor.SUCCESS]: getCssVarValue(generateCssVarName700(ButtonColor.SUCCESS)),
  [ButtonColor.ERROR]: getCssVarValue(generateCssVarName700(ButtonColor.ERROR)),
  [ButtonColor.WARNING]: getCssVarValue(generateCssVarName700(ButtonColor.WARNING)),
  [ButtonColor.INFO]: getCssVarValue(generateCssVarName700(ButtonColor.INFO)),
  [ButtonColor.DEFAULT]: getCssVarValue(generateCssVarName700(ButtonColor.DEFAULT)),
};

export const ButtonMapColorHover: { [index: string]: string } = {
  [ButtonColor.PRIMARY]: getCssVarValue(generateCssVarName200(ButtonColor.PRIMARY)),
  [ButtonColor.SUCCESS]: getCssVarValue(generateCssVarName200(ButtonColor.SUCCESS)),
  [ButtonColor.ERROR]: getCssVarValue(generateCssVarName200(ButtonColor.ERROR)),
  [ButtonColor.WARNING]: getCssVarValue(generateCssVarName200(ButtonColor.WARNING)),
  [ButtonColor.INFO]: getCssVarValue(generateCssVarName200(ButtonColor.INFO)),
  [ButtonColor.DEFAULT]: getCssVarValue(generateCssVarName200(ButtonColor.DEFAULT)),
};
