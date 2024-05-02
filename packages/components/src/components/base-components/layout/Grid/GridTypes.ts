import { Spaces } from '@psu-flex/platform-theme';
import { VariableGridComponent } from '@psu-flex/common-ui';
import { BaseProps } from '@psu-flex/common-ui';
export type GridProps = BaseProps &
  VariableGridComponent & {
    /**	Space between child elements */
    gap?: Spaces | Spaces[];
  };
