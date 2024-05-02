import { BaseProps } from '@psu-flex/common-ui';
import { VariableGridComponentWithContainer } from '@psu-flex/common-ui';

export interface TabsProps
  extends VariableGridComponentWithContainer,
    BaseProps {
  tabItems: any[];
  orientation?: 'horizontal' | 'vertical';
  activeTab: number;
  onChange: any;
}
