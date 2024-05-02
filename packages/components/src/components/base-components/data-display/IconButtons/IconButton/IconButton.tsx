/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { Link, LinkWrapper } from '../../../navigation';
import { Icon } from '../../Icon/Icon';
import { IconButtonProps } from './IconButtonTypes';
import {
  unfilledVariants,
  filledVariants,
  iconButtonSizeScale,
  typePaddingSx,
  baseButtonSx,
} from './IconButtonStyles';
import { IconColors } from '../../Icon/IconTypes';
import { generateIcId } from '@psu-flex/utility-functions';
import { getIconButtonSizeProperty } from '../iconButtonUtilities';

/** Standard IconButtons are used for toggles, and social buttons. They can also be used in an IconGroup */

export const IconButton = ({
  to,
  size,
  icon,
  variant,
  type = 'filled',
  ...props
}: WithChildren<IconButtonProps>) => {
  const { extraSx, ...rest } = props;
  const idVariant = `${icon}-${type}-${variant}`;
  const icId = generateIcId(IconButton, props.hocId, idVariant);

  const iconButtonVariants = {
    unfilled: unfilledVariants[variant],
    filled: filledVariants[variant],
  };

  const Tag: any = to ? Link : 'button';
  const linkProps = { to: to, underline: 'none' };

  const iconSize: any = getIconButtonSizeProperty(
    iconButtonSizeScale,
    size,
    variant,
    'iconSize'
  );

  return (
    <Tag
      {...(to && { ...linkProps })}
      id={icId}
      className="pointer flex"
      aria-label={`IconButton${to ? '-to:' + to : ''}`}
      sx={{
        ...baseButtonSx(type, variant),
        ...iconButtonVariants[type],
        ...typePaddingSx[type],
        ...extraSx,
      }}
      {...rest}
    >
      <Icon
        className="flex"
        color={iconButtonVariants[type].iconColor as IconColors}
        size={iconSize}
        icon={icon as any}
      />
    </Tag>
  );
};
