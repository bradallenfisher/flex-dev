import { RefObject } from 'react';
import { AriaTagProps } from 'react-aria';
import { ListState } from 'react-stately';
import { BaseProps } from '@psu-flex/common-ui';

export type TagVariants = 'outlined' | 'filled';
export type TagSizes = 'sm' | 'md';

export type TagProps = AriaTagProps<any> &
  BaseProps & {
    /**Size of tag*/
    size?: TagSizes;
    /**ref element target for react-aria accessibility*/
    tagRef?: RefObject<HTMLButtonElement>;
    /**Variant for tag */
    variant: TagVariants;
    /**state for tag when used in TagGroup */
    state: ListState<any>;
  };
