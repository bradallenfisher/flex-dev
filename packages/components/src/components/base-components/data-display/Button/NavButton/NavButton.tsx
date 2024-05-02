/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import React from 'react';
import { NavButtonProps } from './NavButtonTypes';
import { Button } from '../Button';
import { navButtonVariants, navSizeObj } from './NavButtonStyles';
import { generateIcId } from '@psu-flex/utility-functions';

export const NavButton = ({
  variant = 'linkOutlined',
  size = 'sm',
  ...props
}: NavButtonProps) => {
  const icId = generateIcId(NavButton, props.hocId, variant);

  return (
    <Button
      id={icId}
      variantSizeObj={navSizeObj}
      buttonVariants={navButtonVariants}
      size={size}
      variant={variant}
      {...props}
    />
  );
};
