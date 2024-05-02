/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { Flex, Wrapper, Heading, CtaButton } from '@psu-flex/core-ui';
import { NewsCardsItem } from '../NewsCard/NewsCardItem';
import { NewsCardGroupProps } from './NewsCardGroupTypes';

export function NewsCardGroup({
  groupHeading,
  cards,
  columnSpan,
  buttonLabel,
  buttonTo,
  initialCardCount = 8,
  cardIncrement = 8,
  ...props
}: NewsCardGroupProps) {
  const useLoadMore = !(typeof buttonTo === 'string' && buttonTo);
  const [cardsToDisplay, setCardsToDisplay] = useState(initialCardCount);
  const [cardCollection, setCardCollection] = useState(cards.slice(0, cardsToDisplay));
  const handleLoadMore = () => setCardsToDisplay(cardsToDisplay + cardIncrement);
  useEffect(
    () => setCardCollection(useLoadMore ? cards.slice(0, cardsToDisplay) : cards),
    [cards, cardsToDisplay, useLoadMore]
  );

  return (
    <Wrapper extraSx={{ backgroundColor: "white" }}>
      {groupHeading && (
        <Heading tag="h2" variant={32} extraSx={{ mb: 6 }}>
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
          <NewsCardsItem
            key={index}
            itemHeading={item?.itemHeading}
            itemBody={item?.itemBody}
            itemImage={item?.itemImage}
            imageWidth={316}
            imageHeight={177}
            itemTo={item?.itemTo}
            itemDateTitle="Date Posted:"
            itemDatePosted={item?.itemDatePosted}
          />
        ))}
      </Flex>
      {/* Load more feature is used if buttonTo is undefined */}
      {(!useLoadMore || cards.length > cardsToDisplay) && (
        <Flex gap={0} variant="center" extraSx={{ mt: 8 }}>
          <CtaButton
            variant="primaryOutlined"
            to={useLoadMore ? undefined : buttonTo}
            onClick={useLoadMore ? handleLoadMore : undefined}
          >
            {useLoadMore ? 'Load More' : buttonLabel}
          </CtaButton>
        </Flex>
      )}
    </Wrapper>
  );
}
