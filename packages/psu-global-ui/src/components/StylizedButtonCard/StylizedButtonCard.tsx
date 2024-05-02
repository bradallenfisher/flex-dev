/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Card, Icon, Heading, Divider } from '@psu-flex/core-ui';
import { StylizedButtonCardProps } from './StylizedButtonCardTypes';

/** StylizedButtonCards present 3-4 Cards used for navigation. */

export const StylizedButtonCard = ({
  itemHeading,
  itemTo,
  ...props
}: StylizedButtonCardProps) => {
  const stateSx = {
    backgroundColor: 'beaverBlue',
    transform: 'scale(1.019)',
  };

  return (
    <div {...props}>
      <Card
        className="h-full"
        justifyContent="flex-end"
        backgroundColor="nittanyNavy"
        direction="column"
        alignItems="flex-start"
        borderRadius="md"
        px={props.columnSpan === 4 ? 6 : [6, 6, 5, 6]}
        extraSx={{
          '&:hover': { ...stateSx },
          minHeight: '160px',
          pb: props.columnSpan === 4 ? 6 : [6, 6, 5, 6],
          pt: '79px',
        }}
        to={itemTo}
        dropShadow="sm-1"
        linkWrapperSx={{
          '&:focus-visible > div': {
            ...stateSx,
          },
        }}
      >
        <Divider size="20px" thickness="lg" color="creekTeal" />
        <div className="flex items-end justify-between" sx={{ width: '100%' }}>
          <Heading
            color="white"
            variant={28}
            tag="h4"
            responsiveType="column"
            extraSx={{
              fontWeight: 'medium',
              mr: 4,
            }}
          >
            {itemHeading}
          </Heading>
          <Icon icon="arrowRight" size={28} color="white" />
        </div>
      </Card>
    </div>
  );
};
