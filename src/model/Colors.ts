import { getCssVarValue } from '@/model/tools/CssTools';

export enum GlobalColors {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default',
}

type ColorLevel = '700' | '600' | '500' | '400' | '300' | '200' | '100';

export interface GlobalColorMapInterface {
  100: {[index: string]: string};
  200: {[index: string]: string};
  300: {[index: string]: string};
  400: {[index: string]: string};
  500: {[index: string]: string};
  600: {[index: string]: string};
  700: {[index: string]: string};
}

const generateCssVarName = (variant: GlobalColors, level: ColorLevel) => `--color-${variant}-${level}`;

const getColorValue = (variant: GlobalColors, level: ColorLevel) => getCssVarValue(generateCssVarName(variant, level));

const getGlobalColorMap = (): GlobalColorMapInterface => {
  const levels: ColorLevel[] = ['100', '200', '300', '400', '500', '600', '700'];
  const map: GlobalColorMapInterface = {} as GlobalColorMapInterface;

  levels.forEach((level) => {
    map[level] = {
      [GlobalColors.PRIMARY]: getColorValue(GlobalColors.PRIMARY, level),
      [GlobalColors.SUCCESS]: getColorValue(GlobalColors.SUCCESS, level),
      [GlobalColors.ERROR]: getColorValue(GlobalColors.ERROR, level),
      [GlobalColors.WARNING]: getColorValue(GlobalColors.WARNING, level),
      [GlobalColors.INFO]: getColorValue(GlobalColors.INFO, level),
      [GlobalColors.DEFAULT]: getColorValue(GlobalColors.DEFAULT, level),
    };
  });

  return map;
};

export const GlobalColorMap: GlobalColorMapInterface = getGlobalColorMap();
