/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { Flex, Heading, CtaButton, useBreakpoints } from '@psu-flex/core-ui';
import { EventCardGroupProps } from './EventCardGroupType';
import { EventCard } from '../EventCard/EventCard';
import { EventCardProps } from '../EventCard/EventCardTypes';

export function EventCardGroup({
  groupHeading,
  items = [],
  columnSpan,
  buttonLabel,
  buttonTo,
  initialCardCount = 8,
  cardIncrement = 8,
  ...props
}: EventCardGroupProps) {
  const { isSm, isMd, isLg } = useBreakpoints();
  const useLoadMore = !(typeof buttonTo === 'string' && buttonTo);
  const [cardsToDisplay, setCardsToDisplay] = useState(initialCardCount);
  const [cardCollection, setCardCollection] = useState<EventCardProps[]>([]);
  const handleLoadMore = () =>
    setCardsToDisplay(cardsToDisplay + cardIncrement);
  useEffect(
    () =>
      Array.isArray(items) && items.length !== 0
        ? setCardCollection(
            useLoadMore ? items.slice(0, cardsToDisplay) : items
          )
        : undefined,
    [items, cardsToDisplay, useLoadMore]
  );

  return (
    <Flex
      extraSx={{
        flexWrap: 'wrap',
        padding: `${
          isSm || isMd || isLg
            ? 'var(--12x, 3rem) var(--margin-xl, 3.875rem)'
            : '0'
        }`,
        flexDirection: 'column',
      }}
    >
      {groupHeading && (
        <Heading
          tag="h2"
          variant={36}
          extraSx={{
            fontFamily: 'Roboto',
            fontSize: '2.25rem',
            fontWeight: '700',
            lineHeight: '120%',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--2x, 0.5rem)',
            justifyContent: 'flex-start',
            flex: '1 0 0',
            marginBottom: '2rem',
          }}
        >
          {groupHeading}
        </Heading>
      )}
      <Flex
        {...props}
        extraSx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: '4rem var(--7x, 1.75rem)',
          alignSelf: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {cardCollection.map((item, index) => (
          <EventCard
            key={index}
            itemHeading={item?.itemHeading}
            itemBody={item?.itemBody}
            itemTo={item?.itemTo}
            itemDate={item?.itemDate}
            itemIcon={item?.itemIcon}
          />
        ))}
      </Flex>
      {/* Load more feature is used if buttonTo is undefined */}
      {(!useLoadMore || items.length > cardsToDisplay) && (
        <Flex
          extraSx={{
            paddingTop: 'var(--12x, 3rem)',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--2x, 0.5rem)',
            alignSelf: 'stretch',
          }}
        >
          <CtaButton
            variant="primaryOutlined"
            to={useLoadMore ? undefined : buttonTo}
            onClick={useLoadMore ? handleLoadMore : undefined}
            extraSx={{
              padding: '1rem 3.25rem',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            {useLoadMore ? 'Load More' : buttonLabel}
          </CtaButton>
        </Flex>
      )}
    </Flex>
  );
}
