/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import React from 'react';
import { WideButtonProps } from './WideButtonTypes';
import { wideButtonVariants, wideSizeObj } from './WideButtonStyles';
import { Button } from '../Button';
import { generateIcId } from '@psu-flex/utility-functions';

export const WideButton = ({
  variant = 'beaverBlueRounded',
  size = 'md',
  endIcon,
  ...props
}: WideButtonProps) => {
  const icId = generateIcId(WideButton, props.hocId, variant);

  return (
    <Button
      id={icId}
      variantSizeObj={wideSizeObj}
      buttonVariants={wideButtonVariants}
      size={size}
      {...props}
      variant={variant}
    />
  );
};
