/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Typography } from '../Typography';
import { HeadingProps } from './HeadingTypes';
import { WithChildren } from '@psu-flex/common-ui';
/**Use Heading to present your heading text as clearly and efficiently as possible.
 *
 *```jsx
 * <Heading variant={16} color="coalyGray">
     This is a h2 Heading
    </Heading>
    ```
 *
*/

export const Heading = ({
  tag = 'h2',
  variant,
  responsiveType = 'full',
  color = 'nittanyNavy',
  ...props
}: WithChildren<HeadingProps>) => {
  const { extraSx, ...rest } = props;
  return (
    <Typography
      color={color}
      tag={tag}
      extraSx={{
        ...(tag === 'h1' ? { fontFamily: 'serif' } : { fontFamily: 'sans' }),
        ...extraSx,
      }}
      variant={`headingStyle.${responsiveType}.${variant}`}
      {...rest}
    />
  );
};
