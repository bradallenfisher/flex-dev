import { BaseProps } from '@psu-flex/common-ui';
import { VariableGridComponentWithContainer } from '@psu-flex/common-ui';

export interface ImageListProps
  extends VariableGridComponentWithContainer,
    BaseProps {
  images: any[];
  variant?: 'masonry' | 'standard';
  gap?: any;
}
