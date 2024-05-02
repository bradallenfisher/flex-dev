/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { forwardRef } from 'react';
import { Flex } from '../../../base-components/layout';
import { Heading, Icon, Body } from '../../../base-components/data-display';
import { Card } from '../../../base-components/surface';
import { IconCardProps } from './IconCardTypes';

/** IconCard presents 2-12 Cards with an Icon, heading, and body. Each IconCard has an internal or external link */

export const IconCard = forwardRef(function IconCard(
  { itemHeading, itemBody, itemIcon, itemTo, ...props }: IconCardProps,
  ref: any
) {
  const cardHoverSx = {
    '&:hover': {
      boxShadow: 'lg-1',
    },
    '&:hover > div > h2': {
      textDecoration: 'underline',
    },
  };

  return (
    <div ref={ref && ref} {...props}>
      <Card
        className="h-full"
        backgroundColor="white"
        px={[6, 7, 7, 8]}
        py={[8, 9, 9, 10]}
        extraSx={{
          ...cardHoverSx,
        }}
        to={itemTo}
        square
        dropShadow="sm-1"
      >
        <Flex alignItems="center" direction="column">
          <Icon size={60} extraSx={{ mb: 4 }} color="skyBlue" icon={itemIcon} />
          <Heading
            align="center"
            extraSx={{
              mb: 3,
            }}
            tag="h2"
            responsiveType="column"
            color="nittanyNavy"
            variant={22}
          >
            {itemHeading}
          </Heading>
          <Body align="center" variant={18}>
            {itemBody}
          </Body>
        </Flex>
      </Card>
    </div>
  );
});
