/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { AdvanceButtonProps } from './AdvanceButtonTypes';
import {
  advanceButtonVariants,
  advanceButtonSizeScale,
  getIconStyles,
  getBaseSx,
} from './AdvanceButtonStyles';
import { Icon } from '../../Icon/Icon';
import { generateIcId } from '@psu-flex/utility-functions';
import { getIconButtonSizeProperty } from '../iconButtonUtilities';
/** AdvanceButton is an IconButton thats used to advance to next item in list or set of data */

export const AdvanceButton = ({
  size = 'responsive',
  icon = 'chevronLeft',
  variant,
  menuButtonRef,
  direction = 'left',
  hocId,
  ...props
}: AdvanceButtonProps) => {
  const { extraSx, ...rest } = props;
  const icId = generateIcId(AdvanceButton, hocId, direction);

  // Determine padding and icon size based on the provided size
  const iconSize: any = getIconButtonSizeProperty(
    advanceButtonSizeScale,
    size,
    variant,
    'iconSize'
  );

  return (
    <button
      sx={{
        ...getBaseSx(direction),
        ...advanceButtonVariants[variant],
        ...getIconStyles(variant),
        ...extraSx,
      }}
      id={icId && icId}
      aria-label="advance-button"
      className="w-fit"
      {...rest}
    >
      <Icon
        className="flex"
        size={iconSize}
        icon={icon}
        extraSx={{
          '& > svg': {
            transition: 'none',
            ...(direction === 'right' && { transform: 'rotate(180deg)' }),
          },
        }}
      />
    </button>
  );
};
