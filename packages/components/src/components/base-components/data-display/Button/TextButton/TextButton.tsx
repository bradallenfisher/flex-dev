/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import React from 'react';
import { TextButtonProps } from './TextButtonTypes';
import { Button } from '../Button';
import { textButtonVariants } from './TextButtonStyles';
import { generateIcId } from '@psu-flex/utility-functions';

export const TextButton = ({
  endIcon,
  hoverEndIcon,
  variant = 'primary',
  ...props
}: TextButtonProps) => {
  const { extraSx, hocId, ...rest } = props;
  const icId = generateIcId(TextButton, hocId, variant);

  return (
    <Button
      id={icId}
      endIcon="chevronRight"
      hoverEndIcon="arrowRight"
      variant={variant}
      size="md"
      buttonVariants={textButtonVariants}
      extraSx={{
        p: 0,
        ...extraSx,
      }}
      {...rest}
    />
  );
};
