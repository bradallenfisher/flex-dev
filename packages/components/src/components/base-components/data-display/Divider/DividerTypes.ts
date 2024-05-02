import { BorderThicknesses } from '@psu-flex/platform-theme';
import { BaseProps, AlignTypes } from '@psu-flex/common-ui';

export type DividerStyles = 'solid' | 'dashed' | 'dotted';
export type DividerTags = 'div' | 'span';
export type DividerColors =
  | 'limestoneLight'
  | 'skyBlue'
  | 'white'
  | 'link'
  | 'nittanyNavy'
  | 'beaverBlue'
  | 'beaver70'
  | 'pughBlue'
  | 'accent'
  | 'creekTeal';
export type DividerSizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'full'
  | '20px'
  | '32px'
  | '84px'
  | '80px'
  | '68px'
  | '64px'
  | '48px'
  | '232px'
  | '248px';
export type DividerOrientations = 'horizontal' | 'vertical';

export interface DividerProps extends BaseProps {
  /**The component orientation.*/
  orientation?: DividerOrientations;
  /**Sets the line style*/
  dividerStyle?: DividerStyles;
  /**Color for Divider*/
  color?: DividerColors;
  /**BorderWidth for Divider. Uses borderWidths token*/
  thickness?: BorderThicknesses;
  /**Width or height depending on orientation*/
  size?: DividerSizes;
  /**Aligns Divider within parent to either ends or center. Only works when size is not set to full.*/
  align?: AlignTypes;
  /**The component used for the root node.*/
  tag?: DividerTags;
}
