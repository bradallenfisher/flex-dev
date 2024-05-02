import { TypographyProps } from '../TypographyTypes';

export type HeadingVariants =
  | 64
  | 56
  | 48
  | 40
  | 36
  | 32
  | 28
  | 24
  | 22
  | 20
  | 18
  | 16;
export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingColors =
  | 'nittanyNavy'
  | 'beaverBlue'
  | 'white'
  | 'link'
  | 'coalyGray'
  | 'potentialMidnight';

export interface HeadingProps extends Omit<TypographyProps, 'size'> {
  /**Applies the theme variant styles. Only Heading variants are available.*/
  variant?: HeadingVariants;
  /**The component used for the root node.*/
  tag?: HeadingTags;
  /**Applies the theme color styles. Only Heading colors are available.*/
  color?: HeadingColors;
  /**This determines the variant for the desktop font size */
  responsiveType?: 'full' | 'column';
}
