import React from 'react';
import { jsx, NewsCardGroup, NewsCardGroupProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import demoImage from './assets/images/🎛 Fixed Aspect Ratio Spacer (Variants).png';

// The maximum number of cards to display in the card group for demo purposes.
const CARDS_TO_DISPLAY_MAX = 30;
const CARDS_TO_DISPLAY_DEFAULT = 4;

const getCardsFromCollection = <T=Record<string, any>,>(collection: T[], totalCards = CARDS_TO_DISPLAY_DEFAULT) => {
  // Ensure that the card count is no greater than the CARDS_TO_DISPLAY_MAX and
  // contains at least 1 card.
  const cardCount = Math.min(Math.max(totalCards, 1), CARDS_TO_DISPLAY_MAX);
  const cards: typeof collection = [];
  while (collection.length > 0 && cards.length < cardCount) {
    cards.push(...collection.slice(0, cardCount - cards.length));
  }
  return cards;
};

type CardGroupStoryProps = Story<NewsCardGroupProps & { totalCards: number }>

export default {
  title: 'Global/NewsCardGroup',
  component: NewsCardGroup,
  argTypes: {
    sx: { table: { disable: true } },
    totalCards: {
      control: {
        type: 'number',
        min: 1,
        max: CARDS_TO_DISPLAY_MAX,
        step: 1,
      },
    },
  },
  args: {
    totalCards: CARDS_TO_DISPLAY_DEFAULT,
  },
} as Meta;

const newsCardsData = [
  {
    itemHeading: 'Americans will spend half their lives taking prescription drugs, study finds',
    itemBody:
      'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
    itemImage: demoImage,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: 'https://www.google.com/',
    itemDateTitle: 'Date Posted:',
    itemDatePosted: 'September 12, 2022'
  },
  {
    itemHeading: 'Penn State joins Big Ten institutions for third annual One Big Week',
    itemBody:
      'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
    itemImage: demoImage,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: 'https://www.google.com/',
    itemDateTitle: 'Date Posted:',
    itemDatePosted: 'September 12, 2022'
  },
  {
    itemHeading: '$2.5 million gift to solidify vibrant future at Penn State Hillel',
    itemBody:
      'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
    itemImage: demoImage,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: 'https://www.google.com/',
    itemDateTitle: 'Date Posted:',
    itemDatePosted: 'September 12, 2022'
  },
  {
    itemHeading: 'Penn State to celebrate Indigenous Peoples Day with events Oct. 9-10',
    itemBody:
      'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
    itemImage: demoImage,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: 'https://www.google.com/',
    itemDateTitle: 'Date Posted:',
    itemDatePosted: 'September 12, 2022'
  }
];

const Template: CardGroupStoryProps = ({ totalCards }) => {
  return (
    <NewsCardGroup
      columnSpan={1}
      cards={getCardsFromCollection(newsCardsData, totalCards)}
      buttonLabel="View All News"
      buttonTo="#"
      groupHeading="News Article Placeholder"
      initialCardCount={4}
      cardIncrement={4}
    />
  )
};

export const Default = Template.bind({});
Default.args = {};