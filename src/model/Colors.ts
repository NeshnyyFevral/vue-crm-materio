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
  100: Record<GlobalColors, string>;
  200: Record<GlobalColors, string>;
  300: Record<GlobalColors, string>;
  400: Record<GlobalColors, string>;
  500: Record<GlobalColors, string>;
  600: Record<GlobalColors, string>;
  700: Record<GlobalColors, string>;
}

const generateCssVarName = (variant: GlobalColors, level: ColorLevel) => `--color-${variant}-${level}`;

export const getColorValue = (variant: GlobalColors, level: ColorLevel) => getCssVarValue(generateCssVarName(variant, level));

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
