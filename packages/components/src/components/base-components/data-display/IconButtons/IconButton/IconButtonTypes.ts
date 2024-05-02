import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { iconButtonSizeKeyMap } from '../iconButtonUtilities';
import { unfilledVariants } from './IconButtonStyles';

export type IconButtonVariants = keyof typeof unfilledVariants;
export type IconButtonSizes = keyof typeof iconButtonSizeKeyMap;
export type IconButtonTypes = 'unfilled' | 'filled';
export type IconButtonIcons =
  | 'info'
  | 'person'
  | 'help'
  | 'calendar'
  | 'thumbsUp'
  | 'notification'
  | 'rssFeed'
  | 'email'
  | 'print'
  | 'home'
  | 'edit'
  | 'facebook'
  | 'instagram'
  | 'linkedIn'
  | 'twitter'
  | 'youtube';
export type IconButtonProps = BaseProps &
  InnerComponent & {
    /**The string URI to link to. Supports relative and absolute URIs.*/
    to?: string;
    /**Size of icon inside button*/
    size: IconButtonSizes;
    /**ReactNode element for Icon of IconButton*/
    icon: IconButtonIcons;
    /** IconButton variant with preset styling*/
    variant: IconButtonVariants;
    /**Type of IconButton with preset padding conditions */
    type?: IconButtonTypes;
  };
