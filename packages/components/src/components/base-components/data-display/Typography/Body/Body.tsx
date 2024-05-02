/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Typography } from '../Typography';
import { WithChildren } from '@psu-flex/common-ui';
import { BodyProps } from './BodyTypes';

/**Use Body to present your body text as clearly and efficiently as possible.
 *
* ```jsx
 * <Body variant={16} color="coalyGray" align="center">
     This is a p Body
    </Body>
    ```
*/

export const Body = ({
  variant = 18,
  color = 'coalyGray',
  responsiveType = 'full',
  ...props
}: WithChildren<BodyProps>) => {
  return (
    <Typography
      tag="p"
      color={color}
      variant={`bodyStyle.${responsiveType}.${variant}`}
      {...props}
    />
  );
};
