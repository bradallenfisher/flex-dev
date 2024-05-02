import { RefObject } from 'react';
import { AriaButtonProps } from 'react-aria';
import { BaseProps } from '@psu-flex/common-ui';
import { IconVariants } from '../Icon/IconTypes';
import { CtaButtonVariants } from './CtaButton/CtaButtonTypes';
import { NavButtonVariants } from './NavButton/NavButtonTypes';
import { SearchCtaVariants } from './SearchCta/SearchCtaTypes';
import { TextButtonVariants } from './TextButton/TextButtonTypes';
import { WideButtonVariants } from './WideButton/WideButtonTypes';

export type AllButtonVariants =
  | CtaButtonVariants
  | NavButtonVariants
  | TextButtonVariants
  | WideButtonVariants
  | SearchCtaVariants;
export type ButtonSizes = 'xs' | 'sm' | 'md';

export type ButtonProps = AriaButtonProps &
  BaseProps & {
    /**The string URI to link to. Supports relative and absolute URIs.*/
    to?: string;
    /**Size of button*/
    size?: ButtonSizes;
    /**ref element target for react-aria accessibility*/
    buttonRef?: RefObject<HTMLButtonElement>;
    /**ReactNode element for Icon at the end of Button text*/
    endIcon?: IconVariants;
    /**ReactNode element for Icon at the end of Button text*/
    hoverEndIcon?: IconVariants;
    /** Optional button variants object for button extension */
    buttonVariants?: {};
    /**Variant size object*/
    variantSizeObj?: {};
    /**Variant extension for Button */
    variant?: AllButtonVariants;
  };
