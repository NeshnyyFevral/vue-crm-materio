export const getCssVarValue = (variable: string): string => getComputedStyle(document.documentElement).getPropertyValue(variable);
