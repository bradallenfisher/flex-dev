import { TypographyProps } from '../TypographyTypes';

export type DisplayHeadingVariants = 56 | 64;
export type DisplayHeadingTags = 'h1' | 'h2';
export type DisplayHeadingColors =
  | 'nittanyNavy'
  | 'beaverBlue'
  | 'white'
  | 'potentialMidnight';

export interface DisplayHeadingProps extends Omit<TypographyProps, 'size'> {
  /**Applies the theme variant styles. Only DisplayHeading variants are available.*/
  variant?: DisplayHeadingVariants | DisplayHeadingVariants[];
  /**The component used for the root node.*/
  tag?: DisplayHeadingTags;
  /**Applies the theme color styles. Only DisplayHeading colors are available.*/
  color?: DisplayHeadingColors;
  /**This determines the variant for the desktop font size */
  responsiveType?: 'full' | 'column';
}
