/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TypographyProps } from './TypographyTypes';
import { WithChildren } from '@psu-flex/common-ui';
/**Use Typography to present your design and content as clearly and efficiently as possible.
 *
 * *Note: Generally, its recommended to use <b>Heading, Body, or Display Heading</b> extension components for specific typography requirements. However the base Typography allows for more flexibility in certain edge cases.*
 *
 *```jsx
 * <Typography size={32} tag="h2" color="coalyGray" align="center">
     Typography
    </Typography>
    ```
 */

export const Typography = ({
  variant,
  color,
  size = 18,
  tag: Tag = 'p',
  align = 'inherit',
  ...props
}: WithChildren<TypographyProps>) => {
  const { extraSx, ...rest } = props;
  return (
    <Tag
      sx={{
        textAlign: align,
        fontSize: !variant && size && size,
        variant: `text.${variant}`,
        ...(color && { color: `${color}` }),
        ...extraSx,
      }}
      {...rest}
    />
  );
};
