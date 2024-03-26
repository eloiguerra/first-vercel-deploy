export interface Theme {
  borderRadius: (radius: number) => string;
  spacing: (space: number) => string;
  palette: Palette;
  typography: Typography;
  breakpoints: Breakpoints;
}

export interface Palette {
  commom: PaletteCommom;
  primary: PrimaryScale;
  success: PaletteScale;
  grey: PaletteGreyScale;
}

export interface PaletteCommom {
  white: string;
  black: string;
}

export interface PaletteScale {
  main: string;
}

export interface PrimaryScale extends PaletteScale {
  dark: string;
}

export interface PaletteGreyScale extends PaletteScale {
  light: string;
  dark: string;
}

export interface Typography {
  size: TypographySize;
  weight: TypographyWeight;
  family: string[];
}

export interface TypographySize {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export interface TypographyWeight {
  "700": 700;
  "600": 600;
  "500": 400;
  "400": 400;
  "300": 300;
  "200": 200;
  "100": 100;
}

export interface Breakpoints {
  values: BreakpointsValues;
}

export interface BreakpointsValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type CustomPropsToStyle<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
