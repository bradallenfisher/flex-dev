import { AriaButtonProps } from 'react-aria';
import { BaseProps } from '@psu-flex/common-ui';

type SelectButtonSizes = 'sm' | 'md' | 'lg';

export type MultiSelectButtonProps = BaseProps &
  AriaButtonProps &
  HTMLSelectElement & {
    buttonRef: any;
    size: SelectButtonSizes | string;
    buttonClassName?: { [key: string]: string };
  };
