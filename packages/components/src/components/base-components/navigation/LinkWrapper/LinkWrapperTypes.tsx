import { BaseProps } from '@psu-flex/common-ui';

export interface LinkWrapperProps extends BaseProps {
  /**The string URI to link to. Supports relative and absolute URIs.*/
  to: string;
  /**Controls when the link should have an underline.*/
  underline?: 'always' | 'hover' | 'none';
}
