import { InnerComponent } from '@psu-flex/platform-theme';
import { ButtonProps } from '../ButtonTypes';

export type NavButtonVariants = 'linkOutlined' | 'lightOutlined';
export type NavButtonSizes = 'sm';

export type NavButtonProps = ButtonProps &
  InnerComponent & {
    variant?: NavButtonVariants;
    size?: NavButtonSizes;
  };
