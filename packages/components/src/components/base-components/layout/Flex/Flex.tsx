/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FlexProps } from './FlexTypes';
import { WithChildren } from '@psu-flex/common-ui';
import { forwardRef } from 'react';
import { flexVariants } from './FlexStyles';

/**Use the Flex component to create flexbox layouts.
 *
 * ```jsx
 * <Flex variant='responsive' gutterX={10} gap={4} gutterY={10}>
     ...
    </Flex>
 * ```
*/

export const Flex = forwardRef(function Flex(
  {
    variant,
    gap = 0,
    gutterX,
    wrap,
    responsive,
    gutterY,
    alignItems,
    justifyContent,
    direction,
    tag: Tag = 'div',
    ...props
  }: WithChildren<FlexProps>,
  ref
) {
  const { extraSx, ...rest } = props;
  return (
    <Tag
      ref={ref && ref}
      sx={{
        display: 'flex',
        ...(props.onClick && { cursor: 'pointer' }),
        ...(variant && flexVariants[variant]),
        ...(responsive && flexVariants.responsive),
        ...(wrap ? { flexWrap: 'wrap' } : { flexWrap: 'nowrap' }),
        ...(gutterX && { mx: gutterX }),
        ...(gutterY && { my: gutterY }),
        ...(gap && { gap: gap }),
        ...(alignItems && { alignItems: alignItems }),
        ...(direction && { flexDirection: direction }),
        ...(justifyContent && { justifyContent: justifyContent }),
        ...extraSx,
      }}
      {...rest}
    />
  );
});
