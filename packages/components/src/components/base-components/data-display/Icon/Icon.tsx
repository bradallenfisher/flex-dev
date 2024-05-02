/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useId } from 'react';
import iconPaths from '@psu-flex/icon-library';
import theme from '@psu-flex/platform-theme';
import { IconProps } from './IconTypes';

/** Use to the Icon component to represent icons from designs in an svg format. All icons available can be found in Icon token docs & the iconLibrary.js. To reference an icon from the library, simply pass the icon key into the Icon component.
 *
 * ```jsx
 * <Icon size={36} color="link" icon="play" />
 * ```
 */

export const Icon = ({
  size = 32,
  color = 'nittanyNavy',
  icon,
  onClick,
  ...props
}: IconProps) => {
  const { colors } = theme;
  const { extraSx, className, ...rest } = props;
  const titleId = `${useId() + '-Icon' + '-' + icon}`;

  const path = iconPaths?.[icon]?.path;
  if (path === undefined) {
    console.error(`Undefined icon: ${icon}`);
  }

  // check if size is responsive and set accordingly
  let iconSize: any;
  if (Array.isArray(size)) {
    // If size is an array, map over each item to set width and height
    iconSize = size.map((s) => `${s}px`);
  } else {
    // If size is not an array, set width and height using the single size value
    iconSize = `${size}px`;
  }

  return (
    <span
      className={className}
      sx={{
        cursor: onClick && 'pointer',
        width: iconSize,
        height: iconSize,
        display: 'flex',
        ...extraSx,
      }}
      {...rest}
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        sx={{ width: { iconSize }, height: { iconSize } }}
        viewBox="0 0 24 24"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title id={titleId}>{icon + ' ' + 'icon'}</title>
        {path && <path fill={`${colors[color]}`} d={path} />}
      </svg>
    </span>
  );
};
