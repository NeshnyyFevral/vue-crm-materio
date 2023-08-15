export enum GlobalColors {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default',
}

export const generateCssVarName700 = (variant: string) => `--color-${variant}-700`;
export const generateCssVarName600 = (variant: string) => `--color-${variant}-600`;
export const generateCssVarName500 = (variant: string) => `--color-${variant}-500`;
export const generateCssVarName400 = (variant: string) => `--color-${variant}-400`;
export const generateCssVarName300 = (variant: string) => `--color-${variant}-300`;
export const generateCssVarName200 = (variant: string) => `--color-${variant}-200`;
export const generateCssVarName100 = (variant: string) => `--color-${variant}-100`;
