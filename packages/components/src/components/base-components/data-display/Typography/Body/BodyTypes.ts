import { TypographyProps } from '../TypographyTypes';

export type BodyVariants = 36 | 28 | 24 | 22 | 20 | 18 | 16 | 14;
export type BodyColors =
  | 'original87Pink'
  | 'coalyGray'
  | 'white'
  | 'link'
  | 'beaverBlue'
  | 'nittanyNavy';

export interface BodyProps extends Omit<TypographyProps, 'size'> {
  /**Applies the theme color styles. Only Body colors are available.*/
  color?: BodyColors;
  /**Applies the theme variant styles. Only Body variants are available.*/
  variant?: BodyVariants;
  /**This determines the variant for the desktop font size */
  responsiveType?: 'full' | 'column';
}
