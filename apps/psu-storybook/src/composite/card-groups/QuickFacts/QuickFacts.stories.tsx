import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { QuickFacts } from '@psu-flex/core-ui';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import { getCardsFromCollection } from '../../../utility/functions/getCardsCollection';

const CARDS_TO_DISPLAY_MAX = 4;
const CARDS_TO_DISPLAY_MIN = 3;

export default {
  title: 'Core Composite/CardGroup/QuickFacts',
  component: QuickFacts,
  argTypes: {
    introParagraph: { control: 'text' },
    totalCards: {
      control: {
        type: 'number',
        min: CARDS_TO_DISPLAY_MIN,
        max: CARDS_TO_DISPLAY_MAX,
        step: 1,
      },
    },
    quickFactsData: { control: { type: null } },
  },
} as Meta;

const QuickFactsData2 = [
  {
    itemHeading: '73,000+',
    itemBody: 'Undergraduate students across all campus locations.',
    itemCitation: 'QS World University Rankings 2024',
  },
  {
    itemHeading: '1 in 4',
    itemBody:
      'Penn State students are first in their families to attend college.',
    itemCitation: 'Princeton Review, 2024',
  },
  {
    itemHeading: '96%',
    itemBody:
      'Of PA residents live within thirty miles of a Penn State campus.',
  },
  {
    itemHeading: '775k+',
    itemBody: 'Alumni around the world.',
  },
];

const Template: Story<any> = (args) => (
  <QuickFacts
    {...useIntroArgs(args)}
    quickFactsData={getCardsFromCollection(
      QuickFactsData2,
      args.totalCards,
      CARDS_TO_DISPLAY_MIN,
      CARDS_TO_DISPLAY_MAX
    )}
  />
);

export const Default = Template.bind({});
Default.args = {};
