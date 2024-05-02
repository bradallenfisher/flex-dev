import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { StylizedButtonCards } from '@psu-flex/psu-global-ui';
import { getCardsFromCollection } from '../../../utility/functions/getCardsCollection';
import { stylizedButtonCardsData2 } from './example-data';

const CARDS_TO_DISPLAY_MAX = 4;
const CARDS_TO_DISPLAY_MIN = 2;

export default {
  title: 'Core Composite/CardGroup/StylizedButtonCards',
  component: StylizedButtonCards,
  argTypes: {
    totalCards: {
      control: {
        type: 'number',
        min: CARDS_TO_DISPLAY_MIN,
        max: CARDS_TO_DISPLAY_MAX,
        step: 1,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    cards: {
      control: {
        type: null,
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <StylizedButtonCards
    introHeading={args.introHeading}
    cards={
      getCardsFromCollection(
        stylizedButtonCardsData2,
        args.totalCards,
        CARDS_TO_DISPLAY_MIN,
        CARDS_TO_DISPLAY_MAX
      ) ?? stylizedButtonCardsData2
    }
    backgroundColor={args.backgroundColor}
  />
);

export const Default = Template.bind({});
Default.args = {};
