/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { PlayButtonProps } from './PlayButtonTypes';
import { Icon } from '../../Icon/Icon';
import {
  baseSx,
  playButtonVariants,
  iconSx,
  playButtonSizeScale,
} from './PlayButtonStyles';
import { generateIcId, mergeSx } from '@psu-flex/utility-functions';
import { getIconButtonSizeProperty } from '../iconButtonUtilities';

/** PlayButton is an IconButton used to toggle play and pause state of a video */

export const PlayButton = ({
  size = 'responsive',
  variant,
  isPaused,
  hocId,
  ...props
}: PlayButtonProps) => {
  const { extraSx, ...rest } = props;
  const icId = generateIcId(PlayButton, hocId, variant);

  const playButtonSx = mergeSx(
    baseSx,
    playButtonVariants[variant],
    iconSx(variant),
    extraSx
  );

  // Determine padding and icon size based on the provided size
  const padding = getIconButtonSizeProperty(
    playButtonSizeScale,
    size,
    variant,
    'p'
  );
  const iconSize: any = getIconButtonSizeProperty(
    playButtonSizeScale,
    size,
    variant,
    'iconSize'
  );

  return (
    <button
      id={icId}
      sx={{
        ...playButtonSx,
        p: padding,
        width: 'fit-content',
      }}
      aria-label={isPaused ? 'Play video' : 'Pause video'}
      {...rest}
    >
      <Icon
        className="flex"
        size={iconSize}
        icon={isPaused ? 'playArrow' : 'pause'}
      />
    </button>
  );
};
