import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import {
  searchButtonSizeObj,
  searchButtonVariants,
} from './SearchButtonStyles';

export type SearchButtonVariants = 'transparent';
export type SearchButtonSizes = 'sm';

export type SearchButtonProps = BaseProps &
  InnerComponent & {
    /**Controls size of icon inside button, also surrounding badge padding*/
    size?: keyof typeof searchButtonSizeObj;
    /**ReactNode element for Icon of MenuButton*/
    icon?: 'search';
    /** IconButton variant with preset styling*/
    variant?: keyof typeof searchButtonVariants;
    /**onClick function */
    onClick: any;
    /**React ref */
    menuButtonRef?: any;
  };
