/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { CloseButtonProps } from './CloseButtonTypes';
import { Icon } from '../../Icon/Icon';
import {
  baseSx,
  closeButtonSizeScale,
  closeButtonVariants,
  iconSx,
} from './CloseButtonStyles';
import { generateIcId } from '@psu-flex/utility-functions';
import { getIconButtonSizeProperty } from '../iconButtonUtilities';

/** CloseButton is an IconButton thats used to toggle a window to closed state */

export const CloseButton = ({
  size = 'responsive',
  icon = 'close',
  variant,
  menuButtonRef,
  hocId,
  ...props
}: CloseButtonProps) => {
  const { extraSx, ...rest } = props;
  const icId = generateIcId(CloseButton, hocId, variant);

  const iconSize: any = getIconButtonSizeProperty(
    closeButtonSizeScale,
    size,
    variant,
    'iconSize'
  );

  return (
    <button
      className="w-fit"
      id={icId}
      sx={{
        ...baseSx,
        ...closeButtonVariants[variant],
        ...iconSx(variant),
        ...extraSx,
      }}
      aria-label="close-button"
      {...rest}
    >
      <Icon className="flex" size={iconSize} icon={icon} />
    </button>
  );
};
