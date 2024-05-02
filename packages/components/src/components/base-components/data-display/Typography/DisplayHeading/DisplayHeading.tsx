/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Typography } from '../Typography';
import { DisplayHeadingProps } from './DisplayHeadingTypes';
import { WithChildren } from '@psu-flex/common-ui';
/**Use DisplayHeading to present your display heading text as clearly and efficiently as possible.
 *
 * ```jsx
 * <DisplayHeading variant={48} color="nittanyNavy" align="center">
     This is a h1 DisplayHeading
    </DisplayHeading>
    ```
*/

export const DisplayHeading = ({
  variant,
  tag = 'h1',
  color = 'nittanyNavy',
  responsiveType = 'full',
  ...props
}: WithChildren<DisplayHeadingProps>) => {
  return (
    <Typography
      tag={tag}
      color={color}
      variant={`displayStyle.${responsiveType}.${variant}`}
      {...props}
    />
  );
};
