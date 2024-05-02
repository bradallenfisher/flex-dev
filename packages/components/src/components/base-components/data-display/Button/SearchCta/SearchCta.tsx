/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { SearchCtaProps } from './SearchCtaTypes';
import { Button } from '../Button';
import { searchCtaSizeObj, searchCtaVariants } from './SearchCtaStyles';

export const SearchCta = ({
  variant = 'linkLight',
  size = 'sm',
  endIcon,
  ...props
}: SearchCtaProps) => {
  return (
    <Button
      className="uppercase"
      variantSizeObj={searchCtaSizeObj}
      buttonVariants={searchCtaVariants}
      size={size}
      endIcon={endIcon}
      {...props}
      variant={variant}
    />
  );
};
