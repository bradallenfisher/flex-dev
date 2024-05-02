import {
  ComponentSpacingProps,
  FlexProps,
  StringUriProps,
} from '@psu-flex/core-ui';
import {
  BorderRadii,
  Colors,
  Gradients,
  Shadows,
} from '@psu-flex/platform-theme';
import { BaseProps } from '@psu-flex/common-ui';
export type CardBorderColors = Colors;
export type CardBackgroundColors = Colors;

export type ConditionalCardProps =
  | {
      /**Card backgroundImage. Requires a string reference to image including url callback. Only available w/o gradient and backgroundColor*/
      backgroundImage?: string;
      /**Card backgroundColor. References color tokens. Only available w/o backgroundImage and backgroundColor*/
      backgroundColor?: never;
      /**Card gradient. This lays under content. References gradient tokens. Only available w/o gradient and backgroundImage */
      gradient?: never;
    }
  | {
      /**Card backgroundImage. Requires a string reference to image including url callback. Only available w/o gradient and backgroundColor*/
      backgroundImage?: never;
      /**Card backgroundColor. References color tokens. Only available w/o backgroundImage and backgroundColor*/
      backgroundColor?: CardBackgroundColors;
      /**Card gradient. This lays under content. References gradient tokens. Only available w/o gradient and backgroundImage */
      gradient?: never;
    }
  | {
      /**Card backgroundImage. Requires a string reference to image including url callback. Only available w/o gradient and backgroundColor*/
      backgroundImage?: never;
      /**Card backgroundColor. References color tokens. Only available w/o backgroundImage and backgroundColor*/
      backgroundColor?: never;
      /**Card gradient. This lays under content. References gradient tokens. Only available w/o gradient and backgroundImage */
      gradient?: Gradients;
    };

export type CardProps = BaseProps &
  ConditionalCardProps &
  FlexProps &
  StringUriProps &
  ComponentSpacingProps & {
    /**If true, removes border radius from Card*/
    square?: boolean;
    /**Card borderColor. References color tokens */
    borderColor?: CardBorderColors;
    /**Card box shadow. References dropShadow tokens */
    dropShadow?: Shadows;
    /**Border radius for card*/
    borderRadius?: BorderRadii;
    /**High order component id. Generally used to append to base element id or attach to higher order component's outermost element*/
    hocId?: string;
    /** Optional styling for LinkWrapper if to exists */
    linkWrapperSx?: any;
  };
