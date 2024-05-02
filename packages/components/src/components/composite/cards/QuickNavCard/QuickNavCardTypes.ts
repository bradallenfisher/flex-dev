import { BaseProps } from '@psu-flex/common-ui';

export interface QuickNavCardProps extends BaseProps {
  heading: string;
  body: string;
  to: any;
}

export interface QuickNavCardItems {
  header?: any;
  paragraph?: any;
}
