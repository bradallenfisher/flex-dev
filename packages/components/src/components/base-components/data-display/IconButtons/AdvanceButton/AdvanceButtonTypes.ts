import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { iconButtonSizeKeyMap } from '../iconButtonUtilities';
import { advanceButtonVariants } from './AdvanceButtonStyles';

export type AdvanceButtonVariants = keyof typeof advanceButtonVariants;
export type AdvanceButtonSizes = keyof typeof iconButtonSizeKeyMap;

export type AdvanceButtonProps = BaseProps &
  InnerComponent & {
    /**Controls size of icon inside button*/
    size?: AdvanceButtonSizes;
    /**ReactNode element for Icon of AdvanceButton*/
    icon?: 'chevronLeft';
    /** CloseButton variant with preset styling*/
    variant: AdvanceButtonVariants;
    /**onClick function */
    onClick: any;
    /**React ref */
    menuButtonRef?: any;
    /**direction for icon */
    direction?: 'left' | 'right';
  };
