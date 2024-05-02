'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { BoxProps } from './BoxTypes';
import { forwardRef } from 'react';

/** The Box component is a generic container for grouping other components. Its useful alternative to div when you need to nest theme styling to avoid having to add use client flag in a higher order component
 *
 * ```jsx
 *  <Box>
 *    <Heading>Heading</Heading>
 *    <Body>body</Body>
 *  </Box>
 * ```
 */

export const Box = forwardRef(function Box(
  { tag: Tag = 'div', ...props }: WithChildren<BoxProps>,
  ref
) {
  const { extraSx, ...rest } = props;
  return (
    <Tag
      ref={ref && ref}
      sx={{
        ...extraSx,
      }}
      {...rest}
    />
  );
});
