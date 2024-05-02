import { BackgroundColorVariants } from '@psu-flex/core-ui';

type VariableGridComponentWithContainer = VariableGridComponentMultipleItems & {
  /** Check to include the Container & BackgroundWrapper around component */
  container?: boolean;
  /** Background color for nested BackgroundWrapper */
  backgroundColor?: BackgroundColorVariants;
};

type VariableGridComponentMultipleItems = VariableGridComponent & {
  /** Number of columns for each Component item occupies within the grid */
  columnSpan?: number | number[];
};

type VariableGridComponent = {
  /** number of grid columns for nested Grid. Useful for when Component is not full-width. Accepts single column value for all breakpoints or array for each breakpoint*/
  totalGridColumns?: number | number[];
};

type VariableGridComponentOneItem = VariableGridComponent & {
  /** Number of columns the Component item occupies within the grid */
  gridColumn?: string | string[];
};

export type {
  VariableGridComponentOneItem,
  VariableGridComponent,
  VariableGridComponentMultipleItems,
  VariableGridComponentWithContainer,
};
