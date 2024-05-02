/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import NextLink from 'next/link';
import { WithChildren } from '@psu-flex/common-ui';
import { LinkProps } from './LinkTypes';
import { baseLinkSx, underlineSx } from './LinkStyles';

/**The Link component allows you to easily customize anchor elements with your theme colors and typography styles. Link supports internal and external paths.
 * Link is is built on top of Heading variants, meaning you can use its variant props
 *
 * ```jsx
    <Link to='https://www.psu.edu/' variant={24} color='beaverBlue'>
    Link
    </Link>
    ```
 */

export const Link = ({
  to,
  variant,
  typeStyle = 'headingStyle',
  underline = 'hover',
  color = 'link',
  responsiveType = 'full',
  ...props
}: WithChildren<LinkProps>) => {
  const { extraSx, children, ...rest } = props;

  const linkSx = {
    ...baseLinkSx(color, variant, responsiveType, typeStyle),
    ...extraSx,
    ...underlineSx(underline),
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
    }

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
};
