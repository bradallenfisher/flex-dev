/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { MenuButtonProps } from './MenuButtonTypes';
import {
  baseSx,
  iconSx,
  menuButtonSizeObj,
  menuButtonVariants,
} from './MenuButtonStyles';
import { Icon } from '../../Icon/Icon';
import { generateIcId } from '@psu-flex/utility-functions';
/** MenuButton is an IconButton specifically for toggling menus to open state */

export const MenuButton = ({
  size = 'sm',
  icon = 'menu',
  variant = 'transparent',
  ...props
}: MenuButtonProps) => {
  const { extraSx, ...rest } = props;
  const icId = generateIcId(MenuButton, props.hocId, variant);

  return (
    <button
      id={icId}
      sx={{
        ...baseSx,
        ...menuButtonVariants[variant],
        ...iconSx(variant),
        ...extraSx,
        p: menuButtonSizeObj[size].p,
      }}
      aria-label="toggle-menu"
      className="w-fit"
      {...rest}
    >
      <Icon
        className="flex"
        size={menuButtonSizeObj[size].iconSize}
        icon={icon}
      />
    </button>
  );
};
