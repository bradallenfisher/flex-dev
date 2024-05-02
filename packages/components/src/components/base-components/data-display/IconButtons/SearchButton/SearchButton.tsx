/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { SearchButtonProps } from './SearchButtonTypes';
import { useButton } from 'react-aria';
import { Icon } from '../../Icon/Icon';
import {
  baseSx,
  iconSx,
  searchButtonSizeObj,
  searchButtonVariants,
} from './SearchButtonStyles';
import { generateIcId } from '@psu-flex/utility-functions';

/** Description */

export const SearchButton = ({
  size = 'sm',
  icon = 'search',
  variant = 'transparent',
  menuButtonRef,
  ...props
}: SearchButtonProps) => {
  const { extraSx, ...rest } = props;
  let ref = menuButtonRef;
  let { buttonProps } = useButton(props, ref);
  const icId = generateIcId(SearchButton, props.hocId, variant);

  return (
    <button
      id={icId}
      sx={{
        ...baseSx,
        ...searchButtonVariants[variant],
        ...iconSx(variant),
        ...extraSx,
        p: searchButtonSizeObj[size].p,
      }}
      {...buttonProps}
      ref={menuButtonRef && ref}
      {...rest}
      aria-label="search-button"
      className="w-fit"
    >
      <Icon
        className="flex"
        size={searchButtonSizeObj[size].iconSize}
        icon={icon}
      />
    </button>
  );
};
