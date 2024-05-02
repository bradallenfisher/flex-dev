import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { playButtonVariants } from './PlayButtonStyles';

export type PlayButtonVariants = keyof typeof playButtonVariants;
export type PlayButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'responsive';

export type PlayButtonProps = BaseProps &
  InnerComponent & {
    /** Controls size of icon & padding inside button */
    size?: PlayButtonSizes;
    /** CloseButton variant with preset styling */
    variant: PlayButtonVariants;
    /** onClick function */
    onClick: any;
    /** Boolean paused state */
    isPaused: boolean;
  };
