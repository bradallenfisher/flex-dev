import { BaseProps } from '@psu-flex/common-ui';
import { BodyVariants } from '../../data-display/Typography/Body/BodyTypes';
import { HeadingVariants } from '../../data-display/Typography/Heading/HeadingTypes';

export type LinkColors =
  | 'link'
  | 'linkLight'
  | 'inherit'
  | 'white'
  | 'coalyGray'
  | 'nittanyNavy';

type ConditionalVariant =
  | {
      /** Applies the needed type style */
      typeStyle?: 'headingStyle';
      /** Applies the theme type variant.*/
      variant?: HeadingVariants;
    }
  | {
      /** Applies the needed type style */
      typeStyle?: 'bodyStyle';
      /** Applies the theme type variant.*/
      variant?: BodyVariants;
    };

export type LinkProps = BaseProps &
  ConditionalVariant & {
    /**The string URI to link to. Supports relative and absolute URIs.*/
    to: string;
    /**Link id.*/
    id?: string;
    /**The color of the link.*/
    color?: LinkColors;
    /**Controls when the link should have an underline.*/
    underline?: 'always' | 'hover' | 'none';
    /**This determines the variant for the desktop font size */
    responsiveType?: 'full' | 'column';
  };
