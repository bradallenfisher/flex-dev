/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { forwardRef } from 'react';
import { Card } from '../../../base-components/surface';
import { Heading, Body, Icon } from '../../../base-components/data-display';
import { Flex } from '../../../base-components/layout';
import { QuickNavCardProps } from './QuickNavCardTypes';

/** QuickNavCards presents 3-12 Cards used for navigation. */

export const QuickNavCard = forwardRef(function QuickNavCards(
  { heading, body, to, ...props }: QuickNavCardProps,
  ref: any
) {
  const stateSx = {
    backgroundColor: 'beaverBlue',
    transform: 'scale(1.019)',
  };

  return (
    <div ref={ref && ref} {...props}>
      <Card
        className="h-full"
        backgroundColor="nittanyNavy"
        borderRadius="md"
        extraSx={{
          '&:hover': { ...stateSx },
          minHeight: '200px',
          pb: [5, 6, 5, 6],
          px: [5, 6, 5, 6],
          pt: ['94px', '88px', '88px', '119px'],
        }}
        to={to}
        linkWrapperSx={{
          '&:focus-visible > div': {
            ...stateSx,
          },
        }}
        dropShadow="sm-1"
      >
        <Flex
          alignItems="flex-start"
          className="h-full"
          direction="column"
          justifyContent="flex-end"
        >
          <Heading color="white" variant={28} tag="h4" responsiveType="column">
            {heading}
          </Heading>
          <Flex
            alignItems="flex-end"
            justifyContent="space-between"
            className="w-full"
          >
            <Body
              color="white"
              variant={20}
              extraSx={{ mr: 3, mt: 4 }}
              responsiveType="column"
            >
              {body}
            </Body>
            <Icon icon="chevronRightDouble" size={28} color="white" />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
});
