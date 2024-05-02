import { FontSizes, Colors } from '@psu-flex/platform-theme';
import { BaseProps, TextAlignTypes } from '@psu-flex/common-ui';
export type TypographyTags = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps extends BaseProps {
  /**Applies the theme typography styles. All typography variants are available in the base Typography component.*/
  variant?: unknown;
  /**Applies the theme color styles. All colors are available in the base Typography component.*/
  color?: Colors;
  /**Applies the theme fontSizes styles. Cannot add a size if a variant is also added. Must pass in one or other.*/
  size?: FontSizes | FontSizes[];
  /**Set the text-align on the component.*/
  align?: TextAlignTypes;
  /**The component used for the root node.*/
  tag?: TypographyTags;
}
