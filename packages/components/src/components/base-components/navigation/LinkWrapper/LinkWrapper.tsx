/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import NextLink from 'next/link';
import { WithChildren } from '@psu-flex/common-ui';
import { LinkWrapperProps } from './LinkWrapperTypes';
import { underlineSx } from './LinkWrapperStyles';

/**The LinkWrapper component allows you to wrap components with a clickable link.
 *
 * ```jsx
    <LinkWrapper to='https://www.psu.edu/'>
    ...components
    </LinkWrapper>
    ```
 */

export const LinkWrapper = ({
  to,
  underline = 'none',
  ...props
}: WithChildren<LinkWrapperProps>) => {
  const { className, extraSx, children, ...rest } = props;

  const linkSx = {
    ...underlineSx(underline),
    width: 'fit-content',
    ...extraSx,
  };

  const internal: boolean = /^\/(?!\/)/.test(to);
  if (internal) {
    // Generate RSS XML links as <a> tags in order to prevent prefetching.
    const rssxml: boolean = /\/rss\.xml$/.test(to);
    if (rssxml) {
      return (
        <a sx={{ ...linkSx }} href={to} {...rest}>
          {children}
        </a>
      );
    } else {
      return (
        <NextLink
          sx={{
            ...linkSx,
          }}
          href={to}
          {...rest}
        >
          {children}
        </NextLink>
      );
    }
  } else {
    return (
      <a
        sx={{
          ...linkSx,
        }}
        href={to}
        {...rest}
      >
        {children}
      </a>
    );
  }
};
