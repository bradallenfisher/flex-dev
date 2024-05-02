/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  ThreeUpTextOnImageCards,
  ThreeUpImageTextCardProps,
} from '@psu-flex/core-ui';
import { CardGroup, CardGroupProps } from '@psu-flex/psu-global-ui';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import { getCardsFromCollection } from '../../../utility/functions/getCardsCollection';
import { itemsWithRichtext, itemsWithoutRichtext } from './example-data';

// The maximum number of cards to display in the card group for demo purposes.
const CARDS_TO_DISPLAY_MAX = 18;
const CARDS_TO_DISPLAY_MIN = 3;

type CardGroupStoryProps = Story<
  CardGroupProps<ThreeUpImageTextCardProps> & { totalCards: number }
>;
export default {
  title: 'Core Composite/CardGroup/ThreeUpTextOnImage',
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
    gapSize: {
      table: {
        disable: true,
      },
    },
    cards: {
      table: {
        disable: true,
      },
    },
    container: {
      table: {
        disable: true,
      },
    },
    columnSpan: {
      table: {
        disable: true,
      },
    },
    totalGridColumns: {
      table: {
        disable: true,
      },
    },

    introHeading: { control: 'text' },
    introParagraph: { control: 'text' },
    backgroundColor: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
    versionWithRichtext: { control: { type: 'boolean' } },
  },
  args: {
    totalCards: 6,
  },
} as Meta;

const Template: CardGroupStoryProps = (args) => (
  <ThreeUpTextOnImageCards
    //@ts-ignore
    cards={getCardsFromCollection(
      //@ts-ignore
      args.versionWithRichtext ? itemsWithRichtext : itemsWithoutRichtext,
      args.totalCards,
      CARDS_TO_DISPLAY_MIN,
      CARDS_TO_DISPLAY_MAX
    )}
    {...useIntroArgs(args)}
    backgroundColor={args.backgroundColor}
  />
);

export const ThreeUpTextOnImage = Template.bind({});
ThreeUpTextOnImage.args = {};
