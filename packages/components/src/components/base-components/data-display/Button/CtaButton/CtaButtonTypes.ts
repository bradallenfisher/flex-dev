import { ButtonProps } from '../ButtonTypes';
import { ctaButtonVariants } from './CtaButtonStyles';
import { InnerComponent } from '@psu-flex/common-ui';
export type CtaButtonVariants = keyof typeof ctaButtonVariants;
export type CtaButtonSizes = 'sm' | 'md';

export type CtaButtonProps = ButtonProps &
  InnerComponent & {
    variant?: CtaButtonVariants | 'string';
    size?: CtaButtonSizes;
  };
