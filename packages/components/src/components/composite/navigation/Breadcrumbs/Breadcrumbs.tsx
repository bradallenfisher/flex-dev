/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Flex } from '../../../base-components/layout';
import { BreadcrumbItemProps } from './BreadcrumbsTypes';
import NextLink from 'next/link';
import { WithChildren } from '@psu-flex/common-ui';
import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';

//will likely need to test with usePathname for functionality when cms gets into contract
export const BreadcrumbItem = ({
  children,
  isCurrent,
  isDisabled,
  to,
  ...props
}: WithChildren<BreadcrumbItemProps>) => {
  let ref = useRef(null);
  let { itemProps } = useBreadcrumbItem(
    { ...props, elementType: 'span', children },
    ref
  );

  return (
    <li>
      <NextLink
        {...itemProps}
        href={to as any}
        ref={ref}
        className="hover-underline"
        sx={{
          variant: 'text.menu.list.16',
          color: isCurrent ? 'coalyGray' : 'link',
          cursor: isCurrent ? 'default' : 'pointer',
          //disable href if isCurrent
          pointerEvents: isCurrent ? 'none' : 'auto',
        }}
      >
        {children}
      </NextLink>
      {!isCurrent && (
        <span sx={{ variant: 'text.menu.list.16', px: 2 }} aria-hidden="true">
          /
        </span>
      )}
    </li>
  );
};
export const Breadcrumbs = (props) => {
  let { navProps } = useBreadcrumbs(props);
  let childCount = React.Children.count(props.children);
  let extraSx = props.extraSx || {};

  return (
    <nav sx={{ mb: [6, 6, 6, 9], ...extraSx }} {...navProps}>
      <Flex tag="ol" className="list-none">
        {React.Children.map(props.children, (child, i) =>
          React.cloneElement(child, { isCurrent: i === childCount - 1 })
        )}
      </Flex>
    </nav>
  );
};
