import { Spaces } from '@psu-flex/platform-theme';
import {
  BaseWithTag,
  JustifyContents,
  FlexDirections,
  AlignItems,
} from '@psu-flex/common-ui';
export type FlexVariants =
  | 'nowrap'
  | 'wrap'
  | 'start'
  | 'baseline'
  | 'colStart'
  | 'col'
  | 'itemsEnd'
  | 'justifyEnd'
  | 'stretch'
  | 'spaceBetween'
  | 'center'
  | 'responsive';

export type FlexProps = BaseWithTag &
  ConditionalVariant & {
    /** Gutter in the X direction*/
    gutterX?: Spaces | Spaces[];
    /** Gutter in the Y direction*/
    gutterY?: Spaces | Spaces[];
    /**When true, allows content inside Flex to wrap to next row*/
    wrap?: boolean;
    /**When true, changes flex-direction to column at lower breakpoints*/
    responsive?: boolean;
    /**Sets the gaps between rows and columns*/
    gap?: Spaces | Spaces[];
  };

export type ConditionalVariant =
  | {
      /**Variant controls Flex orientation. Doesn't work when responsive is set to true. */
      variant: FlexVariants;
      /**controls justify content styling*/
      justifyContent?: never;
      /**Depending input, controls alignment of all items on the main axis or controls alignment of all items on the cross axis*/
      alignItems?: any;
      /**Flex direction*/
      direction?: never;
    }
  | {
      /**Variant controls Flex orientation. Doesn't work when responsive is set to true. */
      variant?: never;
      /**controls justify content styling*/
      justifyContent?: JustifyContents;
      /**Flex direction*/
      direction?: FlexDirections;
      /**Depending input, controls alignment of all items on the main axis or controls alignment of all items on the cross axis*/
      alignItems?: AlignItems;
    };
