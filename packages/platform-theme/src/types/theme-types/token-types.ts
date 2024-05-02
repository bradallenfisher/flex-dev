import theme, {
  gradients,
  backdrops,
  transitions,
  contentContainerMargins,
} from '../../platform-theme';

const {
  colors,
  space,
  letterSpacings,
  fonts,
  fontSizes,
  shadows,
  radii,
  borderWidths,
  lineHeights,
} = theme;

export type FontSizes = keyof typeof fontSizes;
export type Spaces = keyof typeof space;
export type Backdrops = keyof typeof backdrops;
export type Shadows = keyof typeof shadows;
export type FontFamilies = keyof typeof fonts;
export type BorderRadii = keyof typeof radii;
export type BorderThicknesses = keyof typeof borderWidths;
export type Gradients = keyof typeof gradients;
export type Colors = keyof typeof colors;
export type Transitions = keyof typeof transitions;
export type LetterSpacings = keyof typeof letterSpacings;
export type LineHeights = keyof typeof lineHeights;
export type ContainerMargins = keyof typeof contentContainerMargins;
