/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  CardGroup,
  ImageCardProps,
  ImageCardsCardGroup,
} from '@psu-flex/psu-global-ui';
import { CardGroupProps } from '@psu-flex/psu-global-ui';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import { getCardsFromCollection } from '../../../utility/functions/getCardsCollection';
import { imageCardsData } from './example-data';

// The maximum number of cards to display in the card group for demo purposes.
const CARDS_TO_DISPLAY_MAX = 15;
const CARDS_TO_DISPLAY_MIN = 3;

type CardGroupStoryProps = Story<
  CardGroupProps<ImageCardProps> & { totalCards: number }
>;
export default {
  title: 'Core Composite/CardGroup',
  component: CardGroup,
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
    introParagraph: { control: 'text' },
    introHeading: { control: 'text' },
    backgroundColor: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
  args: {
    totalCards: 6,
  },
} as Meta;

const Template3: CardGroupStoryProps = (args) => {
  return (
    <ImageCardsCardGroup
      //@ts-ignore
      cards={getCardsFromCollection(
        imageCardsData,
        args.totalCards,
        CARDS_TO_DISPLAY_MIN,
        CARDS_TO_DISPLAY_MAX
      )}
      {...useIntroArgs(args)}
      backgroundColor={args.backgroundColor}
    />
  );
};

export const ImageCards = Template3.bind({});
