/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex } from '@psu-flex/core-ui';
import { Heading, Icon, Body, Card } from '@psu-flex/core-ui';
import { forwardRef } from 'react';
import { EventCardProps } from './EventCardTypes';
import dayjs from 'dayjs';

/**
 *
IconCard presents 2-12 Cards with an Icon, heading, and body. Each IconCard has an internal or external link
*/

export const EventCard = forwardRef(function IconCardsItem(
  {
    itemHeading,
    itemBody,
    itemIcon,
    itemTo,
    itemDate,
    ...props
  }: EventCardProps,
  ref: any
) {
  const cardHoverSx = {
    '&:hover': {
      boxShadow: 'md-1',
    },
    '&:hover > div > h4': {
      textDecoration: 'underline',
    },
  };
  const formattedDate = itemDate ? dayjs(itemDate).format('dddd, MMMM D') : '';
  return (
    <div
      ref={ref && ref}
      {...props}
      sx={{
        display: 'flex',
        minWidth: '18.75rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--4x, 1rem)',
        flex: '1 0 0',
      }}
    >
      <Card
        className="h-full"
        extraSx={{
          ...cardHoverSx,
          paddingLeft: '0',
          paddingRight: '0',
          maxWidth: '319px',
        }}
        to={itemTo}
        square
      >
        <Flex gap={0} alignItems="center" variant="col">
          <Heading
            align="left"
            extraSx={{
              fontFamily: 'Roboto',
              fontSize: '1.5rem',
              fontWeight: '700',
              lineHeight: '120%',
              alignSelf: 'flex-start',
            }}
            tag="h1"
            responsiveType="column"
            variant={24}
          >
            {itemHeading}
          </Heading>
          <Body
            align="left"
            variant={16}
            extraSx={{
              display: '-webkit-box',
              webkitBoxOrient: 'vertical',
              webkitLineClamp: 4,
              textOverflow: 'ellipsis',
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
              mt: 2,
            }}
          >
            {itemBody}
          </Body>
        </Flex>
        <Flex
          extraSx={{
            alignItems: 'flex-start',
            gap: 'var(--1x, 0.25rem)',
            borderRadius: 'var(--1x, 0.25rem)',
            mt: 2,
          }}
        >
          <Icon
            size={24}
            extraSx={{
              width: 'var(--6x, 1.5rem)',
              height: 'var(--6x, 1.5rem)',
            }}
            color="beaverBlue"
            icon={'calendar'}
          />
          <Body
            align="left"
            color="beaverBlue"
            variant={16}
            extraSx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            {formattedDate}
          </Body>
        </Flex>
        <Flex
          extraSx={{
            alignItems: 'center',
            gap: 'var(--1x, 0.25rem)',
            mt: 2,
          }}
        >
          <Icon
            size={24}
            extraSx={{
              width: 'var(--6x, 1.5rem)',
              height: 'var(--6x, 1.5rem)',
            }}
            color="beaverBlue"
            icon={itemIcon.icon}
          />
          <Body
            align="left"
            color="beaverBlue"
            variant={16}
            extraSx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            {itemIcon.iconBody}
          </Body>
        </Flex>
      </Card>
    </div>
  );
});
