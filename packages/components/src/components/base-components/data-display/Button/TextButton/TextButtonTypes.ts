import { InnerComponent } from '@psu-flex/common-ui';
import { ButtonProps } from '../ButtonTypes';

export type TextButtonVariants = 'primary' | 'light';
export type TextButtonEndIcons = 'rightChevron';
export type TextButtonHoverEndIcons = 'rightArrow';

export type TextButtonProps = ButtonProps &
  InnerComponent & {
    variant?: TextButtonVariants;
    endIcon?: TextButtonEndIcons;
    hoverEndIcon?: TextButtonHoverEndIcons;
  };
