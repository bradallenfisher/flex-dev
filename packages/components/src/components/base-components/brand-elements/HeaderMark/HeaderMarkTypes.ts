import { BaseProps, InnerComponent } from '@psu-flex/common-ui';

export type HeaderMarkProps = BaseProps &
  InnerComponent & {
    tierOneMark?: any;
    tierTwoEntity?: {
      title: string;
      href: string;
    };
    to?: string;
  };
