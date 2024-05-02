/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonProps } from './ButtonTypes';
import { Link } from '../../navigation/index';
import { WithChildren } from '@psu-flex/common-ui';
import { Icon } from '../Icon/Icon';
import {
  baseButtonSx,
  defaultSizeObj,
  endIconSx,
  hoverEndIconSx,
} from './ButtonStyles';
import { mergeSx } from '@psu-flex/utility-functions';

/** This is the parent Button component. The Button extensions CtaButton, NavButton, and TextButton inherit common styling and functionality from it. */

export const Button = ({
  to,
  size = 'md',
  endIcon,
  hoverEndIcon,
  buttonRef,
  buttonVariants,
  variantSizeObj,
  variant,
  ...props
}: WithChildren<ButtonProps>) => {
  const { extraSx, children, ...rest } = props;
  let ref = buttonRef;
  let { buttonProps } = useButton(props, ref as any);

  // set tag to "a" when href is present, and set tag to "button" when href is not present
  const Tag: any = to ? Link : 'button';
  const linkProps = to && { to: to, underline: 'none' };
  const buttonSx = mergeSx(
    baseButtonSx(size),
    endIcon && endIconSx(buttonVariants, variant),
    hoverEndIcon && hoverEndIconSx,
    (buttonVariants as any)[variant as any],
    variantSizeObj ? variantSizeObj[size] : defaultSizeObj(endIcon)[size],
    extraSx
  );

  return (
    <Tag
      sx={{
        ...buttonSx,
      }}
      {...(!to && { ...buttonProps })}
      ref={buttonRef && ref}
      {...rest}
      {...linkProps}
    >
      {children}
      {endIcon && (
        <Icon
          id="end-icon"
          className="flex"
          extraSx={{ ml: 1 }}
          size={12}
          icon={endIcon}
        />
      )}
      {hoverEndIcon && (
        <Icon
          id="hover-end-icon"
          extraSx={{ ml: 1, display: 'none' }}
          size={20}
          icon={hoverEndIcon}
        />
      )}
    </Tag>
  );
};
