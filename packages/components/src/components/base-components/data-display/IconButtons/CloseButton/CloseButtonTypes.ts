import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { iconButtonSizeKeyMap } from '../iconButtonUtilities';
import { closeButtonVariants } from './CloseButtonStyles';

export type CloseButtonVariants = keyof typeof closeButtonVariants;
export type CloseButtonSizes = keyof typeof iconButtonSizeKeyMap;

export type CloseButtonProps = BaseProps &
  InnerComponent & {
    /**Controls size of icon inside button*/
    size?: CloseButtonSizes;
    /**ReactNode element for Icon of CloseButton*/
    icon?: 'close';
    /** CloseButton variant with preset styling*/
    variant: CloseButtonVariants;
    /**onClick function */
    onClick: any;
    /**React ref */
    menuButtonRef?: any;
  };
