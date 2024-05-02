/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import React from 'react';
import { CtaButtonProps } from './CtaButtonTypes';
import { Button } from '../Button';
import { ctaButtonVariants, ctaSizeObj } from './CtaButtonStyles';
import { generateIcId } from '@psu-flex/utility-functions';

/** CtaButton allows user to take action*/

export const CtaButton = ({
  variant = 'primaryFilled',
  size = 'sm',
  endIcon,
  hocId,
  ...props
}: CtaButtonProps) => {
  const icId = generateIcId(CtaButton, hocId, variant);
  return (
    <Button
      id={icId}
      variantSizeObj={ctaSizeObj(endIcon)}
      buttonVariants={ctaButtonVariants}
      size={size}
      endIcon={endIcon}
      {...props}
      variant={variant}
    />
  );
};
