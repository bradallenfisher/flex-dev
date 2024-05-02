import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { menuButtonSizeObj, menuButtonVariants } from './MenuButtonStyles';

export type MenuButtonVariants = 'transparent';
export type MenuButtonSizes = 'sm';

export type MenuButtonProps = BaseProps &
  InnerComponent & {
    /**Controls size of icon inside button, also surrounding badge padding*/
    size?: keyof typeof menuButtonSizeObj;
    /**ReactNode element for Icon of MenuButton*/
    icon?: 'menu';
    /** IconButton variant with preset styling*/
    variant?: keyof typeof menuButtonVariants;
    /**onClick function */
    onClick: any;
  };
