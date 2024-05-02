/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  CardGroup,
  IconCardProps,
  IconCardsCardGroup,
} from '@psu-flex/psu-global-ui';
import { CardGroupProps } from '@psu-flex/psu-global-ui';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import { getCardsFromCollection } from '../../../utility/functions/getCardsCollection';
import { iconCardsData } from './example-data';

// The maximum number of cards to display in the card group for demo purposes.
const CARDS_TO_DISPLAY_MAX = 15;
const CARDS_TO_DISPLAY_MIN = 3;
type CardGroupStoryProps = Story<
  CardGroupProps<IconCardProps> & { totalCards: number }
>;
export default {
  title: 'Core Composite/CardGroup/IconCards',
  component: IconCardsCardGroup,
  argTypes: {
    sx: { table: { disable: true } },
    totalCards: {
      control: {
        type: 'number',
        min: CARDS_TO_DISPLAY_MIN,
        max: CARDS_TO_DISPLAY_MAX,
        step: 1,
      },
    },
    introHeading: { control: 'text' },
    introParagraph: { control: 'text' },
    backgroundColor: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
    cards: {
      control: {
        type: null,
      },
    },
  },
  args: {
    totalCards: 6,
  },
} as Meta;

const Template2: CardGroupStoryProps = (args) => {
  return (
    <IconCardsCardGroup
      {...useIntroArgs(args)}
      //@ts-ignore
      cards={getCardsFromCollection(
        iconCardsData,
        args.totalCards,
        CARDS_TO_DISPLAY_MIN,
        CARDS_TO_DISPLAY_MAX
      )}
      backgroundColor={args.backgroundColor}
    />
  );
};

export const IconCards = Template2.bind({});
IconCards.args = {};
