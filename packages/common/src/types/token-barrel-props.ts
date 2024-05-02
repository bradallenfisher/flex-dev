import { Spaces } from '@psu-flex/core-ui';

export type ComponentSpacingProps = {
  /**Vertical padding for the Component. Can be responsive array for values at each breakpoint.*/
  py?: Spaces | Spaces[];
  /**Inline padding for the Component. Can be responsive array for values at each breakpoint.*/
  px?: Spaces | Spaces[];
  /**Vertical margin for the Component. Can be responsive array for values at each breakpoint.*/
  my?: Spaces | Spaces[];
  /**Inline margin for the Component. Can be responsive array for values at each breakpoint.*/
  mx?: Spaces | Spaces[];
};
